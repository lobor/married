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
      <Tab.Group defaultIndex={router.asPath.match(/quizz/g) ? 0 : 1}>
        <Tab.List className="border-b border-[#c6a346] flex">
          <TabStyled href="/admin/quizz">quizz</TabStyled>
          <TabStyled href="/admin/elleetlui">Elle et lui</TabStyled>
        </Tab.List>
      </Tab.Group>
      <div className="h-full flex justify-center items-center -mt-16">
        {children}
      </div>
    </>
  );
};
