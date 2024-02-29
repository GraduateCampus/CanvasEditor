

export default function makeHtml(l1welcomeBackground, l1welcomeHeadline, l1welcomeCourseName,
                                 l1welcomeCourseName2, l1courseEntry,l1modulplan, l1courseNr,
                                 l1boxes, l1contactBoxes) {
    const overviewBoxes = l1boxes.map((box, index) => `
        <a href="/courses/${l1courseNr}/modules" class="l1OverviewCard" key={box.id}>
                    <div class="l1OverviewNumber">
                        ${index+1}
                    </div>
                    <div class="l1OverviewIcon">
                        <img src="${box.icon}" alt="Gif" />
                    </div>
                        <h1>${box.title}</h1>
                    <div class="l1OverviewTextbox">
                        <span>${box.nuggets}</span>
                        <span>
                            <img src="https://github.com/Electressic/CanvasEditor/blob/main/src/components/images/Zeit-Icon.png?raw=true" />
                            ${box.duration}
                        </span>
                    </div>
                </a>
    `).join('');
    const contactBoxes = l1contactBoxes.map((box, index) => `
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
            <img class="l2WelcomeBoxBackground" alt="Willkommensbild" src="${l1welcomeBackground}" />
            <div class="l2WelcomeBoxTextBox">
                <p class="l2WelcomeBoxHeadline">${l1welcomeHeadline}</p>
                <p class="l2WelcomeBoxText">${l1welcomeCourseName}</p>
                <p class="l2WelcomeBoxText">${l1welcomeCourseName2}</p>
            </div>
        </div>
        <div class="l2CourseEntryBox">
            <div class="l2CourseEntryImageBox">
            <img class="l2CourseEntryBoxRakete" src="https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/rakete2.png?raw=true"/>
            </div>
            <div class="l2CourseEntryTextBox">
            <h1 class="l2CourseEntryBoxHeadline">Kurseinstieg</h1>
            <p class="l2CourseEntryBoxText">${l1courseEntry}</p>
            <a class="l2CourseEntryBoxButton" href="/courses/${l1courseNr}/modules">Direkt zu den Modulen</a>
            </div>
        </div>
        <div class="l2MetroplanBox">
            <img class="l2MetroPlanImage" alt="Metroplan" src="${l1modulplan}" />
        </div>
        <div class="l2OverviewBigBox">
            ${overviewBoxes}
        </div>
        <div class="newCanvasBox">
            <div class="newCanvasBoxText">
                <p class="newCanvasHeadline">Neu bei Canvas?</p>
                <p class="newCanvasText"> Weitere Informationen zu Canvas finden Sie hier:</p>
            </div>
            <a class="newCanvasButton" href="https://graduatecampus.instructure.com/courses/354">Zu Canvas Modul</a>
        </div>
        <div class="l2ContactBox">
            ${contactBoxes}
        </div>
    </div>
    </body>
    </html>
    `;
}
