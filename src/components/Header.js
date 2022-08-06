import {
    ContactState,
    KurseinstiegState,
    modalState,
    ModulplanState,
    OverviewState,
    welcomeBoxText,
    welcomeBoxCourse,
    welcomeBoxImage
} from "./services/atoms";
import React, {useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import Modal from "./Modal";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import showHtml from "./View/showHtml";

function Header () {
    const welcomeImage = useRecoilValue(welcomeBoxImage);
    const welcomeText = useRecoilValue(welcomeBoxText);
    const welcomeCourse = useRecoilValue(welcomeBoxCourse);
    const kurseinstieg = useRecoilValue(KurseinstiegState);
    const modulplan = useRecoilValue(ModulplanState);
    const overview = useRecoilValue(OverviewState);
    const contacts = useRecoilValue(ContactState);
    const [html, setHtml] = useState("");
    const [selectedTab,setSelectedTab] = useState(false);
    const [selectedTab2,setSelectedTab2] = useState(false);
    const [selectedTab3,setSelectedTab3] = useState(false);
    const [showModal,setShowModal] = useRecoilState(modalState);

    const showTab = (e) => {
        if (e.target.className === "tab1") {
            setSelectedTab(true);
            setSelectedTab2(false);
        }
        if (e.target.className === "tab2") {
            setSelectedTab(false);
            setSelectedTab2(true);
        }
    }

    const exportData = () => {
        setShowModal(!showModal);
        const exportedHtml = showHtml(
            welcomeImage,
            welcomeText,
            welcomeCourse,
            kurseinstieg,
            modulplan,
            overview,
            contacts
        )
        setHtml(exportedHtml);
    };
    return (
        <div className="App">
            <div className="header">
                <h1>Canvas Pagebuilder</h1>
                <ul className="header-center">
                    <li className="tab1" onClick={(e) => showTab(e)}>
                        Layout 1
                    </li>
                    <li className="tab2" onClick={(e) => showTab(e)}>
                        Layout2
                    </li>
                    <li className="tab3" onClick={(e) => showTab(e)}>
                        Layout 3 Learniac
                    </li>
                </ul>
                <button className="exportbtn" onClick={() => exportData()}>
                    Export
                </button>
            </div>
            {showModal && <Modal>{html}</Modal>}
            {selectedTab && <Layout1/>}
            {selectedTab2 && <Layout2/>}
        </div>
    );
}
/*
function makeNewHtml (welcomeHeader, kursname, kurseinstieg, modulplan, overview, contacts) {
    return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link type="text/css" rel="stylesheet" href="./graduatecampus.css" />
      <title></title>
    </head>
    <body>
      <div class="ganze">
        <div class="headerImageContainer">
          <div class="headerImage" src="${welcomeHeader}" />
        </div>
        <div class="courseStrWrapper">
          <h3 class="viewHeader" style="margin-bottom: 9px">Course Structure</h3>
          <div class="viereck">&nbsp;</div>
          <span class="courseStrText">
          ${kursname}
          </span>
        </div>
        <div class="learningObjectivesContainer">
          <h3 class="viewHeader">Learning Objectives</h3>
          <div class="viereck">&nbsp;</div>
          <div class="learningObjectivesInnerContainer">
            <div class="learningObjectivesItems">
              ${kurseinstieg}
            </div>
            <div class="learningObjectivesVideo">
              <img src="${modulplan}" class="video">
            </div>
          </div>
        </div>
        <div class="coursenavigationWrapper">
          <div class="coursenavigationHeader">Course Navigation</div>
          <div class="viereck">&nbsp;</div>
          ${overview}
        </div>
        <div class="contactsWrapper">
          <div class="coursenavigationHeader">Contacts</div>
          <div class="viereck">&nbsp;</div>
          ${contacts}
        </div>
      </div>
    </body>
  </html>
  `;
 */
export default Header;
