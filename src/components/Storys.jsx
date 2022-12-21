import Feed from "./Feed";
import person_2 from "../img/profile_2.svg";
import person_3 from "../img/profile_3.svg";
import person_4 from "../img/profile_4.svg";
import person_5 from "../img/profile_5.svg";
import person_6 from "../img/profile_6.svg";
import person_7 from "../img/profile_7.svg";

import "../styles/components/storys.scss";

const picture_profile = [
  { id: 1, name: "vinicius", picture: person_2 },
  { id: 2, name: "carolina", picture: person_3 },
  { id: 3, name: "ricardo", picture: person_4 },
  { id: 4, name: "vitor", picture: person_5 },
  { id: 5, name: "beatriz", picture: person_6 },
  { id: 6, name: "lucas", picture: person_7 },
  { id: 7, name: "vinicius", picture: person_2 },
  { id: 8, name: "carolina", picture: person_3 },
  { id: 9, name: "ricardo", picture: person_4 },
  { id: 10, name: "vitor", picture: person_5 },
  { id: 11, name: "beatriz", picture: person_6 },
  { id: 12, name: "lucas", picture: person_7 },
];

const Storys = () => {
  return (
    <div id="main">
      <div id="storys">
        {picture_profile.map((profile) => (
          <figure className="picture" key={profile.id}>
            <img src={profile.picture} alt={profile.name} />
            <figcaption>{profile.name}</figcaption>
          </figure>
        ))}
      </div>
      <Feed />
    </div>
  );
};

export default Storys;
