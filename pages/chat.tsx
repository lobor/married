import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import { useInsert, useRealtime } from "react-supabase";

const Chat = () => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const [pseudo, setPseudo] = useState<string>();
  const [{ data, fetching: fetchingMessages }] = useRealtime("messages");
  const [{ fetching }, execute] = useInsert("messages");
  const formik = useFormik({
    validateOnMount: true,
    initialValues: { message: "" },
    async onSubmit(values) {
      await execute({
        ...values,
        table: localStorage.getItem("table"),
        pseudo,
      });
      formik.resetForm();
    },
  });

  const handlePseudo = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    if (formProps.pseudo) {
      localStorage.setItem("pseudo", formProps.pseudo as string);
      setPseudo(formProps.pseudo as string);
    }
  };

  useEffect(() => {
    if (process.browser && !pseudo) {
      const pseudoStorage = localStorage.getItem("pseudo");
      if (pseudoStorage) {
        setPseudo(pseudoStorage);
      }
    }
  }, [pseudo]);

  useEffect(() => {
    if (data && messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [data]);

  return (
    <div className="flex flex-col h-full relative">
      {!pseudo && (
        <form
          className="absolute inset-0 flex items-center flex-col justify-center bg-white z-20"
          onSubmit={handlePseudo}
        >
          <label className="text-center mb-5 ">
            Veuillez rentrer un pseudo afin d&apos;acceder au chat
            <br />
            <br />
            <input
              type="text"
              name="pseudo"
              placeholder="Votre pseudo..."
              className="border-[#c6a346]"
            />
          </label>
          <button
            className="bg-[#c6a346] rounded-md px-4 py-2 text-white"
            type="submit"
            // disabled={!formik.isValid || loading}
          >
            Valider
          </button>
        </form>
      )}
      <div className="flex-1 overflow-auto" ref={messagesRef}>
        {data?.map(({ id, message, pseudo: pseudoUser }) => {
          const isMe = pseudoUser === pseudo;
          return (
            <div
              className={`flex flex-col ${
                isMe ? "items-end" : "items-start"
              } p-2 mb-1`}
              key={id}
            >
              <div
                className={`z-10 relative rounded-md p-2 max-w-[80%] ${
                  isMe
                    ? "bg-[#c6a346] after:border-[#c6a346] after:right-5 after:border-l-[10px] after:border-l-transparent"
                    : "bg-gray-500 after:border-gray-500 after:left-5 after:border-r-[10px] after:border-r-transparent"
                } after:absolute after:border-t-[10px] after:-bottom-[10px]`}
              >
                {!isMe && (
                  <div className="text-[#c6a346] font-bold">{pseudoUser}</div>
                )}
                <div className="text-white">{message}</div>
              </div>
            </div>
          );
        })}
      </div>
      <form onSubmit={formik.handleSubmit} className="flex">
        <textarea
          className="flex-1 rounded-md"
          rows={1}
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          onFocus={() => {
            if (messagesRef.current) {
              messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
            }
          }}
        />
        <button
          className="bg-[#c6a346] rounded-md px-4 py-2 text-white"
          type="submit"
          disabled={!formik.isValid || fetching}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
