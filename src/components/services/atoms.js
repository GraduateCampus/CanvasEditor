import { atom, DefaultValue, selector } from "recoil";
export const modalState = atom({
  key: "modalState",
  default: false,
});
export const infoModalState = atom({
  key: "infoModalState",
  default: false,
});
export const dataState = atom({
  key: "dataState",
  default: "",
});
export const l1WelcomeBackground = atom({
  key: "l1WelcomeBoxBackground",
  default:
    "https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Headerbild_Code.png?raw=true",
});
export const l1WelcomeText = atom({
  key: "l1WelcomeText",
  default: "",
});
export const l1WelcomeCourseName = atom({
  key: "l1WelcomeCourseName",
  default: "",
});
export const l1WelcomeCourseName2 = atom({
  key: "l1WelcomeCourseName2",
  default: "",
});
export const l1CourseEntry = atom({
  key: "l1CourseEntry",
  default: "",
});
export const l1CourseNr = atom({
  key: "l1CourseNr",
  default: "",
});
export const l1Metroplan = atom({
  key: "l1Metroplan",
  default: "",
});
export const l1MetroplanCheckbox = atom({
  key: "l1MetroplanCheckbox",
  default: false,
});
export const l1OverviewBoxes = atom({
  key: "l1OverviewBoxes",
  default: [],
});
export const l1ContactBoxes = atom({
  key: "l1ContactBoxes",
  default: [],
});
//atoms for Layout2:
export const l2WelcomeBackground = atom({
  key: "l2WelcomeBackground",
  default:
    "https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Headerbild_PC.png?raw=true",
});
export const l2WelcomeHeadline = atom({
  key: "l2WelcomeHeadline",
  default: "Willkommen im Kurs",
});
export const l2WelcomeCourseName = atom({
  key: "l2WelcomeCourseName",
  default: "",
});
export const l2WelcomeCourseName2 = atom({
  key: "l2WelcomeCourseName2",
  default: "",
});
export const l2CourseEntry = atom({
  key: "l2WCourseEntry",
  default: "",
});
export const l2CourseNr = atom({
  key: "l2CourseNr",
  default: "",
});
export const l2Metroplan = atom({
  key: "l2Metroplan",
  default: "",
});
export const l2MetroplanCheckbox = atom({
  key: "l2MetroplanCheckbox",
  default: false,
});
export const l2OverviewBoxes = atom({
  key: "boxState",
  default: [],
});
export const l2ContactBoxes = atom({
  key: "l2ContactBoxes",
  default: [],
});
export const l2Avatar = atom({
  key: "l2Avatar",
  default: "",
});
//atoms for Learniac:

