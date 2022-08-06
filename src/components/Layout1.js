import Editor from "./Editor/Editor";
import ViewWelcomeBox from "./View/blocks/ViewWelcomeBox";
import ViewKurseinstieg from "./View/blocks/ViewKurseinstieg";
import React, {useState} from "react";
import ViewCanvasNeu from "./View/blocks/ViewCanvasNeu";
import ViewOverView from "./View/blocks/ViewOverView";
import ViewContacts from "./View/blocks/ViewContacts";
import ViewModulplan from "./View/blocks/ViewModulplan";

function Layout1() {
    return (
        <div className="App">
            <div className="split">
                <div className="split left">
                    <Editor/>
                </div>
                <div className="split right">
                    <ViewWelcomeBox />
                    <ViewKurseinstieg />
                    <ViewModulplan />
                    <ViewOverView />
                    <ViewCanvasNeu/>
                    <ViewContacts/>
                </div>
            </div>
        </div>
    );
}
export default Layout1;
