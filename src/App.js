import React from "react";
import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";
import {useState} from "react";
import {RecoilRoot} from "recoil";

function App() {
  const [selectedTab,setSelectedTab] = useState('1');

  const SelectedTab = () => {
    if(selectedTab === "1") {
      return <Layout1 />
    }
    if(selectedTab === "2") {
      return <Layout2 />
    }
  }

  return (
      <RecoilRoot>
        <div className="App">
          <div className="header">
            <h1>Canvas Pagebuilder</h1>
            <ul className="header-center">
              <li onClick={() => setSelectedTab("1")}>
                Layout 1
              </li>
              <li onClick={() => setSelectedTab("2")}>
                Layout 2
              </li>
              <li>
                Layout 3 nope
              </li>
            </ul>
            <button className="exportbtn">
              Export
            </button>
          </div>
          {SelectedTab()}
        </div>
      </RecoilRoot>
  );
}

export default App;
