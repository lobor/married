import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useTitle } from "../providers/title";
import Nous from "../public/nous_rounded.png";

const Home: NextPage = () => {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("Bienvenue");
  }, []);
  return (
    <>
      <main className="text-center px-10">
        <div className="bg-[url('/nous.jpg')] h-[10rem] bg-no-repeat bg-cover bg-pos bg-[center_top_-21px] mb-10" />
        <div className="text-xl mb-10">Bienvenue à notre mariage</div>
        <div className="mb-5">
          Nous sommes sur un petit nuage et nous souhaitons partager tout ce
          bonheur avec toi.
        </div>
        <div className="mb-5">
          Pour ce grand jour, nous avons créé ce site composé de
          diverses sections afin de te partager notre histoire et rendre celui-ci &quot;high-tech&quot;.
        </div>
        <div className="mb-10">Bonne lecture et amuse toi !</div>
      </main>
    </>
  );
};

export default Home;
