import {useRecoilState, useResetRecoilState} from "recoil";
import {
    l2ContactBoxes,
    l2ContactDescription,
    l2ContactIcon,
    l2ContactMail,
    l2ContactName
} from "../../services/atoms";

function Contacts () {
    const [boxes, setBoxes] = useRecoilState(l2ContactBoxes);
    const addBox = () => {
        setBoxes([...boxes, {icon: '', name: '', description: '', mail: ''}]);
    };
    const HandleDeleteBox = (index) => {
        setBoxes((prevBoxes) => {
            const newBoxes = [...prevBoxes];
            newBoxes.splice(index, 1);
            return newBoxes;
        });
        const resetIcon = useResetRecoilState(l2ContactIcon(index));
        resetIcon();
        const resetName = useResetRecoilState(l2ContactName(index));
        resetName();
        const resetDescription = useResetRecoilState(l2ContactDescription(index));
        resetDescription();
        const resetMail = useResetRecoilState(l2ContactMail(index));
        resetMail();
    }
    return (
        <div className="dropdown-form">
            <button className="standardbtn" onClick={addBox}>Add Box</button>
            <div className="overview-ul">
                {boxes.map((box,index)=> (
                    <Box key={index} index={index} handleDeleteBox={HandleDeleteBox}/>
                ))}
            </div>
        </div>
    )
    function Box({index, handleDeleteBox}) {
        const [icon, setIcon] = useRecoilState(l2ContactIcon(index));
        const [name, setName] = useRecoilState(l2ContactName(index));
        const [description, setDescription] = useRecoilState(l2ContactDescription(index));
        const [mail, setMail] = useRecoilState(l2ContactMail(index));
        const handleIconChange = (event) => {
            setIcon(event.target.value);
        };
        const handleNameChange = (event) => {
            setName(event.target.value);
        };
        const handleDescriptionChange = (event) => {
            setDescription(event.target.value);
        };
        const handleMailChange = (event) => {
            setMail(event.target.value);
        };
        return(
            <div className="overview-li">
                <div className="dropdown-form">
                    <button onClick={() => handleDeleteBox(index)} className="standardbtn">Delete Box</button>
                </div>
                <div>
                    <input type="text" value={icon} onChange={handleIconChange} placeholder="Enter Iconlink" />
                </div>
                <div>
                    <input type="text" value={name} onChange={handleNameChange} placeholder="Enter Name" />
                </div>
                <div>
                    <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Enter Description" />
                </div>
                <div>
                    <input type="text" value={mail} onChange={handleMailChange} placeholder="Enter Mail" />
                </div>
            </div>
        )
    }
}
export default Contacts;