import {
  FaChalkboardTeacher,
  FaCheckCircle,
  FaFileInvoiceDollar,
  FaRegBuilding,
  FaRegMoneyBillAlt,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { IoOptionsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiBookletFill, RiEditBoxFill, RiFileListFill } from "react-icons/ri";
const MenuItems = [
  {
    key: "/dashboard",
    icon: <MdDashboard size="20px" />,
    label: "Dashboard",
  },
  {
    key: "/branch",
    icon: <FaRegBuilding size="20px" />,
    label: "Branch",
  },
  
  {
    key: "/class",
    icon: <SiGoogleclassroom size="20px" />,
    label: "Class",
  },
  {
    key: "/section",
    icon: <SiGoogleclassroom size="20px" />,
    label: "Section",
  },
  {
    key: "/teacher",
    icon: <FaChalkboardTeacher size="20px" />,
    label: "Teacher",
  },
  {
    key: "/student",
    icon: <FaUserGraduate size="20px" />,
    label: "Student",
  },
  {
    key: "/staff",
    icon: <FaUsers size="20px" />,
    label: "Staff",
  },
  {
    key: "/attendence",
    icon: <RiEditBoxFill size="20px" />,
    label: "Attendence",
  },
  {
    key: "/leave",
    icon: <FaCheckCircle size="20px" />,
    label: "Leave",
  },
  {
    key: "/result",
    icon: <RiBookletFill size="20px" />,
    label: "Result",
  },
  {
    key: "/fee",
    icon: <FaFileInvoiceDollar size="20px" />,
    label: "Fee",
  },
  {
    key: "/salary",
    icon: <FaRegMoneyBillAlt size="20px" />,
    label: "Salary",
  },
  {
    key: "/noticeboard",
    icon: <RiFileListFill size="20px" />,
    label: "Noticeboard",
  },
  {
    key: "/setting",
    icon: <IoOptionsSharp size="20px" />,
    label: "Setting",
  },
];

export default MenuItems;
