import React, { useEffect, useState } from "react";
import SectionFAQ from "./SectionFAQ";
import axios from "axios";

const ContentFAQ = ({ etablissement }) => {
  const [faqSections, setFaqSections] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/faqSection" + etablissement)
      .then((res) => {
        setFaqSections(res.data);
      });
  }, []);

  return (
    <>
      <section className="faq-content">
        {faqSections.map((faqSection) => (
          <SectionFAQ
            key={faqSection._id}
            faqSection={faqSection}
            etablissement={etablissement}
          />
        ))}
      </section>
    </>
  );
};

export default ContentFAQ;
