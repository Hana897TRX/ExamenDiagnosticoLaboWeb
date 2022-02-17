class User {
    constructor() {
        this.name = "";
        this.gender = "";
        this.email = "";
        this.phoneNumbers = [];
    }

    SetName(name) {
        this.name = name;
    }

    SetGender(gender) {
        this.gender = gender;
    }

    SetEmail(email) {
        this.email = email;
    }

    AddPhoneNumber(phoneNumber) {
        if(typeof(phoneNumber ) == PhoneNumber)
            this.phoneNumbers.push(phoneNumber);
    }
}