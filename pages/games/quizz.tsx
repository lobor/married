import { useMemo } from "react";
import { useRealtime } from "react-supabase";
import { Quizz } from "../../components/Quizz";

const QuizzPage = () => {
  const [{ data }] = useRealtime("state");
  const state = useMemo(() => {
    return data && data[0];
  }, [data])
  return (
    <div>
      {state && <Quizz data={state} />}
    </div>
  );
};

export default QuizzPage;
