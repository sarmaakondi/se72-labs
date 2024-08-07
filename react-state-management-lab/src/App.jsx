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
  const [totalAgility, setTotalAgility] = useState(0);
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

  // Calculate and return the team's total agility
  const calculateTeamAgility = (team) => {
    return team.reduce(
      (acc, team) => (team.agility ? acc + team.agility : 0),
      0
    );
  };

  // Calculate and return the team's total strength
  const calculateTeamStrength = (team) => {
    return team.reduce(
      (acc, team) => (team.strength ? acc + team.strength : 0),
      0
    );
  };

  // Handle the change in state while adding a new fighter
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      // Update the state of the team with the newly created array
      const newTeam = [...team, fighter];
      setTeam(newTeam);
      // Subtract the fighter's price from the money and udpate the state
      setMoney(money - fighter.price);
      // Calculate the team's total strength and update the state
      setTotalStrength(calculateTeamStrength(newTeam));
      // Calculate the team's total agility and update the state
      setTotalAgility(calculateTeamAgility(newTeam));
      // Remove the selected fighter from the source data and update the state
      const remainingFighters = zombieFighters.filter(
        (zombieFighter) => zombieFighter !== fighter
      );
      setZombieFighters(remainingFighters);
    } else {
      console.log("Not enough money");
    }
  };

  // Handle the change in state while removing an existing fighter
  const handleRemoveFighter = (fighter) => {
    // Remove the selected fighter from the current team and update the state
    const newTeam = team.filter((currentFighter) => currentFighter !== fighter);
    setTeam(newTeam);
    // Calculate the team's total strength and update the state
    setTotalStrength(calculateTeamStrength(newTeam));
    // Calculate the team's total agility and update the state
    setTotalAgility(calculateTeamAgility(newTeam));
    // Refund the removed fighter's price and update the state
    setMoney(money + fighter.price);
    // Add the figher back to the source data and update the state
    const updatedZombieFighters = [...zombieFighters, fighter];
    setZombieFighters(updatedZombieFighters);
  };

  return (
    <>
      {/* Display header */}
      <h1 id="title">Zombie Fighters</h1>

      <div className="team-stats">
        {/* Display the balance money */}
        <h2>Money: {money}</h2>
        {/* Display the team total strength */}
        <h2>Team Strength: {totalStrength}</h2>
        {/* Display the team total agility */}
        <h2>Team Agility: {totalAgility}</h2>
      </div>

      {/* Display current team or instruction as required */}
      <div className="parent-container">
        <div className="current-fighters">
          <h3>Your Team</h3>
          {team.length === 0 && <p>Pick some team members</p>}
          {team.length > 0 &&
            team.map((fighter, index) => (
              <ul key={index}>
                <div className="fighter-nav">
                  <h4>{fighter.name}</h4>
                  <i
                    onClick={() => handleRemoveFighter(fighter)}
                    className="fa-solid fa-square-xmark"
                  ></i>
                </div>
                <div className="fighter-container">
                  <li>
                    <img
                      src={fighter.img}
                      alt="zombie fighter placholder image"
                    />
                  </li>
                  <div className="fighter-details">
                    <li>Price: {fighter.price}</li>
                    <li>Strength: {fighter.strength}</li>
                    <li>Agility: {fighter.agility}</li>
                  </div>
                </div>
              </ul>
            ))}
        </div>
        {/* Display the available fighters */}
        <div className="available-fighters">
          <h3>Available Fighters</h3>
          {zombieFighters.map((zombieFighter, index) => (
            <ul key={index}>
              <div className="fighter-nav">
                <h4>{zombieFighter.name}</h4>
                <i
                  onClick={() => handleAddFighter(zombieFighter)}
                  className="fa-solid fa-square-plus"
                ></i>
              </div>
              <div className="fighter-container">
                <li>
                  <img
                    src={zombieFighter.img}
                    alt="zombie fighter placholder image"
                  />
                </li>
                <div className="fighter-details">
                  {/* <li>{zombieFighter.name}</li> */}
                  <li>Price: {zombieFighter.price}</li>
                  <li>Strength: {zombieFighter.strength}</li>
                  <li>Agility: {zombieFighter.agility}</li>
                </div>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
