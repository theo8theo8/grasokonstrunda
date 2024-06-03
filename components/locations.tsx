import { Link } from "@nextui-org/react";

export interface Location {
  id: number;
  name: string;
  info?: string;
  linkInfo?: JSX.Element;
  artists: Artist[];
  location: string;
  icons?: string[];
}

interface Artist {
  name: string;
  medium: string;
}

export const Locations: Location[] = [
  {
    id: 1,
    name: "Rävstens stugby",
    linkInfo: (
      <>
        <span>
          Här finns lunch och fika. Passbåt från Äspskärs brygga måste förbokas
          digitalt{" "}
        </span>
        <Link isExternal color="secondary" href="https://www.ravsten.se">
          här!
        </Link>{" "}
      </>
    ),
    artists: [
      { name: "Hans Gustafsson", medium: "Akvarell, motorsågsskulpturer" },
      {
        name: "Louise Westerberg",
        medium: "Fårskinn, almanackor, skärgårdsbilder",
      },
    ],
    location: "https://goo.gl/maps/THmgQ7JfKpAgvWT78",
    icons: ["Cutlery"],
  },
  {
    id: 2,
    name: "Idö gård",
    artists: [
      { name: "Anna Karin Boode", medium: "Skulptur, målningar" },
      {
        name: "Johanna Florenius",
        medium: "Textil, plantor och blommor",
      },
      { name: "Meta Fästh Brunnberg", medium: "Linnekläder, accessoarer" },
      {
        name: "Tina Lundgren",
        medium: "Måleri akryl, Vincent Råtta, samt nåltovat",
      },
    ],
    location: "https://goo.gl/maps/uFwPJCk2qUd8vcAT9",
  },
  {
    id: 3,
    name: "Bjurön",
    info: "Fika",
    artists: [
      {
        name: "Fredrik Birgegård",
        medium: "Oljemålningar",
      },
      { name: "Lars-Erik Birgegård", medium: "Oljemålningar" },
    ],
    location: "https://goo.gl/maps/ssYVNNMEjnke1czJ6",
    icons: ["Kaffekopp"],
  },
  {
    id: 4,
    name: "Bjurön",
    info: "Fika, trädgårdsvisning",
    artists: [
      {
        name: "Eva-Karin Lundberg",
        medium: "Olja- och akrylmålningar",
      },
    ],
    location: "https://maps.app.goo.gl/PzVeEDavYB9qeBs68",
    icons: ["Kaffekopp"],
  },
  {
    id: 5,
    name: "Högklyke",
    info: "Fika",
    artists: [
      {
        name: "Elisabeth Lundgren",
        medium: "Fotografier av fåglar och landskap",
      },
    ],
    location: "https://goo.gl/maps/cbMrTjxfyKzteXUc6",
    icons: ["Kaffekopp"],
  },
  {
    id: 6,
    name: "Muskargrund",
    info: "Fika",
    artists: [
      { name: "Berit Blom", medium: "Handarbete, broderat och stickat" },
    ],
    location: "https://goo.gl/maps/d2S5YdbuXtX3yjXH7",
    icons: ["Kaffekopp"],
  },
  {
    id: 7,
    name: "Klockarhagen 17",
    artists: [
      {
        name: "Maria Högström",
        medium: "Oljemålningar, pärlbroderi",
      },
      {
        name: "Edvin Molarin",
        medium: "Illustrationer",
      },
    ],
    location: "https://maps.app.goo.gl/kMoAYNirKnhHpQfD8",
  },
  {
    id: 8,
    name: "Västerbyn 58",
    artists: [
      {
        name: "Yvonne Jansson",
        medium: "Rostkonst av återanvänt järn",
      },
    ],
    location: "https://maps.app.goo.gl/ZsVUukj734z1KFZk9",
  },
  {
    id: 9,
    name: "Nötsveden IP",
    info: "Fika, musik",
    artists: [
      { name: "Björn Andersson", medium: "Akvarell" },
      { name: "Eva Andersson", medium: "Stickat, tovat(valkat)" },
      { name: "Åsa Gröndal", medium: "Akryl, olja" },
      { name: "Lilian Wickholm", medium: "Akryl, olja, akvarell" },
      { name: "Malena Åkerlöf", medium: "Foto" },
    ],
    location: "https://goo.gl/maps/4AshcRSBxSBzNFsi6",
    icons: ["Kaffekopp", "Guitar"],
  },
  {
    id: 10,
    name: "Nötsveden",
    artists: [
      {
        name: "Sören Lindström",
        medium: "Hantverk, svepteknik, luffarslöjd, svarvat",
      },
    ],
    location: "https://goo.gl/maps/o6wsAeViFcSDaoRm9",
  },
  {
    id: 11,
    name: "Slätan",
    artists: [{ name: "Gunilla Andersson", medium: "Oljemålningar" }],
    location: "https://goo.gl/maps/YeXDH5zhWGoFJMHFA",
  },
  {
    id: 12,
    name: "Klockarboda",
    artists: [{ name: "Mika Ljungh", medium: "Botaniska illustrationer" }],
    location: "https://maps.app.goo.gl/e4rGedkHzjjaBHYt9",
  },
  {
    id: 13,
    name: "Baklä",
    artists: [
      { name: "Birgitta Lejman", medium: "Keramik" },
      {
        name: "Birgitta Ekerstig Lönn",
        medium: "Skärgårdsmotiv i akryl och akvarell",
      },
    ],
    location: "https://maps.app.goo.gl/6qB4esAFxdPdnBGBA",
  },
  {
    id: 14,
    name: "Anders Matsgården",
    artists: [
      {
        name: "Bengt Kullander",
        medium:
          "Snidade sjöfågelvettar och fåglar, akvarell- och akrylmålningar",
      },
      {
        name: "Martin Lima de Faria",
        medium: "Fotokonst med miniatyrer, autogramteckningar och nya verk",
      },
      {
        name: "Emmanuelle Strand Jean",
        medium: "Foto och järntrådskonst",
      },
      {
        name: "Staffan Strand",
        medium: "Skulpturer i brons",
      },
      {
        name: "Grävlings Naturprodukter",
        medium: "Naturnära hantverk tillverkat på Gräsö",
      },
    ],
    location: "https://goo.gl/maps/LG7KWRDiEGQofrGo8",
  },
  {
    id: 15,
    name: "Sjöäng",
    info: "Ons. och tors. har Café Hidor öppet!",
    artists: [
      { name: "Kerstin Sjöblom", medium: "Akvarell, olja och akryl" },
      {
        name: "Kerstin Nord",
        medium: "Akvareller, handgjorda böcker, konstkort",
      },
    ],
    location: "https://goo.gl/maps/LiEVQ5TTFabDpBBMA",
    icons: ["Kaffekopp"],
  },
  {
    id: 16,
    name: "Mats Larsgården Norrboda",
    linkInfo: (
      <>
        <span>Fika. </span>
        <Link isExternal color="secondary" href="https://www.rogerlindvall.se">
          Hemsida!
        </Link>{" "}
      </>
    ),
    artists: [
      { name: "Roger Lindvall", medium: "Landskaps- och naturfoto, konstfoto" },
    ],
    location: "https://maps.app.goo.gl/TQb3GNbTz8sj1FBTA",
    icons: ["Kaffekopp"],
  },
  {
    id: 17,
    name: "Gräsö Bygdegård - Norrboda",
    info: "Café. Här finns handikapptoalett",
    artists: [
      { name: "Thomas Olofsson", medium: "Knivmakare" },
      { name: "Marie Summerfield", medium: "Smycken" },
      { name: "Anders Keyser", medium: "Fototavlor på canvas" },
      {
        name: "Catrin Ormestad",
        medium: 'Är på plats med sin nya roman "Vargskytten"',
      },
      {
        name: "Irene Wåhlin",
        medium: "Konsthantverk, stentroll, akrylmålning",
      },
      { name: "Eva Rengren", medium: "Stickat" },
    ],
    location: "https://goo.gl/maps/NFZZjPXa5Ne9Kh7dA",
    icons: ["Cutlery"],
  },
  {
    id: 18,
    name: "Norrboda 78",
    info: "Fika",
    artists: [
      {
        name: "Astrid Lakso",
        medium: "Textil",
      },
    ],
    location: "https://maps.app.goo.gl/1McaA5Y3CZXFAx6g9",
    icons: ["Kaffekopp"],
  },
  {
    id: 19,
    name: "Norrboda Västerhamn",
    artists: [
      {
        name: "Britt-Marie Jansson",
        medium: "Akvarellmålningar",
      },
      {
        name: "Cecilia Jansson",
        medium: "Keramik, betong, teckningar",
      },
    ],
    location: "https://maps.app.goo.gl/C79yY61Ebo8RoMNaA",
  },
  {
    id: 20,
    name: "Norrboda Västerhamn",
    artists: [
      {
        name: "Elin Lindqvist, Festfint",
        medium: '"Speglingar", dukningskonst och blomsterinstallationer',
      },
    ],
    location: "https://goo.gl/maps/ZPd9SeAAhAbwpW288",
  },
  {
    id: 21,
    name: "Norrboda 405",
    artists: [{ name: "Per Joelsson", medium: "Oljemåleri" }],
    location: "https://goo.gl/maps/ZdFmPQTzAu2wGQ6z6",
  },
  {
    id: 22,
    name: "Norrboda 407",
    artists: [
      { name: "Nicolas Brunicardi", medium: "Djurfoto från Roslagen" },
      { name: "Peter Karbelius", medium: "Älgar och ordkonst" },
      { name: "Amanda Karbelius Klintfält", medium: "Tatueringskonst" },
      { name: "Inger Elfström", medium: "Teckning, kroki" },
    ],
    location: "https://maps.app.goo.gl/6fviMy5BK6j3eEWN9",
  },
  {
    id: 23,
    name: "Lökäng",
    info: "Musik måndag, tisdag, onsdag och lördag från 12.00. Författarträff måndag 8/7 kl. 15:00 tillsammans med Marie Lok Björk - 'Jag vill riva upp himmel och jord', Eleonore Holmgren - 'Hitta hem', Catrin Ormestad - 'Vargskytten'",
    artists: [
      {
        name: "Hans-Åke Lerin",
        medium:
          'Fotografier, nyupplaga av boken "De tysta rummen", film "Poetry in motion"',
      },
      {
        name: "Jon Gerbrand",
        medium: "Lampor, renoverat, återbruk och nytänk",
      },
      { name: "Dennis Persson", medium: "Återbruksskulpturer, målningar" },
      {
        name: "Anna Karlsson",
        medium: "Botaniska tryck på tyg och papper samt fritt broderi",
      },
      { name: "Sanne Vils", medium: "Waldorfdockor, silver, änglar" },
      { name: "Kyll Hellberg", medium: "Waldorfdockor, änglar" },
      {
        name: "Ulla Gerbrand",
        medium: "Måleri - akryl, olja och grafik",
      },
    ],
    location: "https://goo.gl/maps/DJtN7XHNAKJxs4W58",
    icons: ["Guitar"],
  },
  {
    id: 24,
    name: "Ängstorpet Norrboda",
    artists: [{ name: "Roland Kallström", medium: "Konst och hantverk" }],
    location: "https://goo.gl/maps/cfyK2UGcRbymJiFF8",
  },
  {
    id: 25,
    name: "Båthusviken Källskärsudden",
    info: "Fika med hembakat och korv med bröd på båthusbryggan.",
    artists: [
      { name: "Carina Pålgård", medium: "Måleri, färgglädje och inspiration" },
      { name: "Jenny Dahlkar", medium: "Måleri, färgglädje och inspiration" },
    ],
    location: "https://maps.app.goo.gl/frb2i3S3CWYBop5w8",
    icons: ["Kaffekopp"],
  },
];
