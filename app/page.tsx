import AccountArea from "./components/home/accountArea";
import AppArea from "./components/home/appArea";
import BannerArea from "./components/home/bannerArea";
import BlogArea from "./components/home/blogArea";
import CategoryArea from "./components/home/categoryArea";
import CompaniesArea from "./components/home/companiesArea";
import JobArea from "./components/home/jobArea";
import PopularArea from "./components/home/popularArea";
import PortalArea from "./components/home/portalArea";
import ProfileArea from "./components/home/profileArea";

export default function Home() {
  return (
    <main className="">
      <BannerArea />
      <CategoryArea />
      <JobArea />
      <AccountArea />
      <PortalArea />
      <CompaniesArea />
      <PopularArea />
      <ProfileArea />
      <AppArea />
      {/* <BlogArea /> */}
    </main>
  );
}
