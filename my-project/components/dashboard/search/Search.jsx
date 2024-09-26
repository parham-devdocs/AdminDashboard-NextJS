"use client"
import { MdSearch } from "react-icons/md";
import classes from "./search.module.css";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

    const searchHandler = (e) => {
        const params = new URLSearchParams(searchParams);
        params.set("q", e.target.value);
        replace(`${pathname}?${params}`);
  };
  return (
    <div className={classes.search}>
      <MdSearch className=" cursor-pointer text-slate-300" />
      <input
        placeholder={placeholder}
        type="text"
        className={classes.input}
        onChange={searchHandler}
      />
    </div>
  );
}
