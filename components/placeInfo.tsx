import styles from "@/styles/style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface Props {
  place: string | undefined;
}

export default function PlaceInfo({ place }: Props) {
  let id = 0;
  if (place != undefined) {
    id = parseInt(place.split(".")[0]);
  }
  switch (id) {
    case 1: {
      return (
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <Image
              src="/Cutlery.svg"
              alt="Fika"
              width={300}
              height={200}
              className={styles.infoLogo}
            />
            <h1>1. Rävsten</h1>
          </div>
          <p>
            <em>
              Här finns lunch, fika och glass. Passbåt från Äspskärs brygga
              måste förbokas digitalt{" "}
              <a
                className={styles.link}
                href="https://www.upplandsstiftelsen.se/vara-campingarochstugbyar/ravstens-stugby-startsida__5090"
                target="_blank"
                rel="noreferrer"
              >
                här!
              </a>
            </em>
          </p>
          <br />
          <p>
            <b>Hans Gustafsson</b>
            <br />
            <em>Akvarell, motorsågsskulpturer</em>
          </p>
          <br />
          <p>
            <b>Louise Westerberg</b>
            <br />
            <em>Fårskinn, almanackor, skärgårdsbilder</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/THmgQ7JfKpAgvWT78"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 2: {
      return (
        <div className={styles.infoBox}>
          <h1>2. Idö gård</h1>
          <br />
          <p>
            <b>Anna Karin Boode</b>
            <br />
            <em>Skulpturer, oljemålningar</em>
          </p>
          <br />
          <p>
            <b>Johanna Florenius</b>
            <br />
            <em>Textilt hantverk, väskor, kuddar m.m</em>
          </p>
          <br />
          <p>
            <b>Meta Fästh Brunnberg</b>
            <br />
            <em>Linnekläder, accessoarer</em>
          </p>
          <br />
          <p>
            <b>Solveig Bergholm</b>
            <br />
            <em>Vindfångare</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/uFwPJCk2qUd8vcAT9"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 3: {
      return (
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <Image
              src="/Kaffekopp.svg"
              alt="Fika"
              width={300}
              height={200}
              className={styles.infoLogo}
            />
            <h1>3. Bjurön</h1>
          </div>
          <p>
            <em>Fika</em>
          </p>
          <br />
          <p>
            <b>Fredrik Birgegård</b>
            <br />
            <em>Oljemålningar - figurativt med abstrakta inslag</em>
          </p>
          <br />
          <p>
            <b>Lars-Erik Birgegård</b>
            <br />
            <em>Oljemålningar - landskapsmotiv</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/ssYVNNMEjnke1czJ6"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 4: {
      return (
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <Image
              src="/Kaffekopp.svg"
              alt="Fika"
              width={300}
              height={200}
              className={styles.infoLogo}
            />
            <h1>4. Högklyke</h1>
          </div>
          <p>
            <em>Kaffe med bullar och kylda drycker</em>
          </p>
          <br />
          <p>
            <b>Elisabeth Lundgren</b>
            <br />
            <em>Fotografi - ögonblick med fåglar, landskap</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/cbMrTjxfyKzteXUc6"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 5: {
      return (
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <Image
              src="/Kaffekopp.svg"
              alt="Fika"
              width={300}
              height={200}
              className={styles.infoLogo}
            />
            <h1>5. Muskaregrund</h1>
          </div>
          <p>
            <em>Fika</em>
          </p>
          <br />
          <p>
            <b>Berit Blom</b>
            <br />
            <em>Handarbeten, stickat och broderat</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/d2S5YdbuXtX3yjXH7"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 6: {
      return (
        <div className={styles.infoBox}>
          <h1>6. Sundsborg samlingssalen</h1>
          <br />
          <p>
            <em>Catwalk måndag 10/7 12:00 om vädret tillåter</em>
          </p>
          <br />
          <p>
            <b>Christina Aplemark</b>
            <br />
            <em>Kläder</em>
          </p>
          <br />
          <p>
            <b>Marie Koskinen</b>
            <br />
            <em>Akvareller</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/DjkGfWf6pZjKzYLV6"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 7: {
      return (
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <Image
              src="/Kaffekopp.svg"
              alt="Fika"
              width={300}
              height={200}
              className={styles.infoLogo}
            />
            <h1>7. Sundsborg 27</h1>
          </div>
          <p>
            <em>Fika</em>
          </p>
          <br />
          <p>
            <b>Eva Sjöstedt Meshesha</b>
            <br />
            <em>Pärlplattor - &quot;Vägen tillbaka&quot;</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/56yPn5LrMcu6n5gm6"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 8: {
      return (
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <Image
              src="/Cutlery.svg"
              alt="Fika"
              width={300}
              height={200}
              className={styles.infoLogo}
            />
            <h1>8. Gräsö Camping, Restaurang Doppingen</h1>
          </div>
          <p>
            <em>Fika, mat, glass, bad m.m. Här finns handikapptoalett</em>
          </p>
          <br />
          <p>
            <b>Gunilla Skoglund</b>
            <br />
            <em>Oljemåleri</em>
          </p>
          <br />
          <p>
            <b>Ann-Charlotte Lindström</b>
            <br />
            <em>Måleri - hav och strand</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/7b9LRD8vCvYBujSAA"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 9: {
      return (
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <Image
              src="/Guitar.svg"
              alt="Fika"
              width={300}
              height={200}
              className={styles.infoLogo}
            />
            <Image
              src="/Kaffekopp.svg"
              alt="Fika"
              width={300}
              height={200}
              className={styles.infoLogo}
            />
            <h1>9. Nötsveden IP</h1>
          </div>
          <p>
            <em>Fika. Musik som dyker upp när man minst anar det</em>
          </p>
          <br />
          <p>
            <b>Björn Andersson</b>
            <br />
            <em>Akvarell</em>
          </p>
          <br />
          <p>
            <b>Åsa Gröndal</b>
            <br />
            <em>Akrylmålningar</em>
          </p>
          <br />
          <p>
            <b>Helena Hörner</b>
            <br />
            <em>Stickat</em>
          </p>
          <br />
          <p>
            <b>Jessica Hörner</b>
            <br />
            <em>Canvasfoto från närområdet</em>
          </p>
          <br />
          <p>
            <b>Evy Tydal</b>
            <br />
            <em>Trasmattor - dubbelbindning</em>
          </p>
          <br />
          <p>
            <b>Lilian Wickholm</b>
            <br />
            <em>Akryl, akvarell</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/4AshcRSBxSBzNFsi6"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 10: {
      return (
        <div className={styles.infoBox}>
          <h1>10. Nötsveden</h1>
          <br />
          <p>
            <b>Sören Lindström</b>
            <br />
            <em>Trähantverk svepteknik, luffarslöjd, svarvat</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/o6wsAeViFcSDaoRm9"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 11: {
      return (
        <div className={styles.infoBox}>
          <h1>11. Västerbyn</h1>
          <br />
          <p>
            <b>Gunilla Andersson</b>
            <br />
            <em>Oljemålningar</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/YeXDH5zhWGoFJMHFA"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 12: {
      return (
        <div className={styles.infoBox}>
          <h1>12. Baklä</h1>
          <br />
          <p>
            <b>Birgitta Lejman</b>
            <br />
            <em>Keramik</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/HuMMebH7PXtJt3t49A"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 13: {
      return (
        <div className={styles.infoBox}>
          <h1>13. Väster Mörtarö Studio 838</h1>
          <br />
          <p>
            <b>Martin Lima de Faria</b>
            <br />
            <em>
              Autogram(självbiografiska kalligram), Small People Big
              Plans(fotokonst med miniatyrer)
            </em>
          </p>
          <br />
          <p>
            <b>Maud Karlsson Lima de Faria</b>
            <br />
            <em>&quot;Med ögon känsliga för grönt&quot;</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/1z3mAyJtLyRG3YpY6"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 14: {
      return (
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <Image
              src="/Kaffekopp.svg"
              alt="Fika"
              width={300}
              height={200}
              className={styles.infoLogo}
            />
            <h1>14. Anders Matsgården</h1>
          </div>
          <p>
            <em>Fika, glass.</em>
          </p>
          <br />
          <p>
            <b>Emmanuelle Strand Jean</b>
            <br />
            <em>Fil de fer(järntrådsfigurer), målningar, foton</em>
          </p>
          <br />
          <p>
            <b>Staffan Strand</b>
            <br />
            <em>Bronsskulpturer</em>
          </p>
          <br />
          <p>
            <b>Grävlings Naturprodukter</b>
            <br />
            <em>Naturnära hantverk tillverkat på Gräsö</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/LG7KWRDiEGQofrGo8"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 15: {
      return (
        <div className={styles.infoBox}>
          <h1>15. Sjöäng</h1>
          <br />
          <p>
            <b>Kerstin Sjöblom</b>
            <br />
            <em>Akvarell, akryl, olja</em>
          </p>
          <br />
          <p>
            <b>Thomas Håkansson</b>
            <br />
            <em>Fotografier</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/LiEVQ5TTFabDpBBMA"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 16: {
      return (
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <Image
              src="/Cutlery.svg"
              alt="Fika"
              width={300}
              height={200}
              className={styles.infoLogo}
            />
            <h1>16. Norrboda Bygdegård</h1>
          </div>
          <p>
            <em>Fika och smörgåsar. Här finns handikapptoalett</em>
          </p>
          <br />
          <p>
            <b>Sonja Lindberg</b>
            <br />
            <em>Akvarell</em>
          </p>
          <br />
          <p>
            <b>Anders Keyser</b>
            <br />
            <em>Naturfoto på stora canvastavlor</em>
          </p>
          <br />
          <p>
            <b>Monica Ohlsson</b>
            <br />
            <em>Gott och blandat, personliga fotografier</em>
          </p>
          <br />
          <p>
            <b>Thomas Olofsson</b>
            <br />
            <em>Knivmakare</em>
          </p>
          <br />
          <p>
            <b>Irene Wåhlin</b>
            <br />
            <em>Tavlor/akryl och konsthantverk</em>
          </p>
          <br />
          <p>
            <b>Eva Rengren</b>
            <br />
            <em>Stickat;</em>
          </p>
          <br />
          <p>
            <b>Östen Andersson</b>
            <br />
            <em>Har sin bok &quot;Det fria folket&quot; till försäljning</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/NFZZjPXa5Ne9Kh7dA"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 17: {
      return (
        <div className={styles.infoBox}>
          <h1>17. Västerhamnen Norrboda</h1>
          <br />
          <p>
            <b>Elin Lindqvist, Festfint</b>
            <br />
            <em>
              &quot;Mina ängder gröna&quot;, dukningskonst och
              blomsterinstallationer
            </em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/ZPd9SeAAhAbwpW288"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 18: {
      return (
        <div className={styles.infoBox}>
          <h1>18. Norrboda 405 - Runes båtbyggeri</h1>
          <br />
          <p>
            <b>Per Joelsson</b>
            <br />
            <em>Oljemålningar</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/ZdFmPQTzAu2wGQ6z6"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 19: {
      return (
        <div className={styles.infoBox}>
          <div className={styles.infoHeader}>
            <Image
              src="/Guitar.svg"
              alt="Fika"
              width={300}
              height={200}
              className={styles.infoLogo}
            />
            <h1>19. Lökäng</h1>
          </div>
          <p>
            <em>
              Musik måndag, tisdag
              <br /> och fredag klockan 12:30,
              <br /> lördag klockan 12.00
            </em>
          </p>
          <br />
          <p>
            <b>
              Eleonore Holmgren
              <br />
              Uppsalaförfattare
            </b>
            <br />
            <em>
              Pratar om sin nya bok
              <br />
              &quot;Arvet efter Britta&quot; måndag 10/7 klockan 15:00
            </em>
          </p>
          <br />
          <p>
            <b>Hans-åke Lerin</b>
            <br />
            <em>
              Fotografier, rörliga bilder, ny fotobok <br />
              &quot;Bildminnen&quot;
            </em>
          </p>
          <br />
          <p>
            <b>Sanne Vils</b>
            <br />
            <em>Waldorfdockor, silver, änglar</em>
          </p>
          <br />
          <p>
            <b>Kyll Hellberg</b>
            <br />
            <em>Waldorfdockor, änglar</em>
          </p>
          <br />
          <p>
            <b>Ulla Gerbrand</b>
            <br />
            <em>Måleri - blandteknik, akryl, olja och grafik</em>
          </p>
          <br />
          <p>
            <b>Jon Gerbrand</b>
            <br />
            <em>
              Lampor - renoverat, återbruk och nytänk av vackra saker som
              kastats bort
            </em>
          </p>
          <br />
          <p>
            <b>Margit Martens</b>
            <br />
            <em>Keramik</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/DJtN7XHNAKJxs4W58"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    case 20: {
      return (
        <div className={styles.infoBox}>
          <h1>20. Ängstorpet Norrboda</h1>
          <p>
            <b>Roland Kallström</b>
            <br />
            <em>Konst och hantverk</em>
          </p>
          <br />
          <a
            className={styles.link}
            href="https://goo.gl/maps/cfyK2UGcRbymJiFF8"
            target="_blank"
            rel="noreferrer"
          >
            <em>Hitta hit!</em>
          </a>
          <div className={styles.download}>
            <a href="/Flyer_2023.pdf" download>
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
            <p>Ladda ned en pdf av kartan!</p>
          </div>
        </div>
      );
    }
    default: {
      return (
        <div className={styles.infoBox}>
          <h1>Error!</h1>
        </div>
      );
    }
  }
}
