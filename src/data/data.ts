import image1 from "@/public/story2.jpeg";
import image2 from "@/public/story4.jpeg";
import image3 from "@/public/story3.jpeg";
import image4 from "@/public/story1.jpeg";

export const projects = [
  {
    sequence: "Yksi",
    title: "Miksi valitsit tämän kirjan?",
    description:
      "Valitsin kirjan, koska kesäseikkailut ja ystävysteemat kiehtovat. Kuvitukset näyttivät värikkäiltä ja hauskilta, ja se herätti kiinnostukseni.",
    color: "#fde047", // Tailwind's indigo-700
    image: image1,
  },
  {
    sequence: "kaksi",
    title: "Päähahmot",
    description:
      "Kalevi, rohkea ja utelias poika, joka rakastaa luontoa ja arvoituksia, tekee yhteistyötä Ellin, kevytsydämisen ja nokkelan tytön, kanssa, kun he selvittävät isoisä Väinön, viisaan ja tarinoita kertovan miehen, salaisuuksia.",
    color: "#86efac", // Tailwind's blue-600
    image: image2,
  },
  {
    sequence: "Kolme",
    title: "Oma mielipide kirjasta",
    description:
      "Kirja on hauska ja jännittävä. Siinä on ystävyyttä ja rohkeutta. Ne ovat kivoja. Kuvat ovat hauskoja ja sopivat tarinaan. Juoni on nopea ja kiinnostava. Ainoa huono asia on, että haluan lukea lisää.",
    color: "#5eead4", // Tailwind's purple-600
    image: image3,
  },
  {
    sequence: "Sauna",
    title: "Kielenkäyttö ja haasteet",
    description:
      "Kirjan kieli on selkeä ja hauska. Dialogit ovat kivoja. Lukeminen on mukavaa. Isoisän tarinoissa on vanhoja suomalaisia sanoja. Ne ovat vaikeita. Tarvitsen sanakirjaa. Käytän älypuhelinta. Tarkistan sanoja ja tietoja.",
    color: "#7dd3fc", // Tailwind's purple-400
    image: image4,
  },
];
