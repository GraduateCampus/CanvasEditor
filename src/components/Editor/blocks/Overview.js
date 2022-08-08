import React, {useState} from "react";
import { useRecoilState } from "recoil";
import {OverviewState} from "../../services/atoms";

function Overview() {
    const [courseNavigationstate, setCourseNavigation] =
        useRecoilState(OverviewState);
    const [show, setShow] = useState([true]);
    const makeNewItem = (e) => {
        setCourseNavigation((prev) => ({
            ...prev,
            items: [
                ...prev.items,
                {
                    icon:"",
                    title:"",
                    nuggets:"",
                    duration:"",
                },
            ],
        }));
        e.preventDefault();
        setShow(oldArray => [...oldArray, true]);
    };

    const itemChanged = ({ target: { value, name } }, index) => {
        let items = [...courseNavigationstate.items];
        let item = { ...items[index] };
        item[name] = value;
        items[index] = item;
        setCourseNavigation((prev) => ({
            ...prev,
            items: items,
        }));
    };
    const deleteItem = (event, index) => {
        let items = [...courseNavigationstate.items];
        let newArr = [...show];
        if (index !== -1) {
            items.splice(index, 1);
            newArr.splice(index, 1);
            setCourseNavigation((prev) => ({
                ...prev,
                items: items,
            }));
            setShow(newArr);
        }
        event.preventDefault();
    };
    const showChapter = (event, index) => {
        event.preventDefault();
        let newArr = [...show];
        if (newArr[index] === true) {
            newArr[index] = false;
            setShow(newArr);
        } else {
            newArr[index] = true;
            setShow(newArr);
        }
    }
    function courseItem({ icon,title,nuggets,duration }, index) {
        return (
            <div className="courseItemBigWrapper">
                <div className="buttonsOverview">
                    <button className="standardbtn" onClick={(event) => showChapter(event, index)}>Modulinhalt: {index +1}</button>
                    <button className="submitbtn" onClick={(event) => deleteItem(event, index)}>Delete</button>
                </div>
                {show[index] && <div className="dropdown-form">
                    <div className="ov inputIcon">
                        <div className="ov inputIconName">Icon:</div>
                        <input
                            type="text"
                            name="icon"
                            className="input iconInput"
                            value={icon}
                            onChange={(value) => itemChanged(value, index)}
                        />
                    </div>
                    <div className="ov inputTitle">
                        <div className="ov inputTitleName">Title:</div>
                        <input
                            type="text"
                            name="title"
                            className="input titleInput"
                            value={title}
                            onChange={(value) => itemChanged(value, index)}
                        />
                    </div>
                    <div className="ov inputNuggets">
                        <div className="ov inputNuggetsName">Nuggets:</div>
                        <input
                            type="text"
                            name="nuggets"
                            className="input nuggetsInput"
                            value={nuggets}
                            onChange={(value) => itemChanged(value, index)}
                        />
                    </div>
                    <div className="ov inputDuration">
                        <div className="ov inputDurationName">Duration:</div>
                        <input
                            type="text"
                            name="duration"
                            className="input durationInput"
                            placeholder="Zeit der Nuggets"
                            value={duration}
                            onChange={(value) => itemChanged(value, index)}
                        />
                    </div>
                </div>}
            </div>
        );
    }

    return (
        <ul className="overview-ul">
            <li className="overview-li">
                <div className="editorTextColor">
                    Inhalte:
                </div>
                <form className="dropdown-form">
                    {courseNavigationstate.items.map((item, index) => {
                        return courseItem(item, index);
                    })}
                    <button className="submitbtn" onClick={makeNewItem}>
                        New Item
                    </button>
                </form>
            </li>
        </ul>
    );
}

export default Overview;
