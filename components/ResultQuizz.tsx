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

  const nbUser = (responseData && uniqBy(responseData, "user_id").length) || 0;
  console.log("responseData", responseData);
  const responseOnUserByQuestion = useMemo<any[]>(() => {
    return (responseData || []).filter(({ user_id }) => user_id === user?.id);
  }, [responseData, user]);
  const data = useMemo(() => {
    if (!responseData) {
      return [];
    }

    const responsesByQuestions = responseData.reduce((acc, toto) => {
      if (!acc[toto.question]) {
        acc[toto.question] = [];
      }
      acc[toto.question].push(toto);
      return acc;
    }, []);

    const averageResponse = questions.reduce<
      { abs: number; good: number; bad: number }[]
    >((acc, question, index) => {
      const responses = responsesByQuestions[index] as any[];

      if (responses) {
        const nbUserResponse = uniqBy(responses, "user_id").length;
        acc.push({
          abs: nbUser - nbUserResponse,
          good: responses.filter(
            ({ response: resIndex }) => resIndex === question.indexResponse
          ).length,
          bad: responses.filter(
            ({ response: resIndex }) => resIndex !== question.indexResponse
          ).length,
        });
      } else {
        acc.push({
          abs: nbUser,
          good: 0,
          bad: 0,
        });
      }
      return acc;
    }, []);

    return averageResponse;
  }, [responseData]);
  return (
    <div className="px-5">
      <div className="mb-10 text-center text-2xl">Résultats</div>
      <div>
        {questions.map((question, index) => {
          return (
            <div key={index} className="mb-10">
              <div className="mb-5 text-center">
                {index + 1}/{data.length} - {question.question}
              </div>
              <div className="grid grid-cols-1 gap-5 px-3 w-full">
                {question.reponses.map((response, i) => (
                  <div
                    className={`${
                      question.indexResponse === i
                        ? "scale-[1.05]"
                        : "opacity-70"
                    } bg-[#c6a346] rounded-md px-4 py-2 text-white text-center relative`}
                    key={response}
                  >
                    {response}
                    {responseOnUserByQuestion[index]?.response === i && (
                      <div className="absolute right-5 top-0 bottom-0 flex flex-col items-center justify-center text-2xl">
                        {responseOnUserByQuestion[index]?.response ===
                        question.indexResponse ? (
                          <AiOutlineCheckCircle className="text-green-500" />
                        ) : (
                          <AiOutlineCloseCircle className="text-red-500" />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
