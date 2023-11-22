export const copyToClipboard = (text: string) => {
    if (navigator) {
        navigator.clipboard.writeText(text)
    }
}

export const projectStatusColors: {[status: string]: {text: string, color: string}} = {
    "NotStarted": {
        text: "Not started",
        color: "gray"
    },
    "InProgress": {
        text: "In progress",
        color: "yellow"
    },
    "Completed": {
        text: "Completed",
        color: "green"
    }
}