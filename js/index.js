import PhoneForm from './Components/PhoneForm.js'
import AddressForm from './Components/AddressForm.js'
import PhoneNumberModel from './Models/PhoneNumberModel.js'
import PhoneRegisterComponent from './Components/PhoneRegisterComponent.js'

document.addEventListener('DOMContentLoaded', (event) => {
    loaded()
});

function loaded() {
    document.getElementById("btnDone").addEventListener("click", () => { submitData() })
    document.getElementById("sectionPersonalNewNumberBtn").addEventListener("click", () => { AddNewPhoneNumber() })
    document.querySelector(".numbers").appendChild(new PhoneForm().GetComponent())
    AddAddressSection()
    GetUserData()
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
    let street = document.querySelectorAll(".addresses > input")[0].value
    let streetNumber = document.querySelectorAll(".addresses > input")[1].value
    let postalCode = document.querySelectorAll(".addresses > input")[2].value
    let ladaAddress = document.querySelector(".addresses > .row > .col-3 > div > select").value
    let phoneAddress = document.querySelector(".addresses > .row > .col-9 > input").value

    let numbersNode = document.querySelectorAll(".numbers > .row > .col-8 > input")
    let ladasNode = document.querySelectorAll(".numbers > .row > .col-3 > select")
    
    if(name && name == "")
        return;
    
    if(gender && gender == "")
        return;
    
    if(email && email == "")
        return;
    
    if(numbersNode && numbersNode.length == 0)
        return;
    
    if(ladasNode && ladasNode.length == 0)
        return;

    let phoneNumbers = [];

    for(let i = 0; i < numbersNode.length; i++) {
        let phoneModel = new PhoneNumberModel(numbersNode[i].value, ladasNode[i].value)
        phoneNumbers.push(phoneModel)
    }

    if(phoneNumbers.length == 0)
        return;

    let data = JSON.stringify({
        'name' : name,
        'gender' : gender,
        'email' : email,
        'phoneNumbers' : phoneNumbers,
        'address' : [
            {
                'street' : street,
                'streetNumber' : streetNumber,
                'postalCode' : postalCode,
                'ladaNumber' : ladaAddress,
                'phoneNumber' : phoneAddress
            }
        ]
    })

    console.log(data)
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch('http://192.168.1.76:3000/api/user', {
        method : 'POST',
        mode : 'cors',
        headers: myHeaders,
        body : data
    }).then((res) => {
        console.log(res)
        location.reload(); 
    })
}

async function GetUserData() {
    let response = await fetch('http://localhost:3000/api/user', {
        method : 'GET',
        mode : 'cors'
    })

    console.log(response)

    let response2 = await response.json()
    let userData = response2['data']

    console.log(userData)

    let userContainer = document.getElementById('numberContainer')
    let phoneRegisterComponent = new PhoneRegisterComponent()

    for(let i = 0; i < Object.keys(userData).length; i++) {
        let nodeData = await phoneRegisterComponent.GetRegisterComponent(userData[i])
        console.log(nodeData)

        userContainer.appendChild(nodeData)
    }
}