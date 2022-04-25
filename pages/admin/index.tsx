import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { LayoutAdmin } from "../../components/LayoutAdmin";

const Home: NextPage = () => {
  return (
    <LayoutAdmin>
      <Head>
        <title>{"Mariage d'Orphée et Lionel"}</title>
        <meta name="description" content="Mariage d'Orphée et Lionel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/admin/quizz">
        <a>quizz</a>
      </Link>
    </LayoutAdmin>
  );
};

export default Home;
