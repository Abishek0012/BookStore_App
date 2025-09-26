import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center text-center justify-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here!</span>
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur voluptatem officia eos sed quo? Expedita unde, porro
            tenetur autem deserunt corrupti consectetur saepe at adipisci natus
            recusandae soluta molestias, reiciendis exercitationem! Aspernatur
            tenetur nisi ullam aliquid. Delectus commodi placeat corporis cum
            dolorum! Voluptas inventore laboriosam ratione, quae magni culpa
            recusandae. Aspernatur modi repudiandae illo cum harum? Odio
            molestiae odit tenetur.
          </p>
          <a className="btn btn-secondary text-white mt-6" href="/">Back</a>
        </div>
        <div className="mt-12 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {list.map((item)=><Cards key={item.id} data={item}/>)}
        </div>
      </div>
    </>
  );
}

export default Course;
