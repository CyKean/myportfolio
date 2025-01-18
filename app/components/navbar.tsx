"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faProjectDiagram, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const navigation = [
  { name: "Home", href: "/", icon: faHome },
  { name: "Project", href: "/project", icon: faProjectDiagram },
  { name: "About", href: "/about", icon: faUser },
  { name: "Contact", href: "/contact", icon: faEnvelope },
];

export default function Navbar() {
  const pathname = usePathname(); 

  return (
    <nav className="my-16 animate-fade-in">
      <ul
        className="flex items-center justify-center gap-1 bg-transparent px-1 py-1 rounded-xl border-gray-600"
        style={{ borderWidth: "1px" }}
      >
        {navigation.map((item) => (
          <li key={item.href} className="flex items-center">
            <Link
              href={item.href}
              style={{borderRadius:'8px',}}
              className={`text-xs flex items-center gap-2 py-1 px-3 duration-500 ${
                pathname === item.href
                  ? "bg-zinc-800 text-white border-gray-600"
                  : "text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border hover:border-gray-600"
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="w-3 h-3" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
