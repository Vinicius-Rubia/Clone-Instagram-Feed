import person_1 from "../img/person_1.webp";
import person_2 from "../img/person_2.jpeg";
import person_3 from "../img/person_3.webp";
import person_4 from "../img/person_4.jpeg";
import person_5 from "../img/person_5.jpeg";
import person_6 from "../img/person_6.webp";

import "../styles/components/storys.scss";

const picture_profile = [
  { id: 1, name: "vinicius", picture: person_1 },
  { id: 2, name: "carolina", picture: person_2 },
  { id: 3, name: "ricardo", picture: person_3 },
  { id: 4, name: "vitor", picture: person_4 },
  { id: 5, name: "beatriz", picture: person_5 },
  { id: 6, name: "lucas", picture: person_6 },
  { id: 7, name: "vinicius", picture: person_1 },
  { id: 8, name: "carolina", picture: person_2 },
  { id: 9, name: "ricardo", picture: person_3 },
  { id: 10, name: "vitor", picture: person_4 },
  { id: 11, name: "beatriz", picture: person_5 },
  { id: 12, name: "lucas", picture: person_6 },
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
      <h1>Feed</h1>
    </div>
  );
};

export default Storys;
