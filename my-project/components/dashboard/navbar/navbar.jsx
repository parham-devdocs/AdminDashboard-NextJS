"use client";
import { usePathname } from "next/navigation";
import classes from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function DashboardNavbar() {
  const pathname = usePathname();
  return (
    <nav className={classes.container}>
      <div className={classes.title}>{pathname.split("/").pop()}</div>
      <div className={classes.menu}>
        <div className={classes.search}>
          <MdSearch className=" cursor-pointer text-slate-300" />
          <input placeholder="Search..." type="text" className={classes.input} />
        </div>
        <div className={classes.icons}>
          <MdOutlineChat
            color="white"
          />
          <MdNotifications
            color="white"
          />
          <MdPublic
            color="white"
          />
        </div>
      </div>
    </nav>
  );
}
