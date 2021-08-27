export function getUrlId(url, id) {
    return `${url}${id ? `/${id}` : ''}`
}

export function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}

export function getInitialName(name) {
    return name.split(" ").map(txt => txt.charAt(0)).join("")
}