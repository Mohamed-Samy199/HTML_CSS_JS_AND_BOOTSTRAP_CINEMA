let shoppingManu =document.querySelector('.container');
document.querySelector('#shopping').onclick = () =>{
    shoppingManu.classList.toggle('active');
}
let loginMenu = document.querySelector('.login');
document.querySelector('#user').onclick = () =>{
    loginMenu.classList.toggle('active');
}
let ban = document.getElementsByClassName('ban')[0];
let pixls = document.getElementsByClassName('pixls');

for(var i=1; i < 400;i++){
    ban.innerHTML += "<div class='pixls'></div>";
    pixls[i].style.animationDelay =  `${i * 0.05}s`;
}
const  btn =document.querySelector(".emoji");
const emojis =["😍","😆","😳","😱","😊","😡","😌","😭","😀","🥺","🤭","🤐","😇","😎"];
btn.addEventListener("mouseover",() => {
    btn.innerText = emojis[Math.floor(Math.random() * emojis.length)]
});
const  btn0 =document.querySelector(".emoji0");
const emojis0 =["😍","😆","😳","😱","😊","😡","😌","😭","😀","🥺","🤭","🤐","😇","😎"];
btn0.addEventListener("mouseover",() => {
    btn0.innerText = emojis0[Math.floor(Math.random() * emojis0.length)]
});
const  btn1 =document.querySelector(".emoji1");
const emojis1 =["😍","😆","😳","😱","😊","😡","😌","😭","😀","🥺","🤭","🤐","😇","😎"];
btn1.addEventListener("mouseover",() => {
    btn1.innerText = emojis1[Math.floor(Math.random() * emojis1.length)]
});
const  btn2 =document.querySelector(".emoji2");
const emojis2 =["😍","😆","😳","😱","😊","😡","😌","😭","😀","🥺","🤭","🤐","😇","😎"];
btn2.addEventListener("mouseover",() => {
    btn2.innerText = emojis2[Math.floor(Math.random() * emojis2.length)]
});
const  btn3 =document.querySelector(".emoji3");
const emojis3 =["😍","😆","😳","😱","😊","😡","😌","😭","😀","🥺","🤭","🤐","😇","😎"];
btn3.addEventListener("mouseover",() => {
    btn3.innerText = emojis3[Math.floor(Math.random() * emojis3.length)]
});
const  btn4 =document.querySelector(".emoji4");
const emojis4 =["😍","😆","😳","😱","😊","😡","😌","😭","😀","🥺","🤭","🤐","😇","😎"];
btn4.addEventListener("mouseover",() => {
    btn4.innerText = emojis4[Math.floor(Math.random() * emojis4.length)]
});