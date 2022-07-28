import {useCallback, useState} from "react";
import {useRecoilState} from "recoil";
import {KurseinstiegState} from "../../services/atoms";

function Kurseinstieg() {
    const [kursBeschreibung, setKursbeschreibung] = useRecoilState(KurseinstiegState);

    return (
        <div className="container">
            <label>Kursbeschreibung:</label>
            <textarea
                id="beschreibung"
                value={kursBeschreibung}
                placeholder="test"
                onChange={(e) => setKursbeschreibung(e.target.value)}
            />
        </div>
    );
}
export default Kurseinstieg;
