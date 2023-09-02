import React from "react";
import { ClassName } from "src/types";
import { cn } from "src/utils";
import { Text } from "..";
import { AccordionQuestions } from "../molecules";

type CommonQuestionsProps = ClassName & {
  city: string;
};

export const CommonQuestions = ({ className, city }: CommonQuestionsProps) => {
  const classNameMerge = cn(className);
  return (
    <div className={classNameMerge}>
      <Text variant="h3" as="h3" className="font-bold">
        Common questions about parking in {city}
      </Text>

      <AccordionQuestions />
    </div>
  );
};
