import React from "react";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore  } from "react-icons/md";

const Faq = () => {
  return (
    <section className="transition-all duration-700">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page " />
      <div
        className="[&_.css-yw020d-MuiAccordionSummary-expandIconWrapper]:dark:!text-white 
      [&_.MuiPaper-root]:dark:bg-slate-800"
      >
        <Accordion defaultExpanded className="dark:!text-white">
          <AccordionSummary expandIcon={<MdExpandMore  />}>
            <h5 className="text-green-700" variant="h5">An Important Question</h5>
          </AccordionSummary>
          <AccordionDetails>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </h6>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded className="dark:!text-white">
          <AccordionSummary expandIcon={<MdExpandMore  />}>
            <h5 className="text-green-700" variant="h5">Another Important Question</h5>
          </AccordionSummary>
          <AccordionDetails>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </h6>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded className="dark:!text-white">
          <AccordionSummary expandIcon={<MdExpandMore  />}>
            <h5 className="text-green-700" variant="h5">Your Favorite Question</h5>
          </AccordionSummary>
          <AccordionDetails>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </h6>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded className="dark:!text-white">
          <AccordionSummary expandIcon={<MdExpandMore  />}>
            <h5 className="text-green-700" variant="h5">Some Random Question</h5>
          </AccordionSummary>
          <AccordionDetails>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </h6>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded className="dark:!text-white">
          <AccordionSummary expandIcon={<MdExpandMore  />}>
            <h5 className="text-green-700" variant="h5">The Final Question</h5>
          </AccordionSummary>
          <AccordionDetails>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </h6>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
