import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Section4 = () => {
  return (
    <div className="bg-slate-50  ">
      <div className="w-10/12 flex flex-wrap py-10 gap-5  flex-col m-auto">
        <div>
          <p className="text-amber-500">
            So if you are thinking about making life more simple…
          </p>
          <h3 className="text-slate-700 text-4xl font-semibold my-1">
            We were thinking the exact same thing
          </h3>
          <p className="text-2xl">
            Set financial goals, create a formal budget, inventory all your
            assets, review your investment strategy, monitor your progress, and
            investment in a low-cost, responsible manner for as low as FREE!
          </p>
        </div>
        <div data-aos="fade-up" className="md:grid md:gap-5   grid-cols-5 ">
          <div className="item  col-span-2">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.dribbble.com/users/1146239/screenshots/14207708/media/8db2fae04e2951f34fb3aadb2dfc4b50.png?resize=1000x750&vertical=center"
                  alt="image 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.dribbble.com/users/182336/screenshots/3845208/dribble_mini_message2.jpg?resize=800x600&vertical=center"
                  alt="image 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.dribbble.com/users/1146239/screenshots/14207708/media/8db2fae04e2951f34fb3aadb2dfc4b50.png?resize=1000x750&vertical=center"
                  alt="image 3"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="text-justify mt-9 md:mt-0 item2 col-span-3">
            <p className="text-amber-500">We have a way…</p>
            <h3 className=" text-slate-700 text-3xl font-semibold my-1">
              We were built for this!
            </h3>
            <p className="text-2xl mb-4">
              Our solution was built to manage your world of finance as well as
              the world you dare to become in a single environment, with a
              single password and around-the-clock access…
            </p>
            <p>
              We have the tools to help you. After we complete the
              data-gathering questionnaire and have identified your goals, you
              will receive a customized asset allocation. Once your new account
              is opened, you can login to Robo Advisor InSight™ and add your
              other accounts so they can be part of a unified experience. Now
              each day, we can measure your progress against those goals and let
              you know if changes should be made
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
