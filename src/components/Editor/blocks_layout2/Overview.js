import {useRecoilState, useResetRecoilState} from "recoil";
import {l2BoxesState, l2BoxGifLinkState, l2BoxGifTitlesState} from "../../services/atoms";

function Overview() {
    const [boxes, setBoxes] = useRecoilState(l2BoxesState);
    const addBox = (e) => {
        e.preventDefault();
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
        <div>
            <div>
            <button className="btn-chapter" onClick={addBox}>Add Box</button>
            </div>
            <div>
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

        const handleAddTitle = (e) => {
            e.preventDefault();
            setGifTitles([...gifTitles, '']);
        };
        const handleDeleteTitle = (titleIndex) => {
            setGifTitles(gifTitles.filter((title, i) => i !== titleIndex));
        };
        return(
            <div className="container">
            <form className="chapter-wrapper">
                <div className="dropdown-form">
                    <button onClick={() => handleDeleteBox(index)} className="btn-delete-chapter">Delete this Box</button>
                </div>
                <input type="text" value={gifLink} onChange={handleLinkChange} placeholder="Enter GIF Link" />
                <div>
                    <button className="btn-new-chapter" onClick={handleAddTitle}>Add Title</button>
                </div>
                <div>
                    <input type="text" value={gifTitles[0]} onChange={(event) => handleTitleChange(event, 0)} placeholder={1 + " Enter GIF Title"} />
                    {gifTitles.slice(1).map((title, titleIndex) => (
                        <div key={titleIndex}>
                            <input type="text" value={title} onChange={(event) => handleTitleChange(event, titleIndex + 1)} placeholder={titleIndex + 2 + " Enter GIF Title"} />
                            <button className="standardbtn" onClick={() => handleDeleteTitle(titleIndex + 1)}>Delete Title</button>
                        </div>
                    ))}
                </div>
            </form>
            </div>
        )
    }
}
export default Overview;