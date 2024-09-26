import { MdSearch } from "react-icons/md";
import classes from "./products.module.css";
import Image from "next/image";
import Link from "next/link";
const products = [
  {
    title: "Product A",
    description: "Description for Product A",
    price: 29.99,
    createdAt: "2023-09-01",
    stock: 100,
    role: "admin", // or any relevant role
    id:1
  },
  {
    title: "Product B",
    description: "Description for Product B",
    price: 19.99,
    createdAt: "2023-09-02",
    stock: 50,
    role: "client", // or any relevant role
    id:2
  },
  {
    title: "Product C",
    description: "Description for Product C",
    price: 39.99,
    createdAt: "2023-09-03",
    stock: 75,
    role: "admin", // or any relevant role
    id:3
  },
  {
    title: "Product D",
    description: "Description for Product D",
    price: 49.99,
    createdAt: "2023-09-04",
    stock: 20,
    role: "client", // or any relevant role
    id:4
  },
];


export default function UserPage() {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.search}>
          <MdSearch className=" cursor-pointer text-slate-300" />
          <input
            placeholder="Search..."
            type="text"
            className={classes.input}
          />
        </div>
        <Link href={"products/add"}>
          <button className={classes.Add_btn}>Add New</button>
        </Link>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th className="th">Title</th>
            <th className="th">Description</th>
            <th className="th">Price</th>
            <th className="th">Created at</th>
            <th className="th">Stock</th>
            <th className="th">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={classes.body}>
          {products.map((product, index) => (
            <tr key={index}>
              <td className={`${classes.td} ${classes.name}`}>
                <Image
                  src={"/noproduct.jpg"}
                  height={40}
                  width={40}
                  alt={`${product.title}'s avatar`}
                  className={classes.productImage}
                />
                {product.title}
              </td>
              <td className={classes.td}>{product.description}</td>
              <td className={classes.td}>{product.price}</td>
              <td className={classes.td}>{product.createdAt}</td>
              <td className={classes.td}>{product.stock}</td>
              <td className={classes.td}>{product.role}</td>

              <td className={`${classes.td} ${classes.buttons}`}>
                <button className={classes.viewBtn}><Link href={`/dashboard/products/${product.id}`}>View</Link></button>
                <button className={classes.deleteBtn}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.controlers}>
        <button className={classes.controlerBtn}>Privious</button>
        <button className={classes.controlerBtn}>Next</button>
      </div>
    </div>
  );
}
