import react, { useState } from "react";
import Card from "./Card";




var obj = []
var time = new Date();

const BottomContainer = (props) => {
    let aman = props.values
    for (const key in props.values)
        obj.push(aman[key])
    return <>

        <div id="bottomContainer">
            {

                obj.map((value, index) => {
                    return <Card key={index} values={obj[index]} time={(time.getHours() > 12 ? time.getHours() - 12 : time.getHours()) + ":" + time.getMinutes()} />

                })
            }

        </div>
    </>
}





export default BottomContainer;
