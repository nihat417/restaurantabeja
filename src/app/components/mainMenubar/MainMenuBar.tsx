import { useState } from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { FaShoppingBasket, FaSearch, FaBars } from "react-icons/fa";

export default function MainMenuBar(
  { onBasketClick, onMenuClick }: { onBasketClick: () => void, onMenuClick: () => void },
) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center my-[20px] z-10">
      <Menubar className="max-w-[400px] bg-[#111111] hidden sm:flex">
        <MenubarMenu>
          <MenubarTrigger className="text-white"> <FaBars className="mr-2 text-white" /> Numerator </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-white" onClick={onBasketClick}> <FaShoppingBasket className="mr-2 text-white" /> Basket </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-white"> <FaSearch className="mr-2 text-white" /> Search </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-white" onClick={onMenuClick}> <FaBars className="mr-2" /> Menu </MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      <div className="sm:hidden flex flex-col items-center text-white">
        <button onClick={toggleMenu} className="flex items-center px-4 py-2 bg-[#111111] rounded-md shadow-md">
          <FaBars className="mr-2" /> Menu
        </button>

        {isMenuOpen && (
          <Menubar className="absolute bottom-12 bg-[#111111] shadow-md rounded-md p-3 w-full max-w-xs">
            <MenubarMenu>
              <MenubarTrigger onClick={onBasketClick} className="flex items-center my-1">
                <FaShoppingBasket className="mr-2 text-white" /> Basket
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="flex items-center my-1">
                <FaSearch className="mr-2" /> Search
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={onMenuClick} className="flex items-center my-1">
                <FaBars className="mr-2" /> Menu
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        )}
      </div>
    </div>
  );
}
