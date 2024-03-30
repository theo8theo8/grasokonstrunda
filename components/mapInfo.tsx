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
      <Card className="bg-primary-100  m-2 sm:m-0 sm:w-[700px] h-fit">
        <CardBody className="p-4 sm:p-6">
          <p className="font-bold text-md sm:text-xl">
            Klicka på en av siffrorna för att se mer information!
          </p>
        </CardBody>
        <Divider />
        <CardFooter className="p-4 sm:p-6">
          <Link
            color="foreground"
            href="/Flyer_2023.pdf"
            className="gap-2"
            download
          >
            <FontAwesomeIcon
              icon={faFileArrowDown}
              className="text-xl sm:text-2xl"
            />
            <p className="text-sm sm:text-md">Ladda ned en pdf av kartan!</p>
          </Link>
        </CardFooter>
      </Card>
    );
  } else {
    const location = Locations.find(
      (loc) => loc.id === parseInt(id.split(".")[0])
    );
    return (
      <Card className="bg-primary-100 m-2 sm:m-0 sm:w-[700px] h-fit">
        <CardHeader className="p-4 sm:p-6 flex-row justify-between items-start">
          <div className="flex-col max-w-60">
            <h2 className="text-lg sm:text-3xl font-bold">
              {location?.id}. {location?.name}
            </h2>
            {location?.info && (
              <h3 className="text-xs sm:text-md">{location?.info}</h3>
            )}
            {location?.linkInfo && (
              <h3 className="text-xs sm:text-md">{location.linkInfo}</h3>
            )}
          </div>
          {location?.icons && (
            <div className="flex gap-1 sm:gap-2">
              {location?.icons.map((icon, index) => (
                <Image
                  key={index}
                  src={`/${icon}.svg`}
                  alt={icon}
                  radius="md"
                  className="w-10 sm:w-16"
                />
              ))}
            </div>
          )}
        </CardHeader>
        <Divider />
        <CardBody className="p-4 sm:p-6 flex-col space-y-1 sm:space-y-4">
          {location?.artists.map((artist, index) => (
            <div key={index}>
              <span className="text-xs sm:text-md font-bold">
                {artist.name} -{" "}
              </span>
              <span className="text-xs sm:text-md">{artist.medium}</span>
            </div>
          ))}
        </CardBody>
        <Divider />
        <CardFooter className="px-4 sm:px-6 py-4 justify-between">
          <Link
            isExternal
            underline="always"
            showAnchorIcon
            color="secondary"
            href={location?.location}
            className="text-sm sm:text-md"
          >
            Hitta hit!
          </Link>
          <Link
            color="foreground"
            href="/Flyer_2023.pdf"
            className="gap-2"
            download
          >
            <FontAwesomeIcon
              icon={faFileArrowDown}
              className="text-lg sm:text-2xl"
            />
            <p className="text-sm sm:text-md">Ladda ned en pdf av kartan!</p>
          </Link>
        </CardFooter>
      </Card>
    );
  }
}
