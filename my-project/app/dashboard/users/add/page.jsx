import classes from "./addUser.module.css";

export default function AddProductPage() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <input
          type="text"
          name="username"
          className={classes.input}
          placeholder="username"
          required
        />
        <input
          type="text"
          name="password"
          className={classes.input}
          placeholder="password"
          required
        />
       
        <input
          type="text"
          placeholder="email"
          name="email"
          className={classes.input}
        />
        <input
          type="text"
          placeholder="phone"
          name="phone"
          className={classes.input}
        />
        <select name="isActive" className={classes.input}>
           <option value="">Is Active</option>
           <option value="yes">Yes</option>
           <option value="no">No</option>
          {" "}
        </select>
         <select name="isAdmin" className={classes.input}>
          <option value="">Is Admin</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>{" "}
        </select>
                 <textarea name="address" placeholder="address" className={classes.textArea}  rows={16} ></textarea>

        <button type="submit" className={classes.btn}>
          Submit
        </button>
      </form>
    </div>
  );
}
