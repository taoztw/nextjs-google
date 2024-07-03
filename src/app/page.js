import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader></HomeHeader>

      <div className="flex flex-col items-center mt-24">
        <Image
          src="/google_login.webp"
          alt="google logo"
          width={300}
          height={100}
        />
        <HomeSearch />
      </div>
    </>
  );
}
