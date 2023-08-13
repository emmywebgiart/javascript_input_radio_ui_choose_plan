let buttonCancel = document.getElementById("button_cancel")
let buttonConfirm = document.getElementById("button_confirm")
const inputsPlan = document.getElementsByName("plan")

buttonCancel.onclick = () => {
    inputsPlan.forEach((item) => {
        item.checked = false
    })
}

buttonConfirm.onclick = () => {
    let selected = document.querySelector("input[name='plan']:checked")
    if (selected !== null) {
        alert(`Haz seleccionado el plan con un costo de: ${selected.value}`)
    } else {
        alert("No haz seleccionado ningún plan")
    }
}