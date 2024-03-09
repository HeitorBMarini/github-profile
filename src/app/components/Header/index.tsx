import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <main>
      <header className="h-16 w-full flex items-center justify-center bg-zinc-800">
        <div className="flex items-center justify-center">
          <Link href={'/'} className="flex items-center justify-center">
          <FaGithub className="text-white mr-2" size={40}/>
          <h1 className=" text-white mt-1">Github Profile</h1>
          </Link>
        
        </div>
      </header>
    </main>
  );
}
