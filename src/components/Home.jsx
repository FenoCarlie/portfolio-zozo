import { useRef } from "react";
import { MdEmail } from "react-icons/md";

function Home() {
  const homeRef = useRef(null);

  return (
    <div
      id="home"
      ref={homeRef}
      className="w-full xl:pl-60 h-full relative flex-col pt-60"
    >
      <h1 className="text-blueClaire text-4xl">SAMBANY Michel Laurenzio</h1>
      <h1 className="text-greyBleu text-2xl">Back-end Developer</h1>
      <p className="text-greyBleu text-xl">Description</p>
      <section className="flex flex-col w-full h-auto mt-4">
        <span className="flex flex-row items-center">
          <MdEmail className="text-greyBleu w-7 h-7 mr-3" />
          <label className="text-greyBleu text-lg">zozo@gmail.com</label>
        </span>
      </section>
    </div>
  );
}

export default Home;
