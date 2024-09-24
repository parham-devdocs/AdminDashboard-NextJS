import classes from "./addUser.module.css";

export default function AddUserPage(params) {
  return (
    <div className={classes.container}>
      <div className={classes.inputs}>
        <div className={classes.firstCol}>
          <input type="text" name="username" placeholder="Username" className={classes.input} />
          <input type="password" name="password" placeholder="Password" className={classes.input} />
          <select name="isAdmin" className={classes.input}>
            <option value="">Is Admin</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={classes.secondCol}>
          <input type="email" name="email" placeholder="Email" className={classes.input} />
          <input type="tel" name="phone" placeholder="Phone" className={classes.input} />
          <select name="isActive" className={classes.input}>
            <option value="">Is Active</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
          </div>
          
          <textarea name="address" placeholder="address" className={classes.textArea} ></textarea>
          <button className={classes.submitBtn}>Submit</button>
          
    </div>
  );
}
