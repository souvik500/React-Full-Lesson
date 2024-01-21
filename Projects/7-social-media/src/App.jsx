import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Sidebar from "./components/Sidebar";

import "./App.css";
import CreatePost from "./components/Createpost";
import PostList from "./components/PostList";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-container">
      <Sidebar selectTab="selectedTab" />

      <div className="contain">
        <Header />

        {selectedTab === "Home" ? <PostList /> : <CreatePost />}

        <Footer />
      </div>
    </div>
  );
}

export default App;
