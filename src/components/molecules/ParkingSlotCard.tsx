import Image from "next/image";
import React from "react";
import { Text } from "../atoms/Text";
import { TextWithLeftIcon } from "../atoms/TextWithLeftIcon";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { Button } from "../atoms/Button";

const IMAGE_URL = "https://picsum.photos/id/237/100/100";

export const ParkingSlotCard = () => {
  return (
    <div className="grid grid-rows-[100px_26px] overflow-hidden rounded bg-white shadow hover:shadow-2xl">
      <div className="grid grid-cols-[100px_1fr] gap-4 border-b">
        <Image src={IMAGE_URL} width={100} height={100} alt="" />

        <div className="grid grid-cols-[1fr_70px] ">
          <div className="flex flex-col justify-between py-2">
            <div>
              <Text className="font-semibold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                dolore!
              </Text>
              <Text>Lorem, ipsum dolor.</Text>
            </div>
            <div className="flex items-center justify-between">
              <TextWithLeftIcon
                icon={<BeakerIcon className="h-4 w-4 text-blue-500" />}
                text="aaa"
              />
              <TextWithLeftIcon
                icon={<BeakerIcon className="h-4 w-4 text-blue-500" />}
                text="aaa"
              />
              <TextWithLeftIcon
                icon={<BeakerIcon className="h-4 w-4 text-blue-500" />}
                text="aaa"
              />
            </div>
          </div>
          {/* footer */}
          <div className=" flex flex-col justify-between px-2 pb-2">
            <div>
              <div className="flex items-baseline">
                <sup className="text-xs font-semibold text-green-500">$</sup>
                <Text
                  variant="h2"
                  className="text-end font-semibold text-green-500"
                >
                  442
                </Text>
              </div>

              <Text className="text-end">/month</Text>
            </div>
            <Button className="rounded bg-green-500 py-1  ">
              <Text variant="h5" className="font-semibold text-white">
                Book
              </Text>
            </Button>
          </div>
        </div>
      </div>
      <ul className="flex items-center gap-2 px-2">
        {Array(3)
          .fill(1)
          .map((_, index) => (
            <React.Fragment key={index}>
              <li className="">
                <Text>aa</Text>
              </li>
              <span className="aspect-square w-[3px] rounded-full bg-slate-600 last:hidden" />
            </React.Fragment>
          ))}
      </ul>
    </div>
  );
};
