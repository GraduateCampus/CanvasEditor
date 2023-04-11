import ViewWelcomeBox from "./View/blocks_learniac/ViewWelcomeBox";
import Editor3 from "./Editor/Editor3";
import ViewPointWelcome from "./View/blocks_learniac/ViewPointWelcome";
import ViewPointCourse from "./View/blocks_learniac/ViewPointCourse";
import ViewPointLearning from "./View/blocks_learniac/ViewPointLearning";
import ViewPointInfo from "./View/blocks_learniac/ViewPointInfo";
import ViewContact from "./View/blocks_learniac/ViewContact";
import {useRecoilValue} from "recoil";
import {
    learniacPointCourseImage,
    learniacPointInfoImage,
    learniacPointLearningImage, learniacPointUnitsImage,
    learniacPointWelcomeImage, learniacRocketText
} from "./services/atoms";
import ViewPointUnits from "./View/blocks_learniac/ViewPointUnits";
import "./stylesheets/Layout.css";
function Layout3() {
    const rockettext = useRecoilValue(learniacRocketText);
    const image2 = useRecoilValue(learniacPointWelcomeImage);
    const image3 = useRecoilValue(learniacPointCourseImage);
    const image4 = useRecoilValue(learniacPointLearningImage);
    const image5 = useRecoilValue(learniacPointInfoImage);
    const image6 = useRecoilValue(learniacPointUnitsImage);
    return (
        <div className="layout">
            <div className="layout-left">
                <Editor3/>
            </div>
            <div className="layout-right">
                <ViewWelcomeBox/>
                <div className="lvTimeline">
                    <div className="lvTimeline alt"/>
                    <div className="lvContainer lvpWelcome">
                        <div className="lvTimeline-icon">
                            <div className="lvImage">
                                <img className="lvImageIcon" src={image2}/>
                            </div>
                        </div>
                        <div className="lvContent pointWelcomebg">
                            <ViewPointWelcome/>
                        </div>
                    </div>

                    <div className="lvContainer lvpWelcome">
                        <div className="lvTimeline-icon">
                            <div className="lvImage">
                                <img className="lvImageIcon" src={image3}/>
                            </div>
                        </div>
                        <div className="lvContent pointCoursebg">
                            <ViewPointCourse/>
                        </div>
                    </div>

                    <div className="lvContainer lvpWelcome">
                        <div className="lvTimeline-icon">
                            <div className="lvImage">
                                <img className="lvImageIcon" src={image6}/>
                            </div>
                        </div>
                        <div className="lvContent pointUnitsbg">
                            <ViewPointUnits/>
                        </div>
                    </div>

                    <div className="lvContainer lvpWelcome">
                        <div className="lvTimeline-icon">
                            <div className="lvImage">
                                <img className="lvImageIcon" src={image4}/>
                            </div>
                        </div>
                        <div className="lvContent pointLearningbg">
                            <ViewPointLearning/>
                        </div>
                    </div>

                    <div className="lvContainer lvpWelcome">
                        <div className="lvTimeline-icon">
                            <div className="lvImage">
                                <img className="lvImageIcon" src={image5}/>
                            </div>
                        </div>
                        <div className="lvContent pointInfobg">
                            <ViewPointInfo/>
                        </div>
                    </div>
                </div>
                <div className="lvRocketBox">
                    <img className="lvRocket" src="https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Gif-Rakete.gif?raw=true"/>
                    <div className="lvRocketText">
                        {rockettext}
                    </div>
                </div>
                <ViewContact/>
                <img className="learniacLogo" src="https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Learniac.png?raw=true" />
            </div>
        </div>
    );
}
export default Layout3;
