import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";
import { Consumer } from "./SearchContext";
import SearchBox from "./SearchBox";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends React.Component {
  state = {
    pets: []
  };

  componentDidMount() {
    this.search();
  }

  search = () => {
    const { location, animal, breed } = this.props.searchParams;
    console.log(animal, location, breed);
    petfinder.pet
      .find({
        output: "full",
        location: location,
        animal: animal,
        breed: breed
      })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({ pets });
      });
  };

  render() {
    const { pets } = this.state;
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              key={pet.id}
              id={pet.id}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}

export default function ResultsWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
}
