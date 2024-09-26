import Image from "next/image";
import classes from "./productPage.module.css";
export default function productProfilePage({ params }) {
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <div className={classes.imgContainer}>
          <Image
            src={"/noproduct.jpg"}
            alt="product image"
            width={150}
            height={100}
            className={classes.image}
          />
        </div>
        John Doe
      </div>
      <div className={classes.formContainer}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          placeholder="bra"
          className={classes.input}
        />
        <label htmlFor="price">price</label>
        <input
          type="number"
          name="email"
          placeholder="24"
          className={classes.input}
        />
        <label htmlFor="stock">stock</label>
        <input
          type="number"
          name="stock"
          placeholder="500"
          className={classes.input}
        />
        <label htmlFor="color">color</label>
        <input
          type="text"
          name="color"
          placeholder="red"
          className={classes.input}
        />{" "}
        <label htmlFor="size">size</label>
        <input
          type="number"
          name="size"
          placeholder="85"
          className={classes.input}
        />{" "}
        <label htmlFor="cat">choose a category</label>
        <select name="cat" id="cat" className={classes.input}>
          <option value={"kitchen"}>kitchen</option>
          <option value={"computers"}>computers</option>
        </select>
               <label htmlFor="desc">description</label>

        <textarea
          name="desc"
          rows={3}
          placeholder="description..."
                  className={classes.input}
                  
        ></textarea>
        <button className={classes.btn} type="submit">
          Update
        </button>
      </div>
    </div>
  );
}
