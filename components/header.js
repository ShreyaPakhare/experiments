import Link from "next/link";

function Header() {
  return (
    <nav className="w-full min-h-[10vh] p-2 font-montserrat grid place-items-center shadow-lg">
        <div className="flex items-center gap-x-4 gap-y-2 flex-col md:flex-row">
            <div className="space-x-4">
              <Link href='/' passHref>
                <span className="text-sm font-semibold">Home</span>
              </Link>
              <Link href='/calculater' passHref>
                <span className="text-sm font-semibold">Calculater</span>
              </Link>
              <Link href='/poem' passHref>
                <span className="text-sm font-semibold">Poem</span>
              </Link>
            </div>
            <div className="space-x-4">
              <Link href='/wishlist' passHref>
                <span className="text-sm font-semibold">Wishlist</span>
              </Link>
              <Link href='/animal' passHref>
                <span className="text-sm font-semibold">Animal</span>
              </Link>
            </div>
        </div>
    </nav>
  );
};

export default Header;