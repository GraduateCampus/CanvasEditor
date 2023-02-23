import React, {useState} from "react";
import WelcomeBox from "./blocks_learniac/WelcomeBox";
import PointWelcome from "./blocks_learniac/PointWelcome";
import PointCourse from "./blocks_learniac/PointCourse";
import PointLearning from "./blocks_learniac/PointLearning";
import PointInfo from "./blocks_learniac/PointInfo";
import Contacts from "./blocks_learniac/Contacts";
function Editor3 ()
{
    const [showWelcomeBox, setShowWelcomeBox] = useState(false);
    const [showPointWelcome, setShowPointWelcome] = useState(false);
    const [showPointCourse, setShowPointCourse] = useState(false);
    const [showPointLearning, setShowPointLearning] = useState(false);
    const [showPointInfo, setShowPointInfo] = useState(false);
    const [showContacts, setShowContacts] = useState(false);

    return (
        <div className="navbar">
            <ul className="navbar-ul">
                <li className="navbar-li" onClick={() => setShowWelcomeBox(!showWelcomeBox)}>
                    WelcomeBox
                </li>
                {showWelcomeBox && <WelcomeBox /> }

                <li className="navbar-li" onClick={() => setShowPointWelcome(!showPointWelcome)}>
                    PointWelcome
                </li>
                {showPointWelcome && <PointWelcome/>}

                <li className="navbar-li" onClick={() => setShowPointCourse(!showPointCourse)}>
                    PointCourse
                </li>
                {showPointCourse && <PointCourse/>}

                <li className="navbar-li" onClick={() => setShowPointLearning(!showPointLearning)}>
                    PointLearning
                </li>
                {showPointLearning && <PointLearning/>}

                <li className="navbar-li" onClick={() => setShowPointInfo(!showPointInfo)}>
                    PointInfo
                </li>
                {showPointInfo && <PointInfo/>}

                <li className="navbar-li" onClick={() => setShowContacts(!showContacts)}>
                    Ansprechperson
                </li>
                {showContacts && <Contacts/>}
            </ul>
        </div>
    );
}
export default Editor3;
