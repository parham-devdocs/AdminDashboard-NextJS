import classes from "./addProduct.module.css";
export default function AddProductPage() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <input
          type="text"
          name="title"
          className={classes.input}
          placeholder="title"
          required
        />
        <select name="cat" className={classes.input}>
          <option value="general">general</option>
          <option value="kitchen">kitchen</option>
          <option value="phone">phone</option>
          <option value="computer">computer</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          className={classes.input}
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          className={classes.input}
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className={classes.input}
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className={classes.input}
        />
        <textarea
          name="desc"
          className={classes.desc}
         
          rows={15}
          placeholder="description"
        ></textarea>
        <button type="submit" className={classes.btn}>
          Submit
        </button>
      </form>
    </div>
  );
}
