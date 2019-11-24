import { Override } from "framer"

export function Hide(): Override {
    return {
        initial: { opacity: 1 },
        animate: { opacity: 0 },
        transition: { duration: 1 }
    }
}
