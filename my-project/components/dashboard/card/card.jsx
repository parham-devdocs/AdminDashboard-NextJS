import { MdSupervisedUserCircle } from "react-icons/md";
import classes from "./card.module.css";
export default function Card() {
    return (
      <div className={classes.container}>
        <div className={classes.icon}>
          <MdSupervisedUserCircle size={24} />
        </div>

        <div className={classes.texts}>
          <span className={classes.title}>Total users</span>
          <span className={classes.number}>10.273</span>
          <span className={classes.detail}>
            {" "}
           
              <span className={classes.positives}>12%</span>
              more than previous week
            
          </span>
        </div>
      </div>
    );
}