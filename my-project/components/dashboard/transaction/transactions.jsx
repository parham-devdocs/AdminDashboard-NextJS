import Image from "next/image";
import classes from "./transactions.module.css";

export default function Transactions() {
  const transactions = [
    {
      name: "John Doe",
      status: "pending",
      date: "14.02.2024",
      amount: "13.200$",
      statusClass: classes.pending,
    },
    {
      name: "Jane Smith",
      status: "done",
      date: "13.02.2024",
      amount: "12.500$",
      statusClass: classes.done,
    },
    {
      name: "Alice Johnson",
      status: "cancelled",
      date: "12.02.2024",
      amount: "10.000$",
      statusClass: classes.cancelled,
    },
    {
      name: "Bob Brown",
      status: "pending",
      date: "11.02.2024",
      amount: "9.800$",
      statusClass: classes.pending,
    },
  ];

  return (
    <div className={classes.container}>
      <h2 className={classes.style}>Latest Transactions</h2>
      <table className={classes.table}>
        <thead>
          <tr >
            <th className="th">Name</th>
            <th className="th">Status</th>
            <th className="th">Date</th>
            <th className="th">Amount</th>
          </tr>
        </thead>
        <tbody className={classes.body}>
          {transactions.map((transaction, index) => (
            <tr key={index} >
              <td className={`${classes.td} ${classes.name}`}>
                <Image
                  src={"/noavatar.png"}
                  height={40}
                  width={40}
                  alt={`${transaction.name}'s avatar`}
                  className={classes.userImage}
                />
                {transaction.name}
              </td>
              <td className={classes.td}>
                <span
                  className={`${classes.status} ${transaction.statusClass}`}
                >
                  {transaction.status}
                </span>
              </td>
              <td className={classes.td}>{transaction.date}</td>
              <td className={classes.td}>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
