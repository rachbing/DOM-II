import './less/index.less'

// Your code goes here!

// LOAD
window.onload = function (evt) {
    console.log(` The event ${evt.type} fired!`)
    const heading = document.querySelector('h1')
    heading.textContent = "Let's Party!!!"

    // COPY
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
              console.log(text)
        })
    })
    
    //CLICK
    document.body.addEventListener("click", evt => {
        evt.target.textContent = "FUN FUN FUN"
    })
    // DOUBLE CLICK
    document.body.addEventListener("dblclick", evt => {
        evt.target.innerHTML = '';
    })

    // KEYDOWN
    window.addEventListener('keydown', evt => {
        if (evt.key == 9) {
            document.body.innerHTML = '<h1> 9 </h1>'
        }
    })
    // MOUSEMOVE
    document.body.addEventListener('mousemove', evt => {
        const { clientX, clientY } = evt
        console.log(`mouse is at ${clientX} and ${clientY}`)
    })

    //mouseenter and mousemove
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener("mouseenter", () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            destination.style.fontWeight = 'initial'
        })
    }

}
