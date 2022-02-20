import { Transition } from "@headlessui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRealtime, useUpdate } from "react-supabase";
import { Button } from "../../components/Button";
import { LayoutAdmin } from "../../components/LayoutAdmin";
import { Quizz } from "../../components/Quizz";
import { questions } from "../../utils/questions";

const Home: NextPage = () => {
  const [{ data }, refetch] = useRealtime("state");
  const [{}, execute] = useUpdate("state");
  const state = useMemo(() => {
    return data && data[0];
  }, [data])
  const start = useMemo(() => {
    return state?.quizz;
  }, [state]);
  const step = useMemo(() => {
    return Number(state?.quizz_step);
  }, [state]);

  useEffect(() => {
    if (start && state && step <= questions.length) {
      const timer = setTimeout(async () => {
        await execute({ quizz_step: step + 1 }, (query) =>
          query.eq("id", state.id)
        );
        refetch();
      }, 10000);
      return () => {
        clearTimeout(timer);
      }
    }
  }, [start, step, state]);

  return (
    <LayoutAdmin>
      <Head>
        <title>{"Mariage d'Orphée et Lionel"}</title>
        <meta name="description" content="Mariage d'Orphée et Lionel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br />
      <br />
      {!start && (
        <Button
          onClick={() =>
            execute({ quizz: true }, (query) => query.eq("id", state.id))
          }
        >
          start
        </Button>
      )}
      {state && <Quizz data={state} />}
    </LayoutAdmin>
  );
};

export default Home;
