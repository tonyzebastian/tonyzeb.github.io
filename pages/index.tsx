import type { NextPage } from "next";
import Head from "next/head";
import ContainerCard from "../components/container-card";

const MacBookAir2: NextPage = () => {
  return (
    <div className="relative bg-lavender w-full overflow-hidden flex flex-row p-[90px] box-border items-center justify-center md:flex-col md:pl-[90px] md:box-border sm:pl-8 sm:pr-8 sm:box-border">
      <main className="w-[1100px] h-[600px] flex flex-row items-center justify-center gap-[64px] md:self-stretch md:w-auto md:flex-1 md:flex-col md:gap-[120px] md:items-center md:justify-between md:pr-[90px] md:pb-0 md:box-border sm:items-start sm:justify-between sm:gap-[0px]">
        <ContainerCard />
        <section className="w-[517px] flex flex-row items-center justify-start md:self-stretch md:w-auto md:items-center md:justify-center md:pl-[90px] md:pr-0 md:box-border sm:hidden sm:flex-1 sm:items-center sm:justify-between sm:gap-[0px]">
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[600px]"
            alt=""
            src="/illustration-1.svg"
          />
        </section>
      </main>
    </div>
  );
};

export default MacBookAir2;
