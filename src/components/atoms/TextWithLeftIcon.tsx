import React from "react";
import { Text } from "./Text";

type TextWithLeftIconProps = {
  icon: React.ReactNode;
  text: string;
};

export const TextWithLeftIcon = ({ icon, text }: TextWithLeftIconProps) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <Text>{text}</Text>
    </div>
  );
};
