import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-32 pb-72 ">
      <div className="align-element grid sm:grid-cols-2 items-center gap-8">
        <article className="">
          <h1 className="text-7xl text-emerald-600 font-bold tracking-wider  hover:text-emerald-800 duration-300">
            Rishin <span> Mather</span>{" "}
          </h1>
          <p className="mt-4 text-slate-700 capitalize text-3xl tracking-wide ">
            front end developer
          </p>
          <p className="mt-2 text-lg text-slate-700 tracking-wide capitalize">
            turning ideas into creative reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://app.netlify.com/teams/rishincoder/sites"
              target="_"
            >
              <SiNetlify className="h-8 w-8 text-slate-500 hover:text-emerald-600 duration-300" />
            </a>

            <a href="https://github.com/rishinmather" target="_">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-emerald-600 duration-300" />
            </a>
          </div>
        </article>

        <article className="hidden sm:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
