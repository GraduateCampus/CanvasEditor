import {modalState} from "./services/atoms";
import {useRecoilState} from "recoil";
import {useRef} from "react";
const Modal = (children) => {
    const [showModal, setShowModal] = useRecoilState(modalState);
    const textAreaRef = useRef(null);
    const hideModal = () => {
        setShowModal(!showModal);
    };
    return (
        <div className="modal">
            <div className="modal-main">
                <div>
                    Copy HTML:
                </div>
                <button className="copyButton">
                    Copy
                </button>
                <textarea className="modalText"
                    ref={textAreaRef}
                    classname="modal-input"
                    value={children}
                />
                <button onClick={hideModal}>
                    Close
                </button>
            </div>
        </div>
    )
}
export default Modal;