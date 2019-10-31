function validateContact(){
    const form = document.getElementById("contactForm");
    const name = form.name.value;
    //can also use" document.getElementByID("name").val;ue
    const email = form.email.value;
    const phone = form.phone.value;

    if(name == ""){
        alert("please type a valid name");
        form.name.style.borderColor="red";
        return false;
    }

}