import InputComponent from './InputComponent.js'

export default class PhoneForm {
    constructor() {
        this.root = document.createElement("div")
    }

    DeleteButton() {
        let colDelete = document.createElement("div")
        colDelete.className = "col-1"
        
        let buttonDelete = document.createElement("button")
        buttonDelete.className = "btn btn-danger"
        buttonDelete.setAttribute("type", "button")
        buttonDelete.addEventListener("click", () => { this.DeleteSection() })

        let iconDelete = document.createElement("i")
        iconDelete.className = "bi bi-trash-fill"
        
        buttonDelete.appendChild(iconDelete)
        colDelete.appendChild(buttonDelete)

        return colDelete
    }

    LadaSection() {
        let ladas = ["LADA", "+1", "+52", "+2"]
        
        let col = document.createElement("div")

        let section = document.createElement("select")
        section.className = "form-select"

        for(let i = 0; i < ladas.length; i ++){ 
            let option = document.createElement("option")
            option.setAttribute("value", ladas[i])
            option.textContent = ladas[i]
            section.appendChild(option)
        }

        col.appendChild(section)
        return col
    }

    NumberInput() {
        let col = document.createElement("div")

        let input = new InputComponent().GetInput("NUMBER")

        col.appendChild(input)
        return col
    }

    AddNumberButton() {
        let button = document.createElement("button")
        button.setAttribute("type", "button")
        button.className = "btn btn-success"
        button.setAttribute("style", "width: 100%;")

        let icon = document.createElement("i")
        icon.className = "bi bi-plus-circle-fill"

        button.appendChild(icon)
        
        return button
    }

    DeleteSection() {
        this.root.parentElement.removeChild(this.root)
    }

    GetComponent() {
        this.root.className = "row"

        let deleteButton = this.DeleteButton()
        let ladaInput = this.LadaSection()
        ladaInput.className = "col-3"

        let numberInput = this.NumberInput()
        numberInput.className = "col-8"

        this.root.appendChild(deleteButton)
        this.root.appendChild(ladaInput)
        this.root.appendChild(numberInput)

        return this.root
    }

    GetDataAsJson() {
        return {
            'lada' : this.ladaInput.querySelector("select").value,
            'number' : this.numberInput.querySelector("input").value
        }
    }
}