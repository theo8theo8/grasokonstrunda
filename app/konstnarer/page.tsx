import { Metadata } from "next";
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
export const metadata: Metadata = {
  title: "Gräsö konstrunda - Utställare",
};
import { Locations } from "@/components/locations";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Card
        isBlurred
        className="bg-primary-100 max-w-[300px] h-fit my-4"
        shadow="sm"
      >
        <CardBody className="flex flex-row items-center gap-4 overflow-hidden">
          <Image
            src="/skylt.webp"
            alt="Skylt till utställningsplats"
            width={200}
          />
          <p className="text-wrap break-words">
            Konstrundans skyltar visar dig vägen till alla konstutställningar!
          </p>
        </CardBody>
      </Card>
      <div className="columns-4 space-y-4 bg-primary-200 p-4 rounded-xl mb-4">
        {Locations.map((location) => (
          <Card key={location.id} className="bg-primary-100 w-[400px] h-fit">
            <CardHeader className="flex-col items-start gap-1">
              <h2 className="text-lg font-bold">
                {location.id}. {location.name}
              </h2>
              {location.info && <h3 className="text-sm">{location.info}</h3>}
              {location.linkInfo && (
                <h3 className="text-sm">{location.linkInfo}</h3>
              )}
            </CardHeader>
            <Divider />
            <CardBody>
              <ul>
                {location.artists.map((artist, index) => (
                  <li key={index}>
                    <span className="text-sm font-semibold">{artist.name}</span>{" "}
                    - <span className="text-sm">{artist.medium}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
