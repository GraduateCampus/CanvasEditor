import Editor2 from "./Editor/Editor2";
import ViewWelcomeBox from "./View/blocks/ViewWelcomeBox";
import ViewKurseinstieg from "./View/blocks/ViewKurseinstieg";
import ViewModulplan from "./View/blocks/ViewModulplan";
import ViewOverView from "./View/blocks/ViewOverView";
import ViewCanvasNeu from "./View/blocks/ViewCanvasNeu";
import ViewContacts from "./View/blocks/ViewContacts";

function Layout2() {
    return (
        <div className="split">
            <div className="split left">
                <Editor2/>
            </div>
            <div className="split right">
                <ViewWelcomeBox/>
                <ViewKurseinstieg/>
                <ViewModulplan/>
                <ViewOverView/>
                <ViewCanvasNeu/>
                <ViewContacts/>
            </div>
        </div>
    );
}
export default Layout2;
