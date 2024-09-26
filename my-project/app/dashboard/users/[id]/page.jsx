import Image from "next/image";
import classes from "./userProfilePage.module.css";
export default function userProfilePage({ params }) {
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.imgContainer}>
          <Image
            src={"/noavatar.png"}
            alt="user image"
            width={150}
            height={100}
            className={classes.image}
          />
        </div>
        John Doe
      </div>
      <div className={classes.formContainer}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          placeholder="john doe"
          className={classes.input}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          placeholder="johnDoe@gmail.com"
          className={classes.input}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          placeholder="lwehflweu"
          className={classes.input}
        />
        <label htmlFor="phone">phone</label>
        <input
          type="text"
          name="phone"
          placeholder="+98 912 4687022"
          className={classes.input}
        />{" "}
        <label htmlFor="address">address</label>
        <textarea
          name="address"
        rows={2}
          placeholder="tehran"
          className={classes.input}
        ></textarea>
        <label htmlFor="isAdmin">is admin?</label>
        <select name="isAdmin" id="isAdmin" className={classes.input}>
          <option value={true}>yes</option>
          <option value={false}>no</option>
        </select>
        <label htmlFor="isActive" id="isActive">
          is admin?
        </label>
        <select name="isActive" className={classes.input}>
          <option value={true}>yes</option>
          <option value={false}>no</option>
              </select>
             <button className={classes.btn} type="submit">Update</button>
      </div>
    </div>
  );
}
