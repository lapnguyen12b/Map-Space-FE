import React from "react";
import { ClassName } from "src/types";
import { cn } from "src/utils";
import { Text } from "..";
import Link from "next/link";

type RentingParkingPlaceProps = ClassName;

export const RentingParkingPlace = ({
  className,
}: RentingParkingPlaceProps) => {
  return (
    <div className={cn(className)}>
      <Text variant="h3" className="font-bold">
        Do you have an unused garage, driveway or car space?
      </Text>
      <br />
      <Text>
        By renting it out to people working or living in Sydney, you can make
        around $350/month of hands-off extra income.
        <br />
        <br />
        It’s free to list and takes less than 10 minutes! Plus you’re protected
        by our payment guarantee!
      </Text>
      <br />
      <div className="grid place-items-center">
        <Link
          href={"https://www.parkhound.com.au/how-it-works-for-hosts"}
          target="_blank"
          className="bg-green-400 text-white py-3 px-24 rounded hover:bg-green-500 transition-colors duration-150 ease-in"
        >
          <Text className="font-semibold">
            Find out what your space is worth
          </Text>
        </Link>
      </div>
    </div>
  );
};
