import Profile from "../assets/Images/Pairio.png";
import Footer from "../components/Footer";
import ExtLink from "../components/ExtLink";

const BioLinks = {
  mangaka: "https://en.wikipedia.org/wiki/Manga_artist",
  illustrator: "https://en.wikipedia.org/wiki/Illustrator",
  storyteller: "https://en.wikipedia.org/wiki/Storyteller",
  manga: "https://en.wikipedia.org/wiki/Manga",
  illustration: "https://en.wikipedia.org/wiki/Illustration",
  worldbuilding: "https://en.wikipedia.org/wiki/Worldbuilding",
  Psychology: "https://en.wikipedia.org/wiki/Psychology",
  Dark_fantasy: "https://en.wikipedia.org/wiki/Dark_fantasy",
  ICallHerMoonPostLink:
    "https://www.instagram.com/p/DUhqchsDGoS/?srtk=MThobXI1NG1qbGxweQ==",
  Cosmic: "https://en.wikipedia.org/wiki/Cosmic",
  sci_fi: "https://en.wikipedia.org/wiki/Science_fiction",
  Fantasy: "https://en.wikipedia.org/wiki/Fantasy",
  Pairio_insta: "https://www.instagram.com/pairioo/",
  Pairio_Youtube: "https://www.youtube.com/@pairioo",
};

function About() {
  return (
    <>
      <div className="MainPage">
        <div className="ProfileContainer">
          <p className="AboutBio">
            Pairio is an aspiring{" "}
            <ExtLink href={BioLinks.mangaka}>mangaka</ExtLink>,{" "}
            <ExtLink href={BioLinks.illustrator}>illustrator</ExtLink>, and{" "}
            <ExtLink href={BioLinks.storyteller}>storyteller</ExtLink> from
            India. His work spans <ExtLink href={BioLinks.manga}>manga</ExtLink>
            , <ExtLink href={BioLinks.illustration}>illustration</ExtLink>, and{" "}
            <ExtLink href={BioLinks.worldbuilding}>worldbuilding</ExtLink>, and
            he combines these skills to create original{" "}
            <ExtLink href={BioLinks.manga}>manga</ExtLink> and story-driven IPs
            — including his{" "}
            <ExtLink href={BioLinks.Psychology}>psychological</ExtLink>,{" "}
            <ExtLink href={BioLinks.Dark_fantasy}>dark-fantasy</ExtLink>{" "}
            one-shot{" "}
            <ExtLink href={BioLinks.ICallHerMoonPostLink}>
              I Call Her Moon
            </ExtLink>{" "}
            and the <ExtLink href={BioLinks.Cosmic}>cosmic</ExtLink>{" "}
            <ExtLink href={BioLinks.sci_fi}>sci-fi</ExtLink>/
            <ExtLink href={BioLinks.Fantasy}>fantasy</ExtLink> universe Anklet
            Archives. He is the founder of Wet Sponge, a creative studio and
            artist community built around the tagline "Squeezing out Art."
            Through his Ink Stone series documenting his{" "}
            <ExtLink href={BioLinks.manga}>manga</ExtLink> journey, he shares
            his process with an online audience across{" "}
            <ExtLink href={BioLinks.Pairio_insta}>Instagram</ExtLink> and{" "}
            <ExtLink href={BioLinks.Pairio_Youtube}>YouTube</ExtLink> as
            @pairioo. ["Pairio" means undefined love.]
          </p>
          <img src={Profile} className="AboutProfile"></img>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
