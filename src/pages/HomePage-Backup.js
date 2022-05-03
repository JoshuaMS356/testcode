import "../App.css";
import "../main.js";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { NavBar } from "../components/NavBar/index.js";
import { SideBar } from "../components/SideBar/index.js";
import { HeroSection } from "../components/HeroSection/index.js";
//import { Footer } from "../components/Footer";
import { InfoSection } from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";

//import { Navigation } from "../components/Navigation";
//import { SVG } from "../components/SVG";

export const HomePage = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log("Yo you're are soo good.");
    history.push("/");
  });

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />

      {/* <header class="hero flex-row w-full md:h-screen ">
        <section
          id="anime"
          class="flex flex-wrap mt-20 w-full md:flex md:mt-40 justify-center items-center w-full m-auto "
        >
          <section class=" text-center justify-center items-center">
            <p class="text-sm font-bold bg-white ">Performance</p>
            <canvas class="m-auto" id="box1" width="150" height="150"></canvas>
          </section>

          <section class=" text-center justify-center items-center">
            <p class="text-sm font-bold bg-white">Accessibility</p>
            <canvas class="m-auto" id="box2" width="150" height="150"></canvas>
          </section>

          <section class="text-center justify-center items-center">
            <p class="text-sm font-bold bg-white">Best Practices</p>
            <canvas class="m-auto" id="box3" width="150" height="150"></canvas>
          </section>

          <section class=" text-center justify-center items-center">
            <p class="text-sm font-bold bg-white ">SEO</p>
            <canvas class="m-auto" id="box4" width="150" height="150"></canvas>
          </section>
        </section>
      </header> */}
      {/*end header section*/}

      {/* <section class="justify-center items-center w-full m-auto">
        <article class="w-full md:w-2/3 h-100vh m-auto bg-white p-20">
          <p className="aboutText  text-base">
            According to{" "}
            <a
              target="_blank"
              href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-site-load-time-statistics/"
              rel="noreferrer"
            >
              <span class="text-blue-600 hover:text-black-900">
                Think with Google
              </span>
            </a>
            ,{" "}
            <span>
              53% of mobile users abandon a webpage if it doesn’t load after
              three seconds. And we will make sure it does.
            </span>
          </p>
        </article>

        <article class="w-full md:w-2/3 h-100vh m-auto flex-wrap justify-center items-center p-20">
          <h2 class="italic text-base text-center">
            Page Load Times v Bounce Rate
          </h2>
          <table class="md:text-sm m-auto">
            <tr class="md:text-base md:px-1 border-solid border-2 border-indigo-600">
              <th class="md:px-1 md:w-1/2 border-solid border-2 border-indigo-600">
                Seconds
              </th>
              <th class="md:px-1 md:w-1/2">Bounce Rate</th>
            </tr>

            <tr class="md:text-base md:px-1 border-solid border-2 border-indigo-600">
              <td class="md:px-1 text-center border-solid border-2 border-indigo-600">
                1-3
              </td>
              <td class="md:px-1 text-center border-solid border-2 border-indigo-600">
                32%
              </td>
            </tr>
            <tr class="md:text-base md:px-1 border-solid border-2 border-indigo-600">
              <td class="md:px-1 text-center md:w-1/2 border-solid border-2 border-indigo-600">
                1-5
              </td>
              <td class="md:px-1 text-center md:w-1/2 border-solid border-2 border-indigo-600">
                90%
              </td>
            </tr>
            <tr class="md:text-base md:px-1 border-solid border-2 border-indigo-600">
              <td class="md:px-1 text-center border-solid border-2 border-indigo-600">
                1-6
              </td>
              <td class="md:px-1 text-center border-solid border-2 border-indigo-600">
                106%
              </td>
            </tr>
            <tr class="md:text-base md:px-1 border-solid border-2 border-indigo-600">
              <td class="md:px-1 text-center border-solid border-2 border-indigo-600">
                1-10
              </td>
              <td class="md:px-1 text-center border-solid border-2 border-indigo-600">
                123%
              </td>
            </tr>
          </table>
        </article>
      </section>

      <section class="flex-wrap justify-center items-center w-full">
        <article class="bg-white p-5 md:w-2/3 h-100vh m-auto p-20">
          <h3 class="md:text-l text-center font-bold">
            Critical User Focused Metrics
          </h3>

          <h4 class="md:text-base italic mt-2">100 Milliseconds</h4>
          <p id="aboutTxt02" className="aboutText md:text-base">
            The limit of feeling an immediate feedback or reaction. Is something
            (text or image rendering) happening?
          </p>

          <h4 class="md:text-base italic mt-2">1000 Milliseconds (1 second)</h4>
          <p class="md:text-base">
            Represents the limit of the user’s flow of thoughts. If nothing
            happens in one second the brain will try and fill the space with a
            thought.{" "}
          </p>

          <h4 class="md:text-base italic mt-2">10 Seconds</h4>
          <p class="md:text-base">
            Represents the limit to keep the user’s attention in a longer
            dialog. It is the limit the user has for their attention regarding
            the task they sought to accomplish. The action it expects to see
            happening.
          </p>
        </article>
        <article class="w-full p-20 bg-white md:h-screen md:w-2/3 m-auto md:p-20">
          <p id="" className="aboutText text-base">
            We improve web performance using modern techniques and best
            practices to not just improve performance metrics, but also the
            user’s perception and satisfaction while reducing abandonment and
            increasing conversion. You know this leads to sales. Or the user
            taking whatever action you are guiding them toward taking.
          </p>
        </article>
      </section>

      <section class="md:flex justify-center items-center w-full">
        <article class="w-full bg-white p-20 md:h-100vh md:w-2/3 m-auto p-20">
          <p id="aboutTxt02" className="aboutText md:text-base">
            Google reports a 20% decrease in web traffic with every half second
            delay. This leads to less search results, which leads to less
            advertisements being displayed. Amazon reports a 1% decrease in
            sales per second of load delay.{" "}
            <a
              href="https://goo.gl/BQ6iW7"
              target="_blank"
              class="md:text-blue-600 md:hover:text-black-900"
              rel="noreferrer"
            >
              https://goo.gl/BQ6iW7
            </a>
          </p>
        </article>
      </section>

      <section class="flex-row  w-full">
        <article class="w-full bg-white md:h-100vh md:w-2/3 m-auto p-20 ">
          <p id="" className="aboutText text-base p-5">
            According to Google’s latest research, the time it takes to load the
            average mobile landing page is 22 seconds.{" "}
            <a
              href="https://www.searchenginejournal.com/google-new-industry-benchmarks-mobile-page-speed/187777/#close"
              target="_blank"
              class="md:text-blue-600 md:hover:text-black-900"
              rel="noreferrer"
            >
              Search Engine Journal
            </a>
          </p>
        </article>

        <article class="w-full bg-white p-5 md:h-100vh md:w-2/3 m-auto p-20">
          <p id="" className="aboutText md:text-base">
            Conversion rate increases 74%, when page load time drops from 8 to 2
            seconds.{" "}
            <a
              href="https://www.truconversion.com/infographics/9-tips-to-reduce-page-load-time-and-improve-website-speed/"
              target="_blank"
              class="md:text-blue-600 md:hover:text-black-900"
              rel="noreferrer"
            >
              True Conversion
            </a>
          </p>
        </article>
      </section>

      <section class="md:flex w-full ">
        <article class="w-full h-100vh bg-white md:w-2/3 m-auto md:p-20">
          <h2 class="md:italic text-base font-bold text-center block bg-white p-10">
            Critical Performance Metrics
          </h2>
          <table class="md:text-xs bg-white md:h-screen md:p-20">
            <tr class="md:p-2 border-black border-2">
              <th class="p-2 border-black border-2">Metric</th>
              <th class="p-2 border-black border-2">Description</th>
              <th class="p-2 border-black border-2">Range</th>
              <th class="p-2 border-black border-2">Weight</th>
            </tr>

            <tr class="md:p-2 border-black border-2">
              <td class="md:p-2 border-black border-2">
                First Contentful Paint
              </td>
              <td class="md:p-2 border-black border-2">
                When the first text or image is painted.
              </td>
              <td class="md:p-2 border-black border-2">
                0-1.8 (fast)
                <br /> 1.8-3 (moderate)
                <br /> 3+ &nbsp; &nbsp; (slow)
              </td>
              <td class="md:p-2 border-black border-2">10%</td>
            </tr>

            <tr class="md:p-2 border-black border-2">
              <td class="md:p-2 border-black border-2">Speed Index</td>
              <td class="md:p-2 border-black border-2">
                How quickly content is visibly populated. It happens very fast,
                but it defines how much blank content the user has seen on the
                screen during the loading process.{" "}
                <span>
                  Resource by High Performance Mobile Web: Best Practices for
                  Optimizing Mobile Web Apps
                </span>
              </td>
              <td class="md:p-2 border-black border-2">
                0-3.4 (fast)
                <br /> 3.4-5.8 (moderate) <br /> 5.8+ &nbsp; &nbsp; (slow)
              </td>
              <td class="md:p-2 border-black border-2">10%</td>
            </tr>

            <tr class="md:p-2 border-black border-2">
              <td class="md:p-2 border-black border-2">
                Largest Contentful Paint
              </td>
              <td class="md:p-2 border-black border-2">
                When the user perceives the largest content of a page is
                visible.
              </td>
              <td class="md:p-2 border-black border-2">
                2.5 or less (fast)
                <br /> 2.5-4 (moderate) <br /> 4+ &nbsp; &nbsp; (slow)
              </td>
              <td class="md:p-2 border-black border-2">25%</td>
            </tr>

            <tr class="md:p-2 border-black border-2">
              <td class="md:p-2 border-black border-2">Time to Interactive</td>
              <td class="md:p-2 border-black border-2">
                user can start interacting with the app.{" "}
              </td>
              <td class="md:p-2 border-black border-2">
                0-3.8 (fast)
                <br /> 3.9-7.3 (moderate) <br /> 7.3+ &nbsp; &nbsp; (slow)
              </td>
              <td class="md:p-2 border-black border-2">10%</td>
            </tr>

            <tr class="md:p-2 border-black border-2">
              <td class="md:p-2 border-black border-2">Total Blocking Time</td>
              <td class="md:p-2 border-black border-2">
                Combines the time for the first contentful paint to be rendered
                and the time to interactive.
              </td>
              <td class="md:p-2 border-black border-2">
                0-200 (fast)
                <br /> 200-600 (moderate) <br /> 600+ &nbsp; &nbsp; (slow)
              </td>
              <td class="md:p-2 border-black border-2">30%</td>
            </tr>

            <tr class="md:p-2 border-black border-2">
              <td class="md:p-2 border-black border-2">
                Cumulative Layout Shift
              </td>
              <td class="md:p-2 border-black border-2">
                Tracks the movement of elements in the viewport if any.
              </td>
              <td class="md:p-2 border-black border-2">
                0.1 or less (good)
                <br /> 200-600 (moderate) <br /> 600+ &nbsp; &nbsp; (slow)
              </td>
              <td class="md:p-2 border-black border-2">15%</td>
            </tr>

            <tr class="md:p-2 border-black border-2">
              <td class="md:p-2 border-black border-2">Time to First Byte</td>
              <td class="md:p-2 border-black border-2">
                When the server answers with the first byte. When the index.html
                file has been sent to the client. Useful to measure server
                performance—specifically let’s you know whether the server is
                taking too much time server-side.{" "}
              </td>
            </tr>
          </table>
        </article>
      </section> */}

      {/* <Footer /> */}
    </>
  );
};
