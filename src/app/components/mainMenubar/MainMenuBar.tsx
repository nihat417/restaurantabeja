import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function MainMenuBar({ onBasketClick }: { onBasketClick: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center my-[20px] z-10">
      <Menubar className="max-w-[300px]">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger onClick={onBasketClick}>Basket</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
