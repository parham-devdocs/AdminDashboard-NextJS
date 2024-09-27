"use client";
import { usePathname, useSearchParams } from "next/navigation";
import classes from "./pagination.module.css";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function Pagination() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = parseInt(searchParams.get("page")) || 1;

  const nextPageHandler = async() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", currentPage + 1);
      replace(`${pathname}?${params}`);
          revalidatePath("/dashboard/products","page");

  };

  const prevPageHandler = () => {
    const params = new URLSearchParams(searchParams);
    if (currentPage > 1) {
      params.set("page", currentPage - 1);
    }
    replace(`${pathname}?${params}`);
    revalidatePath("/dashboard/products");
  };

  return (
    <div className={classes.controlers}>
      <button
        className={classes.controlerBtn}
        onClick={prevPageHandler}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      <button className={classes.controlerBtn} onClick={nextPageHandler}>
        Next
      </button>
    </div>
  );
}
