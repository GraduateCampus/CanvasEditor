export default function makeHtml3(
  lcWelcomeImage,
  lcWelcomeText,
  lcPointWelcomeHeader,
  lcPointWelcomeText,
  lcPointWelcomeImage,
  lcModulbutton,
  lcModulButtonText,
  lcPointUnitsHeader,
  lcPointUnitsText,
  lcPointUnits,
  lcPointUnitsNumber,
  lcPointUnitsImage,
  lcPointCourseHeader,
  lcPointCourseText,
  lcPointCourseImage,
  lcPointLearningHeader,
  lcPointLearningText,
  lcPointLearningImage,
  lcPointInfoHeader,
  lcPointInfoText,
  lcPointInfoImage,
  lcRocketText,
  lcContactsHeader,
  lcContactsHeader2,
  lcContactsText,
  lcContactName,
  lcContactPhone,
  lcContactMobil,
  lcContactMail
) {
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
        <div class="lvWelcomeBox col-11">
            <span class="lvWelcomeCourse">${lcWelcomeText}</span>
        </div>
        <div class="lvTimeline col-11">
            <div class="lvContainer">
                <div class="lvTimeline-iconBox">
                        <img class="lvIcon" alt="Icon: winkende Hand" src="${lcPointWelcomeImage}"/>
                </div>            
                <div class="lvContent pointWelcomebg">
                    <h1 class="lvPointWelcomeHeader lvContentHeadline">${lcPointWelcomeHeader}</h1>
                    <div class="lvPointWelcomeText lvContentText">${lcPointWelcomeText}</div>
                        <a href="https://graduatecampus.instructure.com/courses/${lcModulbutton}/modules" class="lvModulButton">${lcModulButtonText}</a>
                </div>
            </div>
            <div class="lvContainer">
                <div class="lvTimeline-iconBox">
                        <img class="lvIcon" alt="Icon: Weg von Punkt A zu Punkt B" src="${lcPointCourseImage}"/>
                </div>
                <div class="lvContent pointCoursebg">
                    <h1 class="lvPointCourseHeader lvContentHeadline">${lcPointCourseHeader}</h1>
                    <div class="lvPointCourseText lvContentText">${lcPointCourseText}</div>
                </div>         
            </div>
            <div class="lvContainer">
                <div class="lvTimeline-iconBox">
                        <img class="lvIcon" alt="Icon: PC-Monitor zeigt Buch" src="${lcPointUnitsImage}"/>
                </div>
                <div class="lvContent pointUnitsbg">
                    <h1 class="lvPointUnitsHeader lvContentHeadline">${lcPointUnitsHeader}</h1>
                    <div class="lvPointUnitsText lvContentText">${lcPointUnitsText}</div>
                        ${makeUnits(
                          lcPointUnits,
                          lcPointUnitsNumber,
                          lcModulbutton
                        )}
                </div>         
            </div>
            <div class="lvContainer">
                <div class="lvTimeline-iconBox">
                        <img class="lvIcon" alt="Icon: Glühbirne" src="${lcPointLearningImage}"/>
                </div>
                <div class="lvContent pointLearningbg">
                    <h1 class="lvPointLearningHeader lvContentHeadline">${lcPointLearningHeader}</h1>
                    <div class="lvPointLearningText lvContentText">${lcPointLearningText}</div>
                        <a href="https://graduatecampus.instructure.com/files/56220/download?download_frd=1" class="lvDownloadButton">Download</a>
                </div>            
            </div>
            <div class="lvContainer">
                <div class="lvTimeline-iconBox">
                        <img class="lvIcon" alt="Icon: i" src="${lcPointInfoImage}"/>
                </div>    
                <div class="lvContent pointInfobg">
                    <h1 class="lvPointInfoHeader lvContentHeadline">${lcPointInfoHeader}</h1>
                    <div class="lvPointInfoText lvContentText">${lcPointInfoText}</div>
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
            <div class="lvContactTextBox">
                <div class="lvContactHeader">${lcContactsHeader}</div>
                <div class="lvContactTitle">${lcContactsHeader2}</div>
                <div class="lvContactName">${lcContactName}</div>
                <div class="lvContactText">${lcContactsText}</div>
                <div class="lvContactPhone">${lcContactPhone}</div>
                <div class="lvContactMobil">${lcContactMobil}</div>
                <a href="mailto:${lcContactMail}" class="lvContactMail">${lcContactMail}</a>
            </div>
        </div>
    </div>
    </body>
    </html>
    `;
}
function makeUnits(lcPointUnits, lcPointUnitsNumber, lcModulbutton) {
  let unitBox = `<ul class="lvPointUnits lvContentText">`;
  lcPointUnits.map((units, index) => {
    let newUnits = `    
                        <li><a class="lvUnits" href="https://graduatecampus.instructure.com/courses/${lcModulbutton}/modules#module_${
      lcPointUnitsNumber[index]
    }">&emsp;${index + 1}. ${units}</a></li>`;
    unitBox += newUnits;
  });
  unitBox += `
                        </ul>`;
  return unitBox;
}
