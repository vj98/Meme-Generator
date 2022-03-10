import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "./GenerateMeme.css";
import * as svg from "save-svg-as-png";

const GenerateMeme = ({ openModal, setOpenModal, img }) => {
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");

  function triggerDownload(imgURI) {
    console.log(imgURI);
    var evt = new MouseEvent("click", {
      view: window,
      bubbles: false,
      cancelable: true,
    });

    var a = document.createElement("a");
    a.setAttribute("download", "MY_COOL_IMAGE.png");
    a.setAttribute("href", imgURI);
    a.setAttribute("target", "_blank");

    a.dispatchEvent(evt);
  }

  function downloadImage() {
    svg.saveSvgAsPng(
      document.getElementsByTagName("svg")[0],
      `Meme-${Math.random(0, 100)}.png`
    );
  }
  return (
    <>
      <Modal
        show={openModal}
        onHide={() => setOpenModal(false)}
        dialogClassName="custom-modal"
        fullscreen={true}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add text to meme</Modal.Title>
        </Modal.Header>
        <div style={{ overflowY: "scroll", maxHeight: "80%" }}>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-6">
                <svg
                  className="svg"
                  height="500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <image
                    xlinkHref={img}
                    height="500"
                    width="100%"
                    className="img-responsive"
                    alt="image"
                  />

                  <text x="150" y="60" id="heavy">
                    {top}
                  </text>
                  <text x="150" y="450" id="heavy">
                    {bottom}
                  </text>
                </svg>
              </div>
              <div className="col-sm-5">
                <div className="row">
                  <h5 className="p-0">Top text</h5>
                </div>
                <div className="row">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Top Text"
                    onChange={(e) => setTop(e.target.value)}
                  />
                </div>
                <div className="row pt-3">
                  <div className="row">
                    <h5 className="p-0">Bottom text</h5>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Bottom Text"
                    onChange={(e) => setBottom(e.target.value)}
                  />
                </div>
                <div className="row pt-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => downloadImage()}
                  >
                    Download Meme!
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
      <canvas id="canvas"></canvas>
    </>
  );
};

export default GenerateMeme;
