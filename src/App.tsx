import Dice from "./assets/icon-dice.svg";
import MobileDivider from "./assets/pattern-divider-mobile.svg";
import DesktopDivider from "./assets/pattern-divider-desktop.svg";
import { useState } from "react";
import { Advice, getRandomAdvice } from "./api/getRandomAdvice";

function App() {
  const [advice, setAdvice] = useState<Advice>({
    id: 0,
    advice: "",
  });

  const handleBtnClick = async () => {
    const data = await getRandomAdvice();
    const { slip } = data;
    setAdvice(slip);
  };

  return (
    <div className="w-full h-full min-h-screen bg-dark-blue flex justify-center items-center">
      <main className="fonts-manrope relative mx-4">
        <div className="px-6 pt-10 pb-16 max-w-[540px] text-center bg-dark-grayish-blue rounded-[10px] md:rounded-[15px]">
          <div className="pb-10 text-neon-green text-sm font-extrabold">
            ADVICE <span className="ml-2">#{advice.id}</span>
          </div>
          <div className="pb-10 text-light-cayn text-2xl font-extrabold">
            “{advice.advice}”
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <img
              src={MobileDivider}
              alt="Mobile Pattern Divider"
              className="sm:hidden"
            />
            <img
              src={DesktopDivider}
              alt="Mobile Pattern Divider"
              className="hidden sm:block"
            />
          </div>
        </div>
        <button
          onClick={handleBtnClick}
          className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2 bg-neon-green w-16 h-16 rounded-full flex justify-center items-center btn-drop-shadow"
        >
          <img src={Dice} alt="Dice Button" className="" />
        </button>
      </main>
    </div>
  );
}

export default App;
