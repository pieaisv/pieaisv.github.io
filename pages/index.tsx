import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Ambassadors from "./components/Ambassadors";
import Faq from "./components/Faq";
import Presentation from "./components/Presentation";
import Sponsors from "./components/Sponsors";
import UpcomingEvents from "./components/UpcomingEvents";

const Home: NextPage = (props) => {
  // @ts-ignore
  const DOMAIN = props?.host;

  const title = "Pie & AI: San Salvador";
  const description =
    "AI meetings hosted independently by DeepLearning.AI Event Ambassadors";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#FFB100" />
        <link rel="icon" href="/Pie & AI logo.png" type="image/png" />
        <meta property="og:url" content={DOMAIN} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={DOMAIN} />
        <meta name="twitter:creator" content="@pieaisv" />
        <meta name="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>
      <Presentation />
      <br />
      <br />
      <br />
      <br />
      {/* @ts-ignore */}
      <UpcomingEvents data={props.data} />
      <br />
      <br />
      <br />
      <br />
      <Sponsors />
      <br />
      <br />
      <br />
      <br />
      <Ambassadors />
      <Faq />
    </>
  );
};

export async function getServerSideProps({ req }: NextPageContext) {
  if (req) {
    const { NODE_ENV } = process.env;
    const host =
      NODE_ENV === "production"
        ? // @ts-ignore
          "https://" + req.headers.host
        : "http://" + req.headers.host;

    // Fetch data from external API
    const response = await fetch(host + "/api/event/get");
    const data = await response.json();

    return {
      props: { host, data },
    };
  }
}
export default Home;
