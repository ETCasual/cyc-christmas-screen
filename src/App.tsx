import { FunctionComponent, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const arr = [
  {
    imgSrc: "/010.jpg",
    no: "010",
  },
  {
    imgSrc: "/021.jpg",
    no: "021",
  },
  {
    imgSrc: "/022.jpg",
    no: "022",
  },
  {
    imgSrc: "/031.jpg",
    no: "031",
  },
  {
    imgSrc: "/056.jpg",
    no: "056",
  },
  {
    imgSrc: "/045.jpg",
    no: "045",
  },
  {
    imgSrc: "/024.jpg",
    no: "024",
  },
  {
    imgSrc: "/033.jpg",
    no: "033",
  },
  {
    imgSrc: "/023.jpg",
    no: "023",
  },
  {
    imgSrc: "/019.jpg",
    no: "019",
  },
  {
    imgSrc: "/050.jpg",
    no: "050",
  },
  {
    imgSrc: "/034.jpg",
    no: "034",
  },
  {
    imgSrc: "/029.jpg",
    no: "029",
  },
  {
    imgSrc: "/030.jpg",
    no: "030",
  },
  {
    imgSrc: "/066.jpg",
    no: "066",
  },
  {
    imgSrc: "/025.jpg",
    no: "025",
  },
  {
    imgSrc: "/085.jpg",
    no: "085",
  },
  {
    imgSrc: "/032.jpg",
    no: "032",
  },
];

// const arr = [

// ];

function App() {
  return (
    <div className="relative w-[4000px] flex justify-center items-center h-[1000px] font-zekton">
      <img
        src="/bg.jpg"
        className="w-[4000px] h-[1000px] absolute top-0 left-0 object-center hue-rotate-90 grayscale-[70%]"
      />
      {/* <div className="z-10 h-[1000px] grid grid-cols-7 gap-x-10 gap-y-5 w-[4000px] px-[52rem] py-[2rem]">
        {arr.map(({ imgSrc, no }, i) => (
          <div
            key={i}
            className={`relative w-full transition duration-700 ease-in-out h-full${
              dead ? " grayscale" : ""
            }`}
            onClick={() => setDead((prev) => !prev)}
          >
            <div
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
              className="absolute text-[5rem] bg-[#F31830] font-zekton w-[270px] h-[270px]"
            />
            <div
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
              className="flex flex-row justify-between top-2 left-2 absolute bg-gray-700 font-zekton items-center w-[250px] h-[250px]"
            >
              <img
                src={imgSrc}
                className="w-[250px] h-full overflow-hidden object-cover object-['top 20px']"
              />
              <p
                className={`absolute bottom-2 z-20 w-full text-[3rem] text-center ${
                  dead ? "text-gray-200" : "text-white "
                }font-bold`}
              >
                编号 {no}
              </p>
            </div>
          </div>
        ))}
      </div> */}

      <div className="main px-[65rem] top-14 absolute">
        <div className="grid-container">
          {arr.map((item, i) => (
            <GridItem key={i} imgSrc={item.imgSrc} no={item.no} sequence={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

interface GridItemProps {
  imgSrc: string;
  no: string;
  sequence: number;
}

const GridItem: FunctionComponent<GridItemProps> = ({
  imgSrc,
  no,
  sequence,
}) => {
  const [show, setShow] = useState(false);
  const [dead, setDead] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, sequence * 150);
  }, [sequence]);
  return (
    <Transition
      as="div"
      onClick={() => setDead((prev) => !prev)}
      className="div-grid relative transition-all duration-1000 ease-in-out"
      show={show}
      enter="transition-all ease-in-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-all ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div>
        <div
          className={`${
            dead ? "bg-red-600 " : "bg-green-600 "
          } w-full h-full absolute transition-all`}
        />
        <div
          style={{
            backgroundImage: `url('${imgSrc}')`,
          }}
          className={`bg-center div-grid2 flex flex-col relative transition-all h-full -left-[5px] -top-[5px] bg-cover${
            dead ? " grayscale contrast-150 brightness-100" : ""
          }`}
        >
          <div
            className={`font-zekton w-full transition-all font-bold ${
              dead ? "text-gray-400" : "text-white"
            } absolute bottom-12 flex flex-col justify-center items-center`}
          >
            <p className="text-[2rem] w-full text-center">编号</p>
            <p className="text-[5rem] w-full text-center leading-[0.75]">
              {no}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  );
};
