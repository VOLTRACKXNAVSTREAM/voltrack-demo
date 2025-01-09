import { RxDashboard } from "react-icons/rx";
import { VscGraph } from "react-icons/vsc";
import { TiContacts } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { RiBloggerLine } from "react-icons/ri";
import { MdOutlineBrowserUpdated } from "react-icons/md";

const DashboardData = [
  {
    icon: <RxDashboard/>,
    name: "Real-Time Data",
    link: "/dashboard",
    submenu: [],
  },
  {
    icon: <VscGraph/>,
    name: "Historic Data",
    link: "/dashboard/analysis",
    submenu: [],
  },
  // {
  //   icon: <VscGraph/>,
  //   name: "Chart",
  //   link: "/dashboard/chart",
  //   submenu: [],
  // },
  // {
  //   icon: <RiMoneyRupeeCircleLine/>,
  //   name: "Transaction",
  //   link: "/dashboard/transaction",
  //   submenu: [],
  // },
  // {
  //   icon: <IoSettingsOutline/>,
  //   name: "Setting",
  //   link: "/dashboard/setting",
  //   submenu: [],
  // },
  // {
  //   icon: <RiBloggerLine/>,
  //   name: "Premium Plans",
  //   link: "/dashboard/premium-plans",
  //   submenu: [],
  // },
  // {
  //   icon: <MdOutlineBrowserUpdated/>,
  //   name: "Updates",
  //   link: "/dashboard/updates",
  //   submenu: [],
  // },
  // {
  //   icon: <TiContacts/>,
  //   name: "Contact",
  //   link: "/dashboard/contact",
  //   submenu: [],
  // }
];

export default DashboardData;
