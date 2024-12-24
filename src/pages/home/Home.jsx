import bg from "../../assets/images/background.jpg";

function Home() {
  return (
    <>
      <section className="relative z-0 grid grid-cols-1 w-full mx-auto md:grid-cols-2 gap-10 min-h-[600px] p-10">
        <img
          className="absolute top-0 right-0 z-10 w-1/2 h-full bg-right bg-no-repeat"
          src={bg}
          alt="..loading"
          style={{
            WebkitMaskImage:
              "-webkit-gradient(linear, right top, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          }}
        ></img>

        <div className="w-[70%] ml-10 flex flex-col justify-center ">
          <div className="text-[80px] font-bold leading-tight self-start">
            Play
          </div>
          <div className="self-center mr-10 text-[80px] font-bold leading-tight">
            Learn
          </div>
          <div className="text-[80px] self-end font-bold leading-tight">
            Empower
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mt-10 text-4xl text-center font-bolder">Why Join us!</h2>
        <div className="flex flex-col items-stretch justify-center gap-4 md:flex-row ">
          <div className="shadow-xl card bg-base-100 max-w-56 ">
            <div className="card-body">
              <h2 className="card-title">Engage with Ethical Dilemmas</h2>
              <p>
                Confront real-world moral challenges and refine your
                decision-making skills.
              </p>
            </div>
          </div>
          <div className="shadow-xl card bg-base-100 max-w-56 ">
            <div className="card-body">
              <h2 className="card-title">Interactive Learning</h2>
              <p>
                Experience ethics education through dynamic and interactive
                content, making learning both enjoyable and impactful.
              </p>
            </div>
          </div>
          <div className="shadow-xl card bg-base-100 max-w-56 ">
            <div className="card-body">
              <h2 className="card-title">Personal Growth</h2>
              <p>
                Enhance your critical thinking and ethical reasoning abilities,
                applicable in various aspects of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-28 mb-28">
        <h2 className="text-4xl font-semibold text-center">
          Join our community
        </h2>
        <div className="mt-8 text-center">
          <div className="btn btn-primary">Get Started</div>
        </div>
      </section>
    </>
  );
}
export default Home;
