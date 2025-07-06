import NameBar from "./components/NameBar";
import SpreadSheet from "./components/SpreadSheet";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import BottomTabs from "./components/BottomTabs";

function App() {
  return (
    <>
      <div>
        <Header />
        <Toolbar />
        <NameBar />
        <SpreadSheet />
        <BottomTabs />
      </div>
    </>
  );
}

export default App;
