// import Suggestions from "./Suggestions";
import profile from "../img/profile_1.svg";
import person_2 from "../img/profile_2.svg";
import person_3 from "../img/profile_3.svg";
import person_4 from "../img/profile_4.svg";
import person_5 from "../img/profile_5.svg";
import person_6 from "../img/profile_6.svg";

const suggestions = [
  { id: 1, name: "vinicius", picture: person_2, followInCommon: "Seguido(a) por agatha_luz e mais..." },
  { id: 2, name: "carolina", picture: person_3, followInCommon: "Seguido(a) por alice_oliveira e mais..." },
  { id: 3, name: "ricardo", picture: person_4, followInCommon: "Seguido(a) por helena_fer e mais..." },
  { id: 4, name: "vitor", picture: person_5, followInCommon: "Seguido(a) por maurinha e mais..." },
  { id: 5, name: "beatriz", picture: person_6, followInCommon: "Seguido(a) por mariaa_helen e mais..." },
];

import "../styles/components/aside.scss";

const Aside = () => {
  return (
    <div className="aside">
      <div className="account-user">
        <div className="content">
          <img src={profile} alt="Imagem de Perfil" />
          <div>
            <h4 className="title">vinicius_rubia</h4>
            <span className="description">Vinicius Rubia</span>
          </div>
        </div>
        <div>
          <a href="#" className="btn-link">
            Mudar
          </a>
        </div>
      </div>
      <div className="suggestion">
        <span className="title">Sugestões para você</span>
        <a href="#" className="title">
          Ver tudo
        </a>
      </div>
      <div className="suggestions">
        {suggestions.map((item) => (
          <div className="suggestion" key={item.id}>
            <div className="content">
              <img src={item.picture} alt="Imagem de Perfil" />
              <div>
                <h4 className="title">{item.name}</h4>
                <span className="description">{item.followInCommon}</span>
              </div>
            </div>
            <div>
              <a href="#" className="btn-link">
                Seguir
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="about">
        <ul className="list-links">
          <li className="links">
            <a href="#">Sobre</a>
          </li>
          <li className="links">
            <a href="#">Ajuda</a>
          </li>
          <li className="links">
            <a href="#">Imprensa</a>
          </li>
          <li className="links">
            <a href="#">API</a>
          </li>
          <li className="links">
            <a href="#">Carreiras</a>
          </li>
          <li className="links">
            <a href="#">Privacidade</a>
          </li>
          <li className="links">
            <a href="#">Termos</a>
          </li>
          <li className="links">
            <a href="#">Localizações</a>
          </li>
          <li className="links">
            <a href="#">Idioma</a>
          </li>
          <span className="copyright">&copy; 2022 INSTAGRAM DO META</span>
        </ul>
      </div>
    </div>
  );
};

export default Aside;
