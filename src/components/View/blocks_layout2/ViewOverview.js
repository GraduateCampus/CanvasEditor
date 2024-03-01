import {useRecoilValue} from "recoil";
import {l2OverviewBoxes} from "../../services/atoms";
import React from "react";
function ViewOverView () {
    const boxes = useRecoilValue(l2OverviewBoxes);
    return (
        <div className="l2OverviewBigBox">
            {boxes.map((box) => (
                <div className="l2OverviewSeperate" key={box.id}>
                    <img src={box.gifLink} alt="Gif" />
                    <div>
                        {box.titles.map((title, index) => (
                            <p className="l2OverviewChapters" key={index}>{index+1}. {title.test}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ViewOverView;
