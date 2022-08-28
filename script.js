function criarDiv(){
    let inputRed = document.querySelector('.inputRed').value
    let inputGreen = document.querySelector('.inputGreen').value
    let inputBlue = document.querySelector('.inputBlue').value
    let color = document.querySelector('.color')
    
    color.style.backgroundColor = `rgb(${inputRed},${inputGreen},${inputBlue})`
}

let btnAction = document.querySelector('.btnAction')

btnAction.addEventListener('click', criarDiv)



