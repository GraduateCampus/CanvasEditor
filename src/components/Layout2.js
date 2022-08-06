import Editor from "./Editor/Editor";
import ViewWelcomeBox from "./View/blocks/ViewWelcomeBox";
import ViewKurseinstieg from "./View/blocks/ViewKurseinstieg";
import React, {useState} from "react";

function Layout2() {

    const [welcomeText, setWelcomeText] = useState('');
    const [kursName, setKursName] = useState('')
    const [kursBeschreibung, setKursbeschreibung] = useState('');

    return (
        <div className="split">
            <div className="split left">
                <Editor/>
            </div>
            <div className="split right">
                <ViewWelcomeBox/>
                <h1>TEST</h1>
            </div>
        </div>
    );
}
export default Layout2;
