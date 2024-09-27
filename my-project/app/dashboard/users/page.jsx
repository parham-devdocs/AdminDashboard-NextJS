import classes from "./users.module.css";
import Image from "next/image";
import Link from "next/link";

import prisma from './../../lib/prisma';

import Search from "../../../components/dashboard/search/Search";
import Pagination from './../../../components/dashboard/pagination/Pagination';

export default async function UserPage({ searchParams }) {
  const q = searchParams?.q 
  const page=searchParams?.page ||1
  let users;
  if (q) {
    users=await prisma.user.findMany({
      where: {
        username: {
          startsWith:q
        }
      },
      skip: 5 * (page - 1),
      take:5
    })
  }
  else {
    users = await prisma.user.findMany(
      {
        skip: 5 * (page - 1),
        take:5
   }
    )
} 
  return (
    <div className={classes.container}>
      <div className={classes.header}>
      <Search placeholder={"search user..."}/>
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
      <Pagination/>
    </div>
  );
}

