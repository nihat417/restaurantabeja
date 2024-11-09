  "use client";

  import { useState, useEffect } from "react";
  import MainMenuBar from "../mainMenubar/MainMenuBar";
  import { Button } from "@/components/ui/button"
  import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
  import { Label } from "@/components/ui/label"
  import {Tabs,TabsContent,TabsList,TabsTrigger,} from "@/components/ui/tabs"
  import { CiCreditCard1,CiGift  } from "react-icons/ci";
  import { FaRegMoneyBillAlt } from "react-icons/fa";
  import { IoPerson } from "react-icons/io5";



  export default function BasketSidebar({ children }: { children: React.ReactNode }) {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    const [isBasketOpen, setIsBasketOpen] = useState(false);

    const handleButtonClick = (buttonId: string) => {
      setSelectedButton(buttonId);
    };

    const toggleBasket = () => {
      setIsBasketOpen(!isBasketOpen);
    };

    return (
      <>
        <div
          className={`fixed top-0 left-0 h-full z-20 bg-[#1A1A1A] text-white transition-all duration-300 transform ${
            isBasketOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } ${isBasketOpen ? "lg:w-[35%] w-full" : "w-0"}`}>
          <div className="p-4 flex justify-center  h-full">

            <Tabs defaultValue="account" className="my-[50px] w-[600px] sm:w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">New</TabsTrigger>
                <TabsTrigger value="password">Waited</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardContent className="my-[40px] max-h-[200px] space-y-2 overflow-y-auto custom-scrollbar">
                    <div className="flex flex-row justify-between  space-y-1">
                      <div className="flex flex-row">
                        <Label className="mx-[10px] text-[16px]">1</Label>
                        <Label className="mx-[10px] font-bold text-[16px]">Cheeese Burger</Label>
                      </div>
                      <Label className="text-[16px]">50$</Label>
                    </div>
                    <div className="flex flex-row justify-between  space-y-1">
                      <div className="flex flex-row">
                        <Label className="mx-[10px] text-[16px]">1</Label>
                        <Label className="mx-[10px] font-bold text-[16px]">Cheeese Burger</Label>
                      </div>
                      <Label className="text-[16px]">50$</Label>
                    </div>
                    <div className="flex flex-row justify-between  space-y-1">
                      <div className="flex flex-row">
                        <Label className="mx-[10px] text-[16px]">1</Label>
                        <Label className="mx-[10px] font-bold text-[16px]">Cheeese Burger</Label>
                      </div>
                      <Label className="text-[16px]">50$</Label>
                    </div>
                    <div className="flex flex-row justify-between  space-y-1">
                      <div className="flex flex-row">
                        <Label className="mx-[10px] text-[16px]">1</Label>
                        <Label className="mx-[10px] font-bold text-[16px]">Cheeese Burger</Label>
                      </div>
                      <Label className="text-[16px]">50$</Label>
                    </div>
                    <div className="flex flex-row justify-between  space-y-1">
                      <div className="flex flex-row">
                        <Label className="mx-[10px] text-[16px]">1</Label>
                        <Label className="mx-[10px] font-bold text-[16px]">Cheeese Burger</Label>
                      </div>
                      <Label className="text-[16px]">50$</Label>
                    </div>
                    <div className="flex flex-row justify-between  space-y-1">
                      <div className="flex flex-row">
                        <Label className="mx-[10px] text-[16px]">1</Label>
                        <Label className="mx-[10px] font-bold text-[16px]">Cheeese Burger</Label>
                      </div>
                      <Label className="text-[16px]">50$</Label>
                    </div>
                    
                  </CardContent>

                  <div className="flex flex-row justify-between mx-[25px] my-[40px] p-[5px] border-[#000] border-[1px] border-dotted">
                    <h4 className="ml-[10px] font-bold text-[18px] text-black">Total</h4>
                    <h4 className="text-[18px] font-bold text-black">200$</h4>
                  </div>

                  <div className="flex flex-row justify-center gap-6 my-[20px]">
                    <div>
                      <button
                        className={`p-[20px] rounded-[10px] border-[1px] border-[#97D4D4] ${
                          selectedButton === "cash" ? "bg-[#97D4D4]" : "" 
                        }`} onClick={() => handleButtonClick("cash")} >
                        <CiCreditCard1 />
                      </button>
                      <p className={`text-center text-[14px] mt-[5px] ${selectedButton === "cash" ? "text-[#97D4D4]" : "" }`}>Cash</p>
                    </div>
                    <div>
                      <button
                        className={`p-[20px] rounded-[10px] border-[1px] border-[#97D4D4] ${
                          selectedButton === "credit" ? "bg-[#97D4D4]" : "" 
                        }`} onClick={() => handleButtonClick("credit")}>
                        <FaRegMoneyBillAlt />
                      </button>
                      <p className={`text-center text-[14px] mt-[5px] ${selectedButton === "credit" ? "text-[#97D4D4]" : "" }`}>Credit card</p>
                    </div>
                    <div>
                      <button
                        className={`p-[20px] rounded-[10px] border-[1px] border-[#97D4D4] ${
                          selectedButton === "customer" ? "bg-[#97D4D4]" : "" 
                        }`} onClick={() => handleButtonClick("customer")}>
                        <IoPerson />
                      </button>
                      <p className={`text-center text-[14px] mt-[5px] ${selectedButton === "customer" ? "text-[#97D4D4]" : "" }`}>Customer</p>
                    </div>
                    <div>
                      <button
                        className={`p-[20px] rounded-[10px] border-[1px] border-[#97D4D4] ${
                          selectedButton === "gift" ? "bg-[#97D4D4]" : "" 
                        }`} onClick={() => handleButtonClick("gift")}>
                        <CiGift />
                      </button>
                      <p className={`text-center text-[14px] mt-[5px] ${selectedButton === "gift" ? "text-[#97D4D4]" : "" }`}>Gift</p>
                    </div>
                  </div>

                  <CardFooter>
                    <Button className="w-full">complete order</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you'll be logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                    </div>
                  </CardContent>
                  <CardFooter >
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
            
          </div>
        </div>

        <div className={`transition-all duration-300 ${isBasketOpen ? "ml-[35%]" : "ml-0"} flex-grow`}>
          {children}
        </div>

        <MainMenuBar onBasketClick={toggleBasket} />
      </>
    );
  }
