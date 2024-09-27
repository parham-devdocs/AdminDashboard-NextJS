import Image from "next/image";
import classes from "./productPage.module.css";
import prisma from "../../../lib/prisma";
import { Suspense } from "react";
import Loading from "../../../loading";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
export default async function productProfilePage({ params }) {
  const productId = Number(params.id)
  const product = await prisma.product.findUnique({ where: { id: productId } })
  if (!product) {
   return notFound()
  }
   const updateProduct = async (formdata) => {
     "use server";

     const price =Number( formdata.get("price"))
     const stock = Number(formdata.get("stock"))
     const color = formdata.get("color");
     const size = formdata.get("size");
     const cat=formdata.get("cat")
     const desc=formdata.get("desc")
     await prisma.product.update({
       where: { id: productId },
       data: { price,stock,color,size ,cat,desc},
     });
     revalidatePath(`dashboard/products/${productId}`);
    
   };
  return (
    <Suspense fallback={<Loading />}>
      <form className={classes.container} action={updateProduct}>
        <div className={classes.infoContainer}>
          <div className={classes.imgContainer}>
            <Image
              src={ product.img && "/noproduct.jpg"}
              alt={`${product.title} profile image`}
              width={150}
              height={100}
              className={classes.image}
            />
          </div>
          {product.title}
        </div>
        <div className={classes.formContainer}>
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
           disabled
            className={classes.input}
            defaultValue={product.title}
          />
          <label htmlFor="price">price</label>
          <input
            type="number"
            name="price"
            className={classes.input}
            defaultValue={product.price}
          />
          <label htmlFor="stock">stock</label>
          <input
            type="number"
            name="stock"
            className={classes.input}
            defaultValue={product.stock}
          />
          <label htmlFor="color">color</label>
          <input
            type="text"
            name="color"
            className={classes.input}
            defaultValue={product.color}
          />{" "}
          <label htmlFor="size">size</label>
          <input
            type="number"
            name="size"
            className={classes.input}
            defaultValue={product.size}
          />{" "}
          <label htmlFor="cat">choose a category</label>
          <select name="cat" id="cat" className={classes.input} >
            <option value={"kitchen"}>kitchen</option>
            <option value={"computers"}>computers</option>
          </select>
          <label htmlFor="desc">description</label>
          <textarea
            name="desc"
            rows={3}
            className={classes.input}
            defaultValue={product.desc}
          ></textarea>
          <button className={classes.btn} type="submit">
            Update
          </button>
        </div>
      </form>
    </Suspense>
  );
}
