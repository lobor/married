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
          bonheur avec toi. C’est pour ça que nous préparons un mariage de rêve
          qui marquera les esprits de tous et au cours duquel tu t&apos;amuseras
          comme un fou.
        </div>
        <div className="mb-5">
          En attendant le grand jour, nous avons créé ce site composé de
          diverses sections afin de te tenir au courant de l’avancée du mariage
          et partager notre histoire.
        </div>
        <div className="mb-10">Bonne lecture et à très bientôt !</div>
      </main>
    </>
  );
};

export default Home;
