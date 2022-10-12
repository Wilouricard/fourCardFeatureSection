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
      {cards}
    </main>
  );
}

export default App;
