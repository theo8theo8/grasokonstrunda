import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.webp";

export default function Topbar() {
  return (
    <div className="flex border-b border-gray-500 items-center justify-between text-xs sm:text-xl  ">
      <Link href="/" className="w-16 sm:w-28">
        <Image
          src={logo}
          alt="Gräsö Konstrunda 2023"
          quality={100}
          sizes="(max-width: 768px) 50vw, 20vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Link>
      <Link href="/">START</Link>
      <Link href="/karta">KARTA</Link>
      <Link href="/konstnarer">KONSTNÄRER</Link>
      <Link href="/fika">FIKA</Link>
      <Link href="/kontakt">KONTAKT</Link>
    </div>
  );
}
