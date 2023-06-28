import React, { Component } from "react";

import { arrGaless } from "../dataGlasses";
export default class Body extends Component {
  state = {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    newArr: [],
  };
  handleChangeGaless = (value) => {
    this.setState({
      ...this.state,
      id: value,
    });
  };
  renderItemGaless = () => {
    return arrGaless.map((item) => {
      let { id, price, name, url, desc } = item;
      return (
        <div className="galessItem" key={id}>
          <button
            onClick={() => {
              this.handleChangeGaless(id);
            }}
          >
            <img width={"80px"} src={url} alt="" />
          </button>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div
          className="page_bg"
          style={{
            // backgroundImage: "url(./Glass/glassesImage/background.jpg)",
            backgroundImage:
              "url(https://static.vecteezy.com/system/resources/previews/007/046/321/non_2x/abstract-tropical-modern-background-with-leaves-geometric-liquid-shapes-fashion-template-for-design-card-flyer-cover-etc-vector.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}
          >
            <div
              className="model_test"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-start",
                marginTop: "80px",
              }}
            >
              <div
                className="model1"
                style={{
                  background: "url(./glassesImage/model.jpg) center no-repeat ",
                  width: "300px",
                  height: "450px",
                }}
              >
                <img src="" alt="" />
              </div>
              <div
                className="model2"
                style={{
                  background: "url(./glassesImage/model.jpg) center no-repeat ",
                  width: "300px",
                  height: "450px",
                }}
              >
                <img
                  style={{ marginTop: "60px", marginLeft: "5px" }}
                  width={"300px"}
                  src={`./glassesImage/v${this.state.id}.png`}
                  alt=""
                />
                <div
                  className="glassDesc text-center text-white"
                  style={{ marginTop: "200px" }}
                ></div>
              </div>
            </div>
            <div
              className="glass"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {this.renderItemGaless()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
