import Suggestions from "./Suggestions";
import profile from "../img/profile_1.svg";

import "../styles/components/aside.scss";

const Aside = () => {
  return (
    <div className="aside">
      <div className="account-user">
        <figure>
          <img src={profile} alt="Imagem de Perfil" />
          <div>
            <h4>vinicius_rubia</h4>
            <span>Vinicius Rubia</span>
          </div>
        </figure>
        <div>
          <button>Mudar</button>
        </div>
      </div>
      <Suggestions />
    </div>
  );
};

export default Aside;
