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
  <Link href="/" className="w-16 sm:w-28" passHref>
    <Image src="/logo.webp" alt="Gräsö Konstrunda" isBlurred />
  </Link>
);

export default function Topbar() {
  return (
    <Navbar className="self-start" isBordered height={"6rem"} maxWidth="md">
      <NavbarBrand>
        <LogoLink />
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-6 text-xs sm:text-xl"
        justify="center"
      >
        {navbarItems.map((item) => (
          <NavbarItem key={item.label}>
            <Link href={item.href} className="text-xs sm:text-xl">
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
