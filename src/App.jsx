import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./components/data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.title} {...item} />;
  });

  return (
    <main className="flex flex-col mx-10 my-10">
      <Header />
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col bg-white mb-8 p-6 rounded-lg border-t-4 border-Cyan shadow-xl hover:border-Red lg:max-w-[325px] h-[233px] lg:mr-8 lg:mt-32">
          <h1 className="font-semibold text-Very-Dark-Blue pb-2 text-lg">
            Supervisor
          </h1>
          <p className="text-sm text-Grayish-Blue pb-12">
            Monitors activity to identify project roadblocks
          </p>
          <img
            src="\images\icon-supervisor.svg"
            alt=""
            className="w-14 self-end"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col bg-white mb-8 p-6 rounded-lg border-t-4 border-Red shadow-xl hover:border-Red lg:max-w-[325px] h-[233px]">
            <h1 className="font-semibold text-Very-Dark-Blue pb-2 text-lg">
              Team Builder
            </h1>
            <p className="text-sm text-Grayish-Blue pb-12">
              Scans our talent network to create the optimal team for your
              project
            </p>
            <img
              src="\images\icon-team-builder.svg"
              alt=""
              className="w-14 self-end"
            />
          </div>
          <div className="flex flex-col bg-white mb-8 p-6 rounded-lg border-t-4 border-y-Orange shadow-xl hover:border-Red lg:max-w-[325px] h-[233px]">
            <h1 className="font-semibold text-Very-Dark-Blue pb-2 text-lg">
              Karma
            </h1>
            <p className="text-sm text-Grayish-Blue pb-12">
              Regularly evaluates our talent to ensure quality
            </p>
            <img
              src="\images\icon-karma.svg"
              alt=""
              className="w-14 self-end"
            />
          </div>
        </div>
        <div className="flex flex-col bg-white mb-8 p-6 rounded-lg border-t-4 border-Blue shadow-xl hover:border-Red lg:max-w-[325px] h-[233px] lg:ml-8 lg:mt-32">
          <h1 className="font-semibold text-Very-Dark-Blue pb-2 text-lg">
            Calculator
          </h1>
          <p className="text-sm text-Grayish-Blue pb-12">
            Uses data from past projects to provide better delivery estimates
          </p>
          <img
            src="\images\icon-calculator.svg"
            alt=""
            className="w-14 self-end"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
