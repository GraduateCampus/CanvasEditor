function makeOverview(overview) {
    let oV = `<div class="row">`;
    overview.map((item,index) => {
        let newOv =`
                <div class="col-5 overview">
                    <div class="overviewGoldbox">
                        ${index +1}
                    </div>
                    <div class="overviewImageBigBox">
                        <div class="overviewImageSmallBox">
                            <img class="overviewIcon" src="${item.icon}" />
                        </div>
                    </div>
                    <div class="overviewTitle">
                        ${item.title}
                    </div>
                    <div class="overviewNuggets">
                        ${item.nuggets}
                    </div>
                    <div class="overviewDuration">
                        🕑${item.duration}
                    </div>
            </div>`;
        if (index % 2 === 0 && index > 1) {
            let row = `</div><div class="row">`;
            oV += row;
        }
        oV += newOv;
    });
    oV +=`</div>`;
    return oV;
}
function makeContacts(contacts) {
    let contact = `<div class="contactsSmallBox">`;
    contacts.map((item) => {
        let newContact =`
        <div class="col-4 contacts">
            <img class="contactsIcon" src="${item.bild}">
            <div class="contactsRole">
                ${item.rolle}
            </div>
            <div class="contactsName">
                ${item.name}
            </div>
            <div class="contactsDescription">
                ${item.beschreibung}
            </div>
            <a class="contactsEmail" href="mailto:${item.email}">
                ${item.email}
            </a>
            </div>`;
        contact += newContact;
    });
    contact +=`</div>`;
    return contact;
}

export default function makeHtml(welcomeImage, welcomeText, welcomeCourse, kurseinstieg, modulplan, overview, contacts, avatar, modulbutton) {

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
        <div class="row">
            <div class="col-12 welcomeBox">
                <div class="col-7 welcomeText">
                    <span class="welcomeHeadline">
                        ${welcomeText}
                    </span>
                    <span class="welcomeTitle">
                        ${welcomeCourse}
                    </span>
                </div>
                <div class="col-5">
                    <img class="welcomeImage" src=${welcomeImage} />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 courseEntry">
                <div class="col-3 courseImageBox">
                    <img class="courseImage" src="https://github.com/Electressic/CanvasEditor/blob/main/src/components/images/rakete.png?raw=true" />
                </div>
                <div class="col-9 courseBox">
                    <h1 class="courseHeadline">
                        Kurseinstieg
                    </h1>
                    <p class="courseText">
                    ${kurseinstieg}
                    </p>
                    <a class ="courseModulbutton" href="/courses/${modulbutton}/modules">
                    Direkt zu den Modulen
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <img class="modulplan" src=${modulplan} />
            </div>
        </div>
        <div class="testing">   
            ${makeOverview(overview.items)}
        </div>
        <div class="row">
            <div class="newCanvasBox">
                <div class="col-6">
                    <h1 class="newCanvasHeadline">
                        Neu bei Canvas?
                    </h1>
                    <span class="newCanvasText">
                        Weitere Informationen zu Canvas finden Sie hier:
                    </span>
                </div>
                <div class="col-6">
                    <a class="newCanvasButton" href="/courses/${modulbutton}/modules">Zu Canvas Modul</a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="contactsBigBox">
                ${makeContacts(contacts.items)}
                <div class="col-3">
                    <img alt="Avatar bitte einfuegen" src="${avatar}">
                </div>
            </div>
        </div>
        <a class="tothetopButon" href="#top"></a>
    </div>
    </body>
    </html>
    `;
}
