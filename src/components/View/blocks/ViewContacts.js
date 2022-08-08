import {useRecoilValue} from "recoil";
import {ContactAvatar, ContactState} from "../../services/atoms";
function ViewContacts () {
    const contactObjects = useRecoilValue(ContactState);
    const avatar = useRecoilValue(ContactAvatar);

    function courseItem({ bild, rolle, name, beschreibung, email}, index) {
        function convertEmail() {
            window.location.href = "mailto:" + email
        }
        return (
            <div className="vContacts">
                <img alt={index} className="contactsIcon" width={"250px"} src={bild} />
                <div className="contactsRole" >
                    {rolle}
                </div>
                <div className="contactsName">
                    {name}
                </div>
                <div className="contactsDescription">
                    {beschreibung}
                </div>
                <a className="contactsEmail" type="text" onClick={convertEmail}>
                    {email}
                </a>
            </div>
        );
    }
    return (
        <div className="contactsBigBox">
            <div className="contactsSmallBox">
                {contactObjects.items.map((beschreibung, index) => {
                    return courseItem(beschreibung, index);
                })}
                <img alt="not found" className="test" width={"250px"} src={avatar} />
            </div>
        </div>
    );
}
export default ViewContacts;
