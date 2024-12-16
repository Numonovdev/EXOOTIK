import { useState } from "react";
import img from "./images/i.webp";
import img1 from "./images/i1.webp";
import img2 from "./images/i2.webp";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaAngleRight,
  FaArrowRight,
  FaCircleCheck,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCaretRight, AiOutlineWindows, AiTwotoneSliders } from "react-icons/ai";
import { FaCalendarAlt, FaInstagramSquare } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen text-[#FFF] font-family">
      <header className="w-full py-5 px-4 sm:px-0">
        <div className="container mx-auto flex justify-between items-center py-2 ">
          <h1 className="font-bold text-lg md:text-2xl lg:text-3xl">
            EX<span className="text-[#00F7BD]">OO</span>TIK
          </h1>
          <nav className="flex gap-3 items-center text-white">
            <ul className="hidden sm:flex items-center gap-3 md:gap-5 lg:gap-7 font-medium text-sm md:text-lg  ">
              <li>
                <Link
                  className="px-2 hover:text-[#00f7bdc4] duration-300"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 hover:text-[#00f7bdc4] duration-300"
                  to="/"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 hover:text-[#00f7bdc4] duration-300"
                  to="/"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 hover:text-[#00f7bdc4] duration-300"
                  to="/"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 hover:text-[#00f7bdc4] duration-300"
                  to="/"
                >
                  Contact us
                </Link>
              </li>
            </ul>
            <GiHamburgerMenu className="text-xl sm:hidden font-black hover:text-[#00f7bdc4] duration-300" />
          </nav>
          <div className="hidden w-full h-screen bg-green-950 text-white top-0 left-0 absolute">
            {/* <FeX /> */}
            <ul className="flex flex-col items-center gap-3 md:gap-5 lg:gap-7 font-medium text-sm md:text-lg  ">
              <li>
                <Link
                  className="px-2 hover:text-[#00f7bdc4] duration-300"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 hover:text-[#00f7bdc4] duration-300"
                  to="/"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 hover:text-[#00f7bdc4] duration-300"
                  to="/"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 hover:text-[#00f7bdc4] duration-300"
                  to="/"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 hover:text-[#00f7bdc4] duration-300"
                  to="/"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className="container mx-auto text-white flex flex-col py-32 gap-32">
        <div className="w-full relative">
          <div className="absolute right-0 top-0">
            <ul className="flex flex-col gap-4 decoration-white underline text-xl text-end font-semibold duration-300">
              <li>
                <Link className="tracking-[2px] hover:text-[#00f7bdc4] duration-300">
                  {" "}
                  Dribbble
                </Link>
              </li>
              <li>
                <Link className="tracking-[2px] hover:text-[#00f7bdc4] duration-300">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="tracking-[2px] hover:text-[#00f7bdc4] duration-300">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>

          <h2 className="text-[135px] leading-[150px] font-bold">
            WE ARE <span className="text-[#00F7BD]">WEB3</span> BASED DESIGN
            AGENCY
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between py-20">
          <div className="w-1/3 flex flex-col gap-10">
            <div className="flex justify-between">
              <p className="flex items-center gap-4 text-sm md:text-lg font-medium">
                <FaCircleCheck />
                24/7 online support
              </p>
              <p className="flex items-center gap-4 text-sm md:text-lg font-medium">
                <FaCircleCheck />
                Quick Service
              </p>
            </div>
            <p className="text-sm md:text-lg font-medium tracking-[2px]">
              Soving World with good Designs. Because your satisfaction is
              everything. We are prowiding the best designs.
            </p>
            <button className="bg-[#00F7BD] text-black w-1/2 py-4 rounded hover:bg-[#00f7bdc4] duration-300 font-bold text-xl">
              START A PROJECT
            </button>
          </div>
          <div className="w-3/5 relative">
            <img src={img} className="w-full rounded-md" alt="" />
            <div className="absolute -bottom-12 flex items-center justify-center text-6xl pl-2 right-10 w-28 h-28 rounded-full bg-[#00F7BD] text-black">
              <AiOutlineCaretRight />
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full container gap-10 py-32">
        <div className="flex flex-col gap-20">
          <h1 className="text-5xl font-bold leading-10">Our Services</h1>
          <p className="text-lg w-4/5 leading-8 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            fugiat repellendus eum explicabo quas nulla quasi similique, sequi,
            ad hic fuga dignissimos itaque neque perferendis quo vel! Sed,
            asperiores odit?
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-2xl ">
          <div className="cursor-pointer bg-[#00f7bdc4]  p-5 rounded flex flex-col gap-5 text-black">
            <div className="flex justify-between w-full">
              <SiAntdesign />
              <p>01</p>
            </div>
            <h1 className="text-xl font-bold">Design</h1>
            <p className="text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
              tempore eaque. Temporibus tempora eveniet omnis, voluptatem
              officiis sit veritatis deleniti, laborum nemo, assumenda placeat
              ab est cupiditate natus repellendus ducimus.
            </p>
            <Link className="flex gap-3 items-center hover:text-[#fff] duration-500 text-sm md:text-lg">
              Learn more <FaArrowRight />
            </Link>
          </div>
          <div className="cursor-pointer bg-white duration-1000 hover:bg-[#00f7bdc4]  p-5 rounded flex flex-col gap-5 text-black">
            <div className="flex justify-between w-full">
              <SiAntdesign />
              <p>01</p>
            </div>
            <h1 className="text-xl font-bold">Design</h1>
            <p className="text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
              tempore eaque. Temporibus tempora eveniet omnis, voluptatem
              officiis sit veritatis deleniti, laborum nemo, assumenda placeat
              ab est cupiditate natus repellendus ducimus.
            </p>
            <Link className="flex gap-3 items-center hover:text-[#fff] duration-500 text-sm md:text-lg">
              Learn more <FaArrowRight />
            </Link>
          </div>
          <div className="cursor-pointer bg-white duration-1000 hover:bg-[#00f7bdc4]  p-5 rounded flex flex-col gap-5 text-black">
            <div className="flex justify-between w-full">
              <SiAntdesign />
              <p>01</p>
            </div>
            <h1 className="text-xl font-bold">Design</h1>
            <p className="text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
              tempore eaque. Temporibus tempora eveniet omnis, voluptatem
              officiis sit veritatis deleniti, laborum nemo, assumenda placeat
              ab est cupiditate natus repellendus ducimus.
            </p>
            <Link className="flex gap-3 items-center hover:text-[#fff] duration-500 text-sm md:text-lg">
              Learn more <FaArrowRight />
            </Link>
          </div>
          <div className="cursor-pointer bg-white duration-1000 hover:bg-[#00f7bdc4]  p-5 rounded flex flex-col gap-5 text-black">
            <div className="flex justify-between w-full">
              <SiAntdesign />
              <p>01</p>
            </div>
            <h1 className="text-xl font-bold">Design</h1>
            <p className="text-sm md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
              tempore eaque. Temporibus tempora eveniet omnis, voluptatem
              officiis sit veritatis deleniti, laborum nemo, assumenda placeat
              ab est cupiditate natus repellendus ducimus.
            </p>
            <Link className="underline flex gap-3 items-center hover:text-[#fff] duration-500 text-sm md:text-lg">
              Learn more <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Working process */}
      <section className="flex flex-col w-full container gap-10 py-32 items-center">
        <div className="flex flex-col gap-20">
          <h1 className="text-[75px] font-bold leading-10">WORKING PROCESS</h1>
          <p className="text-lg w-4/5 leading-8 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            fugiat repellendus eum explicabo quas nulla quasi similique, sequi,
            ad hic fuga dignissimos itaque neque perferendis quo vel! Sed,
            asperiores odit?
          </p>
        </div>
        <div className="w-full flex justify-between gap-20">
          <div className="flex flex-col w-1/3 gap-10 justify-between">
            <div className="w-full flex gap-5 justify-between  text-white ">
              <div className="flex items-center justify-center w-10 h-10  bg-[#00f7bdc4] rounded-full">
                01
              </div>

              <div className="flex-1">
                <h5 className="underline font-semibold text-xl">Research</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita totam aspernatur doloremque recusandae eum eveniet.
                  Eligendi expedita
                </p>
              </div>
            </div>
            <div className="w-full flex gap-5 justify-between  text-white ">
              <div className="flex items-center justify-center w-10 h-10  bg-[#00f7bdc4] rounded-full">
                02
              </div>

              <div className="flex-1">
                <h5 className="underline font-semibold text-xl">Research</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita totam aspernatur doloremque recusandae eum eveniet.
                  Eligendi expedita
                </p>
              </div>
            </div>
            <div className="w-full flex gap-5 justify-between  text-white ">
              <div className="flex items-center justify-center w-10 h-10  bg-[#00f7bdc4] rounded-full">
                03
              </div>

              <div className="flex-1">
                <h5 className="underline font-semibold text-xl">Research</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita totam aspernatur doloremque recusandae eum eveniet.
                  Eligendi expedita
                </p>
              </div>
            </div>
          </div>

          {/* images */}
          <div className="flex flex-1 gap-10">
            <div className="grid grid-cols-1 gap-10 ">
              <img
                src={img1}
                loading="lazy"
                className="rounded-xl h-44"
                alt=""
              />
              <img
                src={img}
                loading="lazy"
                className="rounded-xl h-44"
                alt=""
              />
            </div>
            <img
              src={img2}
              loading="lazy"
              className="rounded-xl h-full"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="container flex flex-col gap-10 items-center ">
        <div className="w-ful flex flex-col  items-end">
          <h1 className="font-bold text-[75px] text-end">
            SOME OF OUR RESENT <br />
            CLIENT WORKS
          </h1>
          <p className="text-end w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quas blanditiis voluptates necessitatibus, quisquam libero veniam.
            Blanditiis vitae dolores temporibus molestias vero, tempore,
            nesciunt eligendi quaerat omnis eaque beatae veniam.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-16 w-full">
          <div className=" flex flex-col gap-5 w-full">
            <img src={img2} className="w-full rounded-xl" alt="" />
            <div className="relative flex flex-col gap-3">
              <span className="absolute top-0 right-3">APP COURSE</span>
              <h1>NFT app Development</h1>
              <Link className="underline flex gap-3 items-center hover:text-[#00f7bdc4] duration-500">
                Full Cprse Study <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <img src={img2} className="w-full rounded-xl" alt="" />
            <div className="relative flex flex-col gap-3">
              <span className="absolute top-0 right-3">APP COURSE</span>
              <h1>NFT app Development</h1>
              <Link className="underline flex gap-3 items-center hover:text-[#00f7bdc4] duration-500">
                Full Cprse Study <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <img src={img2} className="w-full rounded-xl" alt="" />
            <div className="relative flex flex-col gap-3">
              <span className="absolute top-0 right-3">APP COURSE</span>
              <h1>NFT app Development</h1>
              <Link className="underline flex gap-3 items-center hover:text-[#00f7bdc4] duration-500">
                Full Cprse Study <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <img src={img2} className="w-full rounded-xl" alt="" />
            <div className="relative flex flex-col gap-3">
              <span className="absolute top-0 right-3">APP COURSE</span>
              <h1>NFT app Development</h1>
              <Link className="underline flex gap-3 items-center hover:text-[#00f7bdc4] duration-500">
                Full Cprse Study <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <button className="border border-[#00f7dbc4] hover:bg-[#00f7dbc4] duration-500 font-bold hover:text-black rounded-full py-3 px-6 w-1/6 flex justify-center items-center gap-3 ">
          SEE MORE <FaAngleRight />
        </button>
      </section>

      <section className="container py-20 flex flex-col">
        <h1 className="text-[75px] text-center">CLIENT FEEDBACKS</h1>
        <div className="py-10 w-2/3 mx-auto flex gap-5 relative">
          <div className="gap-4 flex absolute bottom-3 right-0">
            <span className="p-2 cursor-pointer hover:bg-[#00f7dbc4] duration-500">
            <AiOutlineArrowLeft />
            </span>
            <span className="p-2 cursor-pointer rounded-full hover:bg-[#00f7dbc4] duration-500">
            <AiOutlineArrowRight/>
            </span>
          </div>
          <AiTwotoneSliders className="text-[105px] text-[#00f7dbc4]"/>
          <div className="flex flex-col ">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, minima eius! Voluptate libero inventore accusantium fuga, dolores, officiis sed fugiat, eaque corrupti iste aliquid beatae dicta quae quasi laborum autem?</p>
             <h1 className="mt-5 text-xl">Poblo Escobor</h1>
             <h6>NumonovDev</h6>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-[75px] font-bold">
          <span className="text-end -translate-x-20">LETS DISCUSS</span>
          <span className="text-end -translate-x-32">YOUR</span>
          <span className="text-end">PROJECT?</span>
        </div>
        <div className="flex flex-col gap-5">
          <h1>birnar birnarsa bir narsa your </h1>
          <div className="flex gap-5 items-center">
            <div className="flex flex-col gap-5">
              <input type="text" className="py-2 px-4 rounded-lg bg-transparent border outline-none text-xl text-[#00f7dbc4] font-bold"  />
              <input type="url"  className="py-2 px-4 rounded-lg bg-transparent border outline-none text-xl text-[#00f7dbc4] font-bold" />
            </div>
            <button className="w-20 h-20 bg-[#00f7dbc4] flex items-center justify-center text-black font-bold rounded-full  ">Get <br />started</button>
          </div>
        </div>

      </section>



      <footer className="w-full py-5 mt-20 flex flex-col gap-5 justify-between">
        <div className="container flex justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold">
              EX<span className="text-[#00f7dbc4]">OO</span>TIK
            </h1>
            <p>
              Bizning ijtimoiy tarmoqlarimiz <br /> bizni kuzatishda davom
              eting!
            </p>
            <div className="flex gap-4">
              <span className="p-2 border border-[#00f7dbc4] rounded-full hover:bg-[#00f7dbc4] duration-500 cursor-pointer">
                <FaFacebook />
              </span>
              <span className="p-2 border border-[#00f7dbc4] rounded-full hover:bg-[#00f7dbc4] duration-500 cursor-pointer">
                <FaLinkedin />
              </span>
              <span className="p-2 border border-[#00f7dbc4] rounded-full hover:bg-[#00f7dbc4] duration-500 cursor-pointer">
                <FaInstagramSquare />
              </span>
            </div>
          </div>
          <div className="flex flex-col ">
            <h1 className="text-[#00f7dbc4] font-bold">Links</h1>
            <span className="mt-3">Links</span>
            <span>Links</span>
            <span>Links</span>
          </div>
          <div className="flex flex-col ">
            <h6 className="font-bold text-[#00f7dbc4]">Logol</h6>
            <span className="mt-3">FAQ</span>
            <span>FAQ</span>
            <span>FAQ</span>
          </div>
          <div className="flex flex-col">
            <h6 className="text-[#00f7dbc4] font-bold">Call us our</h6>
            <span>7780 1498 5652</span>
            <h6 className="mt-4 text-[#00f7dbc4] font-bold">Find us Our</h6>
            <span>764 sty stanzk</span>
            <span>764 sty stanzk</span>
          </div>
        </div>
        <div className="flex justify-center items-center  border-t-2 pt-5 text-sm font-semibold ">
          <p>@ 2024 Al right requarred</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
