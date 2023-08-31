import Image from "next/image";
import Link from "next/link";
import { Text } from "src/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link
        href={{
          pathname: "/parking/hanoi",
        }}
      >
        <Text variant="h2" className="text-blue-600">
          to the city
        </Text>
      </Link>
    </main>
  );
}
