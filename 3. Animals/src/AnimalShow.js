import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./AnimalShow.css";

import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";

export default function AnimalShow() {
  const [animals, setAnimals] = useState([]);

  const animalImages = [bird, cat, cow, dog, gator, horse];

  const getRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animalImages.length);
    return { id: uuid(), image: animalImages[randomIndex], heartSize: 10 };
  };

  const addAnimal = () => {
    setAnimals((oldAnimals) => [...oldAnimals, getRandomAnimal()]);
  };

  const biggerHeart = (id) => {
    setAnimals((oldAnimals) =>
      oldAnimals.map((animal) =>
        animal.id === id
          ? { ...animal, heartSize: animal.heartSize + 10 }
          : animal,
      ),
    );
  };

  const deleteAnimal = (id) => {
    setAnimals((oldAnimals) => oldAnimals.filter((animal) => animal.id !== id));
  };

  return (
    <div className="container">
      <button className="button" onClick={addAnimal}>
        Add Animal
      </button>

      <div className="animal-list">
        {animals.map((animal, i) => (
          <div className="animal-box">
            <img
              src={animal.image}
              alt="animal"
              className="animal"
              onClick={() => deleteAnimal(animal.id)}
            />

            <img
              src={heart}
              alt="heart"
              className="heart"
              style={{ width: animal.heartSize + "px" }}
              onClick={() => biggerHeart(animal.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
