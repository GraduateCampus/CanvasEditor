import Editor from "./Editor/Editor";
import ViewWelcomeBox from "./View/blocks/ViewWelcomeBox";
import ViewKurseinstieg from "./View/blocks/ViewKurseinstieg";
import React, {useState} from "react";
import ViewModulplan from "./View/blocks/ViewModulplan";
import ViewOverView from "./View/blocks/ViewOverView";
import ViewCanvasNeu from "./View/blocks/ViewCanvasNeu";
import ViewContacts from "./View/blocks/ViewContacts";

function Layout2(layout1, layout2) {

    const [welcomeText, setWelcomeText] = useState('');
    const [kursName, setKursName] = useState('')
    const [kursBeschreibung, setKursbeschreibung] = useState('');

    return (
        <div className="split">
            <div className="split left">
                <Editor layout1={layout1} layout2={layout2}/>
            </div>
            <div className="split right">
                <ViewWelcomeBox/>
                <ViewKurseinstieg/>
                <ViewModulplan/>
                <ViewOverView/>
                <ViewCanvasNeu/>
                <ViewContacts/>
            </div>
        </div>
    );
}
export default Layout2;
