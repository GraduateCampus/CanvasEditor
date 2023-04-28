import {
    ContactState,
    KurseinstiegState,
    modalState,
    ModulplanState,
    OverviewState,
    welcomeBoxText,
    welcomeBoxCourse,
    welcomeBoxImage,
    dataState,
    ContactAvatar,
    Modulbutton,
    learniacWelcomeImage,
    learniacContactsName,
    learniacContactsPhone,
    learniacContactsMobil,
    learniacContactsMail,
    learniacContactsBild,
    learniacPointWelcomeText,
    learniacPointWelcomeImage,
    learniacPointCourseText,
    learniacPointCourseImage,
    learniacPointLearningText,
    learniacPointLearningImage,
    learniacPointInfoText,
    learniacPointInfoImage,
    learniacModulButton,
    welcomeBoxCourse2,
    selectEverything,
    learniacWelcomeText,
    learniacPointWelcomeHeader,
    learniacPointCourseHeader,
    learniacPointLearningHeader,
    learniacPointInfoHeader,
    learniacRocketText,
    learniacContactsHeader,
    learniacContactsHeader2,
    learniacContactsText,
    learniacModulButtonText,
    l2WelcomeBackground,
    l2WelcomeHeadline,
    l2WelcomeCourseName,
    l2WelcomeCourseName2,
    l2CourseEntry,
    l2CourseNr,
    l2Modulplan,
    l2BoxesState,
    l2BoxGifLinkState,
    l2BoxGifTitlesState,
    l2ContactBoxes,
    l2ContactIcon,
    l2ContactName,
    l2ContactDescription,
    l2ContactMail,
    learniacPointUnitsImage,
    learniacPointUnitsHeader,
    learniacPointUnitsText,
    learniacPointUnits,
    infoModalState,
    learniacPointUnitsNumber,
} from "./services/atoms";
import React, {useState} from "react";
import {useRecoilState, useRecoilValue, useResetRecoilState} from "recoil";
import Modal from "./Modal";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import makeHtml from "./exports/exportHtmlLayout1";
import Layout3 from "./Layout3";
import makeHtml3 from "./exports/exportHtmlLayout3";
import makeHtml2 from "./exports/exportHtmlLayout2";

