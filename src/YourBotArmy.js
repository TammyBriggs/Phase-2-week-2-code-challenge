import React, { useState } from 'react';
import BotCollection from './BotCollection';

function YourBotArmy() {
    const [enlistedBots, setEnlistedBots] = useState([]);
  
    function enlistBot(bot) {
      if (!enlistedBots.includes(bot)) {
        setEnlistedBots([...enlistedBots, bot]);
      } 
    }

    function releaseBot(bot) {
        const newEnlistedBots = enlistedBots.filter(b => b.id !== bot.id);
        setEnlistedBots(newEnlistedBots);
    }
  
    return (
      <div>
        <h1>Your Bot Army</h1>
        <div className="card-container">
          {enlistedBots.map(bot => (
            <div key={bot.id} className="card" onClick={() => releaseBot(bot)}>
              <img src={bot.avatar_url} alt={bot.name} />
              <div className="card-content">
                <h2>{bot.name}</h2>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
                <p>Class: {bot.bot_class}</p>
                <p>Catchphrase: {bot.catchphrase}</p>
              </div>
            </div>
          ))}
        </div>
        <BotCollection onEnlistBot={enlistBot} />
      </div>
    );
  }
  
  export default YourBotArmy;