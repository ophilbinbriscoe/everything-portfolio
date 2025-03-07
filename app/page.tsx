import Image from "next/image";
import { FaRegHandshake } from "react-icons/fa6";
import { socialLinks } from "./config";


export default function Page() {
  return (
    <section>
      <Image
        src="/profile.png"
        alt="Profile photo"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
        unoptimized
        width={160}
        height={160}
        priority
      />
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        About this site
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          This is a tiny Next.js portfolio site for some of the stuff I've made over the years
          (at work, with friends, and as a student).
        </p>
        <p>
          Head over to <a href="/projects">Projects</a> to get started.
        </p>
        <p>
          There's also a <a href="/gallery">Gallery</a> if you prefer to browse visually.
        </p>
        <h2>About me</h2>
        <p>
          I'm a computer scientist / software engineer with a background in games and product development&mdash;though I
          mostly do full-stack web dev these days.
        </p>
        <p>
          You can find out more about my work experience and education on <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
        <p>
          Most of my software career has been on internal projects and tooling, so you won't find a ton of open-source
          stuff on my <a href={socialLinks.github}>GitHub</a>.
        </p>
        <p>
          I have a{" "}
          <a href={socialLinks.behance} target="_blank" rel="noopener noreferrer">Behance</a>{" "}
          featuring some selected frontend & UI work.
        </p>
        <h2>Acknowledgements</h2>
        <p>
          A little thank-you to {" "}
          <a href="https://imsirius.xyz/" target="_blank">
            Sirius
          </a>, who build and maintain this template.
        </p>
        <p>
          The source repo for this site is{" "}
          <a href="https://github.com/ophilbinbriscoe/everything-portfolio" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </div>
    </section>
  );
}
