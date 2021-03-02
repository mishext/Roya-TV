export const TrimText = (text: string, max_length: number) => {
    return text.length > max_length ? `${text.slice(0, max_length - 2)}..` : text
}