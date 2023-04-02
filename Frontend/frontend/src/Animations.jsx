import * as React from "react";
import {render} from "react-dom";
import {motion} from "framer-motion";

import "./styles.css"

const App = () => {
    const [rotate, setRotate] = React.useState(false);
    return(
        <div className="example-container">

        <motion.div 
            animate={{rotate: rotate? 360:0}} 
            onClick={() => {
                setRotate
            // initial={{scale:0}}
            ></motion.div>
        </div>
    
    );
};

render(<App />, document.getElementById("root"));