import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { FaShoppingBasket, FaSearch, FaBars } from "react-icons/fa";

export default function MainMenuBar({ onBasketClick }: { onBasketClick: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center my-[20px] z-10">
      <Menubar className="max-w-[400px]">
        <MenubarMenu>
          <MenubarTrigger> <FaBars className="mr-2" />Numerator</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={onBasketClick}> <FaShoppingBasket className="mr-2" /> Basket</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger> <FaSearch className="mr-2" /> Search</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger> <FaBars className="mr-2" />  Menu</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
