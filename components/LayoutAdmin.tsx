import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const TabStyled: FC<{ href: string }> = ({ children, href }) => {
  const router = useRouter();
  return (
    <Tab
      className={({ selected }) =>
        `${selected ? "bg-[#c6a346] text-white" : "text-black"} flex-1 flex`
      }
    >
      <Link href={href}>
        <a className="flex-1 px-2 py-2">{children}</a>
      </Link>
    </Tab>
  );
};

export const LayoutAdmin: FC = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <div className="h-full flex justify-center ">
        <div className="w-full">{children}</div>
      </div>
    </>
  );
};