function Header (index) {
    const resetAtom = useResetRecoilState(selectEverything);
    const [selectedTab,setSelectedTab] = useState(false);
    const [selectedTab2,setSelectedTab2] = useState(false);
    const [selectedTab3,setSelectedTab3] = useState(true);
    const [tab3Text, setTab3Text] = useState("Layout 3 Learniac Deutsch")
    const [showModal,setShowModal] = useRecoilState(modalState);
    const [showInfoModal,setShowInfoModal] = useRecoilState(infoModalState);
    const welcomeImage = useRecoilValue(welcomeBoxImage);
    const welcomeText = useRecoilValue(welcomeBoxText);
    const welcomeCourse = useRecoilValue(welcomeBoxCourse);
    const welcomeCourse2 = useRecoilValue(welcomeBoxCourse2);
    const kurseinstieg = useRecoilValue(KurseinstiegState);
    const modulplan = useRecoilValue(ModulplanState);
    const overview = useRecoilValue(OverviewState);
    const contacts = useRecoilValue(ContactState);
    const avatar = useRecoilValue(ContactAvatar);
    const modulbutton = useRecoilValue(Modulbutton);
    /* Layout 2 States: */
    const l2welcomeBackground = useRecoilValue(l2WelcomeBackground);
    const l2welcomeHeadline = useRecoilValue(l2WelcomeHeadline);
    const l2welcomeCourseName = useRecoilValue(l2WelcomeCourseName);
    const l2welcomeCourseName2 = useRecoilValue(l2WelcomeCourseName2);
    const l2courseEntry = useRecoilValue(l2CourseEntry);
    const l2courseNr = useRecoilValue(l2CourseNr);
    const l2modulplan = useRecoilValue(l2Modulplan);
    const l2boxesState = useRecoilValue(l2BoxesState);
    const l2boxGifLinkState = useRecoilValue(l2BoxGifLinkState(index));
    const l2boxGifTitlesState = useRecoilValue(l2BoxGifTitlesState(index));
    const l2contactBoxes = useRecoilValue(l2ContactBoxes);
    const l2contactIcon = useRecoilValue(l2ContactIcon(index));
    const l2contactName = useRecoilValue(l2ContactName(index));
    const l2contactDescription = useRecoilValue(l2ContactDescription(index));
    const l2contactMail = useRecoilValue(l2ContactMail(index));
    /* Learniac States: */
    const lcWelcomeImage = useRecoilValue(learniacWelcomeImage);
    const lcModulButton = useRecoilValue(learniacModulButton);
    const [lcModulButtonText, setLcModulButtonText] = useRecoilState(learniacModulButtonText);
    const [lcWelcomeText, setLcWelcomeText] = useRecoilState(learniacWelcomeText);
    const [lcPointWelcomeHeader, setLcPointWelcomeHeader] = useRecoilState(learniacPointWelcomeHeader);
    const [lcPointWelcomeText, setLcPointWelcomeText] = useRecoilState(learniacPointWelcomeText);
    const lcPointWelcomeImage = useRecoilValue(learniacPointWelcomeImage);
    const [lcPointCourseHeader, setLcPointCourseHeader] = useRecoilState(learniacPointCourseHeader);
    const [lcPointCourseText, setLcPointCourseText] = useRecoilState(learniacPointCourseText);
    const lcPointCourseImage = useRecoilValue(learniacPointCourseImage);
    const [lcPointUnitsHeader, setLcPointUnitsHeader] = useRecoilState(learniacPointUnitsHeader);
    const [lcPointUnitsText, setLcPointUnitsText] = useRecoilState(learniacPointUnitsText);
    const [lcPointUnits, setLcPointUnits] = useRecoilState(learniacPointUnits);
    const lcPointUnitsNumber = useRecoilValue(learniacPointUnitsNumber);
    const lcPointUnitsImage = useRecoilValue(learniacPointUnitsImage);
    const [lcPointLearningHeader, setLcPointLearningHeader] = useRecoilState(learniacPointLearningHeader);
    const [lcPointLearningText, setLcPointLearningText] = useRecoilState(learniacPointLearningText);
    const lcPointLearningImage = useRecoilValue(learniacPointLearningImage);
    const [lcPointInfoHeader, setLcPointInfoHeader] = useRecoilState(learniacPointInfoHeader);
    const [lcPointInfoText, setLcPointInfoText] = useRecoilState(learniacPointInfoText);
    const lcPointInfoImage = useRecoilValue(learniacPointInfoImage);
    const [lcRocketText, setLcRocketText] = useRecoilState(learniacRocketText);
    const [lcContactsHeader, setLcContactsHeader] = useRecoilState(learniacContactsHeader);
    const [lcContactsHeader2, setLcContactsHeader2] = useRecoilState(learniacContactsHeader2);
    const [lcContactsText, setLcContactsText] = useRecoilState(learniacContactsText);
    const lcContactName = useRecoilValue(learniacContactsName);
    const lcContactPhone = useRecoilValue(learniacContactsPhone);
    const lcContactMobil = useRecoilValue(learniacContactsMobil);
    const lcContactMail = useRecoilValue(learniacContactsMail);
    const lcContactImage = useRecoilValue(learniacContactsBild);
    const [data,setData] = useRecoilState(dataState);

    const showTab = (id) => {
        if (id === "tab1") {
            setSelectedTab(true);
            setSelectedTab2(false);
            setSelectedTab3(false);
        } else
        if (id === "tab2") {
            setSelectedTab(false);
            setSelectedTab2(true);
            setSelectedTab3(false);
        } else
        if (id === "tab3") {
            setSelectedTab(false);
            setSelectedTab2(false);
            setSelectedTab3(true);
        }
    }

    const exportData = () => {
        setShowModal(!showModal);
        const index = makeHtml(welcomeImage,
            welcomeText, welcomeCourse, welcomeCourse2,
            kurseinstieg, modulplan,
            overview, contacts,
            avatar, modulbutton);
        setData(index);
    };
    const exportData2 = () => {
        setShowModal(!showModal);
        const index = makeHtml2(l2welcomeBackground, l2welcomeHeadline,
            l2welcomeCourseName, l2welcomeCourseName2, l2courseEntry, l2courseNr, l2modulplan,
            l2boxesState, l2boxGifLinkState, l2boxGifTitlesState, l2contactBoxes ,l2contactIcon,
            l2contactName, l2contactDescription, l2contactMail);
        setData(index);
    }
    const exportData3 = () => {
        setShowModal(!showModal);
        const index = makeHtml3(lcWelcomeImage, lcWelcomeText,
            lcPointWelcomeHeader, lcPointWelcomeText, lcPointWelcomeImage,
            lcModulButton, lcModulButtonText, lcPointUnitsHeader, lcPointUnitsText,
            lcPointUnits, lcPointUnitsNumber, lcPointUnitsImage, lcPointCourseHeader, lcPointCourseText,
            lcPointCourseImage, lcPointLearningHeader, lcPointLearningText,
            lcPointLearningImage, lcPointInfoHeader, lcPointInfoText, lcPointInfoImage,
            lcRocketText, lcContactsHeader, lcContactsHeader2, lcContactsText, lcContactName,
            lcContactPhone, lcContactMobil, lcContactMail, lcContactImage);
        setData(index);
    }
    const switchLanguage = (e) => {
        document.getElementById("checkLanguage")
        if (e.currentTarget.checked) {
            setTab3Text("Layout 3 Learniac Englisch")
            setLcWelcomeText("Welcome to ")
            setLcPointWelcomeHeader("Welcome to the Course")
            setLcPointWelcomeText("To get started, click on \"Modules\" in the navigation bar on the left.\n" +
                "This will take you to the complete overview of all e-learning units, the so-called learning nuggets.")
            setLcModulButtonText("Go to Modules")
            setLcPointCourseHeader("Course Outline")
            setLcPointCourseText("Work through the learning units in order from top to bottom. At the end of each learning nugget, a short self-assessment is provided for you to check what you have learned. Once you have completed all learning nuggets, you will automatically receive your certificate by e-mail.")
            setLcPointUnitsHeader("Your e-learning units")
            setLcPointUnitsText("The following e-learning units await you:")
            setLcPointLearningHeader("How to study with Learning Nuggets")
            setLcPointLearningText("View a short tutorial on how to learn with the learning nuggets in this course here.")
            setLcPointInfoHeader("Legal Note")
            setLcPointInfoText("You will have access to this course until mid-October 2022. The learning materials are for personal use only. Therefore, please refrain from any other distribution or copying. The learning materials are protected by copyright. Unless explicitly stated otherwise, the copyright is held by Graduate Campus Hochschule Aalen GmbH.")
            setLcRocketText("Have fun and success working on the topics.")
            setLcContactsHeader("Contact")
            setLcContactsHeader2("Course Coordination")
            setLcContactsText("Do you have any questions or suggestions?\n" +
                "Feel free to contact me.")
        } else {
            setTab3Text("Layout 3 Learniac Deutsch")
            resetAtom();
        }
    }
    const handleInfoModal = () => {
        setShowInfoModal(!showInfoModal);
    }
    return (
      <div>
          <nav className="navbarHeader">
              <ul className="navbarHeader-left">
                  <li className="navbarHeader-title">Canvas Editor</li>
                  <li>
                      <button className="infoButton" onClick={handleInfoModal}></button>
                  </li>
              </ul>
              <ul className="navbarHeader-center">
                  <li>
                      <button className={selectedTab ? 'tab-active' : 'tab-hidden'} id="tab1" onClick={() => showTab("tab1")}>
                      <span className="tab-container" id="tab1">
                          <span className="tab-text" id="tab1">Layout 1</span>
                      </span>
                      </button>
                  </li>
                  <li>
                      <button className={selectedTab2 ? 'tab-active' : 'tab-hidden'} id="tab2" onClick={() => showTab("tab2")}>
                      <span className="tab-container" id="tab2">
                          <span className="tab-text" id="tab2">Layout 2</span>
                      </span>
                      </button>
                  </li>
                  <li>
                      <button className={selectedTab3 ? 'tab-active' : 'tab-hidden'} id="tab3" onClick={() => showTab("tab3")}>
                      <span className="tab-container" id="tab3">
                          <span className="tab-text" id="tab3">{tab3Text}</span>
                      </span>
                      </button>
                  </li>
                  <li>
                      <label className="tab4">
                          <input
                              type="checkbox"
                              id="checkLanguage"
                              onChange={e => switchLanguage(e)}
                          />
                          <span className="slider"></span>
                      </label>
                  </li>
              </ul>
              <ul className="navbarHeader-right">
                  <li>
                      {selectedTab &&<button className="exportButton" onClick={exportData}>
                          Export
                      </button>}
                      {selectedTab2 &&<button className="exportButton" onClick={exportData2}>
                          Export
                      </button>}
                      {selectedTab3 &&<button className="exportButton" onClick={exportData3}>
                          Export
                      </button>}
                  </li>
              </ul>
          </nav>
          {showInfoModal &&
              <div className="myModal">
                  <button className="btn-close-modal" onClick={handleInfoModal}>&times;</button>
                  <img className="modal-content" src="https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Infobutton%20CanvasEditor.png?raw=true"/>
              </div>
          }
          {showModal && <Modal>{data}</Modal>}
          {selectedTab && <Layout1/>}
          {selectedTab2 && <Layout2/>}
          {selectedTab3 && <Layout3/>}
      </div>
    );
}
export default Header;
