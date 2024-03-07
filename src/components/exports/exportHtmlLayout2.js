export default function makeHtml2(
    l2welcomeBackground,
    l2welcomeHeadline,
    l2welcomeCourseName,
    l2welcomeCourseName2,
    l2courseEntry,
    l2courseNr,
    l2modulplan,
    l2contactBoxes,
    l2boxes
) {
    const overviewBoxes = l2boxes.map((box, index) => `
        <div class="l2OverviewBox">
            <img src="${box.gifLink}" alt="Gif for box ${index + 1}" />
            ${box.titles.map((item,idx) => `<a href="/courses/${l2courseNr}/modules/${item.nummer}" class="l2OverviewTitles">${idx + 1}. ${item.test}</a>`).join('')}
        </div>
    `).join('');
    const contactBoxes = l2contactBoxes.map((box, index) => `
        <div class="l2ContactBoxCard">
            <div class="l2ContactBoxIcon">
                <img src="${box.icon}" alt="Icon for box ${index + 1}" />
            </div>
            <div class="l2ContactBoxText">
            <p>${box.description}</p>
            <h3>${box.name}</h3>
            <p>${box.number}</p>
            <a href="mailto:${box.mail}">${box.mail}</a>
            </div>
        </div>
    `).join('');
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
        <div class="l2WelcomeBox">
            <img class="l2WelcomeBoxBackground" alt="Willkommensbild" src="${l2welcomeBackground}" />
            <div class="l2WelcomeBoxTextBox">
                <p class="l2WelcomeBoxHeadline">${l2welcomeHeadline}</p>
                <p class="l2WelcomeBoxText">${l2welcomeCourseName}</p>
                <p class="l2WelcomeBoxText">${l2welcomeCourseName2}</p>
            </div>
        </div>
        <div class="l2CourseEntryBox">
            <div class="l2CourseEntryImageBox">
            <img class="l2CourseEntryBoxRakete" src="https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/rakete2.png?raw=true"/>
            </div>
            <div class="l2CourseEntryTextBox">
            <h1 class="l2CourseEntryBoxHeadline">Kurseinstieg</h1>
            <p class="l2CourseEntryBoxText">${l2courseEntry}</p>
            <a class="l2CourseEntryBoxButton" href="/courses/${l2courseNr}/modules">Direkt zu den Modulen</a>
            </div>
        </div>
        <div class="l2MetroplanBox">
            <img class="l2MetroPlanImage" alt="Metroplan" src="${l2modulplan}" />
        </div>
        <div class="l2OverviewBigBox">
            ${overviewBoxes}
        </div>
        <div class="newCanvasBox">
            <div class="newCanvasBoxText">
                <p class="newCanvasHeadline">Neu bei Canvas?</p>
                <p class="newCanvasText"> Weitere Informationen zu Canvas finden Sie hier:</p>
            </div>
            <a class="newCanvasButton" href="https://graduatecampus.instructure.com/courses/354" target="_blank">Zu Canvas Videotutorials</a>
        </div>
        <div class="l2ContactBox">
            ${contactBoxes}
            <div class="l2ContactBoxAvatar">
                <img src="https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Prof_Herrmann2.png?raw=true" alt="Avatar" />
            </div>
        </div>
    </div>
    </body>
    </html>
    `;
}