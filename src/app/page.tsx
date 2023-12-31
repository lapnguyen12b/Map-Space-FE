import {
  HomeAboutUs,
  HomeBanner,
  HomeBetterParking,
  HomeMapBanner,
  HomeParkingByCity,
  HomeParkingRentCalculator,
} from 'src/components';

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
