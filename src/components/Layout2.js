import Editor2 from "./Editor/Editor2";
import ViewWelcomeBox from "./View/blocks_layout2/ViewWelcomeBox";
import ViewOverView from "./View/blocks_layout2/ViewOverview";
import ViewCourseEntry from "./View/blocks_layout2/ViewCourseEntry";
import ViewModulplan from "./View/blocks_layout2/ViewModulplan";
import ViewCanvasNeu from "./View/blocks/ViewCanvasNeu";
import ViewContacts from "./View/blocks_layout2/ViewContacts";

function Layout2() {
    return (
        <div className="split">
            <div className="split left">
                <Editor2/>
            </div>
            <div className="split right">
                <ViewWelcomeBox/>
                <ViewCourseEntry/>
                <ViewModulplan/>
                <ViewOverView/>
                <ViewCanvasNeu/>
                <ViewContacts/>
            </div>
        </div>
    );
}
export default Layout2;
