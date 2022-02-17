export default class InputComponent {
    constructor() {}

    GetInput(placeholder) {
        let input = document.createElement("input")
        input.setAttribute("type", "text")
        input.className = "form-control"
        input.setAttribute("placeholder", placeholder)
        return input
    }
}