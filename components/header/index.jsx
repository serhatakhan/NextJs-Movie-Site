import Link from "next/link";
import { MdLocalMovies } from "react-icons/md";

const Header = () => {
  return (
    <header className="p-5  ">
      <div className="header"></div>
      <div className="flex items-center justify-between ">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-[-1px] text-white "
        >
          <MdLocalMovies />
          SFILMS
        </Link>
        <nav className="flex gap-12 text-[#fafafa] text-xl font-semibold">
          <Link href="/">MOVIES</Link>
          <Link href="/">SERIES</Link>
          <Link href="/">KIDS</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
