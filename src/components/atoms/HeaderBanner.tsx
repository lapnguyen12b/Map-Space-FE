import React from "react";
import { Text } from ".";

export const HeaderBanner = () => {
  return (
    <div className="bg-green-500 text-white h-8 flex items-center justify-center">
      <Text>
        🚗 &nbsp;<b>Save up to 50% off</b> parking. You&apos;re protected by our{" "}
        <b>Money Back Guarantee</b>&nbsp; 🅿
      </Text>
    </div>
  );
};
