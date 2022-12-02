import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../component/Spinner.jsx";

const urlBase = "https://rickandmortyapi.com/api";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  const getData = async () => {
    try {
      let response = await fetch(`${urlBase}/character`);

      let data = await response.json();

      if (response.ok) {
        setCharacters(data.results);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {characters.length <= 0 ? (
           <Spinner/>
         
          ) : (
            characters.map((item) => {
              return (
                <div key={item.id} className="col-12 col-md-4 my-3">
                  <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.species}</p>
                      <Link
                        to={`/product/${item.id}`}
                        className="btn btn-primary"
                      >
                        Ver más
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
