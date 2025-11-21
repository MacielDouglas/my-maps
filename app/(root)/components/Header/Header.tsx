import Link from "next/link";
import { MenuHeader } from "./Menu";

export function Header() {
  return (
    <div className=" mx-auto flex items-center justify-between sticky top-0 py-5">
      <Link
        href="/"
        className="font-title text-2xl tracking-widest uppercase font-bold text-orange-400"
      >
        Direcciones
      </Link>
      <div>
        <MenuHeader />
      </div>
    </div>
  );
}
