"use client";

import Image from "next/image";
import avatar from "public/avatar.jpg";
import dayjs from "dayjs";
import Section from "./Section";
import Skill from "./Skill";
import Job from "./Job";
import schoolsData from "~/data/schools";
import {
  IconAerialLift,
  IconArrowBack,
  IconArrowsVertical,
  IconColorSwatch,
  IconDeviceMobile,
  IconDownload,
  IconFilter,
  IconMail,
  IconPrinter,
  IconSchool,
  IconShare,
  IconWorld,
} from "@tabler/icons";

import useStore from "~/store";
import cx from "classnames";
import { useState } from "react";

export default function Page() {
  const yearsOld = dayjs().diff(dayjs("1986-04-07"), "years");

  const skills = useStore((state) => state.data.skills);
  const jobs = useStore((state) => state.data.jobs);
  const skillsActions = useStore((state) => state.skillsActions);
  const jobsActions = useStore((state) => state.jobsActions);

  const reset = useStore((state) => state.reset);
  const showAll = useStore((state) => state.showAll);
  const hasHistory = useStore((state) => state.history.length);

  const undo = useStore((state) => state.undo);

  const [isForPrint, setIsForPrint] = useState(false);

  return (
    <div
      className={cx("relative mb-6", {
        ["print:grayscale"]: isForPrint,
      })}
    >
      <div className="fixed top-0 flex flex-col m-4 ml-[calc(calc(calc(100vw-21cm)/2)+21cm)] ">
        <IconArrowsVertical
          className="rounded-full cursor-pointer hover:bg-stone-200 p-2"
          onClick={showAll}
          size={48}
        />
        <IconFilter
          className="rounded-full cursor-pointer hover:bg-stone-200 p-2"
          onClick={reset}
          size={48}
        />
        <IconArrowBack
          className={cx("rounded-full cursor-pointer hover:bg-stone-200 p-2", {
            ["text-stone-300"]: !hasHistory,
            ["hover:bg-inherit"]: !hasHistory,
            ["cursor-auto"]: !hasHistory,
          })}
          onClick={undo}
          size={48}
        />
      </div>
      <div
        className={cx("md:w-[21cm] m-auto bg-stone-100 min-h-[29.7cm]", {
          ["print:bg-white"]: isForPrint,
        })}
      >
        <header className="animate-enter1 bg-stone-200">
          <h1 className="bg-teal-700 text-stone-200 text-center h-7 text-xl font-bold pl-32">
            Architecte logiciel{" "}
            <span className="hidden md:inline">
              – Ingénieur de recherche en informatique
            </span>
          </h1>
          <div className="flex  md:relative py-4 md:py-0">
            <div className="mt-4 md:mt-0">
              <Image
                alt="Photo du profil"
                src={avatar}
                className="md:absolute -top-5 rounded-full ml-2 w-24 h-24 object-cover"
              />
            </div>
            <div className="pl-4 md:pl-32 py-2 px-4 flex flex-col md:flex-row justify-between w-full">
              <div className="flex flex-col justify-center">
                <div className="font-bold text-2xl">Erik AOUIZERATE</div>
                <div className="text-lg">{yearsOld} ans</div>
              </div>
              <div className="text-lg leading-5">
                <div className="flex items-center justify-end">
                  <a href="tel:+330601994602">06 01 99 46 02 </a>
                  <IconDeviceMobile className="ml-1 text-teal-600" />
                </div>
                <div className="flex items-center justify-end">
                  <a href="mailto:erik.aouizerate@mintset.io">
                    erik.aouizerate@mintset.io
                  </a>
                  <IconMail className="ml-1 text-teal-600" />
                </div>
                <div className="flex items-center justify-end">
                  <a
                    href="https://erik.aouizerate.me"
                    target="_blank"
                    rel="noreferrer"
                  >
                    erik.aouizerate.me
                  </a>
                  <IconWorld className="ml-1 text-teal-600" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <main
          className={cx("bg-stone-100 h-full", {
            ["print:bg-white"]: isForPrint,
          })}
        >
          <Section
            Icon={IconColorSwatch}
            title="Compétences"
            className={cx("animate-enter1 bg-stone-100", {
              ["print:bg-white"]: isForPrint,
            })}
            showAll={skillsActions.showAll}
            reset={skillsActions.reset}
            removeAll={skillsActions.removeAll}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px]">
              <Skill
                title="Frontend"
                data={skills.frontend}
                removeSkill={skillsActions.remove("frontend")}
              />
              <Skill
                title="Backend"
                data={skills.backend}
                removeSkill={skillsActions.remove("backend")}
              />
              <Skill
                title="DevOps"
                data={skills.infra}
                removeSkill={skillsActions.remove("infra")}
              />
              <Skill
                title="Transverse"
                data={skills.tools}
                removeSkill={skillsActions.remove("tools")}
              />
            </div>
          </Section>
          <Section
            Icon={IconAerialLift}
            title="Éxperiences professionnelles"
            className="animate-enter1"
            showAll={jobsActions.showAll}
            reset={jobsActions.reset}
          >
            {jobs.map((job, index) => (
              <Job
                key={index}
                data={job}
                remove={() => jobsActions.remove(index)}
                addSkills={jobsActions.addSkills(job.tools)}
              />
            ))}
          </Section>
          <Section
            Icon={IconSchool}
            title="Formations"
            className="animate-enter1"
          >
            {schoolsData.map((school, index) => (
              <div key={index} className="mb-2 last-of-type:mb-0">
                <div className="float-left flex flex-col items-center -ml-14 mt-1">
                  <div>{dayjs(school.year).format("YYYY")}</div>
                </div>
                <h3 className="text-[0.9rem] font-bold">{school.title}</h3>
              </div>
            ))}
          </Section>
        </main>
        <div className="bg-teal-700 h-4 sticky top-[29.7cm] mt-2"></div>
      </div>
      <div className="print:hidden">
        <div className="absolute -z-10 top-[29.7cm] w-full border border-dashed border-1"></div>
        <div className="fixed bottom-0 flex flex-col m-4 ml-[calc(calc(calc(100vw-21cm)/2)+21cm)] ">
          <IconShare
            className="rounded-full cursor-pointer hover:bg-stone-200 p-2"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
            }}
            size={48}
          />
          <IconPrinter
            className="rounded-full cursor-pointer hover:bg-stone-200 p-2"
            onClick={() => {
              setIsForPrint(true);
              setTimeout(() => {
                window.print();
              }, 0);
            }}
            size={48}
          />
          <IconDownload
            className="rounded-full cursor-pointer hover:bg-stone-200 p-2"
            onClick={() => {
              setIsForPrint(false);
              setTimeout(() => {
                window.print();
              }, 0);
            }}
            size={48}
          />
        </div>
      </div>
    </div>
  );
}
