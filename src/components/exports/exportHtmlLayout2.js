import { useRecoilValue } from "recoil";
import { l2BoxesState, l2BoxGifLinkState, l2BoxGifTitlesState } from "../services/atoms";
import ReactDOMServer from "react-dom/server";
function MakeOverview() {
    const boxes = useRecoilValue(l2BoxesState);
    const overview = boxes.map((box, index) => (
        <MakeAgain key={index} index={index} />
    ));
    return <div>{overview}</div>;
}

function MakeAgain({ index }) {
    const gifLink = useRecoilValue(l2BoxGifLinkState(index));
    const gifTitles = useRecoilValue(l2BoxGifTitlesState(index));
    return (
        <div className="l2OverviewSeperate">
            {gifLink && <img src={gifLink} alt={gifTitles[0]} />}
            {gifTitles.map((title, titleIndex) => (
                <div className="l2OverviewChapters" key={titleIndex}>
                    {title}
                </div>
            ))}
        </div>
    );
}

export default function makeHtml2(
    l2welcomeBackground,
    l2welcomeHeadline,
    l2welcomeCourseName,
    l2welcomeCourseName2,
    l2courseEntry,
    l2courseNr,
    l2modulplan,
    l2boxesState,
    l2boxGifLinkState,
    l2boxGifTitlesState,
    l2contactBoxes,
    l2contactIcon,
    l2contactName,
    l2contactDescription,
    l2contactMail
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
        <div>
            ${ReactDOMServer.renderToStaticMarkup(<MakeOverview />)}
        </div>
    </div>
    </body>
    </html>
    `;
}
