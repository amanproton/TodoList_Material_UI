import react from "react";
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { useState } from 'react';




const Card = (props) => {

    const [decor , changeDecor] = useState("auto")
    const amanji = (e) =>{

        if(decor == "line-through")
            changeDecor("auto")
        else
            changeDecor("line-through")
    }

    return <>
        
        <div className="task">

            <Checkbox onChange={amanji} className="checkColor" />
            <Typography className="typo">
                <div style={{textDecoration:decor}} >{props.values}</div>
                <div style={{fontSize:"0.6rem"}}>{props.time}</div>
            </Typography>

        </div>

        
    </>;

}

export default Card;