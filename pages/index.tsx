import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nous from "../public/nous_rounded.png";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Mariage d'Orphée et Lionel"}</title>
        <meta name="description" content="Mariage d'Orphée et Lionel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <div className="">
          <Image {...Nous} />
        </div>
        <div className="h-[1px] bg-[#c6a346] my-2 mx-2 mb-4" />
        <div className="">
          <div className="bg-[url('/elle.JPG')] h-[10rem] bg-no-repeat bg-contain bg-center" />
          <h2 className="font-['MoonTime'] text-[3rem] text-[#c6a346]">Elle</h2>
          <div>
            Son leitmotiv, être comme une bouteille de champagne, pétillante et
            explosive.
            <br />
            Sa passion du voyage est aussi forte que celle du farniente dans le
            lit.
            <br />
            Sa phrase fétiche ? Dire &quot;tu es beau&quot; sans lunette alors qu&apos;elle ne
            voit pas à 10 cm.
          </div>
          <div className="h-[1px] bg-[#c6a346] my-2 mx-2" />
          <div className="bg-[url('/lui.JPG')] h-[10rem] bg-no-repeat bg-contain bg-center" />
          <h2 className="font-['MoonTime'] text-[3rem] text-[#c6a346]">Lui</h2>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </div>
          <div className="h-[1px] bg-[#c6a346] my-2 mx-2" />
          <div className="bg-[url('/enfants.JPG')] h-[10rem] bg-no-repeat bg-contain bg-center" />
          <h2 className="font-['MoonTime'] text-[3rem] text-[#c6a346]">
            Nos enfants
          </h2>
          <div>
            Entre la première qui pense aux prochaines vacances dès le premier
            jour de la rentrée, le deuxieme qui partage son temps entre
            minecraft et regarder des vidéos de Furious Jumper, et la dernière
            qui est la définition même d&apos;une pile électrique, la maison est
            toujours en effervescence tel un doliprane se désagrégeant dans son verre.
            Tiens je dois en racheter d&apos;ailleurs, on a vidé le stock...
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
