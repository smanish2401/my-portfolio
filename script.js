
var typed = new Typed('#element', {
    strings: ['web designer','web developer'],
    typeSpeed: 70,
});

document.querySelector(".hamburger").addEventListener("click",()=>{
    document.getElementById("list").style.left = '40%'
})
document.querySelector(".close").addEventListener("click",()=>{
    document.getElementById("list").style.left = '110%'
})
