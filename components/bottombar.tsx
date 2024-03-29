import { Image, Link } from "@nextui-org/react";
import { FC } from "react";

const SponsorLink: FC<{
  href: string;
  src: string;
  alt: string;
  main?: boolean;
}> = ({ href, src, alt, main }) => (
  <Link href={href} isExternal>
    <Image
      src={src}
      alt={alt}
      className={`${main ? "w-56" : "w-16"}`}
      radius="none"
    />
  </Link>
);

const SponsorImage: FC<{
  src: string;
  alt: string;
}> = ({ src, alt }) => (
  <Image src={src} alt={alt} className="w-16" radius="none" />
);

export default function Bottombar() {
  return (
    <div className="flex justify-center items-end gap-60 mb-2">
      <div>
        <p className="font-bold text-lg">Medarrangör:</p>
        <SponsorLink
          href="https://www.nbv.se/"
          src="/logos/nbv_logo.webp"
          alt="Nykterhetsrörelsens bildningsverksamhet"
          main
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-bold text-lg">Stödjande företag:</p>
        <div className="flex items-center gap-4">
          <SponsorLink
            href="https://www.ica.se/butiker/nara/osthammar/ica-sjoboden-1542/start/"
            src="/logos/ICAny.webp"
            alt="ICA Nära Sjöboden"
          />
          <SponsorLink
            href="https://www.byggvaruhuset.nu/"
            src="/logos/OregrundsBygg.webp"
            alt="Byggvaruhuset Öregrund"
          />
          <SponsorImage src="/logos/CEN_Carpenter_1.webp" alt="CEN Carpenter" />
          <SponsorLink
            href="https://tidtryck.com/"
            src="/logos/Tidtryck.webp"
            alt="Tidtryck"
          />
        </div>
        <p className="text-md">Sidan uppdaterades 2024-03-29</p>
      </div>
    </div>
  );
}
