import {useRecoilValue} from "recoil";
import {OverviewState} from "../../services/atoms";
function ViewOverView () {
    const overviewObjects = useRecoilValue(OverviewState);
    function courseItem({ icon, title, nuggets, duration}, index) {
        return (
            <div className="vOverView" key={index}>
                <div className="ovgoldcolor">
                    {index+1}
                </div>
                <img alt="not found" className="kapitel" width={"250px"} src={icon} />
                <h1 className="ovTitle" type="text" >
                    {title}
                </h1>
                <label className="ovChapter" type="text">
                    {nuggets}
                </label>
                <label className="ovDuration" type="text">
                    🕑{duration}
                </label>
            </div>
        );
    }
    return (
        <div className="vOverViewTest">
            <div className="vOverViewSeperate">
                {overviewObjects.items.map((nuggets, index) => {
                    return courseItem(nuggets, index);
                })}
            </div>
        </div>
    );
}
export default ViewOverView;
