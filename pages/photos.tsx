import { useFormik } from "formik";
import { useEffect } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { useInsert } from "react-supabase";
import { string, object } from "yup";
import { useTitle } from "../providers/title";
import { useUser } from "../providers/user";

const Menu = () => {
  const { setTitle } = useTitle();
  const { user } = useUser();
  const [{ data, fetching: loading, error }, execute] = useInsert("email");
  const formik = useFormik({
    validateOnMount: true,
    validationSchema: object({
      email: string()
        .email("Ce n'est pas un email")
        .required("L'email est requis"),
    }),
    initialValues: { email: "" },
    onSubmit(values) {
      execute({ ...values, user_id: user?.id });
    },
  });
  useEffect(() => {
    setTitle("Photos");
  }, []);
  return data && data.length > 0 ? (
    <div className="mt-16 text-center px-5">
      Votre email a bien été enregistré
    </div>
  ) : (
    <div className="text-center px-5">
      <div className="flex justify-center text-[10em] text-[#c6a346]">
        <AiOutlineCamera />
      </div>
      Prise de photos en cours...
      <br />
      <br />
      Laissez-nous votre email
      <br />
      Nous vous préviendrons lorsqu&apos;elles seront disponibles
      <form onSubmit={formik.handleSubmit} className="mt-5">
        <label className="block mb-5">
          <div>Email</div>
          <input
            type="email"
            name="email"
            placeholder="Exemple: orpheeetlionel@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-[#c6a346]"
          />
        </label>
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 mb-5">{formik.errors.email}</div>
        )}
        {error && <div className="text-red-500 mb-5">{error.message}</div>}
        <button
          className="bg-[#c6a346] rounded-md px-4 py-2 text-white"
          type="submit"
          disabled={!formik.isValid || loading}
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default Menu;
