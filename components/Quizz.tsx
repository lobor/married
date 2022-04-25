import { Transition } from "@headlessui/react";
import { useEffect, useMemo, useState } from "react";
import {
  useFilter,
  useInsert,
  useRealtime,
  useSelect,
  useUpdate,
  useUpsert,
} from "react-supabase";
import { useUser } from "../providers/user";
import { questions } from "../utils/questions";
import { Button } from "./Button";
import { ResultQuizz } from "./ResultQuizz";

export const Quizz = ({ data }: { data: any }) => {
  const { user } = useUser();
  const filter = useFilter(
    (query) =>
      query
        .eq("user_id", user?.id)
        .eq("question", data.quizz_step)
        .single() as any,
    [user && user.id, data.quizz_step]
  );
  const [{ data: responseData }, refetch] = useSelect<Record<string, any>>(
    "quizz",
    {
      filter,
      pause: !user,
    }
  );
  const [, insert] = useInsert("quizz");
  const [, update] = useUpdate("quizz");
  const start = useMemo(() => {
    return data.quizz;
  }, [data]);
  const step = useMemo(() => {
    return Number(data.quizz_step);
  }, [data]);
  return (
    <>
      {start && questions[step] && (
        <div className="w-full px-10">
          <div className="text-center text-xl mb-10">
            {step + 1}/{questions.length}
            <br />
            {questions[step].question}
          </div>
          <div className="grid grid-cols-1 gap-5 px-3 w-full">
            {questions[step].reponses.map((response, i) => (
              <label
                className={`${
                  Number((responseData as any)?.response) === i
                    ? "scale-[1.05]"
                    : "opacity-70"
                } bg-[#c6a346] rounded-md px-4 py-2 text-white text-center`}
                key={response}
              >
                <input
                  className="hidden"
                  type="radio"
                  name="value"
                  value={i}
                  checked={Number((responseData as any)?.response) === i}
                  onChange={async (e) => {
                    if (responseData) {
                      await update(
                        {
                          response: e.target.value,
                        },
                        (query) => query.eq("id", (responseData as any).id)
                      );
                    } else {
                      await insert({
                        user_id: user?.id,
                        response: e.target.value,
                        question: step,
                      });
                    }
                    refetch();
                  }}
                />
                {response}
              </label>
            ))}
          </div>
        </div>
      )}
      {start && !questions[step] && <ResultQuizz />}
    </>
  );
};
