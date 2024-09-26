import classes from "./loginPage.module.css";
export default function LoginPage() {
    return (
        <div className={classes.container}>
            <form className={classes.form}>
                <h1 className={classes.header}>Login</h1>
                <input type="text" placeholder="username" className={classes.input} />
                <input type="text" placeholder="password" className={classes.input} />
                <button type="submit" className={classes.btn}>Login</button>
            </form>
       </div>
    )
}