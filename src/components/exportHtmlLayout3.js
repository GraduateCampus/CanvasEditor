import {useRecoilValue} from "recoil";
import {learniacPointUnits} from "./services/atoms";

export default function makeHtml3(lcWelcomeImage, lcWelcomeText, lcWelcomeCourse,
                                  lcWelcomeCourse2, lcWelcomeCourse3, lcPointWelcomeHeader,
                                  lcPointWelcomeText, lcPointWelcomeImage, lcModulbutton,
                                  lcModulButtonText, lcPointUnitsHeader, lcPointUnitsText,
                                  lcPointUnits, lcPointUnitsImage, lcPointCourseHeader, lcPointCourseText,
                                  lcPointCourseImage, lcPointLearningHeader, lcPointLearningText,
                                  lcPointLearningImage, lcPointInfoHeader, lcPointInfoText,
                                  lcPointInfoImage, lcRocketText, lcContactsHeader, lcContactsHeader2,
                                  lcContactsText, lcContactName, lcContactPhone,
                                  lcContactMobil, lcContactMail, lcContactImage) {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link type="text/css" rel="stylesheet" href="graduatecampus.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Oswald:wght@300;400&display=swap" rel="stylesheet">
    </head>
    <body>
    <div class="everything">
        <div class="lvWelcomeBox">
            <span class="lvWelcomeCourse">${lcWelcomeText}</span>
                    <span class="lvWelcomeHeadline line1">${lcWelcomeCourse}</span>
                    <span class="lvWelcomeHeadline line2">${lcWelcomeCourse2}</span>
                    <span class="lvWelcomeHeadline line3">${lcWelcomeCourse3}</span>
                <img class="lvHeaderimage" src=${lcWelcomeImage}/>
        </div>
        <div class="lvTimeline">
            <div class="lvContainer">
                <div class="lvTimeline-icon">
                    <div class="lvImage">
                        <img class="lvImageIcon" src="${lcPointWelcomeImage}"/>
                    </div>
                </div>            
                <div class="lvContent pointWelcomebg">
                    <h1 class="lvPointWelcomeHeader contentHeadline">${lcPointWelcomeHeader}</h1>
                    <div class="lvPointWelcomeText contentText">${lcPointWelcomeText}</div>
                    <div class="lvButtonBox button1">
                        <a href="/courses/${lcModulbutton}/modules" class="lvModulButton">${lcModulButtonText}</a>
                    </div>
                </div>
            </div>
            <div class="lvContainer">
                <div class="lvTimeline-icon">
                    <div class="lvImage">
                        <img class="lvImageIcon" src="${lcPointCourseImage}"/>
                    </div>
                </div>
                <div class="lvContent pointCoursebg">
                    <h1 class="lvPointCourseHeader contentHeadline">${lcPointCourseHeader}</h1>
                    <div class="lvPointCourseText contentText">${lcPointCourseText}</div>
                </div>         
            </div>
            <div class="lvContainer">
                <div class="lvTimeline-icon">
                    <div class="lvImage">
                        <img class="lvImageIcon" src="${lcPointUnitsImage}"/>
                    </div>
                </div>
                <div class="lvContent pointUnitsbg">
                    <h1 class="lvPointUnitsHeader contentHeadline">${lcPointUnitsHeader}</h1>
                    <div class="lvPointUnitsText">${lcPointUnitsText}</div>
                        ${makeUnits(lcPointUnits)}
                </div>         
            </div>
            <div class="lvContainer">
                <div class="lvTimeline-icon">
                    <div class="lvImage">
                        <img class="lvImageIcon" src="${lcPointLearningImage}"/>
                    </div>
                </div>
                <div class="lvContent pointLearningbg">
                    <h1 class="lvPointLearningHeader contentHeadline">${lcPointLearningHeader}</h1>
                    <div class="lvPointLearningText contentText">${lcPointLearningText}</div>
                    <div class="lvButtonBox button2">
                        <a href="https://graduatecampus.instructure.com/files/56220/download?download_frd=1" class="lvDownload">Download</a>
                    </div>
                </div>            
            </div>
            <div class="lvContainer">
                <div class="lvTimeline-icon">
                    <div class="lvImage">
                        <img class="lvImageIcon" src="${lcPointInfoImage}"/>
                    </div>
                </div>    
                <div class="lvContent pointInfobg">
                    <h1 class="lvPointInfoHeader contentHeadline">${lcPointInfoHeader}</h1>
                    <div class="lvPointInfoText contentText">${lcPointInfoText}</div>
                </div>        
            </div>
        </div>
        <div class="lvRocketBox">
            <img class="lvRocket" src="https://github.com/Electressic/CanvasEditor/blob/main/src/components/images/Gif-Rakete.gif?raw=true"/>
            <div class="lvRocketText">
                ${lcRocketText}
            </div>
        </div>
        <div class="lvContactBox">
            <div class="boxPadding">
                <div class="lvcTitle">
                    ${lcContactsHeader}
                </div>
                <div class="lvContactMiniBox">
                    <div class="lvContactTextBox lvcolumn1">
                        <div class="lvContactTitle">${lcContactsHeader2}</div>
                        <div class="lvContactName">${lcContactName}</div>
                        <div class="lvContactText">
                            ${lcContactsText}
                        </div>
                        <div class="lvContactPhone">${lcContactPhone}</div>
                        <div class="lvContactMobil">${lcContactMobil}</div>
                        <a href="mailto:${lcContactMail}" class="lvContactMail">${lcContactMail}</a>
                    </div>
                    <div class="imageBox lvcolumn2">
                        <img class="lvContactBild" src="${lcContactImage}"/>
                    </div>
                </div>
            </div>
        </div>
        <img class="learniacLogo" src="https://github.com/Electressic/CanvasEditor/blob/main/src/components/images/Element%206.png?raw=true" />
    </div>
    </body>
    </html>
    `;
}
function makeUnits(lcPointUnits) {
    let unitBox = `<ul class="lvPointUnits contentText">`;
    lcPointUnits.map((units, index) => {
        let newUnits =`    
                        <li>${index+1}.&emsp;${units}</li>`;
        unitBox += newUnits;
    });
    unitBox +=`
                        </ul>`;
    return unitBox;
}