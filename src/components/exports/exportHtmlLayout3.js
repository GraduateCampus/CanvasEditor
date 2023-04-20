export default function makeHtml3(lcWelcomeImage, lcWelcomeText, lcPointWelcomeHeader,
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
        <title>LEARNIAC</title>
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
        <div class="lvWelcomeBox col-11">
            <span class="lvWelcomeCourse">${lcWelcomeText}</span>
                <img class="lvHeaderimage" alt="HeaderImage" src=${lcWelcomeImage}/>
        </div>
        <div class="lvTimeline col-11">
            <div class="lvContainer">
                <div class="lvTimeline-iconBox">
                        <img class="lvIcon" alt="Icon: winkende Hand" src="${lcPointWelcomeImage}"/>
                </div>            
                <div class="lvContent pointWelcomebg">
                    <h1 class="lvPointWelcomeHeader contentHeadline">${lcPointWelcomeHeader}</h1>
                    <div class="lvPointWelcomeText contentText">${lcPointWelcomeText}</div>
                        <a href="/courses/${lcModulbutton}/modules" class="lvModulButton">${lcModulButtonText}</a>
                </div>
            </div>
            <div class="lvContainer">
                <div class="lvTimeline-iconBox">
                        <img class="lvIcon" alt="Icon: Weg von Punkt A zu Punkt B" src="${lcPointCourseImage}"/>
                </div>
                <div class="lvContent pointCoursebg">
                    <h1 class="lvPointCourseHeader contentHeadline">${lcPointCourseHeader}</h1>
                    <div class="lvPointCourseText contentText">${lcPointCourseText}</div>
                </div>         
            </div>
            <div class="lvContainer">
                <div class="lvTimeline-iconBox">
                        <img class="lvIcon" alt="Icon: PC-Monitor zeigt Buch" src="${lcPointUnitsImage}"/>
                </div>
                <div class="lvContent pointUnitsbg">
                    <h1 class="lvPointUnitsHeader contentHeadline">${lcPointUnitsHeader}</h1>
                    <div class="lvPointUnitsText">${lcPointUnitsText}</div>
                        ${makeUnits(lcPointUnits)}
                </div>         
            </div>
            <div class="lvContainer">
                <div class="lvTimeline-iconBox">
                        <img class="lvIcon" alt="Icon: Glühbirne" src="${lcPointLearningImage}"/>
                </div>
                <div class="lvContent pointLearningbg">
                    <h1 class="lvPointLearningHeader contentHeadline">${lcPointLearningHeader}</h1>
                    <div class="lvPointLearningText contentText">${lcPointLearningText}</div>
                        <a href="https://graduatecampus.instructure.com/files/56220/download?download_frd=1" class="lvDownloadButton">Download</a>
                </div>            
            </div>
            <div class="lvContainer">
                <div class="lvTimeline-iconBox">
                        <img class="lvImageIcon" alt="Icon: i" src="${lcPointInfoImage}"/>
                </div>    
                <div class="lvContent pointInfobg">
                    <h1 class="lvPointInfoHeader contentHeadline">${lcPointInfoHeader}</h1>
                    <div class="lvPointInfoText contentText">${lcPointInfoText}</div>
                </div>        
            </div>
        </div>
        <div class="lvRocketBox col-11">
            <img class="lvRocket" alt="Rakete die durch die Wolken fliegt" src="https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Gif-Rakete.gif?raw=true"/>
            <div class="lvRocketText">
                ${lcRocketText}
            </div>
        </div>
        <div class="lvContactBox col-11">
            <div class="lvContactHeader">${lcContactsHeader}</div>
            <div class="lvContactMiniBox">
                <div class="lvContactTextBox">
                    <div class="lvContactTitle">${lcContactsHeader2}</div>
                    <div class="lvContactName">${lcContactName}</div>
                    <div class="lvContactText">${lcContactsText}</div>
                    <div class="lvContactPhone">${lcContactPhone}</div>
                    <div class="lvContactMobil">${lcContactMobil}</div>
                    <a href="mailto:${lcContactMail}" class="lvContactMail">${lcContactMail}</a>
                </div>
                <div class="lvContactImageBox">
                    <img class="lvContactBild" alt="Kontaktbild" src="${lcContactImage}"/>
                </div>
            </div>
        </div>
        <img class="learniacLogo" alt="LEARNIAC" src="https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Learniac.png?raw=true" />
    </div>
    </body>
    </html>
    `;
}
function makeUnits(lcPointUnits) {
    let unitBox = `<ul class="lvPointUnits contentText">`;
    lcPointUnits.map((units, index) => {
        let newUnits =`    
                        <li>&emsp;${index+1}. ${units}</li>`;
        unitBox += newUnits;
    });
    unitBox +=`
                        </ul>`;
    return unitBox;
}