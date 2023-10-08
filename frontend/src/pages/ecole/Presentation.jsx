import React from "react";
import NavigationScolarity from "../../components/ecole-college/shared/NavigationScolarity";
import HeroScolarity from "../../components/ecole-college/shared/Presentation/HeroScolarity";
import VisionAndObjectifsScolarity from "../../components/ecole-college/shared/Presentation/VisionAndObjectifsScolarity";
import LocalScolarity from "../../components/ecole-college/shared/Presentation/LocalScolarity";
import ScheduleScolarity from "../../components/ecole-college/shared/Presentation/ScheduleScolarity";
import PedagogicTeam from "../../components/ecole-college/shared/Presentation/PedagogicTeam";
import SchoolRoad from "../../components/ecole-college/shared/SchoolRoad";
import FooterScolarity from "../../components/ecole-college/shared/FooterScolarity";
import AllAvis from "../../components/shared/AllAvis";
import "styles/ecole-college/Presentation/_presentation.scss";
import { Helmet } from "react-helmet";
//IMAGES
import imgHero from "assets/img/school-presentation.jpg";
import imgLocal1 from "assets/img/school-local1.jpg";
import imgLocal2 from "assets/img/school-local2.jpg";
import imgLocal3 from "assets/img/school-local3.jpg";
import imgLocal4 from "assets/img/school-local4.jpg";
import imgLocal5 from "assets/img/school-local5.jpg";

const Presentation = () => {
  const imagesArray = {
    imgLocal1,
    imgLocal2,
    imgLocal3,
    imgLocal4,
    imgLocal5,
  };

  const imagesLocaux = [];

  for (let i = 1; i <= Object.keys(imagesArray).length; i++) {
    const imageKey = `imgLocal${i}`;
    imagesLocaux.push({ src: imagesArray[imageKey] });
  }
  const visionPoints = [
    "Nous souhaitons que les enfants grandissent et apprennent en développant des valeurs de respect (de soi, des autres, du matériel), d’autonomie, de confiance en soi, de créativité…, le tout dans un cadre bienveillant et sécurisant.",
  ];
  const objectifPoints = [
    "Que chacque enfant apprenne à son rythme, sans comparaison ni jugement",
    "Qu'il s’épanouisse, tant sur le plan émotionnel que social",
    "Qu'il découvre la vie en collectivité et le travail collaboratif",
  ];
  return (
    <>
      <Helmet>
        <title>École Montessori Bordeaux - Présentation</title>
        <meta
          name="description"
          content="Découvrez L'Envol des Papillons, une école Montessori fondée à Bordeaux en 2012, offrant une éducation bienveillante et individualisée à un tarif abordable. Éveillez la passion d'apprendre de votre enfant dès aujourd'hui."
        />
      </Helmet>
      <NavigationScolarity etablissement="ecole" />
      <main>
        <HeroScolarity
          h1="École"
          img={imgHero}
          color="orange"
          etablissement="ecole"
        />
        <VisionAndObjectifsScolarity
          vision={visionPoints}
          objectif={objectifPoints}
        />
        <LocalScolarity
          text="Description du local de l'école blablabfdjsbgfvcjdsnvc jdsfjcdshkfcdsnfcv dujfhcgdsichns"
          images={imagesLocaux}
        />
        <ScheduleScolarity textIntro="text intro du calendrier de l'école " />
        <PedagogicTeam
          text="Découvrez l'ensemble des profesionnels qui sont là pour votre enfant au quotidien et font vivre les valeurs de l'école."
          etablissement="école"
        />
        <AllAvis etablissement="école" />
        <SchoolRoad text="L’école est située dans le quartier des Chartrons à Bordeaux (125 cours Journu Auber), à 15’ du centre de Bordeaux, facilement accessible en tram (ligne C – Arrêt Grand Parc) ou en bus (liane 5)." />
      </main>
      <FooterScolarity etablissement="ecole" />
    </>
  );
};

export default Presentation;
