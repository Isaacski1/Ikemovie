let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        // else{
        //     sec.classList.remove('show-animate');
        // }
        
    })
}

// To Top
const goTopBtn = document.querySelector("[data-go-top]");
window.addEventListener("scroll", function() {
window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active")    
})

// Hambuger Section

let hambuger = document.querySelector('.hambuger');
let navmenu = document.querySelector('.navmenu');

hambuger.addEventListener('click', () => {
    navmenu.classList.toggle('active');
})