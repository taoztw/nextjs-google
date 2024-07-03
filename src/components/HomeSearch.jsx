import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

function HomeSearch() {
  return (
    <>
      <form className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl focus-within:shadow-md">
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input type="text" className="flex-grow focus:outline-none" />
        <BsFillMicFill className="text-lg" />
      </form>

      <button className="text-sm bg-[#f8f9fa] rounded-md text-gray-800 hover:ring-gray-200 active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow">
        Google Search
      </button>
    </>
  );
}

export default HomeSearch;
