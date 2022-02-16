import React from "react";
import "./Card.css";

function Cardcomponent(props) {
  return (
    <div className="card">
      <div className="card_body">
        <img className="card_img" src={props.img} />
        <h2 className="card_title">{props.title}</h2>
        <p className="card_des">{props.description}</p>
      </div>
      <button className="card_btn">View courses</button>
    </div>
  );
}
const Card = () => {
  return (
    <div className="all_crad">
      <Cardcomponent
        img="https://www.onwebmax.com/wp-content/uploads/2019/08/ReactJS.png"
        title="ReactJS"
        description="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
      />
      <Cardcomponent
        img="https://library.kissclipart.com/20181006/uow/kissclipart-logo-icon-java-clipart-logo-java-graphic-design-012636c94a85c9df.png"
        title="java"
        description="Java is an object-oriented programming language that produces software for multiple platforms. When a programmer writes a Java application, the compiled code (known as bytecode) runs on most operating systems (OS), including Windows, Linux and Mac OS."
      />
      <Cardcomponent
        img="https://images.ctfassets.net/3prze68gbwl1/asset-17suaysk1qa1jhl/d276861783e0ab0ffab32afcdc84d597/python-socket-programming.jpg"
        title="python"
        description="What is Python used for?
        Besides web and software development, Python is used for data analytics, machine learning, and even design. We take a closer look at some of the uses of Python, as well as why it's such a popular and versatile programming language."
      />
      <Cardcomponent
        img="https://www.cloudsavvyit.com/p/uploads/2021/02/c123ee3a.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1"
        title="JavaScript"
        description="JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user."
      />
    </div>
  );
};

export default Card;
