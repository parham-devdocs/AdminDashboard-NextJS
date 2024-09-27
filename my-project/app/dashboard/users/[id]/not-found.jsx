import Link from "next/link";
import emptyState from "../../../../public/empty-state.svg"; // Ensure the path is correct
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <Image src={emptyState} height={150} width={150} alt="No user found" />
        <h2 className="text-red-600 text-2xl">User Not Found</h2>
        <p className="text-textPrimary">
          Could not find the requested resource
        </p>
        <Link href="/dashboard/users">
          <button className="bg-red-600 hover:bg-red-700 text-textPrimary w-fit px-3 py-1 rounded-md">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
