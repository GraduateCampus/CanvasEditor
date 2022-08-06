import {atom} from "recoil";
export const modalState = atom ( {
    key: 'modalState',
    default: false,
})
export const welcomeBoxImage = atom ( {
    key: 'welcomeBoxImage',
    default: "https://github.com/Electressic/CanvasEditor/blob/main/src/components/images/Headerbild_ObjProg.png?raw=true",
})
export const welcomeBoxText = atom ( {
    key: 'welcomeBoxText',
    default: "",
});
export const welcomeBoxCourse = atom ( {
    key: 'welcomeBoxCourse',
    default: "",
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
export const ContactState = atom ( {
    key: 'Contacts',
    default: {
        items: [
            {
                bild:"",
                rolle:"",
                name:"",
                beschreibung:"",
                email:"",
            }
        ]
    },
});
