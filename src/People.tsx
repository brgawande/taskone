import React from "react";

interface Person {
  name: string;
  country: string;
}

interface PeopleProps {
  people: Person[];
}

const People: React.FC<PeopleProps> = ({ people }) => {
  return (
    <div>
      {people.map((person, index) => (
        <table>
          <tbody>
            <tr key={index}>
              <td> {person.name}</td>
              <td> {person.country}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default People;
