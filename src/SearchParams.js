import React, { Component } from "react";
import { ANIMALS } from "petfinder-client";

class SearchParams extends Component {
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: ""
  };

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleAnimalChange = event => {
    this.setState({
      animal: event.target.value
    });
  };

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={this.state.location}
            placeholder="location"
            onChange={this.handleLocationChange}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={this.state.animal}
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
          >
            {ANIMALS.map(animal => (
              <option key={animal} value={this.state.animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

export default SearchParams;
