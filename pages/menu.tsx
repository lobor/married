import { useEffect } from "react";
import { useTitle } from "../providers/title";

const Menu = () => {
  const {setTitle} = useTitle();
  useEffect(() => setTitle("Menu"), []);
  return (
    <div className="mx-5">
      <h2 className="font-['MoonTime'] text-[3rem] text-[#c6a346] text-center mb-5">
        Entree
      </h2>
      <div className="text-center">
        Salade composée : salade verte, pommes marinées, framboise vinaigrette
        au cassis
      </div>
      <h2 className="font-['MoonTime'] text-[3rem] text-[#c6a346] text-center mb-5 mt-20">
        Plats
      </h2>
      <div className="text-center">
        Magret de canard (sauce au poivre / aux truffes)
      </div>
      <div className="text-center">Cordon bleu (menu enfant)</div>
      <div className="text-center">
        Garnitures : Riz basmati et sa brunoise de légumes
      </div>
      {/* <div className="h-[1px] bg-[#c6a346] my-2 mx-2" /> */}
      <h2 className="font-['MoonTime'] text-[3rem] text-[#c6a346] text-center mb-5 mt-20">
        Assortiment de desserts
      </h2>
      <div className="text-center">Salade de fruits</div>
      <div className="text-center">Mousse au chocolat</div>
      <h2 className="font-['MoonTime'] text-[3rem] text-[#c6a346] text-center mb-5 mt-20">
        Cafe
      </h2>
      <h2 className="font-['MoonTime'] text-[3rem] text-[#c6a346] text-center mb-5 mt-20">
        Boissons non-alcoolisees
      </h2>
      <div className="text-center">Eau minérale plate, gazeuse</div>
      <div className="text-center">Jus d’orange</div>
      <div className="text-center">Jus de pomme</div>
      <div className="text-center">Coca Cola</div>
      <div className="text-center">Champomy</div>
      <div className="text-center">7-up</div>
      <h2 className="font-['MoonTime'] text-[3rem] text-[#c6a346] text-center mb-5 mt-20">
        Boissons alcoolisees
      </h2>
      <div className="text-center">Whisky</div>
      <div className="text-center">Vin (rouge, blanc, rosé)</div>
      <div className="text-center">Champagne</div>
      <div className="text-center mb-10">Bières</div>
    </div>
  );
};

export default Menu;
