class PhoneNumberHtml {
    constructor() {

    }

    DeleteButton() {
        let colDelete = document.createElement("div")
        colDelete.className = "col-1"
        
        let buttonDelete = document.createElement = "btn btn-danger"
        buttonDelete.setAttribute("type", "button")

        let iconDelete = document.createElement("i")
        iconDelete.className = "bi bi-trash-fill"
        
        buttonDelete.appendChild(iconDelete)
        colDelete.appendChild(buttonDelete)

        return colDelete
    }

    LadaInput() {
        let ladas = ["+1", "+52", "+2"]
        
        let col = document.createElement("div")
        col.className = "col-4"

        let section = document.createElement("select")
        section.className = "form-select"

        for(let i = 0; i < ladas.length(); i ++){ 
            let option = document.createElement("option")
            option.setAttribute("value", ladas[i])
            section.appendChild(option)
        }

        col.appendChild(section)
        return col
    }

    AddPhoneSection() {
        let row = document.createElement("div")
        row.className = "row"
        
        let deleteButton = this.DeleteButton()
        
    }
}