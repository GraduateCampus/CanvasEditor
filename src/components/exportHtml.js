function makeOverview(overview) {
    let oV = `<div class="overViewSeperate">`;
    overview.map((item,index) => {
        let newOv =`
            <div class="overview">
            <div class="overviewGoldbox">
            ${index +1}
            </div>
            <img class="overviewIcon" src="${item.icon}" />
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
        oV += newOv;
    });
    oV +=`</div>`;
    return oV;
}
function makeContacts(contacts) {
    let contact = `<div class="contactsSmallBox">`;
    contacts.map((item) => {
        let newContact =`
        <div class="contacts">
        <div class="contactsIconBox">
        </div>
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
        <link type="text/css" rel="stylesheet" href="/src/components/View/graduatecampus.css" />
    </head>
    <body>
    <div class="everything">
        <div class="welcomeBox">
            <img class="welcomeImage" src=${welcomeImage} />
            <span class="welcomeHeadline">
                ${welcomeText}
            </span>
            <span class="welcomeTitle">
                ${welcomeCourse}
            </span>
        </div>
        <div class="courseEntry">
            <img class="courseImage" src="images/rakete.png" />
            <span class="courseHeadline">
                Kurseinstieg
            </span>
            <span class="courseDescription">
                ${kurseinstieg}
            </span>
            <a class="courseModulbutton" href="/courses/${modulbutton}/modules">
                Direkt zu den Modulen
            </a>
        </div>
        <div class="modulplan">
            <img class="modulplanimg" src=${modulplan}>
        </div>
        <div class="overviewBox">   
                ${makeOverview(overview.items)}
        </div>
        <div class="canvasNew">
            <div class="canvasNewTitle">
                Test5
            </div>
            <div class="canvasNewInfos">
                Test6
            </div>
            <a class="canvasNewModulbutton">
                Direkt zu den Modulen
            </a>
        </div>
        <div class="contactsBigBox">
                ${makeContacts(contacts.items)}
                <img alt="Avatar bitte einfuegen" src="${avatar}">
        </div>
        <a href="#top"></a>
    </div>
    </body>
    </html>
    `;
}
