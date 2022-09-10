let sectionHeader = document.getElementsByClassName("sectionHeader")
for (const item of sectionHeader) {
    item.style.color = "blue"
    item.style.fontSize = '45px'
    item.style.fontWeight = 'bold'
}

let cards = document.getElementsByClassName("card")
for (const item of cards) {
    item.style.backgroundColor = "Linen"
    item.style.borderRadius = '30px'
    // item.addEventListener('mouseover', function () {
    //     console.log('tasting ok')
    // })
}

let images = document.getElementsByTagName("img")
for (const image of images) {
    image.addEventListener('mouseover', (e) => {
        e.target.style.transform = 'rotate(360deg)'
        e.target.style.transition = '.5s'
    })
}



let buyBtn = document.getElementsByClassName("buyBtn ")
for (const item of buyBtn) {
    item.style.backgroundColor = "RebeccaPurple"
    item.style.borderRadius = '20px'
    item.addEventListener('click', function () {
        item.style.backgroundColor = "PowderBlue"
        item.style.color = "gray"
        // item.style.display = "none"
    })
}
let emailBtn = document.getElementById("emailBtn")
let emailField = document.getElementById("emailField")
emailField.addEventListener('keyup', function (event) {
    //console.log(emailField.value)
    //console.log(event.target.value)
    if (event.target.value == 'email') {
        emailBtn.removeAttribute('disabled')
        emailBtn.style.backgroundColor = "hotpink"
    } else {
        emailBtn.setAttribute('disabled', true)
        emailBtn.style.backgroundColor = "lightpink"
    }
})
let dtouch = document.getElementById("dtouch")
dtouch.addEventListener('dblclick', function () {
    console.log('dblclicked')
    dtouch.style.backgroundColor = "lightcyan"
})

