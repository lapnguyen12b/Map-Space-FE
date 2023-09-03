import Link from "next/link";
import React from "react";
import {
  SvgParkhound,
  SvgSpacer,
  SvgSpacerMini,
  SvgSpacerMini1,
  SvgWhereIPark,
  Text,
} from "src/components";
import { ClassName } from "src/types";
import { cn } from "src/utils";

type FooterSpacerProps = ClassName;

export const FooterSpacer = ({ className }: FooterSpacerProps) => {
  return (
    <div className={cn(className)}>
      <div className="w-1/2 mx-auto flex flex-col justify-center items-center gap-10 mt-8">
        <Text className="text-gray-500">
          Parkhound is a part of the Spacer Technologies Group
        </Text>

        <Link href={"https://www.spacertechnologies.co"}>
          <SvgSpacer />
        </Link>
        <div className="grid grid-cols-2 gap-4">
          <Link href={"https://www.spacertechnologies.co"}>
            <SvgParkhound />
          </Link>

          <Link href={"https://www.spacertechnologies.co"}>
            <SvgSpacerMini className="justify-self-center" />
          </Link>

          <Link href={"https://www.spacertechnologies.co"}>
            <SvgSpacerMini1 />
          </Link>

          <Link href={"https://www.spacertechnologies.co"}>
            <SvgWhereIPark />
          </Link>
        </div>
      </div>
    </div>
  );
};
