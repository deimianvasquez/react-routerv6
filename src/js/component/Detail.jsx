import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner.jsx";

const urlBase = "https://rickandmortyapi.com/api/character";

const Detail = () => {
  const { theId } = useParams();
  const navigate = useNavigate()

  const [detail, setDetail] = useState({});
  const [uploadError, setUploadError] = useState(false)

  const {image} = detail

  const getDetail = async () => {
    try {
      let response = await fetch(`${urlBase}/${theId}`);
      let data = await response.json();

      if (response.ok) {
        setDetail(data);
      }else if(response.status == 404){
        setUploadError(true)
        setTimeout(()=>{
          navigate("/")
        }, 3000)
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="card">
            {
              !image ? <Spinner/>:
              <img src={image} className="card-img-top" alt="..." />
            }
            <div className="card-body">
              <h5 className="card-title">{detail.name}</h5>
              <p className="card-text">{detail.species}</p>
              <p className="card-text">{detail.status}</p>
              {
                uploadError && <p>Error</p>
              }
              <Link onClick={()=>navigate(-1)} className="btn btn-primary w-100">
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
