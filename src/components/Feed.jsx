import person_2 from "../img/profile_2.svg";
import person_3 from "../img/profile_3.svg";
import person_4 from "../img/profile_4.svg";
import person_5 from "../img/profile_5.svg";
import person_6 from "../img/profile_6.svg";
import person_7 from "../img/profile_7.svg";
import post_1 from "../img/post_1.png";
import post_2 from "../img/post_2.png";
import post_3 from "../img/post_3.png";
import post_4 from "../img/post_4.png";
import post_5 from "../img/post_5.png";
import post_6 from "../img/post_6.png";
import post_7 from "../img/post_7.png";

import iconOption from "../img/icon_option.svg";
import iconHeart from "../img/icon_heart.svg";
import iconComment from "../img/icon_comment.svg";
import iconShare from "../img/icon_share.svg";
import iconBookMark from "../img/icon_book_mark.svg";
import iconHappy from "../img/icon_happy.svg";

import "../styles/components/feed.scss";

const posts_feed = [
  {
    id: 1,
    name: "vinicius",
    picture: person_2,
    post: post_1,
    likes: "5.520",
    description: "simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    name: "carolina",
    picture: person_3,
    post: post_2,
    likes: "3.189",
    description:
      "when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    name: "ricardo",
    picture: person_4,
    post: post_3,
    likes: "1.347",
    description: "It has survived not only five centuries,",
  },
  {
    id: 4,
    name: "vitor",
    picture: person_5,
    post: post_4,
    likes: "957",
    description:
      "but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 5,
    name: "beatriz",
    picture: person_6,
    post: post_5,
    likes: "38",
    description:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
  },
  {
    id: 6,
    name: "lucas",
    picture: person_7,
    post: post_6,
    likes: "4.150",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 7,
    name: "erick",
    picture: person_7,
    post: post_7,
    likes: "4.150",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const Feed = () => {
  return (
    <>
      {posts_feed.map((post) => (
        <div className="card__feed" key={post.id}>
          <div className="card__feed__top">
            <div>
              <img src={post.picture} alt={post.name} />
              <span>{post.name}</span>
            </div>
            <div>
              <img className="icon" src={iconOption} alt="Option" />
            </div>
          </div>
          <div className="card__content">
            <img
              className="img-post"
              src={post.post}
              alt="Imagem Ilustrativa"
            />
            <div className="card__content__actions">
              <div>
                <img className="icon" src={iconHeart} alt="Option" />
                <img className="icon" src={iconComment} alt="Option" />
                <img className="icon" src={iconShare} alt="Option" />
              </div>
              <div>
                <img className="icon" src={iconBookMark} alt="Option" />
              </div>
            </div>
          </div>
          <div className="card__description">
            <div className="likes">
              {post.likes} <span className="bold">curtidas</span>
            </div>
            <div className="description">
              <span className="bold">{post.name}</span> {post.description}
            </div>
          </div>
          <div className="comments">
            <img className="icon" src={iconHappy} alt="Option" />
            <div>
              <input type="text" placeholder="Adicione um comentário..." />
              <button type="submit">Publicar</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Feed;
