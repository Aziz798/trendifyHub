import React from 'react'

const StepButtons = ({handleNext,currentStep,handlePrevious,handleResetStep}) => {
    return (
        <div>
            <button onClick={handleNext} disabled={currentStep >= 3}>Next</button>
            <button onClick={() => {
                handlePrevious();
                handleResetStep(currentStep);
            }} disabled={currentStep === 0}>
                Previous
            </button>
        </div>
    )
}

export default StepButtons