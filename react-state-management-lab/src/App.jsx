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
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [team, setTeam] = useState([]);
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

  const calculateTeamStrength = (team) => {
    return team.reduce(
      (acc, team) => (team.strength ? acc + team.strength : 0),
      0
    );
  };

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      const newTeam = [...team, fighter];
      setTeam(newTeam);
      setMoney(money - fighter.price);
      setTotalStrength(calculateTeamStrength(newTeam));
    } else {
      console.log("Not enough money");
    }
  };

  return (
    <>
      {/* Display the balance money */}
      <h3>Money: {money}</h3>

      {/* Display the current team strength */}
      <h3>Team Strength: {totalStrength}</h3>

      {/* Display current team or instruction as required */}
      <h2>Your Team</h2>
      {team.length === 0 && <p>Pick some team members</p>}
      {team.length > 0 &&
        team.map((fighter, index) => (
          <ul key={index}>
            <li>
              <img src={fighter.img} alt="zombie fighter placholder image" />
            </li>
            <li>{fighter.name}</li>
            <li>Price: {fighter.price}</li>
            <li>Strength: {fighter.strength}</li>
            <li>Agility: {fighter.agility}</li>
          </ul>
        ))}

      {/* Display the available fighters */}
      <h2>Available Fighters</h2>
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
          <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
        </ul>
      ))}
    </>
  );
}

export default App;
