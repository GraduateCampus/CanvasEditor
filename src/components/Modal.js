import{modalState} from "./services/atoms";
import {useRecoilState} from "recoil";
import {useRef} from "react";
const Modal = ({children}) => {
    const textAreaRef = useRef(null)
    const [showModal, setShowModal] = useRecoilState(modalState);
    const hideModal = () => {
        setShowModal(!showModal);
    };
    function copyToClipboard(e) {
        textAreaRef.current.select()
        document.execCommand("copy");
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
    return (
        <div className="myModal">
            <div className="modal-content">
                <button className="btn-close-modal" onClick={hideModal}>
                    &times;
                </button>
                <button className="btn-copy-modal" onClick={copyToClipboard}>
                    Copy
                    <div className="popup" id="myPopup">Copy Success!</div>
                </button>
                <textarea className="modalText"
                    rows="20"
                    cols="200"
                    classname="modal-input"
                    value={children}
                    readOnly={true}
                    ref={textAreaRef}
                />
            </div>
        </div>
    )
}
export default Modal;
