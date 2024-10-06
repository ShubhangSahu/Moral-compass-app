function Home() {
  return (
    <>
      <section className="grid grid-cols-1 max-w-[1024px] mx-auto md:grid-cols-2 gap-10 min-h-[600px]">
        <div className="flex flex-col justify-center ">
          <h1 className="mb-12 text-2xl font-bold ">
            Unlock the Power of Ethics!
          </h1>
          <div className="">
            Dive into an engaging world where your choices shape the story!
            Morality Quest is a unique gamified platform designed to educate and
            inspire you about moral and ethical values through interactive
            challenges, thought-provoking scenarios, and collaborative missions.
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://media1.tenor.com/m/bSO2orPiJsoAAAAd/kurzgesagt.gif"
            alt="loading"
            className="flex-shrink max-w-[400px] rounded-xl"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-10 text-4xl text-center font-bolder">Why Join us!</h2>
        <div className="flex justify-center gap-4">
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
