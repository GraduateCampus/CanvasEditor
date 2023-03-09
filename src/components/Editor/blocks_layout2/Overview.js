import {useRecoilState, useResetRecoilState} from "recoil";
import {l2BoxesState, l2BoxGifLinkState, l2BoxGifTitlesState} from "../../services/atoms";

function Overview() {
    const [boxes, setBoxes] = useRecoilState(l2BoxesState);
    const addBox = () => {
        setBoxes([...boxes, { gifLink: '', gifTitles: [''] }]);
    };
    const HandleDeleteBox = (index) => {
        //setBoxes(boxes.filter((_, i) => i !== index));
        setBoxes((prevBoxes) => {
            const newBoxes = [...prevBoxes];
            newBoxes.splice(index, 1);
            return newBoxes;
        });
        const resetGifLinkState = useResetRecoilState(l2BoxGifLinkState(index));
        resetGifLinkState();
        const resetGifTitlesState = useResetRecoilState(l2BoxGifTitlesState(index));
        resetGifTitlesState();
    };
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
        const [gifLink, setGifLink] = useRecoilState(l2BoxGifLinkState(index));
        const [gifTitles, setGifTitles] = useRecoilState(l2BoxGifTitlesState(index));
        const handleLinkChange = (event) => {
            setGifLink(event.target.value);
        };

        const handleTitleChange = (event, titleIndex) => {
            const newTitles = [...gifTitles];
            newTitles[titleIndex] = event.target.value;
            setGifTitles(newTitles);
        };

        const handleAddTitle = () => {
            setGifTitles([...gifTitles, '']);
        };
        const handleDeleteTitle = (titleIndex) => {
            setGifTitles(gifTitles.filter((title, i) => i !== titleIndex));
        };
        return(
            <div className="overview-li">
                <div className="dropdown-form">
                    <button onClick={() => handleDeleteBox(index)} className="standardbtn">Delete Box</button>
                </div>
                <input type="text" value={gifLink} onChange={handleLinkChange} placeholder="Enter GIF Link" />
                <div>
                    <button className="standardbtn" onClick={handleAddTitle}>Add Title</button>
                </div>
                <div>
                    <input type="text" value={gifTitles[0]} onChange={(event) => handleTitleChange(event, 0)} placeholder="Enter GIF Title" />
                    {gifTitles.slice(1).map((title, titleIndex) => (
                        <div key={titleIndex}>
                            <input type="text" value={title} onChange={(event) => handleTitleChange(event, titleIndex + 1)} placeholder="Enter GIF Title" />
                            <button className="standardbtn" onClick={() => handleDeleteTitle(titleIndex + 1)}>Delete Title</button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default Overview;