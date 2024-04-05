import Title from "../components/technologies/Title";

export default function Experience() {
  return (
    <>
      <Title title="Experience" />
      <div className="flex justify-center items-center">
        <section className="w-[800px]">
          <div className="group-date">
            <h2 className="text-4xl text-gray-300 px-3 py-4 font-bold tracking-widest">
              November
            </h2>
          </div>
          <div className="timeline">
            <div className="relative">
              <div className="dot">
                <div className="pl-10">
                  <span className="timeline-date">November</span>
                  <h3 className="timeline-title">Event 1</h3>
                  <span className="timeline-date">
                    HIODFEIOHFSHIOFHIBHIDGHIDHOFIDHIPFG
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
