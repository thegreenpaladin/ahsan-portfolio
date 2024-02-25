import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiPhp,
  DiMysql,
  DiGithubBadge,
} from "react-icons/di";

function Skills() {
  return (
    <main className="bg-slate-900 grow px-40 py-20">
      <div>
        <h1 className="text-3xl font-bold">Skills</h1>
        <p>These are the technologies I have experience in.</p>
        <div className="mt-5 w-[80%]">
          <ul className="flex flex-wrap items-center">
            <li className="skill-card">
              <DiHtml5 className="icon" /> HTML
            </li>
            <li className="skill-card">
              <DiCss3 className="icon" /> CSS
            </li>
            <li className="skill-card">
              <DiJavascript1 className="icon" /> Javascript
            </li>
            <li className="skill-card">
              <DiReact className="icon" /> React JS
            </li>
            <li className="skill-card">
              <DiNodejsSmall className="icon" /> Node JS
            </li>
            <li className="skill-card">
              <DiPhp className="icon" /> PHP
            </li>
            <li className="skill-card">
              <DiMysql className="icon" /> MySQL
            </li>
            <li className="skill-card">
              <DiGithubBadge className="icon" /> GitHub
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Skills;
