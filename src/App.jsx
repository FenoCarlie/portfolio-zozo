import { useEffect, useRef, useState } from "react";
import "./App.css";
import { assets } from "./assets/assets";
import Home from "./components/Home";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const pageRef = useRef(null);
  const [loading, setLoading] = useState(false);

  /*useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);*/

  /*useEffect(() => {
    const pageElement = pageRef.current;
    if (pageElement == null) {
      return;
    }
    var homeElement = document.getElementById("home");
    var aboutElement = document.getElementById("about");
    var portfolioElement = document.getElementById("portfolio");
    var contactElement = document.getElementById("contact");

    var pageElementOffsetTop = pageElement.offsetTop;
    var homeElementOffsetTop = homeElement.offsetTop;
    var aboutElementOffsetTop = aboutElement.offsetTop;
    var portfolioElementOffsetTop = portfolioElement.offsetTop;
    var contactElementOffsetTop = contactElement.offsetTop;
    pageElement.addEventListener("scroll", function () {
      var pageElementScrollTop = pageElement.scrollTop;
      var scrollPage = pageElementOffsetTop + pageElementScrollTop;
      /*console.log(
        homeElementOffsetTop,
        aboutElementOffsetTop,
        portfolioElementOffsetTop,
        contactElementOffsetTop
      );

      console.log(scrollPage == homeElementOffsetTop);
    });
  }, [loading]);*/

  return (
    <>
      <div
        id="app"
        className={`font-openSans w-full md:pl-10 pl-5 flex overflow-hidden xl:flex-row lg:flex-row md:flex-col sm:flex-col bg-blueFonce ${
          loading ? "items-center justify-center" : ""
        }`}
      >
        {loading ? (
          <>
            <label className="fade-in"></label>
          </>
        ) : (
          <>
            <div className="h-full hidden lg:flex lg:w-[50%] xl:w-[50%]">
              <Home />
            </div>
            <div
              ref={pageRef}
              id="page"
              className="lg:w-[50%] xl:w-[50%] md:w-full w-full overflow-auto focus:outline-none h-full xl:pr-20 lg:pr-20 md:pr-20"
              tabIndex={0}
            >
              <section className="xl:hidden lg:hidden md:flex sm:flex">
                <Home />
              </section>
              <section className="pr-5">
                <About />
                <Experiance />
                <Project />
                <Contact />
              </section>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
