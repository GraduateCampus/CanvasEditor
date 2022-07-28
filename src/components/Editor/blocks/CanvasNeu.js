import {useState} from "react";

function CanvasNeu({showCanvasNeu,setShowCanvasNeu}) {

    return (
        <div className="container">
            <button onClick={console.log(setShowCanvasNeu(!showCanvasNeu))}>Add</button>
        </div>
    );
}
export default CanvasNeu;
