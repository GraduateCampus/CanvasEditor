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
    learniacWelcomeCourse,
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
    learniacWelcomeCourse2,
    learniacWelcomeCourse3,
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
    learniacContactsHeader2, learniacContactsText, learniacModulButtonText,
} from "./services/atoms";
import React, {useState} from "react";
import {useRecoilState, useRecoilValue, useResetRecoilState} from "recoil";
import Modal from "./Modal";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import makeHtml from "./exportHtmlLayout1";
import Layout3 from "./Layout3";
import makeHtml3 from "./exportHtmlLayout3";

function Header () {
    const resetAtom = useResetRecoilState(selectEverything);
    const [selectedTab,setSelectedTab] = useState(false);
    const [selectedTab2,setSelectedTab2] = useState(false);
    const [selectedTab3,setSelectedTab3] = useState(false);
    const [tab3Text, setTab3Text] = useState("Layout 3 Learniac Deutsch")
    const [showModal,setShowModal] = useRecoilState(modalState);
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

    const lcWelcomeImage = useRecoilValue(learniacWelcomeImage);
    const lcModulButton = useRecoilValue(learniacModulButton);
    const [lcModulButtonText, setLcModulButtonText] = useRecoilState(learniacModulButtonText);
    const [lcWelcomeText, setLcWelcomeText] = useRecoilState(learniacWelcomeText);
    const lcWelcomeCourse = useRecoilValue(learniacWelcomeCourse);
    const lcWelcomeCourse2 = useRecoilValue(learniacWelcomeCourse2);
    const lcWelcomeCourse3 = useRecoilValue(learniacWelcomeCourse3);
    const [lcPointWelcomeHeader, setLcPointWelcomeHeader] = useRecoilState(learniacPointWelcomeHeader);
    const [lcPointWelcomeText, setLcPointWelcomeText] = useRecoilState(learniacPointWelcomeText);
    const lcPointWelcomeImage = useRecoilValue(learniacPointWelcomeImage);
    const [lcPointCourseHeader, setLcPointCourseHeader] = useRecoilState(learniacPointCourseHeader);
    const [lcPointCourseText, setLcPointCourseText] = useRecoilState(learniacPointCourseText);
    const lcPointCourseImage = useRecoilValue(learniacPointCourseImage);
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

    const showTab = (e) => {
        if (e.target.className === "tab1") {
            setSelectedTab(true);
            setSelectedTab2(false);
            setSelectedTab3(false);
        }
        if (e.target.className === "tab2") {
            setSelectedTab(false);
            setSelectedTab2(true);
            setSelectedTab3(false);
        }
        if (e.target.className === "tab3") {
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
        setData(index)
    };
    const exportData2 = () => {
        console.log("hooray")
    }
    const exportData3 = () => {
        setShowModal(!showModal);
        const index = makeHtml3(lcWelcomeImage, lcWelcomeText,
            lcWelcomeCourse, lcWelcomeCourse2, lcWelcomeCourse3,
            lcPointWelcomeHeader, lcPointWelcomeText, lcPointWelcomeImage,
            lcModulButton, lcModulButtonText, lcPointCourseHeader, lcPointCourseText,
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
            setLcWelcomeText("Welcome to the Course")
            setLcPointWelcomeHeader("Welcome to the Course")
            setLcPointWelcomeText("To get started, click on \"Modules\" in the navigation bar on the left.\n" +
                "This will take you to the complete overview of all e-learning units, the so-called learning nuggets.")
            setLcModulButtonText("Go to Modules")
            setLcPointCourseHeader("Course Outline")
            setLcPointCourseText("Work through the learning units in order from top to bottom. At the end of each learning nugget, a short self-assessment is provided for you to check what you have learned. Once you have completed all learning nuggets, you will automatically receive your certificate by e-mail.")
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
                        {tab3Text}
                    </li>
                    <label className="tab4">
                        <input
                            type="checkbox"
                            id="checkLanguage"
                            onChange={e => switchLanguage(e)}
                        />
                        <span className="slider round"></span>
                    </label>
                </ul>
                {selectedTab &&<button className="exportbtn" onClick={exportData}>
                    Export
                </button>}
                {selectedTab2 &&<button className="exportbtn" onClick={exportData2}>
                    Export
                </button>}
                {selectedTab3 &&<button className="exportbtn" onClick={exportData3}>
                    Export
                </button>}
            </div>
            {showModal && <Modal>{data}</Modal>}
            {selectedTab && <Layout1 />}
            {selectedTab2 && <Layout2/>}
            {selectedTab3 && <Layout3/>}
        </div>
    );
}
export default Header;
