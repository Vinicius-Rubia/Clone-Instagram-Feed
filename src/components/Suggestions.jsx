import person_2 from "../img/profile_2.svg";
import person_3 from "../img/profile_3.svg";
import person_4 from "../img/profile_4.svg";
import person_5 from "../img/profile_5.svg";
import person_6 from "../img/profile_6.svg";

import "../styles/components/suggestions.scss";

const suggestions = [
  { id: 1, name: "vinicius", picture: person_2 },
  { id: 2, name: "carolina", picture: person_3 },
  { id: 3, name: "ricardo", picture: person_4 },
  { id: 4, name: "vitor", picture: person_5 },
  { id: 5, name: "beatriz", picture: person_6 },
];

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="suggestion">
        <img src={person_2} alt="Imagem de Perfil" />
        <div>
          <span>vinicius_rubia</span>
          <span>Vinicius Rubia</span>
        </div>
        <div>
          <button>Mudar</button>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
