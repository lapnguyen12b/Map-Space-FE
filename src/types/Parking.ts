type ParkingByCityContent = {
  image: string;
  href: string;
  title: string;
  description: string;
};

type ParkingByCityNearby = Pick<ParkingByCityContent, "title" | "href">;

type FooterPopularBlog = ParkingByCityNearby;

export type { ParkingByCityContent, ParkingByCityNearby, FooterPopularBlog };
