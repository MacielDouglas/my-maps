import React from "react";
import {
  Dock,
  HomeIcon,
  MapPinned,
  SendHorizonal,
  UserRound,
  UsersRound,
} from "lucide-react";

export interface LinkItem {
  name: string;
  href: string;
  // icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const navLinks: LinkItem[] = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Tarjetas",
    href: "/cards",
    icon: Dock,
  },
  {
    name: "Direcciones",
    href: "/direcciones",
    icon: MapPinned,
  },
  {
    name: "Perfil",
    href: "/profile",
    icon: UserRound,
  },
];

export const adminNavLinks: LinkItem[] = [
  {
    name: "Usuários",
    href: "/admin/users",
    icon: UsersRound,
  },
  {
    name: "Assignar",
    href: "/admin/assign",
    icon: SendHorizonal,
  },
];