export const learniacWelcomeText = atom({
  key: "learniacWelcomeText",
  default: "Willkommen beim Graduate Campus",
});
export const learniacPointWelcomeHeader = atom({
  key: "learniacPointWelcomeHeader",
  default: "Hi! Tauche ein in dein E-Learning",
});
export const learniacPointWelcomeText = atom({
  key: "learniacPointWelcomeText",
  default:
    "Zum Durchstarten klickst du im Kursmenü auf der linken Seite auf Module.\n" +
    "Hier gelangst du zur Gesamtübersicht aller E-Learning Einheiten, den sogenannten Learning Nuggets.",
});
export const learniacPointWelcomeImage = atom({
  key: "learniacPointWelcomeImage",
  default:
    "https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Icon_Hand.png?raw=true",
});
export const learniacPointCourseHeader = atom({
  key: "learniacPointCourseHeader",
  default: "Kursablauf",
});
export const learniacPointCourseText = atom({
  key: "learniacPointCourseText",
  default:
    "Am besten arbeitest du von oben nach unten der Reihe nach die einzelnen Lerneinheiten durch.\n" +
    "Am Ende eines jeden Learning Nuggets erwartet dich ein kurzer Wissenscheck, um das Gelernte\n" +
    "abschließend zu überprüfen. Sobald du alle Learning Nuggets bearbeitet hast, erhältst du\n" +
    "automatisch per E-Mail eine Teilnahmebescheinigung zugesendet.",
});
export const learniacPointCourseImage = atom({
  key: "learniacPointCourseImage",
  default:
    "https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Icon_Navigation.png?raw=true",
});
export const learniacPointUnitsHeader = atom({
  key: "learniacPointUnitsHeader",
  default: "Deine E-Learning Einheiten",
});
export const learniacPointUnitsText = atom({
  key: "learniacPointUnitsText",
  default: "Folgende E-Learning Einheiten erwarten dich:",
});
export const learniacPointUnitsImage = atom({
  key: "learniacPointUnitsImage",
  default:
    "https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Icon_Book.png?raw=true",
});
export const learniacPointUnits = atom({
  key: "learniacPointUnits",
  default: [""],
});
export const learniacPointUnitsNumber = atom({
  key: "learniacPointUnitsNumber",
  default: [""],
});
export const learniacPointLearningHeader = atom({
  key: "learniacPointLearningHeader",
  default: "Mit E-Learnings lernen",
});
export const learniacPointLearningText = atom({
  key: "learniacPointLearningText",
  default:
    "Eine kurze Anleitung, wie du mit den Learning Nuggets lernst, kannst du dir hier herunterladen.",
});
export const learniacPointLearningImage = atom({
  key: "learniacPointLearningImage",
  default:
    "https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Icon_Lightbulb.png?raw=true",
});
export const learniacPointInfoHeader = atom({
  key: "learniacPointInfoHeader",
  default: "Wissenswertes",
});
export const learniacPointInfoText = atom({
  key: "learniacPointInfoText",
  default:
    "Ab der Buchung und Bezahlung hast du 90 Tage Zugriff auf die Learning Nuggets.\n" +
    "Die Lehrunterlagen sind nur für den persönlichen Gebrauch vorgesehen, daher ist von sonstiger\n" +
    "Verbreitung und Vervielfältigung abzusehen. Die Lehrunterlagen sind urheberrechtlich\n" +
    "geschützt. Das Urheberrecht liegt, soweit nicht ausdrücklich anders gekennzeichnet, bei\n" +
    "dem Graduate Campus Hochschule Aalen GmbH.",
});
export const learniacPointInfoImage = atom({
  key: "learniacPointInfoImage",
  default:
    "https://github.com/GraduateCampus/CanvasEditor/blob/main/src/components/images/Icon_Info.png?raw=true",
});
export const learniacRocketText = atom({
  key: "learniacRocketText",
  default: "VIEL SPASS UND ERFOLG BEIM BEARBEITEN DER INHALTE",
});
export const learniacContactsHeader = atom({
  key: "learniacContactsHeader",
  default: "Ansprechperson",
});
export const learniacContactsHeader2 = atom({
  key: "learniacContactsHeader2",
  default: "Kurskoordination",
});
export const learniacContactsText = atom({
  key: "learniacContactsText",
  default:
    "Hast du Fragen oder Anregungen? <br /> Kontaktiere mich gerne. <br />",
});
export const learniacContactsName = atom({
  key: "learniacContactsName",
  default: "Andrea Mezger",
});
export const learniacContactsPhone = atom({
  key: "learniacContactsPhone",
  default: "07361 576 1459",
});
export const learniacContactsMobil = atom({
  key: "learniacContactsMobil",
  default: "0152 3357 1261",
});
export const learniacContactsMail = atom({
  key: "learniacContactsMail",
  default: "kurse@graduatecampus.de",
});
export const learniacModulButton = atom({
  key: "learniacModulButton",
  default: "",
});
export const learniacModulButtonText = atom({
  key: "learniacModulButtonText",
  default: "Zu den Modulen",
});
export const selectEverything = selector({
  key: "everything",
  get: ({ get }) => {
    const lcWelcomeCourse = get(learniacWelcomeText);
    const lcPointWelcomeHeader = get(learniacPointWelcomeHeader);
    const lcPointWelcomeText = get(learniacPointWelcomeText);
    const lcModulButtonText = get(learniacModulButtonText);
    const lcPointCourseHeader = get(learniacPointCourseHeader);
    const lcPointUnitsHeader = get(learniacPointUnitsHeader);
    const lcPointUnitsText = get(learniacPointUnitsText);
    const lcPointCourseText = get(learniacPointCourseText);
    const lcPointLearningHeader = get(learniacPointLearningHeader);
    const lcPointLearningText = get(learniacPointLearningText);
    const lcPointInfoHeader = get(learniacPointInfoHeader);
    const lcPointInfoText = get(learniacPointInfoText);

    return {
      lcWelcomeCourse,
      lcPointWelcomeHeader,
      lcPointWelcomeText,
      lcModulButtonText,
      lcPointUnitsHeader,
      lcPointUnitsText,
      lcPointCourseHeader,
      lcPointCourseText,
      lcPointLearningHeader,
      lcPointLearningText,
      lcPointInfoHeader,
      lcPointInfoText,
    };
  },
  set: ({ set }, value) => {
    if (value instanceof DefaultValue) {
      set(learniacWelcomeText, value);
      set(learniacModulButtonText, value);
      set(learniacRocketText, value);
      set(learniacContactsHeader, value);
      set(learniacContactsHeader2, value);
      set(learniacContactsText, value);
      set(learniacPointWelcomeHeader, value);
      set(learniacPointWelcomeText, value);
      set(learniacPointUnitsHeader, value);
      set(learniacPointUnitsText, value);
      set(learniacPointCourseHeader, value);
      set(learniacPointCourseText, value);
      set(learniacPointLearningHeader, value);
      set(learniacPointLearningText, value);
      set(learniacPointInfoHeader, value);
      set(learniacPointInfoText, value);
      set(learniacModulButtonText, value);
      return;
    }
  },
});
