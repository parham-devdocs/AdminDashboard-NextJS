import classes from "./addUser.module.css";

// export default function AddUserPage(params) {
//   return (
//     <form className={classes.container}>
//       <div className={classes.inputs}>
//         <div className={classes.firstCol}>
//           <input type="text" name="username" placeholder="Username" className={classes.input} />
//           <input type="password" name="password" placeholder="Password" className={classes.input} />
//           <select name="isAdmin" className={classes.input}>
//             <option value="">Is Admin</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>
//         <div className={classes.secondCol}>
//           <input type="email" name="email" placeholder="Email" className={classes.input} />
//           <input type="tel" name="phone" placeholder="Phone" className={classes.input} />
//           <select name="isActive" className={classes.input}>
//             <option value="">Is Active</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>
//           </div>
          
//           <button className={classes.submitBtn}>Submit</button>
          
//     </form>
//   );
// }

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
