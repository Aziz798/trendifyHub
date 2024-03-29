import React from 'react'

const StepperHead = ({completedSteps}) => {
  return (
    <ul className="steps">
    <li className={`step ${completedSteps.has(0) ? 'step-primary' : ''}`}>
        Register
    </li>
    <li className={`step ${completedSteps.has(1) ? 'step-primary' : ''}`}>
        Choose plan
    </li>
    <li className={`step ${completedSteps.has(2) ? 'step-primary' : ''}`}>
        Purchase
    </li>
    <li className={`step ${completedSteps.has(3) ? 'step-primary' : ''}`}>
        Receive Product
    </li>
</ul>
  )
}

export default StepperHead