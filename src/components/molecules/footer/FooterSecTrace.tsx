import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Text } from "src/components";
import { ClassName } from "src/types";
import { cn } from "src/utils";

type FooterSecTraceProps = ClassName;

export const FooterSecTrace = ({ className }: FooterSecTraceProps) => {
  return (
    <div className={cn("footer-trace", className)}>
      <div className="flex items-center h-full gap-8 pl-8">
        <Image
          src="https://picsum.photos/id/104/200/80.webp"
          width={200}
          height={80}
          alt=""
          className="rounded-xl"
        />
        <Link href={"/"}>
          <Text variant="h2" className="text-white underline">
            Parkhound is 100% Carbon Neutral <br /> by partnering with Trace.
          </Text>
        </Link>
      </div>
    </div>
  );
};
