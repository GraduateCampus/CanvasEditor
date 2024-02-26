import Editor from "./Editor/Editor";
import ViewWelcomeBox from "./View/blocks/ViewWelcomeBox";
import ViewKurseinstieg from "./View/blocks/ViewKurseinstieg";
import ViewCanvasNeu from "./View/blocks/ViewCanvasNeu";
import ViewOverview from "./View/blocks/ViewOverview";
import ViewContacts from "./View/blocks/ViewContacts";
import ViewModulplan from "./View/blocks/ViewModulplan";

function Layout1() {
    return (
        <div className="layout">
            <div className="layout-left">
                <Editor/>
            </div>
            <div className="layout-right">
                <ViewWelcomeBox />
                <ViewKurseinstieg />
                <ViewModulplan />
                <ViewOverview />
                <ViewCanvasNeu/>
                <ViewContacts/>
            </div>
        </div>
    );
}
export default Layout1;
