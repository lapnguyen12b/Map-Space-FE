import React from "react";
import { Text } from "..";
import Image from "next/image";
import { cn } from "src/utils";
import { ClassName } from "src/types";

type IntroProps = ClassName;

export const Intro = ({ className }: IntroProps) => {
  const classNameMerge = cn(className);
  return (
    <div className={classNameMerge}>
      <Text as="h3" variant="h3" className="font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, minima.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
        exercitationem dolorum. Illum tenetur nam aperiam ea explicabo. Est
        natus cupiditate, dolore a recusandae laudantium cum qui quae! Fuga,
        veritatis adipisci.
        <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores,
        praesentium voluptate dicta nulla, autem aspernatur unde sapiente
        ratione blanditiis aut libero iusto, repudiandae harum corrupti dolorem?
        Ipsa fuga voluptatum fugit? Lorem, ipsum dolor sit amet consectetur
        adipisicing elit.
        <br />
        <br />
        Maxime delectus, tenetur dicta molestias aliquam reiciendis fuga odio?
        Architecto eius suscipit, odit tempora eveniet nihil vero rem ducimus
        dolorem. Officia, iusto?
      </Text>

      <div className="border border-zinc-500 bg-gradient-to-r from-green-100 to-green-300 grid grid-cols-[auto_1fr] gap-5">
        <Image
          src={"https://picsum.photos/id/247/80/80"}
          width={80}
          height={80}
          alt=""
          className="rounded-full"
        />
        <div className="flex flex-col justify-center">
          <Text variant="h3" className="font-medium">
            You&apos;re always protected with our Money Back Guarantee
          </Text>
          <Text>
            Did you know that all Parkhound Drivers are protected by our money
            back guarantee? If the space isn&apos;t right for you, we&apos;ll
            refund your payment.
          </Text>
        </div>
      </div>
    </div>
  );
};
