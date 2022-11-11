// update space holder height
let navbar = document.querySelector('#navbar');
let space_holder = document.querySelector('#space-holder');
['load', 'resize'].forEach((event) => {
    window.addEventListener(event, (e) => {
        space_holder.style.height = `${navbar.offsetHeight}px`;
    })
})