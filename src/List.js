import { useState } from "react";

function List({ persons }) {
  const [celebratedPeople, setCelebratedPeople] = useState([]);

  const toggleCelebrate = (id) => {
    setCelebratedPeople((previousArray) =>
      previousArray.includes(id)
        ? previousArray.filter((celebratedPerson) => celebratedPerson !== id)
        : [...previousArray, id]
    );
  };

  return (
    <>
      {persons.map((person) => {
        const { id, name, age, image } = person;
        const isCelebrated = celebratedPeople.includes(id);

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4 className={isCelebrated ? "crossed-txt" : ""}>{name}</h4>
              <p className={isCelebrated ? "crossed-txt" : ""}>{age} years</p>
            </div>
            <button
              id="btn--celebrate"
              className={isCelebrated ? "celebrated" : ""}
              onClick={() => toggleCelebrate(id)}
            >
              {isCelebrated ? "✔️" : "🎉"}
            </button>
          </article>
        );
      })}
    </>
  );
}
export default List;
