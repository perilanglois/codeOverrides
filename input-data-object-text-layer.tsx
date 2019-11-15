import { Data, Override } from "framer"

const data = Data({
    text: "Username",
})

export const GetInput: Override = () => {
    return {
        value: data.text,
        onValueChange: (value: string) => {
            data.text = value
        },
    }
}

export const UpdateText: Override = () => {
    return {
        text: data.text,
    }
}
