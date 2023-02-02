import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <div className="bg-black p-4 mask mask-triangle" />
        <h1 className="sm:text-2xl text-xl font-bold ml-2 tracking-tight">
          twitter-bio
        </h1>
      </Link>
      <a
        href="https://github.com/engageintellect/twitter-bio"
        target="_blank"
        rel="noreferrer"
      ></a>
    </header>
  );
}
