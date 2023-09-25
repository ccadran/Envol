import React from "react";
import NavigationParents from "../../components/parents/NavigationParents";
import H2HeroText from "../../components/parents/H2HeroText";
import ParentsContent from "../../components/parents/menus&events/ParentsContent";
import FooterParents from "components/parents/FooterParents";
import { Helmet } from "react-helmet";

const Menus = () => {
  return (
    <>
      <Helmet>
        <title>Menus - Parents</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationParents />
      <main>
        <H2HeroText
          h2="Les menus de vos enfants"
          text="Le menu mensuel proposé par notre traiteur partenaire spécialisé pour enfants : «Papilles de petits» . Découvrez les repas préparés pour vos enfants au quotidien."
        />
        <ParentsContent section="menus" />
      </main>
      <FooterParents />
    </>
  );
};

export default Menus;
