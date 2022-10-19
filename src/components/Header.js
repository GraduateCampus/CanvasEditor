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
    learniacPointInfoImage, learniacWelcomeCourse2, learniacWelcomeCourse3, learniacModulButton, welcomeBoxCourse2
} from "./services/atoms";
import React, {useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import Modal from "./Modal";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import makeHtml from "./exportHtmlLayout1";
import Layout3 from "./Layout3";
import makeHtml3 from "./exportHtmlLayout3";

function Header () {
    const [selectedTab,setSelectedTab] = useState(false);
    const [selectedTab2,setSelectedTab2] = useState(false);
    const [selectedTab3,setSelectedTab3] = useState(false);
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
    const lcWelcomeCourse = useRecoilValue(learniacWelcomeCourse);
    const lcWelcomeCourse2 = useRecoilValue(learniacWelcomeCourse2);
    const lcWelcomeCourse3 = useRecoilValue(learniacWelcomeCourse3);
    const lcPointWelcomeText = useRecoilValue(learniacPointWelcomeText);
    const lcPointWelcomeImage = useRecoilValue(learniacPointWelcomeImage);
    const lcPointCourseText = useRecoilValue(learniacPointCourseText);
    const lcPointCourseImage = useRecoilValue(learniacPointCourseImage);
    const lcPointLearningText = useRecoilValue(learniacPointLearningText);
    const lcPointLearningImage = useRecoilValue(learniacPointLearningImage);
    const lcPointInfoText = useRecoilValue(learniacPointInfoText);
    const lcPointInfoImage = useRecoilValue(learniacPointInfoImage);
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
        const index = makeHtml3(lcWelcomeImage,
            lcWelcomeCourse, lcWelcomeCourse2, lcWelcomeCourse3,
            lcPointWelcomeText, lcPointWelcomeImage, lcModulButton,
            lcPointCourseText, lcPointCourseImage , lcPointLearningText,
            lcPointLearningImage, lcPointInfoText, lcPointInfoImage,
            lcContactName, lcContactPhone, lcContactMobil,
            lcContactMail, lcContactImage);
        setData(index);
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
                        Layout 3 Learniac
                    </li>
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
