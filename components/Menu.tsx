import Link from "next/link";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineMenu, AiOutlineRight } from "react-icons/ai";
import { useTitle } from "../providers/title";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const { title } = useTitle();
  return (
    <div className="bg-white p-2 text-[#c6a346] border-b border-[#c6a346]">
      <div className={`flex justify-between items-center h-[52px]`}>
        <div className="flex items-center">
          <div className="font-['MoonTime'] text-[3rem]">
            <Link href="/">
              <a title="Home" className="p-2 block" onClick={handleClose}>
                O&L
              </a>
            </Link>
          </div>
        </div>
        {title && <div>{title}</div>}
        <div className="w-[67px] flex justify-end">
          <AiOutlineMenu
            className="border border-[#c6a346] p-2 rounded-md text-4xl"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
      </div>
      {isOpen && (
        <div className="bg-white z-50 absolute bottom-0 right-0 left-0 top-[68px]">
          <div className="border-t border-b border-[#c6a346]">
            <Link href="/about">
              <a title="Nous" className="p-2 block" onClick={handleClose}>
                Nous
              </a>
            </Link>
          </div>
          <div className="border-b border-[#c6a346]">
            <Link href="/menu">
              <a title="Menu" className="p-2 block" onClick={handleClose}>
                Menu
              </a>
            </Link>
          </div>
          <div className="border-b border-[#c6a346]">
            <Link href="/photos">
              <a title="Photos" className="p-2 block" onClick={handleClose}>
                Photos
              </a>
            </Link>
          </div>
          <div className="border-b border-[#c6a346]">
            <Link href="/games/quizz">
              <a title="Quizz" className="p-2 block" onClick={handleClose}>
                Quizz
              </a>
            </Link>
          </div>
          <div className="border-b border-[#c6a346]">
            <Link href="/chat">
              <a title="Chat" className="p-2 block" onClick={handleClose}>
                Chat
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
