import React, { useState } from "react";
import Form from './form'
import Form1 from './form2'
import Form2 from './form3'


import { Stepper, Step, StepLabel,Button, Typography } from "@mui/material";


function getStepContext(stepIndex,handleNext,Reset){
   
    switch(stepIndex){
        case 0:
            return <Form handleNext={handleNext} Reset={Reset} />
    
        case 1:
            
            return <Form1 handleNext={handleNext} Reset={Reset}/>

        case 2:
            return <Form2 handleNext={handleNext} Reset={Reset} />

    }
}


function StepperForm() {

    const [activestep, setActiveStep] = useState(0)

    const steps = ['Personal Info', 'edu info',"center edu"];

    const handleNext=()=>{
        console.log("Clicking ")
        setActiveStep(activestep+1)
    }
const Reset=()=>{
    setActiveStep(activestep-1)
}



    return (
        <>
            <div className=''>
                <Stepper  activeStep={activestep} alternativeLabel>
                    {steps.map((v) => (
                        <Step key={v}>
                            <StepLabel>{v}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {activestep == steps.length 
                ? "Full"
                : 
                <div>{getStepContext(activestep,handleNext,Reset)}</div> 
                
                }
            </div>
        </>
    )
}

export default StepperForm