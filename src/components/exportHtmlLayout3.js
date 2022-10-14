import image2 from "../components/images/Element 2.png";
import image3 from "../components/images/Element 3.png";
import image4 from "../components/images/Element 4.png";
import image5 from "../components/images/Element 5.png";

export default function makeHtml3(lcWelcomeImage,
                                  lcWelcomeCourse, lcPointWelcome,
                                  lcPointCourse, lcPointLearning,
                                  lcPointInfo, lcContactName,
                                  lcContactPhone, lcContactMobil,
                                  lcContactMail, lcContactImage) {

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
                    <span class="welcomeHeadline">
                        ${lcWelcomeCourse}
                    </span>
                <img class="lvHeaderimage" src=${lcWelcomeImage}/>
        </div>
        <div class="lvTimeline">
            <div class="lvTimeline alt">
                <div class="lvContainer lvpWelcome">
                    <div class="lvTimeline-icon">
                        <div class="lvImage">
                            <img class="lvImageIcon" src="images"/>
                        </div>
                    </div>            
                    <div class="lvContent pointWelcomebg">
                        <h1 class="lvPointWelcomeHeader">Willkommen im Kurs</h1>
                        <div class="lvPointWelcomeText">
                        ${lcPointWelcome}
                        <br />
                        <a href="images" class="lvModulButton">Zu den Modulen</a>
                        </div>
                    </div>
                </div>
                <div class="lvContainer lvpWelcome">
                    <div class="lvTimeline-icon">
                        <div class="lvImage">
                            <img class="lvImageIcon" src="images"/>
                        </div>
                    </div>
                    <div class="lvContent pointCoursebg">
                        <h1 class="lvPointCourseHeader">Kursablauf</h1>
                        <div class="lvPointCourseText">${lcPointCourse}</div>
                    </div>         
                </div>
                <div class="lvContainer lvpWelcome">
                    <div class="lvTimeline-icon">
                        <div class="lvImage">
                            <img class="lvImageIcon" src="images"/>
                        </div>
                    </div>
                    <div class="lvContent pointLearningbg">
                        <h1 class="lvPointLearningHeader">Mit E-Learnings lernen</h1>
                        <div class="lvPointLearningText">
                            ${lcPointLearning}
                            <a href="images" class="lvDownload">Download</a>
                           </div>
                    </div>            
                </div>
                <div class="lvContainer lvpWelcome">
                    <div class="lvTimeline-icon">
                        <div class="lvImage">
                            <img class="lvImageIcon" src="images"/>
                        </div>
                    </div>    
                    <div class="lvContent pointInfobg">
                        <h1 class="lvPointInfoHeader">Wissenswertes</h1>
                        <div class="lvPointInfoText">${lcPointInfo}</div>
                    </div>        
                </div>
            </div>
        </div>
        <div class="lvRocketBox">
            <img class="lvRocket" src="images"/>
            <div class="lvRocketText">
                VIEL SPASS UND ERFOLG BEIM BEARBEITEN DER INHALTE.
            </div>
        </div>
        <div class="lvContactBox">
            <div class="boxPadding">
                <div class="lvcTitle">
                    Ansprechpersonen
                </div>
                <div class="lvContactMiniBox">
                    <div class="lvContactTextBox lvcolumn">
                        <div class="lvContactTitle">Kurskoordination</div>
                        <div class="lvContactName">${lcContactName}</div>
                        <div class="lvContactText">
                            Haben Sie Fragen oder Anregungen?<br />
                            Kontaktieren Sie mich gerne.
                        </div>
                        <div class="lvContactPhone">${lcContactPhone}</div>
                        <div class="lvContactMobil">${lcContactMobil}</div>
                        <a href="mailto:${lcContactMail}" class="lvContactMail">${lcContactMail}</a>
                    </div>
                    <div class="imageBox lvcolumn">
                        <img class="lvContactBild" src="${lcContactImage}"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
    </html>
    `;
}
