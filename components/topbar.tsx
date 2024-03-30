import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
} from "@nextui-org/react";
import Link from "next/link";

const navbarItems = [
  { href: "/", label: "START" },
  { href: "/karta", label: "KARTA" },
  { href: "/konstnarer", label: "KONSTNÄRER" },
  { href: "/fika", label: "FIKA" },
  { href: "/kontakt", label: "KONTAKT" },
];

const LogoLink = () => (
  <Link href="/" className="w-16 sm:w-20 md:w-28" passHref>
    <Image src="/logo.webp" alt="Gräsö Konstrunda" isBlurred />
  </Link>
);

export default function Topbar() {
  return (
    <Navbar
      className="self-start h-16 sm:h-20 md:h-24"
      isBordered
      maxWidth="md"
    >
      <NavbarBrand>
        <LogoLink />
      </NavbarBrand>
      <NavbarContent className="flex gap-2 md:gap-6" justify="center">
        {navbarItems.map((item) => (
          <NavbarItem key={item.label}>
            <Link
              href={item.href}
              className="text-[10px] sm:text-xs md:text-xl"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
