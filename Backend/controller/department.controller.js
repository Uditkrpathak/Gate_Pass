import { Department } from "../model/department.js";

export const createDepartment = async (req, res) => {
  try {
    const { depart_Name, Semester } = req.body;

    if (!depart_Name || !Semester) {
      return res.status(400).json({
        success: false,
        message: "Department name and semester are required",
      });
    }

    const newDepartment = await Department.create({
      depart_Name,
      Semester,
      student: req.user._id,
    });

    return res.status(201).json({
        success:true,
        message:"Department created",
        newDepartment
    })



   
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Departments
export const getDepartments = async (req, res) => {
  try {
    const departments = await department.find();

    return res.status(200).json({
      success: true,
      total: departments.length,
      departments,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Department
