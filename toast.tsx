import { Data, Override } from "framer"

const data = Data({
    toastBottom: -100,
    toastOpacity: 0,
    toastScale: 0.6,
})

export function Toast(): Override {
    return {
        animate: {
            bottom: data.toastBottom,
            opacity: data.toastOpacity,
            scale: data.toastScale,
        },
    }
}

export function ToastButton(): Override {
    return {
        onTap: () => {
            console.log("Clicked the Toast"),
                (data.toastBottom = 15),
                (data.toastOpacity = 1),
                (data.toastScale = 1),
                setTimeout(function() {
                    ;(data.toastBottom = -100),
                        (data.toastOpacity = 0),
                        (data.toastScale = 0.6)
                }, 2000)
        },
    }
}
