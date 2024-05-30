import Header from "./components";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import MainContent from "./components/Maincontent";
import style from "./style.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Footer/>
      <MainContent/>
    </div>
  );
}

export default App;
