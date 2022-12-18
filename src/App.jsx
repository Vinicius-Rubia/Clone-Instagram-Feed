import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./styles/components/app.scss";

function App() {
  return (
    <div id="app">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
