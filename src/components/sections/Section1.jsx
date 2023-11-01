import mockup from "../../assets/mockup-video.webm"

const Section1 = () => {
  return (
    <div className="md:flex gap-9 w-10/12 m-auto  py-7">
      <div className="item1 w-9/12 md:col-span-1">
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
      <div className="item2 md:col-span-2">
        <video
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
}

export default Section1;