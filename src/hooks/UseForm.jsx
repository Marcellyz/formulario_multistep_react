import { useState } from "react"


export function useForm(steps){

    const [currentStep] = useState(0);

    function changeStep( i, e){
        e.preventDefault();

        if () return
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep
    }
}