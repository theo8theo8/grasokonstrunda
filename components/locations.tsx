import { Link } from "@heroui/react";
import { ReactNode } from "react";

export interface Location {
  id: number;
  name: string;
  coords: number[];
  info?: string;
  linkInfo?: ReactNode;
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
    name: "Idö gård",
    coords: [5452, 10778, 5741, 11065],
    artists: [
      { name: "Anna Karin Boode", medium: "Skulpturer, målningar" },
      {
        name: "Johanna Florenius",
        medium: "Textil design, plantor",
      },
    ],
    location: "https://goo.gl/maps/uFwPJCk2qUd8vcAT9",
  },
  {
    id: 2,
    name: "Bjurön",
    coords: [4831, 10771, 5373, 11056],
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
    id: 3,
    name: "Bjurön",
    coords: [4777, 10414, 5276, 10716],
    info: "Fika",
    artists: [
      {
        name: "Fritjof Karlsson",
        medium: "Akvarellmålningar",
      },
    ],
    location: "https://maps.app.goo.gl/EbrM7m6kGwr7vgfs7",
    icons: ["Kaffekopp"],
  },
  {
    id: 4,
    name: "Högklyke",
    coords: [4299, 8440, 4591, 8740],
    artists: [
      {
        name: "Elisabeth Lundgren",
        medium: "Foto",
      },
      {
        name: "Theresa Högman",
        medium: "Akvarell",
      },
      {
        name: "Melody Ghaderidosst",
        medium: "Olja",
      },
    ],
    location: "https://goo.gl/maps/cbMrTjxfyKzteXUc6",
  },
  {
    id: 5,
    name: "Muskargrund",
    coords: [3546, 8300, 4122, 8586],
    info: "Fika",
    artists: [{ name: "Berit Blom", medium: "Stickat, broderat" }],
    location: "https://goo.gl/maps/d2S5YdbuXtX3yjXH7",
    icons: ["Kaffekopp"],
  },
  {
    id: 6,
    name: "Nötsveden IP",
    coords: [2317, 7960, 3135, 8247],
    info: "Fika, musik. Prova på Soma slow/soma move onsd. 9/7 & lörd. 12/7 kl.12 med Eva Andersson. Ta med yogamatta!",
    artists: [
      { name: "Åsa Gröndal", medium: "Måleri, kol, akryl, olja" },
      { name: "Malena Åkerlöf", medium: "Foto: tavlor och vykort" },
      { name: "Helen Hörner", medium: "Stickat" },
      { name: "Lilian Wickholm", medium: "Måleri" },
      { name: "Eva Andersson", medium: "Stickat, tovat/valkat" },
      { name: "Björn Andersson", medium: "Akvarell" },
    ],
    location: "https://goo.gl/maps/4AshcRSBxSBzNFsi6",
    icons: ["Kaffekopp", "Guitar"],
  },
  {
    id: 7,
    name: "Nötsveden",
    coords: [3152, 7960, 3378, 8247],
    artists: [
      {
        name: "Sören Lindström",
        medium: "Trähantverk, svepteknik, svarvat och luffarslöjd",
      },
    ],
    location: "https://goo.gl/maps/o6wsAeViFcSDaoRm9",
  },
  {
    id: 8,
    name: "Västerbyn - Naturfantastens gårdsbutik & fik",
    coords: [2372, 8293, 2910, 8579],
    info: "Gårdsbutik och fik",
    artists: [
      {
        name: "Ellinor Nordensten",
        medium: "Foton, konst, hantverk",
      },
      {
        name: "Jenny Nyberg",
        medium: "Foton, konst, hantverk",
      },
    ],
    location: "https://maps.app.goo.gl/XDohjQVg4piocgfe8",
    icons: ["Cutlery"],
  },
  {
    id: 9,
    name: "Slätan",
    coords: [1899, 7944, 2157, 8228],
    artists: [{ name: "Gunilla Andersson", medium: "Oljemålningar" }],
    location: "https://goo.gl/maps/YeXDH5zhWGoFJMHFA",
  },
  {
    id: 10,
    name: "Hummelbäck",
    coords: [1495, 7375, 1781, 7662],
    artists: [
      {
        name: "Ragnvald Bergqvist",
        medium: "Konstslöjd i trä, skåp, ljusstakar, skålar",
      },
      {
        name: "Lina Földessy",
        medium: "Akvarellmålningar, gelliprint, metallkonst",
      },
    ],
    location: "https://maps.app.goo.gl/joii9pEcJwuCcmkk8",
  },
  {
    id: 11,
    name: "Klockarboda",
    coords: [1364, 6774, 1650, 7062],
    artists: [
      { name: "Mika Ljungh", medium: "Botaniska illustrationer" },
      { name: "Maud Botéus", medium: "Akvarell" },
    ],
    location: "https://maps.app.goo.gl/e4rGedkHzjjaBHYt9",
  },
  {
    id: 12,
    name: "Baklä",
    coords: [1327, 6238, 1630, 6540],
    artists: [
      { name: "Birgitta Lejman", medium: "Keramik" },
      {
        name: "Birgitta Ekerstig Lönn",
        medium: "Akryl och akvarell",
      },
    ],
    location: "https://maps.app.goo.gl/6qB4esAFxdPdnBGBA",
  },
  {
    id: 13,
    name: "Studio 838 Rosendal",
    coords: [1475, 5157, 1778, 5461],
    artists: [
      {
        name: "Martin Lima de Faria",
        medium:
          "AI-visualiseringen 'The Flow', teckningar och fotokonst med mini",
      },
    ],
    location: "https://maps.app.goo.gl/KFqaESrzqBBKQBKA7",
  },
  {
    id: 14,
    name: "Östermörtarö",
    coords: [2541, 5351, 2873, 5654],
    info: "Fika",
    artists: [
      { name: "Helén Rutegård", medium: "Dubbelvävda trasmattor" },
      { name: "Eva Karin Jonsson", medium: "Akvarell och akrylmålningar" },
      { name: "Laura Sjöberg", medium: "Bilder i blandteknik" },
      { name: "Britt-Marie Thisner", medium: "'Miss Marples spetssjal'" },
    ],
    location: "https://maps.app.goo.gl/gqP6RuP7LNyE1tWu5",
    icons: ["Kaffekopp"],
  },
  {
    id: 15,
    name: "Anders Matsgården",
    coords: [1493, 4531, 1810, 4837],
    artists: [
      {
        name: "Grävlings Naturprodukter",
        medium: "Naturnära hantverk tillverkat på Gräsö",
      },
      {
        name: "Emmanuelle Strand Jean",
        medium: "Järntrådskonst och fotografier",
      },
      {
        name: "Bengt Kullander",
        medium: "Snidade sjöfågelvettar, fåglar, akryl och akvareller",
      },
      {
        name: "Louise Westerberg",
        medium: "Almanackor, fårskinn",
      },
    ],
    location: "https://goo.gl/maps/LG7KWRDiEGQofrGo8",
  },
  {
    id: 16,
    name: "Sjöäng",
    coords: [1127, 4022, 1751, 4325],
    info: "Tors. och fre. har Café Hildor öppet!",
    artists: [{ name: "Kerstin Sjöblom", medium: "Måleri" }],
    location: "https://goo.gl/maps/LiEVQ5TTFabDpBBMA",
    icons: ["Kaffekopp"],
  },
  {
    id: 17,
    name: "MasLarsgården",
    coords: [1853, 3755, 2478, 4058],
    info: "Gratis fika",
    artists: [
      { name: "Roger Lindvall", medium: "Fotokonst" },
      { name: "Cecilia Granberg", medium: "Keramik" },
    ],
    location: "https://maps.app.goo.gl/TQb3GNbTz8sj1FBTA",
    icons: ["Kaffekopp"],
  },
  {
    id: 18,
    name: "Gräsö Bygdegård - Norrboda",
    coords: [1186, 3438, 2146, 3741],
    info: "Café. Här finns handikapptoalett",
    artists: [
      { name: "Thomas Olofsson", medium: "Knivmakare" },
      { name: "Marie Summerfield", medium: "Smycken, dubbla kort med foton" },
      { name: "Anders Keyser", medium: "Canvastavlor med naturmotiv" },
      {
        name: "Catrin Ormestad",
        medium: 'Med sin roman "Vargskytten"',
      },
      { name: "Eva Rengren", medium: "Stickat" },
      {
        name: "Maria Levin",
        medium:
          "Funktionella vardagsprodukter i glad textildesign: väskor, tehuvor, barnfiltar m.m",
      },
    ],
    location: "https://goo.gl/maps/NFZZjPXa5Ne9Kh7dA",
    icons: ["Cutlery"],
  },
  {
    id: 19,
    name: "Norrboda Västerhamn",
    coords: [1060, 3131, 1417, 3415],
    artists: [
      {
        name: "Britt-Marie Jansson",
        medium: "Akvarell, måleri, foto / Jansson på Gräsö",
      },
    ],
    location: "https://maps.app.goo.gl/C79yY61Ebo8RoMNaA",
  },
  {
    id: 20,
    name: "Lökäng",
    coords: [1061, 2784, 1663, 3082],
    info: "Musik: måndag, tisdag, onsdag och lördag från 12.00. Författarträff måndag 7/7 kl. 15:00 med Ingrid Hedström som berättar om sin bok 'Gick obemärkt förbi'",
    artists: [
      {
        name: "Hans-Åke Lerin",
        medium: "Fotografier från 10 års utställningar. Generösa priser!",
      },
      {
        name: "Ulla Gerbrand",
        medium: "Målningar",
      },
      { name: "Kyll Hellberg", medium: "Waldorfdockor, änglar" },
      {
        name: "Anna Karlsson",
        medium: "Botaniska tryck på tyg och papper samt fritt broderi",
      },
      {
        name: "Jon Gerbrand",
        medium: "Lampor, renoverat, återbruk och nytänk",
      },
      { name: "Sanne Vils", medium: "Silversmycken, waldorfdockor" },
      { name: "Dennis Persson", medium: "Bevingade skulpturer, målningar" },
    ],
    location: "https://goo.gl/maps/DJtN7XHNAKJxs4W58",
    icons: ["Guitar"],
  },
  {
    id: 21,
    name: "Källskärsudden, Båthusviken",
    coords: [2016, 1964, 2639, 2266],
    info: "Café med hembakat, korv med bröd. Lotteri och målarkurs",
    artists: [
      {
        name: "Ulrika Pålgård",
        medium: "Oljefärg, akvarell, blyerts, hantverk",
      },
      {
        name: "Vendela Pålgård Mattsson",
        medium: "Oljefärg, akvarell, blyerts, hantverk",
      },
      { name: "Carina Pålgård", medium: "Akryl, akvarell" },
      { name: "Jenny Dahlkar", medium: "Akryl, akvarell" },
    ],
    location: "https://maps.app.goo.gl/frb2i3S3CWYBop5w8",
    icons: ["Kaffekopp"],
  },
  {
    id: 22,
    name: "Örskärs fyrplats",
    coords: [702, 457, 1372, 747],
    linkInfo: (
      <>
        <span>
          Skärgårdslunch med café. Möjlighet att gå upp i fyrtornet. Mat bokas
          samtidigt med båtbokning. Fika behöver inte förbokas. Info finns på{" "}
        </span>
        <Link isExternal color="secondary" href="https://www.orskarsfyr.se">
          www.orskarsfyr.se!
        </Link>{" "}
      </>
    ),
    artists: [
      {
        name: "May-Britt Rolén",
        medium: "Broderier",
      },
      {
        name: "Anna Lindgren",
        medium: "Smycken",
      },
      {
        name: "Birgitta Irestedt",
        medium: "Fjärilsakvareller",
      },
    ],
    location: "https://maps.app.goo.gl/9CrioHwYwhj2T7ZeA",
    icons: ["Cutlery"],
  },
];
