"use client";

import { navLinks } from "@/app/constants/navLinks";
import { Button } from "@/components/ui/button";
import { TextAlignEnd, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MenuHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex ">
      <Button variant="ghost" size="icon-lg" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <TextAlignEnd />}
      </Button>

      {isOpen && (
        <div className="absolute mx-auto top-0 right-0 h-screen w-screen bg-orange-400 text-black  flex flex-col gap-5 p-10">
          <h2 className="text-3xl uppercase font-title tracking-widest font-bold mb-10">
            Direcciones
          </h2>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(!isOpen)}
              className="font-subtitle text-3xl hover:text-4xl "
            >
              <link.icon size={24} className="inline-block mr-3" />
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
