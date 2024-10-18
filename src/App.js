import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [persons, setPersons] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{persons.length} birthdays today!</h3>
        <List persons={persons} />
        <div className="flex-con">
          <button onClick={() => setPersons([])}>Clear All</button>
          <button onClick={() => setPersons(data)}>View All</button>
        </div>
      </section>
    </main>
  );
}

export default App;
