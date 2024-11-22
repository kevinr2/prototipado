import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="shadow bg-white">
      <div className="h-16 mx-10 px-5 flex items-center justify-between">
        <Link href="/" className="text-xl hover:text-cyan-500 text-sky-950 font-bold transition-colors cursor-pointer">
          Colombia secure
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/auth/login">
            <button>Descubre</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
