import classes from "./rightbarCard.module.css";
export default function RightbarCard({primaryHeader,secondaryHeader,content,btnText,btnIcon}) {
    return (
        <div className={classes.container}>
            <h3 className={classes.primaryHeader}>{primaryHeader}</h3>
            <h2 className={classes.secondaryHeader}>{secondaryHeader}</h2>
            <p className={classes.content}>{content}</p>
            <button className={classes.button}>{btnIcon} { btnText  }</button>
            

        </div>
    )
}