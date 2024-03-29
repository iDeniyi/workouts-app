import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const UseWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error('useWorkoutContext must be used inside a WorkoutsContextProvider')
    }
    return context
}

