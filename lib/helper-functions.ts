import moment from 'moment'

export const copyToClipboard = (text: string) => {
    if (navigator) {
        navigator.clipboard.writeText(text)
    }
}

export const dateFormatter = (date: string) => {
    return moment(date).format("MMM Do YYYY")
}