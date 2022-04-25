import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { Loading } from "../components/Loading";

const Connect = () => {
  const router = useRouter();
  const { table } = router.query;

  useEffect(() => {
    if (process.browser) {
      const oldTable = localStorage.getItem("table");
      if (typeof table === "string" || oldTable) {
        if (!oldTable && typeof table === "string") {
          localStorage.setItem("table", table);
        }
        router.push("/");
      }
    }
  }, [table, router]);

  if (!table || Array.isArray(table)) {
    return (
      <div className="mt-16 text-center">
        <AiOutlineWarning className="m-auto text-[5rem] text-[#c6a346]" />
        <br />
        Impossible de vous connecter
        <br />
        Veuillez scanner de nouveau le Qrcode
      </div>
    );
  }
  return <Loading className="mt-16" />;
};

export default Connect;
