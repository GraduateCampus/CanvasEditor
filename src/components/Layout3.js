import ViewWelcomeBox from "./View/blocks_learniac/ViewWelcomeBox";
import Editor3 from "./Editor/Editor3";
import ViewPointWelcome from "./View/blocks_learniac/ViewPointWelcome";
import ViewPointCourse from "./View/blocks_learniac/ViewPointCourse";
import image2 from "../components/images/Element 2.png"
import image3 from "../components/images/Element 3.png"
import image4 from "../components/images/Element 4.png"
import image5 from "../components/images/Element 5.png"
import rakete from "../components/images/Gif-Rakete.gif"
import ViewPointLearning from "./View/blocks_learniac/ViewPointLearning";
import ViewPointInfo from "./View/blocks_learniac/ViewPointInfo";
import ViewContact from "./View/blocks_learniac/ViewContact";

function Layout3() {
    return (
        <div className="split">
            <div className="split left">
                <Editor3/>
            </div>
            <div className="split right">
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
                    <img className="lvRocket" src={rakete}/>
                    <div className="lvRocketText">
                        VIEL SPASS UND ERFOLG BEIM BEARBEITEN DER INHALTE.
                    </div>
                </div>
                <ViewContact/>
            </div>
        </div>
    );
}
export default Layout3;
