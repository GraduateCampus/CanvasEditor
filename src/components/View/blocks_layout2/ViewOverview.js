import {useRecoilState, useRecoilValue} from "recoil";
import {boxesState, boxGifLinkState, boxGifTitlesState} from "../../services/atoms";

function ViewOverview () {
    const boxes = useRecoilValue(boxesState);
    return (
        <div>
            {boxes.map((box,index)=> (
                <ViewTest key={index} index={index}/>
            ))}
        </div>
    )
    function ViewTest ({index}) {
        const gifLink = useRecoilValue(boxGifLinkState(index));
        const gifTitles = useRecoilValue(boxGifTitlesState(index));

        return (
            <div>
                {gifLink && <img src={gifLink} alt={gifTitles[0]} />}
                {gifTitles.map((title, titleIndex) => (
                    <div key={titleIndex}>{title}</div>
                ))}
            </div>
        );
    }
}
export default ViewOverview;