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
        <div className="navbar">
            <ul className="navbar-ul">
                <li className="navbar-li" onClick={() => setShowWelcomeBox(!showWelcomeBox)}>
                    WelcomeBox
                </li>
                {showWelcomeBox && <WelcomeBox /> }

                <li className="navbar-li" onClick={() => setShowDescriptionBox(!showDescriptionBox)}>
                    Kurseinstieg
                </li>
                {showDescriptionBox && <CourseEntry/>}

                <li className="navbar-li" onClick={() => setShowModulplan(!showModulplan)}>
                    Modulplan
                </li>
                {showModulplan && <Modulplan/>}

                <li className="navbar-li" onClick={() => setShowOverview(!showOverview)}>
                    Inhaltsübersicht
                </li>
                {showOverview && <Overview/>}

                <li className="navbar-li" onClick={() => setShowAnsprechperson(!showAnsprechperson)}>
                    Ansprechpersonen
                </li>
                {showAnsprechperson && <Contacts/>}
            </ul>
        </div>
    );
}
export default Editor2;
