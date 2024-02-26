import {l1OverviewBoxes} from "../../services/atoms";
import {useRecoilValue} from "recoil";
function ViewOverview () {
    const boxes = useRecoilValue(l1OverviewBoxes);
    return (
        <div className="l1OverViewBox">
            {boxes.map((box,index) => (
                <div className="l1OverviewCard" key={box.id}>
                    <div className="l1OverviewNumber">
                        {index+1}
                    </div>
                    <div className="l1OverviewIcon">
                        <img src={box.icon} alt="Gif" />
                    </div>
                    <h1>{box.title}</h1>
                    <div className="l1OverviewTextbox">
                        <span>{box.nuggets}</span>
                        <span>
                            <img src="https://github.com/Electressic/CanvasEditor/blob/main/src/components/images/Zeit-Icon.png?raw=true" />
                            {box.duration}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default ViewOverview;