import Storys from "./Storys";

import "../styles/components/maincontent.scss";
import Aside from "./Aside";

const MainContent = () => {
  return (
    <main id="main__content">
      <Storys />
      <Aside />
    </main>
  );
};

export default MainContent;
