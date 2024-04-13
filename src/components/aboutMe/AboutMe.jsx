import { UserMe } from "@/svg/IconsSvg";

export default function AboutMe() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto md:mt-20 sm:mt-10">
        <div className="mt-10 flex flex-row lg:justify-start sm:justify-center lg:pl-40 md:gap-x-5">
          <UserMe />
          <h1 className="my-auto text-3xl text-yellow-500 font-extrabold">
            About me...
          </h1>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:pl-40">
          <div className="mt-5">
            <p className="content-about">
              Hello everyone! I'm Santiago Melo, but you can call me Santi. My
              passion for programming started about a year ago, right after
              finishing my high school. At that moment, I decided venture into
              the vast world of programming, and since then I haven't looked
              back.
            </p>
            <p className="content-about">
              I decided to take charge of my own learning and immerse myself in
              the world of programming in a self-taught way. I set out to
              explore a variety of resources, from instructional videos to
              online courses line and web pages specialized in the subject. All
              this with a goal in mind: prepare to enter the career of Systems
              engineering.
            </p>
            <p className="content-about">
              I am eager to face new challenges and take advantage of every
              opportunity to learn and grow. I am sure that the future great
              things await me in this exciting world of technology and The
              programing!.
            </p>
          </div>
          <div
            className="flex lg:justify-end sm:justify-center mx-auto mb-10 sm:mt-10 relative lg:bottom-10
            my-auto lg:skew-y-3 sm:skew-x-3 hover:lg:skew-x-3 hover:sm:skew-y-3 hover:scale-90"
          >
            <div className="border-img-about-me border-[4px]">
              <div className="border-img-about-me border-[3px]">
                <div className="border-img-about-me border-[2px]">
                  <div className="border-img-about-me border-[1px]">
                    <img
                      src="/content/me.webp"
                      className=" md:w-[300px] sm:w-[250px] rounded-[20px] p-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
