import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineLeft,
  AiOutlineMenu,
  AiOutlineRight,
} from "react-icons/ai";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
    setGameOpen(false);
  }
  return (
    <div className="bg-white p-2 text-[#c6a346]">
      <div className={`flex justify-between items-center h-[52px]`}>
        <div className="flex items-center">
          {gameOpen && <AiOutlineLeft className="text-[2rem]" onClick={() => setGameOpen(false)} />}
          <div className="font-['MoonTime'] text-[3rem]">
          <Link href="/">
              <a title="Home" className="p-2 block" onClick={handleClose}>O&L</a>
            </Link></div>
        </div>
        <AiOutlineMenu
          className="border border-[#c6a346] p-2 rounded-md text-4xl"
          onClick={() => {
            setIsOpen(!isOpen)
            setGameOpen(false)
          }}
        />
      </div>
      {isOpen && (
        <div className="bg-white z-50 absolute bottom-0 right-0 left-0 top-[68px]">
          <div className="border-t border-b border-[#c6a346]">
            <Link href="/">
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
          <div
            className="border-b border-[#c6a346] p-2 flex justify-between items-center"
            onClick={() => setGameOpen(true)}
          >
            Jeux <AiOutlineRight />
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
      {gameOpen && (
        <div className="bg-white z-50 absolute bottom-0 right-0 left-0 top-[68px]">
          <div className="border-t border-b border-[#c6a346]">
            <Link href="/games/quizz">
              <a title="Quizz" className="p-2 block" onClick={handleClose}>
                Quizz
              </a>
            </Link>
          </div>
          <div className="border-b border-[#c6a346]">
            <Link href="/games/elleetlui">
              <a title="Elle et lui" className="p-2 block" onClick={handleClose}>
                Elle et lui
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
