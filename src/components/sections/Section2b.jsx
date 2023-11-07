/* eslint-disable react/no-unescaped-entities */
import CreditCardIcon from "@mui/icons-material/CreditCard";


function App() {
  return (
    <div data-aos="fade-up" className="md:h-[65vh] bg-[#18172B]">
      <div className="w-10/12 shadow-lg py-[5rem] px-[4rem] md:translate-y-[-8rem] flex flex-col gap-5 bg-white mx-auto ">
        <div>
          <small className="text-amber-600">What we'll do</small>
          <h3 className="text-3xl my-2 font-semibold md:w-8/12">
            <span>We'll help to improve your overall finances</span> and provide
            greater peace-of-mind.
          </h3>
          <p className="text-1xl w-10/12">
            We are dedicated to providing you with the best experience possible.
            Read below to find out why the sky's the limit when using
            roboadvisor.com.
          </p>
        </div>
        <div data-aos="fade-up" className="md:flex text-center md:gap-5">
          <div className="group relative">
            <div className="group-hover:bg-amber-500 shadow-md w-[4.3rem] m-auto flex justify-center p-4 rounded-[100%]">
              <CreditCardIcon className="group-hover:text-white " />
            </div>
            <h4 className="text-2xl font-medium">Create Guarantee Income</h4>
            <p>
              Planning for the future begins with planning for income. Once you
              have that problem solved, the desire to take risk diminishes
              significantly.
            </p>
          </div>

          <div className="group  relative">
            <div className="group-hover:bg-amber-500 shadow-md w-[4.3rem] m-auto flex justify-center p-4 rounded-[100%]">
              <CreditCardIcon className="group-hover:text-white " />
            </div>
            <h4 className="text-2xl font-medium">Low-cost Investing</h4>
            <p>
              We'll focus on low-cost investing as long as it makes sense. We
              still believe with all things being equal, performance trumps cost
              every time.
            </p>
          </div>

          <div className="group  relative">
            <div className="group-hover:bg-amber-500 shadow-md w-[4.3rem] m-auto flex justify-center p-4 rounded-[100%]">
              <CreditCardIcon className="group-hover:text-white " />
            </div>
            <h4 className="text-2xl font-medium">Provide Liquidity</h4>
            <p>
              Maintining a strategic position for emergencies and opportunities
              is a foundational principle within our investment philosophy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
