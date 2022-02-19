import PhoneForm from './PhoneForm.js'
import InputComponent from './InputComponent.js'

export default class AddressForm {
    constructor() {

    }

    PhoneNumber() {
        let row = document.createElement("div")
        row.className = "row"

        let phoneForm = new PhoneForm()
        
        let lada = phoneForm.LadaSection()
        let number = new InputComponent().GetInput("NUMBER")

        let col1 = document.createElement("div")
        col1.className = "col-3"

        let col2 = document.createElement("div")
        col2.className = "col-9"

        col1.appendChild(lada)
        col2.appendChild(number)

        row.appendChild(col1)
        row.appendChild(col2)

        return row
    }

    GetAddressForm() {
        let inputComponent = new InputComponent()
        
        let div = document.createElement("container")
        let name = inputComponent.GetInput("STREET")
        let gender = inputComponent.GetInput("STREET NUMBER")
        let email = inputComponent.GetInput("POSTAL CODE")
        let phoneForm = this.PhoneNumber();
        
        div.appendChild(name)
        div.appendChild(gender)
        div.appendChild(email)
        div.appendChild(phoneForm)

        return div
    }

    GetAddressForm(root) {
        let inputComponent = new InputComponent()

        let name = inputComponent.GetInput("STREET")
        let gender = inputComponent.GetInput("STREET NUMBER")
        let email = inputComponent.GetInput("POSTAL CODE")
        let phoneForm = this.PhoneNumber();

        root.appendChild(name)
        root.appendChild(gender)
        root.appendChild(email)
        root.appendChild(phoneForm)

        return root
    }
}