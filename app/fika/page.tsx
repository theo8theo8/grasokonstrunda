import { FC } from "react";
import { Card, CardHeader, Divider, CardBody, Image } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gräsö konstrunda - Fika",
};

interface CafeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  content: JSX.Element[];
}

const CafeCard: FC<CafeCardProps> = ({
  title,
  description,
  imageUrl,
  content,
}) => (
  <Card className="m-4 lg:m-0 lg:w-[1000px] bg-primary-100">
    <CardHeader className="px-2 sm:px-4 md:px-6 pt-4 flex-row justify-start">
      <Image
        src={imageUrl}
        alt={`${title}-symbol`}
        className="w-16 md:w-20"
        radius="md"
      />
      <div className="max-w-60 md:max-w-full flex flex-col gap-0 md:gap-2 ml-2 md:ml-4">
        <h2 className="text-lg md:text-2xl font-bold">{title}</h2>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </CardHeader>
    <Divider />
    <CardBody className="gap-2 md:gap-4 p-4 md:p-6">
      {content.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </CardBody>
  </Card>
);

const cafeInfo = [
  {
    title: "Café",
    description:
      "Är ni sugna på att besöka några mysiga caféer eller lunchställen kan vi tipsa om dessa.",
    imageUrl: "/Cutlery.svg",
    content: [
      <p>
        Rävsten <b>(1)</b>, här finns lunch, fika och glass.
      </p>,
      <p>
        Gräsö Camping & Restaurang Doppingen <b>(8)</b> erbjuder mat, glass, bad
        m.m samt tillgång till handikapptoalett.
      </p>,
      <p>
        Sist men inte minst Norrboda Bygdegård <b>(16)</b>, ett café med
        tillgång till handikapptoalett.
      </p>,
    ],
  },
  {
    title: "Enklare fika",
    description: "Fem utställningsplatser serverar enklare fika.",
    imageUrl: "/Kaffekopp.svg",
    content: [
      <p>
        Högklyke <b>(4)</b>, Muskaregrund <b>(5)</b>, Sundsborg 27 <b>(7)</b>,
        Nötsveden IP <b>(9)</b> samt på plats nummer <b>(14)</b> Anders
        Matsgården.
      </p>,
    ],
  },
  {
    title: "Musik",
    description: "",
    imageUrl: "/Guitar.svg",
    content: [
      <p>
        Musik dyker upp när man minst anar det vid Nötsvedens IP <b>(9)</b>.
      </p>,
      <p>
        Musik spelas även i Lökäng <b>(19)</b> måndag, tisdag, och fredag
        klockan 12:30, lördag klockan 12.00.
      </p>,
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col md:gap-4 items-center">
      {cafeInfo.map((info, index) => (
        <CafeCard key={index} {...info} />
      ))}
    </div>
  );
}
