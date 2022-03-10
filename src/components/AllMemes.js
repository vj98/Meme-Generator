import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GenerateMeme from "./GenerateMeme";

const AllMemes = () => {
  const [allMemes, setAllMemes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((result) => setAllMemes(result.data.memes));
  }, []);

  const handleClick = () => {
    navigate("/generate");
  };

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Meme Generator</h1>
        <h4 style={{ textAlign: "center" }}>Select Meme to generate </h4>

        <div className="row">
          {allMemes.map((val, i) => (
            <div className="col-sm-3 pb-2" key={i}>
              <img
                className="img-responsive"
                alt="image"
                width="100%"
                id={`img-${i}`}
                src={val.url}
                height={250}
                style={{ cursor: "pointer", backgroundImage: "cover" }}
                onClick={() => {
                  setUrl(val.url);
                  setOpenModal(true);
                }}
                onMouseEnter={() => {
                  let x = document.getElementById(`img-${i}`);
                  x.style.border = "solid";
                  x.style.padding = "2px";
                  x.style.zIndex = "102";
                }}
                onMouseLeave={() => {
                  let x = document.getElementById(`img-${i}`);
                  x.style.border = "";
                  x.style.padding = "";
                  x.style.zIndex = "";
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {openModal && (
        <GenerateMeme
          openModal={openModal}
          setOpenModal={setOpenModal}
          img={url}
        />
      )}
    </>
  );
};

export default AllMemes;
