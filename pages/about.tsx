import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useTitle } from "../providers/title";

const Home: NextPage = () => {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("Qui somme nous ?");
  }, []);
  return (
    <>
      <Head>
        <title>{"Mariage d'Orphée et Lionel"}</title>
        <meta name="description" content="Mariage d'Orphée et Lionel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center px-4">
        <div className="">
          <div className="bg-[url('/elle.JPG')] h-[10rem] bg-no-repeat bg-contain bg-center" />
          <h2 className="font-['MoonTime'] text-[3rem] text-[#c6a346] mb-5">
            Elle
          </h2>
          <div className="px-5">
            Son leitmotiv, être comme une bouteille de champagne, pétillante et
            explosive.
            <br />
            Sa passion du voyage est aussi forte que celle du farniente dans le
            lit.
            <br />
            Sa phrase fétiche ? Dire &quot;tu es beau&quot; sans lunette alors
            qu&apos;elle ne voit pas à 10 cm.
          </div>
          <div className="h-[1px] bg-[#c6a346] my-10 mx-2" />
          <div className="bg-[url('/lui.JPG')] h-[10rem] bg-no-repeat bg-contain bg-center" />
          <h2 className="font-['MoonTime'] text-[3rem] text-[#c6a346] mb-5">
            Lui
          </h2>
          <div className="px-5">
            Petit, il se surnommait &quot;Yoyo roi beau lion fort&quot;. Puis en
            grandissant il a gardé yoyo pour les intimes. Souvent dans sa bulle,
            c’est un passionné de jeux vidéo, de développement et tout ce qui
            touche à un ordinateur. S’il le pouvait, il inscrirait ses ordinateurs sur
            son livret de famille, en plus de ses enfants.
            Attention, ne vous y trompez pas il adore faire la fête (sinon ce ne
            serait pas un gémeaux). Jack est son ami, celui de la famille Daniel’s. 
            Par-dessus tout il aime être entouré, recevoir, faire un
            bon barbecue et discuter autour du feu pendant des heures. Je
            l’appelle « mon cœur »
          </div>
          <div className="h-[1px] bg-[#c6a346] my-10 mx-2" />
          <div className="bg-[url('/enfants.JPG')] h-[10rem] bg-no-repeat bg-contain bg-center" />
          <h2 className="font-['MoonTime'] text-[3rem] text-[#c6a346] mb-5">
            Nos enfants
          </h2>
          <div className="px-5 mb-10">
            Entre la première qui pense aux prochaines vacances dès le premier
            jour de la rentrée, le deuxieme qui partage son temps entre
            minecraft et regarder des vidéos de Furious Jumper, et la dernière
            qui est la définition même d&apos;une pile électrique, la maison est
            toujours en effervescence tel un doliprane se désagrégeant dans son
            verre. Tiens je dois en racheter d&apos;ailleurs, on a vidé le
            stock...
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
