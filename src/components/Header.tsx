import Link from "next/link";

export default function Header() {
  return (
    <nav className="mx-auto top-0-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold">
          Portfolio
        </Link>

        <ul className="flex space-x-16">
          <Link href="/about">
            <li className="text-2xl md:text-2xl text-white font-light">
              About
            </li>
          </Link>
          <Link href="/projects">
            <li className="text-2xl md:text-2xl text-white font-light">
              Projects
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
