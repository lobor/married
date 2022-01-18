import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"Mariage d'Orphée et Lionel"}</title>
        <meta name="description" content="Mariage d'Orphée et Lionel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center before:block before:absolute before:bg-right-bottom before:rotate-180 before:-inset-1 before:-skew-y-3 before:bg-[url('/flower.png')] before:bg-no-repeat">
        <h1 className="text-[#c6a346] font-['MoonTime'] text-[10rem] relative z-50 leading-[9rem] mt-24">Orphee et Lionel</h1>
        <section className="border border-[#c6a346] text-[#c6a346] text-[5rem] relative z-50">
          le 27 mai 2022
        </section>
      </main>
    </div>
  );
};

export default Home;
