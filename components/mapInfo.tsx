import { Locations } from "./locations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { CustomArea } from "react-img-mapper";
import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
  Link,
  Image,
} from "@nextui-org/react";
interface Props {
  showInfo: CustomArea | undefined;
}

export default function MapInfo({ showInfo }: Props) {
  const id = showInfo?.id;
  if (id === undefined) {
    return (
      <Card className="bg-primary-100 w-[700px] h-fit">
        <CardBody className="p-6">
          <p className="font-bold text-xl">
            Klicka på en av siffrorna för att se mer information!
          </p>
        </CardBody>
        <Divider />
        <CardFooter className="p-6">
          <Link
            color="foreground"
            href="/Flyer_2023.pdf"
            className=" gap-2"
            download
          >
            <FontAwesomeIcon icon={faFileArrowDown} size="xl" />
            <p>Ladda ned en pdf av kartan!</p>
          </Link>
        </CardFooter>
      </Card>
    );
  } else {
    const location = Locations.find(
      (loc) => loc.id === parseInt(id.split(".")[0])
    );
    return (
      <Card className="bg-primary-100 w-[700px] h-fit">
        <CardHeader className=" p-6 flex-row justify-between items-start">
          <div className="flex-col">
            <h2 className="text-3xl font-bold">
              {location?.id}. {location?.name}
            </h2>
            {location?.info && <h3 className="text-md">{location?.info}</h3>}
            {location?.linkInfo && location.linkInfo}
          </div>
          {location?.icons && (
            <div className="flex gap-2">
              {location?.icons.map((icon, index) => (
                <Image
                  key={index}
                  src={`/${icon}.svg`}
                  alt={icon}
                  radius="md"
                  className="w-16"
                />
              ))}
            </div>
          )}
        </CardHeader>
        <Divider />
        <CardBody className="p-6 flex-col space-y-4">
          {location?.artists.map((artist, index) => (
            <div key={index}>
              <span className="text-md font-bold">{artist.name}</span> -{" "}
              <span className="text-md">{artist.medium}</span>
            </div>
          ))}
        </CardBody>
        <Divider />
        <CardFooter className="px-6 py-4 justify-between">
          <Link
            isExternal
            underline="always"
            showAnchorIcon
            color="secondary"
            href={location?.location}
          >
            Hitta hit!
          </Link>
          <Link
            color="foreground"
            href="/Flyer_2023.pdf"
            className=" gap-2"
            download
          >
            <FontAwesomeIcon icon={faFileArrowDown} size="xl" />
            <p>Ladda ned en pdf av kartan!</p>
          </Link>
        </CardFooter>
      </Card>
    );
  }
}
