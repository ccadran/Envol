import NavigationAdmin from "components/admin/NavigationAdmin";
import React from "react";
import chevron from "assets/logos/chevron.svg";
import FormNewMail from "components/admin/Mail/FormNewMail";
import { Link } from "react-router-dom";
import "styles/admin/Mail/_newMail.scss";
import { Helmet } from "react-helmet";

const NewMailParent = () => {
  return (
    <>
      <Helmet>
        <title>Nouvel email - ADMIN</title>
        <meta name="description" content="Description de Ma Page" />
      </Helmet>
      <NavigationAdmin />
      <main>
        <div className="back">
          <Link to="/admin/mails">
            <img src={chevron} alt="" />
            Retour
          </Link>
        </div>
        <div className="intro">
          <h4>Ajouter un mail</h4>
          <p>
            LES MAILS SERVENT A CREER UN COMPTE PARENT Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quae amet ipsa explicabo
            architecto qui reiciendis, fugiat dolores vero voluptas porro
            dignissimos consequuntur non saepe facilis ea. Reiciendis cupiditate
            distinctio unde.
          </p>
        </div>
        <FormNewMail />
      </main>
    </>
  );
};

export default NewMailParent;
