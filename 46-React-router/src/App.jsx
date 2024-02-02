import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Sidebar from "./components/Sidebar";

import "./App.css";
import CreatePost from "./components/Createpost";
import PostList from "./components/PostList";
import PostListProvider from "./stores/Post-List-Store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectTab={selectedTab} setSelectTab={setSelectedTab} />

        <div className="contain">
          <Header />
          <Outlet />

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
