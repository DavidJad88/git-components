import { useState } from "react";
import accordionItemStyles from "./AccordionItem.module.css";

function AccordionItem({
  title,
  description,
  toggleIconOpen = "+",
  toggleIconClose = "-",
}) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleToggleAccordion = () => {
    setIsAccordionOpen((prev) => !prev);
  };
  return (
    <li className={accordionItemStyles.accordion}>
      <header
        className={`${accordionItemStyles.header} ${
          !isAccordionOpen && accordionItemStyles.borderRadiusBottom
        }`}
        onClick={handleToggleAccordion}
      >
        <h3 className={accordionItemStyles.title}>{title}</h3>
        <span className={accordionItemStyles.toggleIcon}>
          {isAccordionOpen ? toggleIconClose : toggleIconOpen}
        </span>
      </header>
      <div
        className={`${accordionItemStyles.descriptionWrapper} ${
          isAccordionOpen ? accordionItemStyles.open : ""
        }`}
      >
        <p className={accordionItemStyles.description}>{description}</p>
      </div>
    </li>
  );
}

export default AccordionItem;
