import { Transition } from "@headlessui/react";
import { ChangeEventHandler, useEffect, useMemo, useState } from "react";
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

  const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const responseIndex = e.target.value;
    if (responseData) {
      const responses = ((responseData as any).response as string).split(",");
      const checked = e.target.checked;
      let response = responseIndex.toString();
      if (questions[step]?.multiple) {
        response = (
          checked && !responses.includes(responseIndex.toString())
            ? [...responses, responseIndex.toString()]
            : responses.filter((i) => i !== responseIndex.toString())
        ).join(",");
      }
      await update(
        {
          response,
        },
        (query) => query.eq("id", (responseData as any).id)
      );
    } else {
      await insert({
        user_id: user?.id,
        response: responseIndex.toString(),
        question: step,
      });
    }
    refetch();
  };

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
            {questions[step].reponses.map((response, i) => {
              const isChecked = (responseData as any)?.response
                .split(",")
                .includes(i.toString());
              return (
                <label
                  className={`${
                    isChecked ? "scale-[1.05]" : "opacity-70"
                  } bg-[#c6a346] rounded-md px-4 py-2 text-white text-center`}
                  key={`${step}- ${i}`}
                >
                  <input
                    className="hidden"
                    type={questions[step].multiple ? "checkbox" : "radio"}
                    name="value"
                    value={`${i}`}
                    checked={isChecked || false}
                    onChange={handleChange}
                  />
                  {response}
                </label>
              );
            })}
          </div>
        </div>
      )}
      {start && !questions[step] && <ResultQuizz />}
    </>
  );
};
