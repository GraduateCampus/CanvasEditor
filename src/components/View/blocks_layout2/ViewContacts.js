import {useRecoilValue} from "recoil";
import {
    l2ContactBoxes,
    l2ContactDescription,
    l2ContactIcon, l2ContactMail,
    l2ContactName
} from "../../services/atoms";
function ViewContacts () {
    const boxes = useRecoilValue(l2ContactBoxes);
    return (
        <div className="contactsBigBox">
            <div className="contactsSmallBox">
                {boxes.map((box,index)=> (
                    <ContactBox key={index} index={index}/>
                ))}
            </div>
        </div>
    );
    function ContactBox({index}) {
        const icon = useRecoilValue(l2ContactIcon(index))
        const name = useRecoilValue(l2ContactName(index))
        const description = useRecoilValue(l2ContactDescription(index))
        const mail = useRecoilValue(l2ContactMail(index))
        function convertEmail() {
            window.location.href = "mailto:" + mail
        }
        return (
            <div className="vContacts" key={index}>
                <img alt={index} className="contactsIcon" width={"250px"} src={icon} />
                <div className="contactsName">
                    {name}
                </div>
                <div className="contactsDescription">
                    {description}
                </div>
                <a className="contactsEmail" type="text" onClick={convertEmail}>
                    {mail}
                </a>
            </div>
        );
    }
}
export default ViewContacts;
