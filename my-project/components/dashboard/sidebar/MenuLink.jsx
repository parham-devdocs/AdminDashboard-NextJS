"use client";
import Link from "next/link";
import classes from "./MenuLink.module.css";
import { usePathname } from "next/navigation";

export default function MenuLink({ item, children }) {
  const pathname = usePathname();
//   const last_segment = path.split("/").pop();
// console.log(path.split("/").pop());
// console.log(item.path.split("/").pop());
console.log(pathname)
console.log(item.path)
  return (
    <Link
      href={item.path}
      className={`${classes.link} ${
        pathname === item.path ? "active" : ""
      }`}
    >
      {item.icon}
      <span>{children}</span>
    </Link>
  );
}
