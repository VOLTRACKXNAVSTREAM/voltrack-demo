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
    name: "DashBoard",
    link: "/dashboard",
    submenu: [
      {
        name: "Real-Time Data",
        link: "/",
        submenu: [],
      },
      {
        name: "Analysis",
        link: "/analysis",
        
      },
    ],
  },
  // {
  //   icon:<VscGraph/>,
  //   name: "Statistic",
  //   link: "/statistic",
  //   submenu: [
  //       {
  //         name: "Data",
  //         link: "/data",
  //         submenu: [],
  //       },
  //       {
  //         name: "Charts",
  //         link: "/chart",
  //         submenu: [],
  //       },
  //     ],
  // },
  // {
  //   icon:<RiMoneyRupeeCircleLine/>,
  //   name: "Finance",
  //   link: "/finance",
  //   submenu: [
  //       {
  //         name: "Transaction",
  //         link: "/transaction",
  //         submenu: [],
  //       },
  //       {
  //         name: "Transaction Details",
  //         link: "/transaction-details",
  //         submenu: [],
  //       },
  //     ],
  // },
  {
    icon:<IoSettingsOutline/>,
    name: "Setting",
    link: "/setting",
    submenu: [
        {
          name: "My Account",
          link: "/accounts",
        },
        {
          name: "Connected Devices",
          link: "/devices",
          submenu: [],
        },
        // {
        //     name: "Plans",
        //     link: "/premium-plans",
        //     submenu: [],
        //   },
          {
            name: "Billing and Invoices",
            link: "/billing-invoice",
            submenu: [],
          },
          {
            name: "Give Feedback",
            link: "/feedback",
            submenu: [],
          },
      ],
  },
  // {
  //   icon:<VscGraph/>,
  //   name: "Utility",
  //   link: "/utility",
  //   submenu: [
  //       {
  //         name: "RoadMap",
  //         link: "/roadmap",
  //         submenu: [],
  //       },
  //       {
  //         name: "FAQs",
  //         link: "/faqs",
  //         submenu: [],
  //       },
  //       {
  //           name: "Knowledge Base",
  //           link: "/main",
  //           submenu: [],
  //         },
         
  //     ],
  // },
  // {
  //   icon:<RiBloggerLine/>,
  //   name: "Financial Reports & Blogs",
  //   link: "/finance-report",
  //   submenu: [],
  // },
  // {
  //   icon:<MdOutlineBrowserUpdated/>,
  //   name: "Updates",
  //   link: "#updates",
   
  // },
  // {
  //   icon:<TiContacts/>,
  //   name: "Contact Us",
  //   link: "/contact",
  //   submenu: [],
  // }
  
];
export default DashboardData;
