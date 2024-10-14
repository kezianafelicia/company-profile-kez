import { useState, useEffect } from "react";
import axios from "axios";
import ITeams from "./interface/teamInterface";
import Cards from "./card";

function Teams() {
  const [teams, setTeams] = useState<ITeams[]>([]);

  const getTeams = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/?results=6");
      setTeams(data.results); // Access the 'results' array in the response
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
<div className="max-w-[1240px] bg-white py-8 px-4">
      <h1 className="text-3xl font-bold text-center">Our Team</h1>
      <p className="text-center mb-6">Meet the amazing people behind our company.</p>

      <div className="  mx-auto md:grid-cols-3 gap-8 grid grid-cols-3 w-full py-[10rem] px-4 text-[#493628]">

        {teams?.map((team, index) => (
          <Cards
            key={index}
            imageUrl={team.picture.large}
            title={`${team.name.first} ${team.name.last}`}
            description={[
              `Email: ${team.email}`,
              `Phone: ${team.phone}`,
            ]}
          />
        ))}
      </div>
    </div>
  );
}

export default Teams;
