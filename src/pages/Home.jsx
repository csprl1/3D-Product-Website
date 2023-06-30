import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import{
    headContainerAnimation,
    headTextAnimation,
    headContentAnimation,
    slideAnimation
} from '../config/motion';
import { CustomButton } from "../Components"; 

const Home = () => {
    const snap = useSnapshot(state);

    return(
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header>
                    <img src='./threejs.png' alt="logo" className="w-2 h-2 object-contain" style={{width: "30px"}}/>
                    </motion.header>
                    <motion.div className="home-content"{...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                        <h1 className="head-text"> LET's <br className="xl: block hidden"/>DO IT</h1> 
                    </motion.div>
                    <motion.div {...headContentAnimation} className="flex felx-col gap-5">
                        <p className="max-w-md font-normal text-grey-600 text base">
                            Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong> Unlesh your imagination</strong> {""} and define your style.
                        </p>
                        <CustomButton type="filled" title="customize IT" handleClick ={() => state.intro = false} customStyle = "w-fit px-4 py-2.5 font-bold text-sm"/>
                    </motion.div>
                   </motion.div>
                </motion.section>
            
            )}
        </AnimatePresence>
    )
}

export default Home;