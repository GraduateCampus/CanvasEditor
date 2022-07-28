import {atom} from "recoil";

export const welcomeHeaderState = atom ( {
    key: 'welcomeHeaderState',
    default: [],
});
export const kursnameState = atom ( {
    key: 'kursnameState',
    default: ""
    ,
});
export const KurseinstiegState = atom ( {
    key: 'Kurseinstieg',
    default: "",
});
export const ModulplanState = atom ( {
    key: 'Modulplan',
    default: "",
});
export const OverviewState = atom ( {
    key: 'Overview',
    default: {
        items: [
            {
                icon:"",
                title:"",
                nuggets:"",
                duration:"",
            }
        ]
    },
});
export const CanvasneuState = atom ( {
    key: 'Canvasneu',
    default: "",
});
export const ContactState = atom ( {
    key: 'Contacts',
    default: {
        Bild: "",
        Title: [],
        Name: [],
        Beschreibung: [],
        eMail: [],
    },
});
