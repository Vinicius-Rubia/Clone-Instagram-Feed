import { GrHomeRounded, GrSearch, GrMenu } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import logoInstagram from "../img/logo_instagram.png";
import profile from "../img/profile.jpeg";
import "../styles/components/sidebar.scss";

const icons = [
  { id: 1, text: "Página Inicial", icon: <GrHomeRounded /> },
  { id: 2, text: "Pesquisa", icon: <GrSearch /> },
  { id: 3, text: "Explorar", icon: <MdOutlineExplore /> },
  { id: 4, text: "Mensagens", icon: <RiMessengerLine /> },
  { id: 5, text: "Notificações", icon: <AiOutlineHeart /> },
  { id: 6, text: "Criar", icon: <BsPlusSquare /> },
];

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={logoInstagram} alt="Logo Instagram" />
      <ul className="list__icons">
        {icons.map((icon) => (
          <li className="list__icons__item" key={icon.id}>
            <a href="#">
              {icon.icon} {icon.text}
            </a>
          </li>
        ))}
        <li className="profile">
          <a href="#">
            <img src={profile} alt="Profile" /> Perfil
          </a>
        </li>
      </ul>
      <div className="btn-more">
        <a href="#">{<GrMenu />} Mais</a>
      </div>
    </aside>
  );
};

export default Sidebar;
