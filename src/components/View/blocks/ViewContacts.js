import {useRecoilValue} from "recoil";
import {
    l1ContactBoxes
} from "../../services/atoms";
function ViewContacts () {
    const contactBoxes = useRecoilValue(l1ContactBoxes);
    return (
        <div className="l2ContactBox">
            {contactBoxes.map((box) => (
                <div className="l2ContactBoxCard" key={box.id}>
                    <div className="l2ContactBoxIcon">
                        <img alt="Icon" src={box.icon} />
                    </div>
                    <div className="l2ContactBoxText">
                        <p>{box.description}</p>
                        <h3>{box.name}</h3>
                        <p>{box.number}</p>
                        <p href="">{box.mail}</p>
                    </div>
                </div>
            ))}
        </div>
    );

}
export default ViewContacts;
