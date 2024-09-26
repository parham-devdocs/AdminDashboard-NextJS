import { MdSearch } from "react-icons/md";
import classes from "./users.module.css";
import Image from "next/image";
import Link from "next/link";

import prisma from './../../lib/prisma';


export default async function UserPage() {
 const users=await prisma.user.findMany()
  console.log(users.length)
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.search}>
          <MdSearch className=" cursor-pointer text-slate-300" />
          <input
            placeholder="Search..."
            type="text"
            className={classes.input}
          />
        </div>
        <Link href={"users/add"}>
          <button className={classes.Add_btn}>Add New</button>
        </Link>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className="th">Name</th>
            <th className="th">Email</th>
            <th className="th">Created at</th>
            <th className="th">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={classes.body}>
          {users.map((user, index) => (
            <tr key={index}>
              <td className={`${classes.td} ${classes.name}`}>
                <Image
                  src={user.img || "/noavatar.png"}
                  height={40}
                  width={40}
                  alt={`${user.username}'s avatar`}
                  className={classes.userImage}
                />
                {user.username}
              </td>
              <td className={classes.td}>{user.email}</td>
              <td className={classes.td}>
                {user.createdAt.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td className={classes.td}>
                {user.isAdmin ? "admin" : "client"}
              </td>
              <td className={classes.td}>
                {" "}
                {user.isActive ? "active" : "inactive"}
              </td>
              <td className={`${classes.td} ${classes.buttons}`}>
                <button className={classes.viewBtn}>
                  <Link href={`users/${user.id}`}>View</Link>
                </button>
                <button className={classes.deleteBtn}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.controlers}>
        <button className={classes.controlerBtn}>Privious</button>
        <button className={classes.controlerBtn}>Next</button>
      </div>
    </div>
  );
}

