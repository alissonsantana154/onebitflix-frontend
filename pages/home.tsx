import NewestCategory from "../src/components/homeAuth/newestCategory";
import FeaturedSection from "../src/components/homeAuth/featuresSection";
import Head from "next/head";
import FavoriteCategory from "../src/components/homeAuth/favoriteCategory";
import FeaturedCategory from "../src/components/homeAuth/featuredCategory";
import ListCategories from "../src/components/homeAuth/listCategories";
import Footer from "../src/components/common/footer";

const HomeAuth = function () {
  return (
    <>
			<Head>
        <title>Onebitflix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection/>
        <NewestCategory/>
        <FavoriteCategory/>
        <FeaturedCategory/>
        <ListCategories/>
        <Footer/>
      </main>
    </>
  );
};

export default HomeAuth;