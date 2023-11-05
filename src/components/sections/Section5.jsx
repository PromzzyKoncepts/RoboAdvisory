import mockup2 from "../../assets/video2.webm";


const Section5 = () => {

  return (
    <div className="w-10/12  py-12 m-auto flex flex-wrap justify-between ">
      <div className="md:w-7/12 w-11/12 col-span-3">
        <div className="flex relative">
          <video
            data-aos="fade-up"
            className="rounded-lg"
            autoPlay
            loop
            muted
            controls={false}
            width="100%"
          >
            <source src={mockup2} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div data-aos="fade-down " className="hidden md:block">
            <div className="w-[20rem] float1 bg-slate-300 opacity-90 rounded p-3  translate-y-[2rem] translate-x-[-11rem] flex gap-3 flex-col">
              <div className="flex justify-between">
                <h3>WealthVest</h3>
                <small>just now</small>
              </div>
              <p>We saved you $78.11 on your taxes.</p>
            </div>

            <div className="float2 w-[20rem] float1 bg-slate-300 opacity-90 rounded p-3  translate-y-[4rem] translate-x-[-13rem] flex gap-3 flex-col ">
              <div className="flex justify-between">
                <h3>WealthVest</h3>
                <small>just now</small>
              </div>
              <p>We automatically invested your $500 deposit.</p>
            </div>
          </div>
        </div>
      </div>

      {/* kindly send this div to the right so that that there  will be space between  */}
      <div data-aos="fade-down" className=" md:w-[21rem] mt-2 md:mt-0  ">
        <h1 className="md:text-5xl text-3xl">Our not-so-secret ingredient? Automation✨</h1>
        <p className=" pb-4 pt-3">
          Keep your eyes on the big picture, your other investments, or
          basically anything besides the busywork. We rebalance your portfolio,
          automatically diversify deposits, and can help save you taxes, all
          without you ever lifting a finger.
        </p>
        <a
          className="  hover:shadow-lg no-underline rounded-md p-3 text-white bg-amber-500"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Section5;
