import {
  HomeAboutUs,
  HomeBanner,
  HomeBetterParking,
  HomeParkingByCity,
  HomeParkingRentCalculator,
} from 'src/components';
import { HomeMapBanner } from 'src/components/organisms/HomeMapBanner';

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeParkingByCity />
      <HomeMapBanner />
      <HomeBetterParking />
      <HomeParkingRentCalculator />
      <HomeAboutUs />
    </>
  );
}
