import person_1 from "../img/profile_1.svg";

import logoInstagram from "../img/logo_instagram.svg";
import iconHome from "../img/icon_home.svg";
import iconSearch from "../img/icon_search.svg";
import iconExplorer from "../img/icon_explorer.svg";
import iconMessenger from "../img/icon_messenger.svg";
import iconHeart from "../img/icon_heart.svg";
import iconPlus from "../img/icon_plus.svg";
import iconMenu from "../img/icon_menu_hamburger.svg";

import "../styles/components/sidebar.scss";

const icons = [
  { id: 1, text: "Página Inicial", icon: iconHome },
  { id: 2, text: "Pesquisa", icon: iconSearch },
  { id: 3, text: "Explorar", icon: iconExplorer },
  { id: 4, text: "Mensagens", icon: iconMessenger },
  { id: 5, text: "Notificações", icon: iconHeart },
  { id: 6, text: "Criar", icon: iconPlus },
];

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={logoInstagram} alt="Logo Instagram" />
      <ul className="list__icons">
        {icons.map((icon) => (
          <li className="list__icons__item" key={icon.id}>
            <a href="#">
              <img src={icon.icon} alt={icon.text} /> {icon.text}
            </a>
          </li>
        ))}
        <li className="profile">
          <a href="#">
            <img src={person_1} alt="Profile" /> Perfil
          </a>
        </li>
      </ul>
      <div className="btn-more">
        <a href="#">
          <img src={iconMenu} alt="Icon Menu" /> Mais
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
