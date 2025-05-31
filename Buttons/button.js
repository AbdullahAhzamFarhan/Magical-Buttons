// get  all buttons with class .txt
const buttons=document.querySelectorAll('.txt');
 

buttons.forEach(button =>{
button.addEventListener('click', ()=>{

    // Get the id of the click buttons
    const color= button.id;
    document.body.style.backgroundColor= color;
});

})