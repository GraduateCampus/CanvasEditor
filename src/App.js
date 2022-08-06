import React from "react";
import {RecoilRoot} from "recoil";
import Header from "./components/Header";

function App() {
  return (
      <RecoilRoot>
        <div className="App">
          <Header />
        </div>
      </RecoilRoot>
  );
}
export default App;
