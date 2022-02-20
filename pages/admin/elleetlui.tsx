import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { LayoutAdmin } from "../../components/LayoutAdmin";

const questions = [
  {
    question: "Combien d'enfants ont-ils chacun ?",
    reponses: ["1", "2", "3"],
  },
  {
    question: "Ou sont-il allés pour leur premier rendez-vous ?",
    reponses: [],
  },
  {
    question: "Comment on s'est rencontré",
    reponses: [],
  },
  {
    question: "On aurait pu se rencontrer ailleurs",
    reponses: [],
  },
  {
    question: "Le premier pays que nous ayons fait ensemble ?",
    reponses: [],
  },
  {
    question: "Comment il a fait sa demande en mariage ?",
    reponses: [],
  },
  {
    question: "(elle) Quel est sa boisson preféré ?",
    reponses: [],
  },
  {
    question: "Combien d'animaux ont-ils ?",
    reponses: [],
  },
  {
    question: "Combien de fois ont-ils fait des travaux dans leur maison ?",
    reponses: [],
  },
  {
    question: "En quelle année ont-ils acheté leur maison ?",
    reponses: [],
  },
  {
    question: "(Lui) Quel était sa voiture lorsqu'ils se sont rencontrés ?",
    reponses: [],
  },
  {
    question: "Combien de fois ont-ils déménagés ensemble ?",
    reponses: [],
  },
  {
    question: "Quel type de dans a-t-il pratiqué ?",
    reponses: [],
  },
  {
    question: "Quel est not chanson ?",
    reponses: [],
  },
  {
    question: "Où est-elle née ?",
    reponses: [],
  },
  {
    question: "(Elle) Quel est son plaisir coupable ?",
    reponses: [],
  },
  {
    question: "Qui se lève tôt ?",
    reponses: ["Lui", "Elle"],
  },
  {
    question: "Prochaine destination de vacance en famille",
    reponses: ["Lui", "Elle"],
  },
  {
    question: "Quel plat cuisine-t-il le mieux ?",
    reponses: ["Lui", "Elle"],
  },
  {
    question: "(Elle) Quel est son plat préféré ?",
    reponses: ["Lui", "Elle"],
  },
];

const Home: NextPage = () => {
  const [start, setStart] = useState(false);
  const [step, setStep] = useState(0);
  return (
    <LayoutAdmin>
      <Head>
        <title>{"Mariage d'Orphée et Lionel"}</title>
        <meta name="description" content="Mariage d'Orphée et Lionel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      admin elle et lui
      {!start && <button onClick={() => setStart(true)}>start</button>}
      {start && <div>{questions[step].question}</div>}
    </LayoutAdmin>
  );
};

export default Home;
