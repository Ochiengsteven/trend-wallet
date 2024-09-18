"use client";

import Link from "next/link";

const Home = () => {
  const callbackUrl = encodeURIComponent("/clientMember");

  return (
    <div className="h-screen p-4">
      <div className="flex justify-between items-center w-full mb-4 md:mb-0">
        <h1 className="text-2xl font-bold text-black">TrendWallet</h1>
        <div className="hidden md:flex space-x-4">
          <Link href="/createUser">Register</Link>
          <Link href={`/api/auth/signin?callbackUrl=${callbackUrl}`}>
            Login
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:w-[40vw] md:h-full">
        <Link
          href={`/api/auth/signin?callbackUrl=${callbackUrl}`}
          className="text-white no-underline bg-gradient-to-r from-start to-mid1 to-mid2 to-end p-2 md:p-4 md:text-center rounded-md"
        >
          Login to Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
