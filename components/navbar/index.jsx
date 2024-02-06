"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-slate-100 min-w-full h-16 flex flex-row justify-between items-center px-5 rounded-3xl mb-12">
      <Link href="/">
        <Image src="/next.svg" alt="" height={30} width={100} />
      </Link>
      <Link href="/add-topic">
        <button className="bg-black text-white font-medium text-sm px-3 py-[6px] rounded-xl capitalize">
          add new topic
        </button>
      </Link>
    </div>
  );
};
export default Navbar;
