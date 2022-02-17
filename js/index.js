import PhoneForm from './Components/PhoneForm.js'
import AddressForm from './Components/AddressForm.js'

document.addEventListener('DOMContentLoaded', (event) => {
    loaded()
});

function loaded() {
    document.getElementById("btnDone").addEventListener("click", () => { submitData() })
    document.getElementById("sectionPersonalNewNumberBtn").addEventListener("click", () => { AddNewPhoneNumber() })
    document.querySelector(".numbers").appendChild(new PhoneForm().GetComponent())
    AddAddressSection()
}   

function AddAddressSection() {
    let addessesContent = document.querySelector(".addresses")
    let addressForm = new AddressForm().GetAddressForm(addessesContent)
}

function AddNewPhoneNumber() {
    let numberContainer = document.querySelector(".numbers")
    let phoneNumber = new PhoneForm()
    numberContainer.appendChild(phoneNumber.GetComponent())
}

function submitData() {
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    
    if(name == "")
        return
    
    if(gender == "")
        return
    if(email == "")
        return
    
}