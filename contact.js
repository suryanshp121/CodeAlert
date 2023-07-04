document.getElementById("b1").addEventListener("click",()=>{
    alert("Thanks for Showing Your interest in CodeAlert.\nWe'll contact you soon.")
})
function enableSubmit(){
    let inputs = document.getElementsByClassName('required');
    let btn = document.querySelector('button[type="submit"]');
    let isValid = true;
    for (let i = 0; i < inputs.length; i++){
        let changedInput = inputs[i];
        if (changedInput.value.trim() === "" || changedInput.value === null){
            isValid = false;
            break;
        }
    }
    btn.disabled = !isValid;
}