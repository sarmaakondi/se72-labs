import { useState } from "react";

import "./App.css";

import SurvivorImage from "./assets/images/Survivor.jpeg";
import ScavengerImage from "./assets/images/Scavenger.jpeg";
import ShadowImage from "./assets/images/Shadow.jpeg";
import TrackerImage from "./assets/images/Tracker.jpeg";
import SharpshooterImage from "./assets/images/Sharpshooter.jpeg";
import MedicImage from "./assets/images/Medic.jpeg";
import EngineerImage from "./assets/images/Engineer.jpeg";
import BrawlerImage from "./assets/images/Brawler.jpeg";
import InfiltratorImage from "./assets/images/Infiltrator.jpeg";
import LeaderImage from "./assets/images/Leader.jpeg";

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: SurvivorImage,
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: ScavengerImage,
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: ShadowImage,
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: TrackerImage,
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: SharpshooterImage,
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: MedicImage,
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: EngineerImage,
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: BrawlerImage,
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: InfiltratorImage,
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: LeaderImage,
    },
  ]);

  return (
    <>
      {zombieFighters.map((zombieFighter, index) => (
        <ul key={index}>
          <li>
            <img
              src={zombieFighter.img}
              alt="zombie fighter placholder image"
            />
          </li>
          <li>{zombieFighter.name}</li>
          <li>Price: {zombieFighter.price}</li>
          <li>Strength: {zombieFighter.strength}</li>
          <li>Agility: {zombieFighter.agility}</li>
          <button>Add</button>
        </ul>
      ))}
    </>
  );
}

export default App;
