import {useRecoilState} from "recoil";
import {kursnameState, welcomeHeaderState} from "../../services/atoms"
import {useState} from "react";

function WelcomeBox () {
    const [welcomeText, setWelcomeText] = useState("");
    const [kursName, setKursname] = useRecoilState(kursnameState);
    const [header, setTextState] = useRecoilState(welcomeHeaderState);

    const addText = (e) => {
        e.preventDefault()
        var wText = document.getElementById("1");
        if ( wText && wText.value) {
            setTextState([...header, welcomeText]);
            setWelcomeText("");
        }
    }
    return (
        <div className="container">
            <form name="welcomeBox">
                <div className="field">
                    <label>Headline:</label>
                    <input
                        type="text"
                        id="1"
                        value={welcomeText}
                        placeholder="Willkommen"
                        onChange={(e) => setWelcomeText(e.target.value)}
                    />
                    <button onClick={addText}>
                        Submit
                    </button>
                    <label>Kursname:</label>
                    <input
                        type="text"
                        id="2"
                        value={kursName}
                        placeholder="Kursname"
                        onChange={(e) => setKursname(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}
export default WelcomeBox;
