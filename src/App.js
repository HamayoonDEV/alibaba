import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.mainapp}>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
