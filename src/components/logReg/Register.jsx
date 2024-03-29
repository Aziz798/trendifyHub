import { useState } from 'react';
import Authentication from './registerationSteps/Authentication';
import StepButtons from './registerationSteps/StepButtons';
import StepperHead from './registerationSteps/StepperHead';

const Register = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState(new Set([0]));
    const [user, setUser] = useState({
        username:"",
        id:"",
        photoPath:"",
    })
    const handleNext = () => {
        const newStep = currentStep + 1;
        setCompletedSteps(prevSteps => new Set([...prevSteps, newStep]));
        setCurrentStep(newStep);
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            const newStep = currentStep - 1;
            setCurrentStep(newStep);
        }
    };

    const handleResetStep = step => {
        const updatedSteps = new Set(completedSteps);
        updatedSteps.delete(step);
        setCompletedSteps(updatedSteps);
    };

    return (
        <div>
            <StepperHead completedSteps={completedSteps}/>
            <Authentication user={user} setUser={setUser}/>
            <StepButtons handleNext={handleNext} currentStep={currentStep} handlePrevious={handlePrevious} handleResetStep={handleResetStep}/>
        </div>
    );
};

export default Register;
