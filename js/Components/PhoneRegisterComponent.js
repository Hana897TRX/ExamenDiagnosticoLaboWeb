export default class PhoneRegisterComponent {
    constructor() {

    }

    BuildSelector(data) {
        let section = document.createElement("select")
        section.className = "form-select"

        console.log("data", data)

        if(Object.keys(data).length > 0) {
            for(let i = 0; i < Object.keys(data).length; i ++){ 
                let option = document.createElement("option")
                option.setAttribute("value", data[i]['lada'] + data[i]['phoneNumber'])
                option.textContent = data[i]['lada'] + data[i]['phoneNumber']
                section.appendChild(option)
            }
        } 

        return section
    }

    AddRegisterData(userData, phoneNumbers) { 
        let row = document.createElement("div")
        row.className = "row"
        
        let col1 = document.createElement("div")
        col1.className = "col"
        col1.textContent = userData['personName']
        row.appendChild(col1)

        let col2 = document.createElement("div")
        col2.className = "col"

        let select = this.BuildSelector(phoneNumbers)
        col2.appendChild(select)
        row.appendChild(col2)

        let col3 = document.createElement("div")
        col3.className = "col"
        col3.textContent = userData['email']
        row.appendChild(col3)

        return row
    }

    async GetRegisterComponent(personData) {
        let id = personData['id']

        let response = await fetch(`http://localhost:3000/api/userPhone?id=${id}`, {
            method : 'GET',
            mode : 'cors'
        })

        let dataJson = await response.json()

        let phoneNumbers = dataJson['data']

        console.log(phoneNumbers)

        return await this.AddRegisterData(personData, phoneNumbers)
    }
}