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
      "Är ni sugna på att besöka några mysiga caféer kan vi tipsa om dessa.",
    imageUrl: "/Cutlery.svg",
    content: [
      <p key="caf1">
        Vid Rävsten <b>(1)</b>, här finns lunch och fika.
      </p>,
      <p key="caf2">
        På Gräsö Bygdegård <b>(17)</b> finns ett café med tillgång till
        handikapptoalett.
      </p>,
    ],
  },
  {
    title: "Enklare fika",
    description: "Nio utställningsplatser serverar enklare fika.",
    imageUrl: "/Kaffekopp.svg",
    content: [
      <p key="fik1">
        Bjurön <b>(3)</b>, Bjurön <b>(4)</b>, Högklyke <b>(5)</b>, Muskaregrund{" "}
        <b>(6)</b>, Nötsveden IP <b>(9)</b>, Anders Matsgården <b>(14)</b>,
        Sjöäng <b>(15)</b>, Norrboda 78 <b>(18)</b> samt på plats nummer{" "}
        <b>(25)</b> Båthusviken Källskärsudden.
      </p>,
    ],
  },
  {
    title: "Musik",
    description: "",
    imageUrl: "/Guitar.svg",
    content: [
      <p key="mus1">
        Musik dyker upp när man minst anar det vid Nötsvedens IP <b>(9)</b>.
      </p>,
      <p key="mus2">
        Musik spelas även i Lökäng <b>(23)</b> måndag, tisdag, onsdag och lördag
        från 12.00.
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
