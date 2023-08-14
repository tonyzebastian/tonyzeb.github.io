import type { NextPage } from "next";

const ContainerCard: NextPage = () => {
  return (
    <section className="self-stretch flex-1 flex flex-col items-start justify-center gap-[36px] text-left text-29xl text-gray font-poppins md:flex-[unset] md:self-stretch sm:gap-[32px] sm:items-start sm:justify-between">
      <img
        className="relative w-[50px] h-[50px] overflow-hidden shrink-0"
        alt=""
        src="/logo.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] sm:w-auto sm:[align-self:unset] sm:items-center sm:justify-center">
        <div className="self-stretch flex flex-row items-start justify-start">
          <h1 className="m-0 flex-1 relative text-[inherit] leading-[64px] font-bold font-inherit">
            Hello!
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start text-lg text-midnightblue font-lato">
          <p className="m-0 flex-1 relative leading-[40px] sm:flex-1">
            I'm Tony Sebastian, a product designer based in Bangalore, India.
            I've always been drawn to things that are not just beautiful but
            also engaging and useful. My current focus is to create interactive
            experiences at the intersection of art and design.
          </p>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-lg text-midnightblue font-lato mq350small:flex-col">
        <div className="self-stretch flex flex-row items-center justify-start mq350small:w-auto mq350small:[align-self:unset]">
          <p className="m-0 flex-1 relative leading-[40px]">
            Want to solve a problem together?
          </p>
        </div>
        <div className="flex flex-row items-start justify-start gap-[48px] mq350small:flex-col">
          <a
            className="[text-decoration:none] relative w-6 h-6 overflow-hidden shrink-0"
            href="https://dribbble.com/tonyzebastian"
            target="_blank"
          >
            <img
              className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
          </a>
          <a
            className="[text-decoration:none] relative w-6 h-6"
            href="https://www.figma.com/@tonyzebastian"
            target="_blank"
          >
            <img
              className="absolute h-[89.58%] w-[60.42%] top-[7.29%] right-[19.79%] bottom-[3.12%] left-[19.79%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
          </a>
          <a
            className="[text-decoration:none] relative w-6 h-6 overflow-hidden shrink-0"
            href="https://www.linkedin.com/in/tonyzebastian/"
            target="_blank"
          >
            <img
              className="absolute h-[89.43%] w-[89.21%] top-[6.4%] right-[4.17%] bottom-[4.17%] left-[6.62%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector2.svg"
            />
          </a>
          <a
            className="[text-decoration:none] relative w-6 h-6 overflow-hidden shrink-0"
            href="https://twitter.com/tonyzebastian"
            target="_blank"
          >
            <img
              className="absolute h-[78%] w-[91.7%] top-[11.01%] right-[4.17%] bottom-[10.99%] left-[4.13%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector3.svg"
            />
          </a>
          <a
            className="[text-decoration:none] relative w-6 h-6 overflow-hidden shrink-0"
            href="mailto:tonyzebastian@gmail.com?subject=Hello there!"
          >
            <img
              className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContainerCard;
