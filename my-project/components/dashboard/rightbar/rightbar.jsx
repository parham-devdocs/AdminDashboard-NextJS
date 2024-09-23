import { MdExitToApp, MdPlayCircle } from "react-icons/md";
import classes from "./rightbar.module.css";
import RightbarCard from "./rightbarCard";

export default function Rightbar() {
  return (
    <div className={classes.container}>
      
        <RightbarCard
          btnIcon={<MdPlayCircle />}
          btnText={"Watch"}
          primaryHeader={"Available Now"}
          secondaryHeader={"How to use the new version of the admin dashboard"}
          content={
            "In this video, we will walk you through the new features of the admin dashboard. Learn how to navigate the updated interface"
          }
        />
        <RightbarCard
          btnIcon={<MdExitToApp />}
          btnText={"Learn"}
          primaryHeader={"Coming soon"}
          secondaryHeader={
            "New server actions are available ,partial pre-rendering is coming up!"
          }
          content={
            "Join us in this upcoming video as we explore the revamped admin dashboard. We'll guide you through the new features and show you how to make the most of the updated interface"
          }
        />
    
    </div>
  );
}
