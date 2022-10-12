import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="flex flex-col bg-white mb-8 p-6 rounded-lg border-t-4 border-Blue shadow-xl hover:border-Red">
        <h1 className="font-semibold text-Very-Dark-Blue pb-2 text-lg">{props.title}</h1>
        <p className="text-sm text-Grayish-Blue pb-12">{props.description}</p>
        <img src={`../images/${props.image}`} alt="" className="w-14 self-end"/>
      </div>
    </div>
  );
}
