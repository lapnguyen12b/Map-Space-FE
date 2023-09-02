import Link from "next/link";
import React from "react";
import { Text } from "src/components";
import {
  FOOTER_NAVIGATION,
  FOOTER_POPULAR_BLOGS,
} from "src/constants/fakeData";

export const FooterNavigation = () => {
  return (
    <div className="grid grid-cols-3 px-4 py-8">
      <section>
        <Text as="h3" className="font-semibold">
          Connect with us
        </Text>
      </section>
      <section>
        <Text as="h3" className="font-semibold">
          Navigation
        </Text>
        <br />
        <ul className="grid grid-cols-1 gap-5">
          {FOOTER_NAVIGATION.map((navigation) => (
            <li key={`footer-blog-${navigation.title}`}>
              <Link href={navigation.href}>
                <Text className="text-green-400 ">{navigation.title}</Text>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Text as="h3" className="font-semibold">
          Popular blog articles
        </Text>
        <br />
        <ul className="grid grid-cols-1 gap-5">
          {FOOTER_POPULAR_BLOGS.map((blog) => (
            <li key={`footer-blog-${blog.title}`}>
              <Link href={blog.href}>
                <Text className="text-green-400 underline">{blog.title}</Text>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
