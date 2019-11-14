import { Override, useTransform, motionValue } from "framer"

// Override Docs: https://framer.com/docs/overrides

const scrollY = motionValue(20)
let scrollDistance = 0
let zero = 0

export function Scroll_Frame(props): Override {
    scrollDistance =
        -props.children[0].props.children[0].props.height + props.height
    return {
        contentOffsetY: scrollY,
    }
}

export function Scroll_Progress(props): Override {
    const width = useTransform(
        scrollY,
        [0, scrollDistance],
        [`calc(0% - ${zero}px)`, `calc(100% - ${props.left + props.right}px)`]
    )
    return {
        width: width,
    }
}
