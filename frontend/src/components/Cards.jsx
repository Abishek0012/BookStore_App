import React from 'react'


function Cards({data}) {
  return (
    <>
      <div className="mt-4 my-3 p-3 ">
        <div className="card bg-base-100 w-full h-full shadow-sm transform transition-transform duration-300 hover:scale-110 ">
          <figure>
            <img src={data.image} alt="Books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {data.name}
              <div className="badge badge-secondary">{data.category}</div>
            </h2>
            <p>{data.title}</p>
            <div className="card-actions justify-between items-center">
              <div className="badge badge-outline cursor-pointer hover:bg-pink-600 hover:text-white ">
                {data.price}
              </div>
              <div className="badge badge-outline cursor-pointer  hover:bg-pink-600 hover:text-white ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards