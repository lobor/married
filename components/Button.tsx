export const Button = (props: any) => {
  const { disabled } = props;
  return (
    <button
      className={`bg-[#c6a346] rounded-md px-4 py-2 text-white ${disabled && "opacity-70"}`}
      {...props}
    />
  );
};
