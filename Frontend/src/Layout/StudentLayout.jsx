import { Outlet } from "react-router-dom";
import StudentNavbar from "../components/LayoutComponents/StudentNavbar";

const StudentLayout = () => {
  return (
    <main className="bg-gray-100">
            <StudentNavbar/>
            <Outlet/>
        </main>
  )
}

export default StudentLayout