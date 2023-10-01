"use client";

import { Accordion, CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["accordion"] = {
  content: {
    base: "py-5 px-5 last:rounded-b-lg",
  },
  title: {
    base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500",
    flush: {
      off: "focus:ring-4 focus:ring-gray-200 ",
      on: "bg-transparent",
    },
    heading: "",
    open: {
      off: "",
      on: "text-red-500 bg-white ",
    },
  },
};

export const AccordionQuestions = () => {
  return (
    <Accordion collapseAll flush theme={customTheme}>
      <Accordion.Panel>
        <Accordion.Title>What is Flowbite?</Accordion.Title>
        <Accordion.Content>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          expedita dolor reiciendis omnis quos esse placeat id sunt enim.
          Repudiandae facilis rem corporis harum ad, voluptate adipisci nam vel
          beatae!
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          praesentium esse aliquid. Nobis exercitationem modi quo dolore
          voluptates? Aut maxime pariatur culpa excepturi, ex fugiat modi omnis
          mollitia explicabo quis!
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What are the differences between Flowbite and Tailwind UI?
        </Accordion.Title>
        <Accordion.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          eveniet, error unde hic iusto asperiores sequi sint. Sint
          exercitationem, perferendis tempora ipsum animi at facilis optio id
          adipisci, earum quam.
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};
