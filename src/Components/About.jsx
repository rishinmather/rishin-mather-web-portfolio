import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { LiaUserCircle } from "react-icons/lia";
import { MdAttachEmail } from "react-icons/md";

export const About = () => {
  return (
    <section className="bg-white-50 py-20   mt-20" id="about">
      <div className="align-element grid sm:grid-cols-2 sm:gap-x-4 items-center md:gap-16 ">
        <img src={aboutSvg} className="w-full  mb-14" />
        <article className="text-center ">
          <div className=" ">
            <SectionTitle text={"Get in touch "} />
          </div>

          <div className="sm:border-2 pl-16 mb-64 mt-10 pb-8">
            <div
              className="text-slate-600 mt-8 leading-loose flex align-items: center 
            "
            >
              <span className="mt-1 mr-1 text-2xl">
                <LiaUserCircle />
              </span>
              <p>: Rishin Rahman Mather</p>
            </div>

            <div className="text-slate-600 mt-8 leading-loose flex align-items: center gap-x-2">
              <span className="mt-2">
                <MdAttachEmail />
              </span>
              <p>: matherrishin1@gmail.com</p>
            </div>

            <div className="text-slate-600 mt-8 leading-loose flex align-items: center gap-x-2">
              <span className="mt-2">
                <FaPhoneAlt />
              </span>
              <p>: +91-9742137804</p>
            </div>

            <div className="text-slate-600 mt-8 leading-loose flex align-items: center gap-x-2">
              <span className="mt-2">
                <FaLocationArrow />
              </span>
              <p>: Puthenveedu ,Sreemoolanagram Aluva ,Kochin Kerala-683580 </p>

              <p></p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
