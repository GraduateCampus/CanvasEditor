import {
    ContactState,
    KurseinstiegState,
    modalState,
    ModulplanState,
    OverviewState,
    welcomeBoxText,
    welcomeBoxCourse,
    welcomeBoxImage, dataState, ContactAvatar, Modulbutton
} from "./services/atoms";
import React, {useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import Modal from "./Modal";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";
import makeHtml from "./exportHtml";

function Header () {
    const [selectedTab,setSelectedTab] = useState(false);
    const [selectedTab2,setSelectedTab2] = useState(false);
    const [selectedTab3,setSelectedTab3] = useState(false);
    const [showModal,setShowModal] = useRecoilState(modalState);
    const welcomeImage = useRecoilValue(welcomeBoxImage);
    const welcomeText = useRecoilValue(welcomeBoxText);
    const welcomeCourse = useRecoilValue(welcomeBoxCourse);
    const kurseinstieg = useRecoilValue(KurseinstiegState);
    const modulplan = useRecoilValue(ModulplanState);
    const overview = useRecoilValue(OverviewState);
    const contacts = useRecoilValue(ContactState);
    const avatar = useRecoilValue(ContactAvatar);
    const modulbutton = useRecoilValue(Modulbutton);
    const [data,setData] = useRecoilState(dataState);

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
        const index = makeHtml(welcomeImage,
            welcomeText, welcomeCourse,
            kurseinstieg, modulplan,
            overview, contacts,
            avatar, modulbutton);
        setData(index)
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
                <button className="exportbtn" onClick={exportData}>
                    Export
                </button>
            </div>
            {showModal && <Modal>{data}</Modal>}
            {selectedTab && <Layout1 layout1={selectedTab} layout2={selectedTab2}/>}
            {selectedTab2 && <Layout2 layout1={selectedTab} layout2={selectedTab2}/>}
        </div>
    );
}
export default Header;
