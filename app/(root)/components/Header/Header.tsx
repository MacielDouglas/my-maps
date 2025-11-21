import Link from "next/link";
import { MenuHeader } from "./Menu";
import { ButtonTheme } from "./Theme";

export function Header() {
  return (
    <div className="px-[10%] xl:px-[20%] mx-auto flex items-center justify-between top-0 py-5">
      <Link
        href="/"
        className="font-title text-2xl tracking-widest uppercase font-bold text-orange-400"
      >
        Direcciones
      </Link>
      <div className="flex items-center gap-3">
        <ButtonTheme />
        <MenuHeader />
      </div>
    </div>
  );
}
