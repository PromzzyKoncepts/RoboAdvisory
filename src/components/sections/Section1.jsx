import { useEffect } from "react";
import mockup from "../../assets/mockup-video.webm";
import AOS from "aos";
import "aos/dist/aos.css";

const Section1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="md:flex md:flex-nowrap  md:items-start md:justify-start md:gap-9 w-10/12 m-auto  py-7">
      <div data-aos="fade-right" className="item1 md:w-[80%] md:col-span-1">
        <h1 className="text-6xl font-bold text-left italic">
          There’s no secret to long-term wealth, but if there were it would be
          this:
          <span className="text-slate-600 font-bold">
            {" "}
            <br></br>automated index investing.
          </span>
        </h1>
        <p className="py-7">
          Even with the inevitable ups and downs of the market, our
          expert-built, globally-diversified Automated Investing Account makes
          it easy to start building long-term wealth by managing your risk,
          maximizing returns, and minimizing taxes.
        </p>
        <a
          href="https://www.wealthfront.com/start/account-type?intent=investing"
          className="  hover:shadow-lg no-underline rounded-md p-3 text-white bg-amber-500"
        >
          Get started
        </a>
      </div>
      <div className="item2 mt-5 md:mt-0 md:col-span-2">
        <video
          data-aos="fade-down"
          className="rounded-lg"
          autoPlay
          loop
          muted
          controls={false}
          width="100%"
        >
          <source src={mockup} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Section1;
