"use client";
import Link from "next/link";
import classes from "./MenuLink.module.css";
import { usePathname } from "next/navigation";

export default function MenuLink({ item, children }) {
  const pathname = usePathname();

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
