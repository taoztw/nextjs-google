import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href={"https://mail.google.com"} className="hover:underline">
          Gmail
        </Link>
        <Link href={"https://image.google.com"} className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent rounded-full text-4xl p-2 hover:bg-gray-200" />
        <button className="bg-blue-500 px-6 py-2 rounded-md text-white font-medium hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
