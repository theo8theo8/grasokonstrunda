import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import Bottombar from "@/components/bottombar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center">
        <Image
          src="/map_black.webp"
          alt="Bild på Gräsö"
          className="w-40 sm:w-80"
        />
        <Card
          className="max-w-[500px] m-6 sm:m-0 sm:ml-20 p-0 sm:p-2 bg-primary-100"
          shadow="lg"
          radius="lg"
        >
          <CardHeader className="flex">
            <h2 className="text-lg sm:text-2xl font-bold">
              Kom till Gräsö konstrunda i sommar!
            </h2>
          </CardHeader>
          <Divider />
          <CardBody className="gap-4 sm:gap-6 text-xs sm:text-lg">
            <p>
              Vecka 28 smyckar konstnärer sina hem, sjöbodar, lador och
              bygdegårdar med sin konst!
            </p>
            <p>
              Konstutställningarna är utspridda över hela ön och ni får
              möjlighet att uppleva den härliga atmosfär och natur som finns på
              Gräsö.
            </p>
            <p className="font-bold">Varmt välkommen till Gräsö konstrunda!</p>
            <p className="font-bold">
              Kartan kommer under maj månad att uppdateras med 2024 års platser
              och konstnärer!
            </p>
          </CardBody>
          <Divider />
          <CardFooter className="flex flex-col gap-2 sm:gap-4 sm:mt-2">
            <p className="text-2xl sm:text-4xl font-bold">
              V.28 8-14 juli 2024
            </p>
            <p className="text-lg sm:text-2xl font-bold">
              Kl. 12-17 alla dagar!
            </p>
          </CardFooter>
        </Card>
      </div>
      <Bottombar />
    </>
  );
}
