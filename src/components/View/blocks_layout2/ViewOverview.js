import {useRecoilState, useRecoilValue} from "recoil";
import {l2BoxesState, l2BoxGifLinkState, l2BoxGifTitlesState} from "../../services/atoms";

function ViewOverview () {
    const boxes = useRecoilValue(l2BoxesState);
    return (
        <div className="l2OverviewBigBox">
            {boxes.map((box,index)=> (
                <ViewTest key={index} index={index}/>
            ))}
        </div>
    )
    function ViewTest ({index}) {
        const gifLink = useRecoilValue(l2BoxGifLinkState(index));
        const gifTitles = useRecoilValue(l2BoxGifTitlesState(index));

        return (
            <div className="l2OverviewSeperate">
                {gifLink && <img src={gifLink} alt={gifTitles[0]} />}
                {gifTitles.map((title, titleIndex) => (
                    <div className="l2OverviewChapters" key={titleIndex}>{title}</div>
                ))}
            </div>
        );
    }
}
export default ViewOverview;