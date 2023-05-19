import NewestCategory from "../src/components/homeAuth/newestCategory";
import FeaturedSection from "../src/components/homeAuth/featuresSection";
import Head from "next/head";

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
      </main>
    </>
  );
};

export default HomeAuth;