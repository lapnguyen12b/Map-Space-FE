"use client";

import React from "react";
import { Text } from "..";
import { TextInput } from "flowbite-react";
import { Button } from "../atoms/Button";

type NotifyCardProps = {
  city: string;
};

const NotifyCard = (props: NotifyCardProps) => {
  const { city } = props;
  return (
    <div className="bg-zinc-800 rounded text-white p-5 flex flex-col gap-2">
      <Text className="font-semibold">
        Be the FIRST to know about new listings in {city}
      </Text>
      <Text variant="h5">
        Get notified about new spaces and snap them up before anyone else.
      </Text>
      <form className="grid grid-cols-[1fr_auto] gap-3 auto-rows-auto">
        <div>
          <TextInput placeholder="Email" required type="email" />
        </div>
        <Button className="bg-green-500 rounded-xl  px-6" type="submit">
          <Text variant="h5">Notify me</Text>
        </Button>
      </form>
    </div>
  );
};

export default NotifyCard;
