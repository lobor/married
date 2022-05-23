import { keyBy, uniqBy } from "lodash";
import { useMemo } from "react";
import {
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { useSelect } from "react-supabase";
import { useUser } from "../providers/user";
import { questions } from "../utils/questions";

export const ResultQuizz = () => {
  const { user } = useUser();
  const [{ data: responseData }, refetch] = useSelect("quizz", {});

  console.log("responseData", responseData);
  const responseOnUserByQuestion = useMemo<Record<string, any>>(() => {
    return keyBy(
      (responseData || []).filter(({ user_id }) => user_id === user?.id),
      "question"
    );
  }, [responseData, user]);
  return (
    <div className="px-5 pb-5">
      <div className="mb-10 text-center text-2xl">Résultats</div>
      <div>
        {questions.map((question, index) => {
          const responseUser =
            responseOnUserByQuestion[index]?.response.split(",") || [];
          console.log(index, responseUser, question.indexResponse);
          return (
            <div key={index} className="mb-10">
              <div className="mb-5 text-center">
                {index + 1}/{questions.length} - {question.question}
              </div>
              <div className="grid grid-cols-1 gap-5 px-3 w-full">
                {question.reponses.map((response, i) => {
                  const isResponseUser = responseUser.includes(i.toString());
                  const isGood =
                    isResponseUser && question.indexResponse.includes(i);
                  return (
                    <div
                      className={`${
                        question.indexResponse.includes(i)
                          ? "scale-[1.05]"
                          : "opacity-70"
                      } bg-[#c6a346] rounded-md px-4 py-2 text-white text-center relative`}
                      key={response}
                    >
                      {response}
                      {isResponseUser && (
                        <div className="absolute right-5 top-0 bottom-0 flex flex-col items-center justify-center text-2xl">
                          {isGood ? (
                            <AiOutlineCheckCircle className="text-green-500" />
                          ) : (
                            <AiOutlineCloseCircle className="text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
