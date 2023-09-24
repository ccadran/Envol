import React from "react";
import NavigationScolarity from "../../components/ecole-college/shared/NavigationScolarity";
import HeroPedagogie from "../../components/ecole-college/shared/Pedagogie/HeroPedagogie";
import Materials from "../../components/ecole-college/shared/Pedagogie/Materials";
import ClassesSchoolPedagogie from "../../components/ecole-college/ClassesSchoolPedagogie";
import EnglishPedagogie from "../../components/ecole-college/shared/Pedagogie/EnglishPedagogie";
import AvantagePedagogie from "../../components/ecole-college/shared/Pedagogie/AvantagePedagogie";
import FooterScolarity from "../../components/ecole-college/shared/FooterScolarity";
import AvantagesPedagogie from "../../components/ecole-college/shared/Pedagogie/AvantagesPedagogie";
import "styles/ecole-college/Pedagogie/_pedagogie.scss";
import { Helmet } from "react-helmet";
import imgPedagogie from "assets/img/school-pedagogie.jpg";
import imgAnglais from "assets/img/school-anglais.jpg";
import imgMaterial1 from "assets/img/school-materials1.jpg";
import imgMaterial2 from "assets/img/school-materials2.jpg";
import imgMaterial3 from "assets/img/school-materials3.jpg";
import imgMaterial4 from "assets/img/school-materials4.jpg";
import imgMaterial5 from "assets/img/school-materials5.jpg";
import imgMaterial6 from "assets/img/school-materials6.jpg";
import imgMaterial7 from "assets/img/school-materials7.jpg";

const Pedagogie = () => {
  const imagesArray = {
    imgMaterial1,
    imgMaterial2,
    imgMaterial3,
    imgMaterial4,
    imgMaterial5,
    imgMaterial6,
    imgMaterial7,
  };

  const imagesMaterials = [];

  for (let i = 1; i <= Object.keys(imagesArray).length; i++) {
    const imageKey = `imgMaterial${i}`;
    imagesMaterials.push({ src: imagesArray[imageKey] });
  }

  return (
    <>
      <Helmet>
        <title> Pédagogie - École montessori Bordeaux</title>
        <meta
          name="description"
          content="L'école Montessori L'envol des papillons vous propose de découvrir sa pédagogie grâce à laquelle nous cultivons la curiosité naturelle de chaque enfant pour un apprentissage épanouissant et durable. "
        />
      </Helmet>
      <NavigationScolarity etablissement="ecole" />
      <main>
        <HeroPedagogie
          h1="Notre pédagogie"
          title="Une pédagogie à l'écoute de l'enfant"
          text="L’école L’envol des papillons est une école alternative fonctionnant principalement avec la pédagogie de Maria Montessori, tout particulièrement en maternelle. En élémentaire, nous utilisons également d’autres méthodes, qui nous permettent de correspondre au mieux aux différents profils d’enfants. 
          
L’écoute, l’harmonie, la créativité et la confiance en soi… l’adaptation aux besoins fondamentaux des enfants sont au cœur de notre projet, tout cela dans le respect du socle commun de l’Education Nationale.
"
          image={imgPedagogie}
        />
        <Materials
          text="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 

Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 

Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
          images={imagesMaterials}
        />
        <ClassesSchoolPedagogie />
        <EnglishPedagogie
          text="L’anglais est pratiqué deux demi-journées par semaine, avec une personne ne parlant qu’en anglais aux enfants, offrant ainsi une immersion importante.
          
          Le matériel utilisé pour développer le vocabulaire des enfants est laissé à leur disposition, leur permettant de retravailler ce qui a été vu.
          "
          image={imgAnglais}
        />
        <AvantagesPedagogie />
      </main>
      <FooterScolarity etablissement="ecole" />
    </>
  );
};

export default Pedagogie;
