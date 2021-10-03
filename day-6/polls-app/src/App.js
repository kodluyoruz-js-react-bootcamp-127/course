import React, { useState } from "react";

import Button from "./components/Button/Button";
import PollForm from "./components/PollForm/PollForm";

function App() {
  const [polls, setPolls] = useState([{ name: "poll1", isSaved: false }]);

  const handleCreateNewPoll = () => {
    setPolls([
      ...polls,
      {
        name: "poll",
        isSaved: false,
      },
    ]);
  };

  // const pollsArray = [...Array(pollCount).keys()];
  // console.log(pollsArray);

  return (
    <div className="app-container">
      {polls.map((poll, index) => {
        return <PollForm key={index} isSaved={poll.isSaved} />;
      })}
      <Button text="Create New Poll" onClick={handleCreateNewPoll} />
    </div>
  );
}

export default App;
