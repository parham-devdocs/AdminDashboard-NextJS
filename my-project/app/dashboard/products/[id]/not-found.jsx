import Link from "next/link";
import emptyState from "../../../../public/empty-state.svg"; // Ensure the path is correct
import Image from "next/image";
export default function NotFound() {
  return (
    <div className=" w-full h-full flex justify-center items-center">
      <div className=" flex flex-col items-center gap-5 ">
        <Image src={emptyState} height={150} width={150} alt="No user found" />

        <h2 className=" text-red-600 text-2xl">product not found</h2>
        <p className=" text-textPrimary">Could not find requested resource</p>
        <button className=" bg-red-600 hover:bg-red-700 text-textPrimary w-fit px-3 py-1 rounded-md">
          <Link href="/dashboard/products">back</Link>
        </button>
      </div>
    </div>
  );
}
