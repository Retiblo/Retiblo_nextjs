import Image from "next/image";
import Link from "next/link";

import { SeasonLogo } from "./components/seasonLogo";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <div className="flex gap-16 text-xl">
          <Link href={"/#"}>Post</Link>
          <Link href={"/#"}>Home</Link>
          <Link href={"/#"} className="flex gap-2">
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            About
          </Link>
        </div>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SeasonLogo />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center [interpolate-size:allow-keywords]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 group"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          <span className="group-hover:w-fit w-0 overflow-hidden transition-all text-nowrap">
            Learn
          </span>
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 group"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          <span className="group-hover:w-fit w-0 overflow-hidden transition-all text-nowrap">
            Examples
          </span>
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 group"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          <span className="group-hover:w-fit w-0 overflow-hidden transition-all text-nowrap">
            Github →
          </span>
        </a>
      </footer>
    </div>
  );
}
