import React, {useState} from "react";
import WelcomeBox from "./blocks_layout2/WelcomeBox";
import CourseEntry from "./blocks_layout2/CourseEntry";
import Modulplan from "./blocks_layout2/Modulplan";
import Overview from "./blocks_layout2/Overview";
import Contacts from "./blocks_layout2/Contacts";

function Editor2 ()
{
    const [showWelcomeBox, setShowWelcomeBox] = useState(false);
    const [showDescriptionBox, setShowDescriptionBox] = useState(false);
    const [showModulplan, setShowModulplan] = useState(false);
    const [showOverview, setShowOverview] = useState(false);
    const [showAnsprechperson, setShowAnsprechperson] = useState(false);

    return (
        <nav className="editor-navbar">
            <ul>
                <li>
                    <button className={`editor-button ${showWelcomeBox ? 'active' : ''}`} onClick={() => setShowWelcomeBox(!showWelcomeBox)}>WelcomeBox</button>
                    {showWelcomeBox && <WelcomeBox /> }
                </li>
                <li>
                    <button className={`editor-button ${showDescriptionBox ? 'active' : ''}`} onClick={() => setShowDescriptionBox(!showDescriptionBox)}>Kurseinstieg & Kursnummer</button>
                    {showDescriptionBox && <CourseEntry/>}
                </li>
                <li>
                    <button className={`editor-button ${showModulplan ? 'active' : ''}`} onClick={() => setShowModulplan(!showModulplan)}>Modulplan</button>
                    {showModulplan && <Modulplan/>}
                </li>
                <li>
                    <button className={`editor-button ${showOverview ? 'active' : ''}`} onClick={() => setShowOverview(!showOverview)}>Inhaltsübersicht</button>
                    {showOverview && <Overview/>}
                </li>
                <li>
                    <button className={`editor-button ${showAnsprechperson ? 'active' : ''}`} onClick={() => setShowAnsprechperson(!showAnsprechperson)}>Ansprechpersonen</button>
                    {showAnsprechperson && <Contacts/>}
                </li>
            </ul>
        </nav>
    );
}
export default Editor2;
