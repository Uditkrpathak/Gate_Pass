import { GatePass } from "../model/gate.model.js";
import { User } from "../model/User.js";

export const apply = async (req, res) => {
  try {
    const { formDate, toDate, reason, workingDays, location, fatherContactNo } =
      req.body;

    if (
      !formDate ||
      !toDate ||
      !reason ||
      !workingDays ||
      !location ||
      !fatherContactNo
    ) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }

    const daysRequested = Math.floor(
      (new Date(toDate) - new Date(formDate)) / (1000 * 60 * 60 * 24) + 1
    );

    let approvalStatus = {};

    if (workingDays === "yes") {
      approvalStatus.hod = "pending";
      approvalStatus.warden = "pending";
    } else {
      approvalStatus.hod = "pending";
      approvalStatus.warden = "pending";
    }

    let gatePass = await GatePass.create({
      studentId: req.user._id,
      formDate,
      toDate,
      reason,
      daysRequested,
      workingDays,
      location,
      fatherContactNo,
      status: "pending",
      approval: approvalStatus,
    });

    gatePass = await gatePass.populate("studentId", "name email rollNo");

    return res.status(201).json({
      success: true,
      message: "Leave Applied Successfully",
      gatePass,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const Approval = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const userRole = req.user.role.toLowerCase();

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be either approved or rejected",
      });
    }

    let gatePass = await GatePass.findById(id);

    if (!gatePass) {
      return res.status(404).json({
        success: false,
        message: "Gate Pass not found",
      });
    }

    if (gatePass.workingDays === "yes") {
      if (userRole === "hod") {
        gatePass.approval.hod = status;
        gatePass.approval.hodDate = new Date();

        if (status === "rejected") {
          gatePass.status = "rejected";
        } else {
          gatePass.status = "pending";
        }
      }

      if (userRole === "warden") {
        if (gatePass.approval.hod !== "approved") {
          return res.status(403).json({
            success: false,
            message: "Warden can approve only after HOD approval",
          });
        }

        gatePass.approval.warden = status;
        gatePass.approval.wardenDate = new Date();

        gatePass.status = status === "rejected" ? "rejected" : "approved";
      }
    } else {
      if (userRole !== "warden") {
        return res.status(403).json({
          success: false,
          message: "Only Warden can approve on non-working days",
        });
      }

      gatePass.approval.warden = status;
      gatePass.approval.wardenDate = new Date();

      gatePass.status = status === "approved" ? "approved" : "rejected";
    }

    await gatePass.save();
    gatePass = await gatePass.populate("studentId", "name email rollNo");

    return res.status(200).json({
      success: true,
      message: `GatePass ${status} by ${userRole}`,
      gatePass,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const gatePassSecurity = async (req, res) => {
  try {
    const { rollNo } = req.body;

    if (!rollNo) {
      return res.status(401).json({
        success: false,
        message: "Roll No required",
      });
    }

    const Student = await User.findOne({ rollNo });

    if (!Student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    const gatePasses = await GatePass.find({ studentId: Student._id }).populate(
      "studentId",
      "name rollNo"
    );

    if (!gatePasses.length) {
      return res.status(200).json({
        success: true,
        message: "No leave applied by this student",
        gatePasses: [],
      });
    }

    const GatePasses = gatePasses.map((gp) => ({
      studentName: gp.studentId.name,
      rollNo: gp.studentId.rollNo,
      fromDate: gp.formDate,
      toDate: gp.toDate,
      daysRequested: gp.daysRequested,
      status: gp.status,
      wardenStatus: gp.approval.warden,
    }));

    return res.status(200).json({
      success: true,
      gatePasses: GatePasses,
    });
  } catch (error) {
    console.log(error);
  }
};

export const gatePassByRollNo = async (req, res) => {
  try {
    const email = req.user.email;
    console.log(email);

    const student = await User.findOne({ email });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    const gatePasses = await GatePass.find({ studentId: student._id }).populate(
      "studentId",
      "name rollNo email"
    );

    if (!gatePasses || gatePasses.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No leave applications found for this student",
      });
    }

    return res.status(200).json({
      success: true,
      total: gatePasses.length,
      gatePasses,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const CurrentStatus = async (req,res) => {
  try {

    const studentId = req.user._id;

    if(!studentId){
      return res.status(401).json({
        success:false,
        message:"studentId not found"
      })
    }

    const gatePass = await GatePass.findOne({studentId}).sort({createdAt: -1}).populate("studentId","name rollNo email");

    if(!gatePass){
      return res.status(401).json({
        success:false,
        message:"GatePass not found"
      })
    }

    return res.status(201).json({
       
        name: gatePass.studentId.name,
        email: gatePass.studentId.email,
        rollNo: gatePass.studentId.rollNo,
      
       leaveId: gatePass._id,
        fromDate: gatePass.fromDate,
        toDate: gatePass.toDate,
        reason: gatePass.reason,
        hodStatus: gatePass.hodStatus || gatePass.approval?.hod,
        wardenStatus: gatePass.wardenStatus || gatePass.approval?.warden
    })
    
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success:false,
      message:error.message
    })
    
  }
}
