import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Inequality and its portrayal in squid game</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://6.vikiplatform.com/image/220415a8e07d4eed9e82373c0962ae6d.jpg?x=b&a=0x0"
              text="Inequality Today"
              label="Adventure"
              path="/Page1"
            />
            <CardItem
              src="https://i.redd.it/f462f9p6yq551.jpg"
              text="Is inequality good or bad?"
              label="Luxury"
              path="/Page2"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-4.png"
              text="Are all players equal in squid games?"
              label="Mystery"
              path="/Page3"
            />
            <CardItem
              src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/01/09/0be537fc-31e0-11ea-9400-58350050ee52_image_hires_131701.JPEG"
              text="Squid game vs reality"
              label="Adventure"
              path="/Page4"
            />
            <CardItem
              src="https://i.guim.co.uk/img/media/5f33b2fb36ae9afba06593ca64898662b483e2a3/0_210_5793_3476/master/5793.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=89e48286a6b4b4694e0602272458f751"
              text="Final insights and conclusion"
              label="Adrenaline"
              path="/Page5"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
