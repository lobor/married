import { Transition } from "@headlessui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRealtime, useUpdate } from "react-supabase";
import { Button } from "../../components/Button";
import { LayoutAdmin } from "../../components/LayoutAdmin";
import { Quizz } from "../../components/Quizz";
import { useTitle } from "../../providers/title";
import { questions } from "../../utils/questions";

const Home: NextPage = () => {
  const { setTitle } = useTitle();
  const [{ data }, refetch] = useRealtime("state");
  const [{}, execute] = useUpdate("state");
  const state = useMemo(() => {
    return data && data[0];
  }, [data]);
  const start = useMemo(() => {
    return state?.quizz;
  }, [state]);
  const step = useMemo(() => {
    return Number(state?.quizz_step);
  }, [state]);

  const next = async () => {
    await execute({ quizz_step: step + 1 }, (query) =>
      query.eq("id", state.id)
    );
    refetch();
  };
  const prev = async () => {
    await execute({ quizz_step: step - 1 }, (query) =>
      query.eq("id", state.id)
    );
    refetch();
  };

  useEffect(() => {
    setTitle("Admin quizz");
  }, []);

  return (
    <LayoutAdmin>
      {!start && (
        <div className="flex justify-center">
          <Button
            onClick={() =>
              execute({ quizz: true }, (query) => query.eq("id", state.id))
            }
          >
            start
          </Button>
        </div>
      )}
      {state && state.quizz && (
        <div className="w-full">
          {step < questions.length && (
            <div className="flex row justify-between mb-10 px-5">
              <Button onClick={prev} disabled={step === 0}>
                {"<"} Précédent
              </Button>
              <Button onClick={next} disabled={step === questions.length}>
                Suivant {">"}
              </Button>
            </div>
          )}
          <Quizz data={state} />
        </div>
      )}
    </LayoutAdmin>
  );
};

export default Home;
