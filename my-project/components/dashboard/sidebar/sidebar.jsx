import classes from "./sidebar.module.css";
import { MdDashboard } from "react-icons/md";
import { MdSupervisedUserCircle } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdHelpCenter } from "react-icons/md";
import MenuLink from "./MenuLink";
import Image from "next/image";
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function DashboardSidebar() {

  return <aside className={classes.container}>
    <div className={classes.user}>
      <Image className={classes.userImage} src={"/noavatar.png"} alt="" width="50" height="50" />
      <div className={classes.userDetail}>
        <span className={classes.username}>parham pazargadi</span>
        <span className={classes.userTitle}>Admistrator</span>
      </div>
    </div>
    <ul>
      {menuItems.map(cat=> (
        <li key={cat.title} className={classes.cat} >
          <span className={classes.cat_title}>{cat.title}</span>
          {cat.list.map(item => (<MenuLink key={item.title} item={item}>{ item.title }</MenuLink>))}
        </li>
      ))}
    </ul>
  </aside>;
}
