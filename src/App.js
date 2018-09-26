import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

class App extends React.Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "bird",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Rex",
        animal: "dog",
        breed: "Havanese"
      }),
      React.createElement(Pet, {
        name: "Luna",
        animal: "bird",
        breed: "Havanese"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
