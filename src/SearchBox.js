import React, { Component } from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

class SearchBox extends Component {
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.search();
  };

  render() {
    return (
      <Consumer>
        {context => (
          <form onSubmit={this.handleFormSubmit}>
            <div className="search-params">
              <label htmlFor="location">
                Location
                <input
                  type="text"
                  id="location"
                  value={context.location}
                  placeholder="location"
                  onChange={context.handleLocationChange}
                />
              </label>
              <label htmlFor="animal">
                Animal
                <select
                  name="animal"
                  id="animal"
                  value={context.animal}
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
                >
                  <option />
                  {ANIMALS.map(animal => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="breed">
                breed
                <select
                  name=""
                  id="breed"
                  value={context.breed}
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                  disabled={!context.breeds.length}
                >
                  <option />
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </label>
              <button>Submit</button>
            </div>
          </form>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;
