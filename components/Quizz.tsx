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

const Timer = ({ step }: { step: number }) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, [step]);
  useEffect(() => {
    if (state) {
      setTimeout(() => setState(false), 9999);
    }
  }, [state]);
  return (
    <div className={`h-1 mb-8 ${!state && "bg-[#c6a346]"}`}>
      <Transition
        show={state}
        // appear
        unmount={false}
        enter="transform transition-width ease-linear duration-[9999ms]"
        enterFrom="w-0"
        enterTo="w-full"
        leave="w-full"
      >
        <div className="h-1 bg-[#c6a346]"></div>
      </Transition>
    </div>
  );
};

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
  const [{ data: responseData }, refetch] = useSelect("quizz", {
    filter,
    pause: !user
  });
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
        <div className="w-full">
          <div className="text-center text-xl mb-3">
            {step + 1} - {questions[step].question}
          </div>
          <div>
            <Timer step={step} />
          </div>
          <div className="grid grid-cols-1 gap-5 px-3 w-full">
            {questions[step].reponses.map((response, i) => (
              <label
                className={`${
                  Number(responseData?.response) === i ? "scale-[1.05]" : ""
                } bg-[#c6a346] rounded-md px-4 py-2 text-white`}
                key={response}
              >
                <input
                  className="hidden"
                  type="radio"
                  name="value"
                  value={i}
                  checked={Number(responseData?.response) === i}
                  onChange={async (e) => {
                    if (responseData) {
                      await update(
                        {
                          response: e.target.value,
                        },
                        (query) => query.eq("id", responseData.id)
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
      {start && !questions[step] && <div>finish</div>}
    </>
  );
};
