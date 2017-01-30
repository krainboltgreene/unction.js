// Credit: @keithamus
import thenCatchP from "../thenCatchP"
import resolveP from "../resolveP"
import rejectP from "../rejectP"

export default thenCatchP(rejectP, resolveP)
