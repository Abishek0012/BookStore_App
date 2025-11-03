import React from "react";
// import list from "../assets/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Course() {

  // WE ARE DOING IT TO CONNECT THE FRONTEND TO BACKEND
  // SINCE ALL THE ITEM OF list.json HAS BEEN TRANSFER TO book DB SO WE ARE GOING TO USE book INSTEAD OF list.json
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.error(error)
      }
    };
    getBook()
  }, []);
// *************************

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
          <Link className="btn btn-secondary text-white mt-6" to="/">
            Back
          </Link>
        </div>
        <div className="mt-12 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* using book.map instead of list.map cuz we have connected it to database */}
          {book.map((item) => (
            <Cards key={item.id} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
