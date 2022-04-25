import { useEffect, useMemo } from "react";
import { useRealtime } from "react-supabase";
import { Quizz } from "../../components/Quizz";
import { useTitle } from "../../providers/title";

const QuizzPage = () => {
  const { setTitle } = useTitle();
  useEffect(() => {
    setTitle("Quizz");
  }, []);
  const [{ data }] = useRealtime("state");
  const state = useMemo(() => {
    return data && data[0];
  }, [data]);
  return (
    <div>
      {state && state.quizz ? (
        <Quizz data={state} />
      ) : (
        <div className="text-center">Le quizz commencera bientôt</div>
      )}
    </div>
  );
};

export default QuizzPage;
