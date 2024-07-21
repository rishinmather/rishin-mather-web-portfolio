import React from "react";

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="">
      <span className="">{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-600">{text}</p>
    </article>
  );
};

export default SkillsCard;
