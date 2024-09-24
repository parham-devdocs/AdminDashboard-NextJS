import { MdSearch } from "react-icons/md";
import classes from "./users.module.css";
import Image from "next/image";
import Link from "next/link";
const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    createdAt: "2023-01-15",
    role: "admin",
    action: "active",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    createdAt: "2023-02-20",
    role: "client",
    action: "passive",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    createdAt: "2023-03-05",
    role: "client",
    action: "passive",
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    createdAt: "2023-04-10",
    role: "clinet",
    action: "active",
  },
  {
    name: "Charlie Black",
    email: "charlie.black@example.com",
    createdAt: "2023-05-25",
    role: "admin",
    action: "active",
  },
];

export default function UserPage() {
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
        <Link  href={"dashboard/users/add"}>
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
                  src={"/noavatar.png"}
                  height={40}
                  width={40}
                  alt={`${user.name}'s avatar`}
                  className={classes.userImage}
                />
                {user.name}
              </td>
              <td className={classes.td}>{user.email}</td>
              <td className={classes.td}>{user.createdAt}</td>
              <td className={classes.td}>{user.role}</td>
              <td className={classes.td}>{user.action}</td>
              <td className={`${classes.td} ${classes.buttons}`}>
                <button className={classes.viewBtn}>View</button>
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

