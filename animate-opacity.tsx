import * as React from "react"
import { Frame, Override } from "framer"

export function Hide() {
    return <Frame 
            animate={{ opacity: 0 }} 
            transition={{ duration: 1 }} 
            />
}
