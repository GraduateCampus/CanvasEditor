import Editor from "./Editor/Editor";
import ViewWelcomeBox from "./View/ViewWelcomeBox";
import ViewKurseinstieg from "./View/ViewKurseinstieg";
import React, {useState} from "react";
import ViewCanvasNeu from "./View/ViewCanvasNeu";
import ViewOverView from "./View/ViewOverView";
import ViewContacts from "./View/ViewContacts";
import ViewModulplan from "./View/ViewModulplan";

function Layout1() {
    const [ovDuration, setOvDuration] = useState('');
    const [ovTitle, setOvTitle] =useState('');
    const [ovChapter, setOvChapter] =useState('');
    const [showCanvas, setShowCanvas] =useState(false);
    return (
        <div className="App">
            <div className="split">
                <div className="split left">
                    <Editor
                        showCanvasNeu={showCanvas}
                        setShowCanvasNeu={setShowCanvas}
                        ovDuration={ovDuration}
                        setOvDuration={setOvDuration}
                        ovTitle={ovTitle}
                        setOvTitle={setOvTitle}
                        ovChapter={ovChapter}
                        setOvChapter={setOvChapter}
                    />
                </div>
                <div className="split right">
                    <ViewWelcomeBox />
                    <ViewKurseinstieg />
                    <ViewModulplan />
                    <ViewOverView
                        ovDuration={ovDuration}
                        setOvDuration={setOvDuration}
                        ovTitle={ovTitle}
                        setOvTitle={setOvTitle}
                        ovChapter={ovChapter}
                        setOvChapter={setOvChapter}
                    />
                    <ViewCanvasNeu
                        showCanvas={showCanvas}
                        setShowCanvas={setShowCanvas}
                    />
                    <ViewContacts

                    />
                </div>
            </div>
        </div>
    );
}
export default Layout1;
