import Card from "@/components/dashboard/card/card";
import classes from "./dashboard.module.css";
import Rightbar from "@/components/dashboard/rightbar/rightbar";
import Transactions from "@/components/dashboard/transaction/transactions";
import Chart from "@/components/dashboard/chart/chart";
export default function UserPage() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <div className={classes.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={classes.side}>
        <Rightbar />
      </div>
    </div>
  );
}
