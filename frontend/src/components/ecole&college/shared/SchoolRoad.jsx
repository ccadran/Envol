import React from "react";
import "styles/ecole&college/shared/_schoolRoad.scss";

const SchoolRoad = ({ text }) => {
  return (
    <section className="school-way">
      <h3>Se rendre à l'école</h3>
      <p>{text}</p>
      <div className="school-road">
        <iframe
          width="100%"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=122%20cours%20journu%20auber+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
};

export default SchoolRoad;
