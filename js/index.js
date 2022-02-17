document.addEventListener('DOMContentLoaded', (event) => {
    loaded()
});

function loaded() {
    document.getElementById("btnDone").addEventListener("click", () => { submitData() })
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