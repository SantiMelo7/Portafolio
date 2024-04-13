import { UserMe } from "@/svg/IconsSvg";

export default function AboutMe() {
  return (
    <>
      <div className="mt-8">
        <div className="divLine" />
      </div>
      <section className="max-w-6xl mx-auto">
        <div className="mt-10 flex flex-row md:justify-start sm:justify-center md:pl-14">
          <UserMe />
          <h1 className="my-auto text-3xl text-yellow-500 font-extrabold">
            Sobre mí...
          </h1>
        </div>
        <div className="md:max-w-3xl mt-5 md:text-start sm:text-center sm:max-w-2xl md:pl-14">
          <p className="font-extrabold md:text-xl sm:text-md p-2">
            Hello everyone! I'm Santiago Melo, but you can call me Santi. My
            passion for programming started about a year ago, right after
            finishing my high school. At that moment, I decided venture into the
            vast world of programming, and since then I haven't looked back
          </p>
          <p className="font-extrabold md:text-xl sm:text-md p-2">
            I decided to take charge of my own learning and immerse myself in
            the world of programming in a self-taught way. I set out to explore
            a variety of resources, from instructional videos to online courses
            line and web pages specialized in the subject. All this with a goal
            in mind: prepare to enter the career of Systems engineering.
          </p>
          <p className="font-extrabold md:text-xl sm:text-md p-2">
            I am eager to face new challenges and take advantage of every
            opportunity to learn and grow. I am sure that the future great
            things await me in this exciting world of technology and The
            programing!
          </p>
        </div>
      </section>
      <div className="flex md:justify-end sm:justify-center mt-4 my-auto">
        <div className=" border-[2px] border-blue-300 ">
          <img src="/content/me.webp" className=" w-[200px] rounded-sm" />
        </div>
      </div>
    </>
  );
}

/*
<p className="font-extrabold text-xl">
              Me llamo Santiago Melo, pero todos me conocen como Santi, empeze
              en el mundo de la progrmación en el 2023, despues de terminar mi
              bachillerato. Decidí aprender de manera autodidacta en videos,
              cursos y paginás del tema, ademas de poder entrar a la carrera de
              Ingeniero En Sistemas
            </p>
*/

/**
 <div className="flex justify-end items-end mt-4 mx-auto">
          <div className=" border-[2px] border-blue-300 ">
            <img src="/content/me.webp" className=" w-[200px] rounded-sm" />
          </div>
        </div>
 */
