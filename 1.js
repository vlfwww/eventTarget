//1
// document.querySelector('div').addEventListener('click',function(event){
//     const par= document.querySelector('p');
//     par.textContent=event.target.textContent;
// })

//2
// const colors = [
//     "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF5",
//     "#F5FF33", "#A133FF", "#FF3333", "#33FFA1", "#5733FF",
//     "#33FF33", "#FF8333", "#3383FF", "#FF33F5", "#33FF83",
//     "#8333FF", "#FF3383", "#33F5FF", "#FF5733", "#33FF57"
// ];
// document.querySelector('div').addEventListener('click',function(event){
//      event.target.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)]
// })

//3
// let flag = false;
// document.querySelector('button').addEventListener('click',function(event){
//     const par = document.querySelector('p');
//     if(flag==true) {
//         par.style.display='none';
//         flag= false;
//     }
//     else{
//         par.style.display='block';
//         flag= true;
//     }
// })

//4
// const par = document.querySelector('p');
// par.style.display='none';
// document.querySelector('button').addEventListener('mouseover',function(event){
//         par.style.display='block';     
// })
// document.querySelector('button').addEventListener('mouseout',function(event){
//         par.style.display='none';
// })

//5
// const colors = [
//     "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#33FFF5",
//     "#F5FF33", "#A133FF", "#FF3333", "#33FFA1", "#5733FF",
//     "#33FF33", "#FF8333", "#3383FF", "#FF33F5", "#33FF83",
//     "#8333FF", "#FF3383", "#33F5FF", "#FF5733", "#33FF57"
// ];
// document.querySelector('button').addEventListener('dblclick',function(event){
//      event.target.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)]
// })

// 6

// const name_ = document.querySelector('.name')
// const email = document.querySelector('.email')
// const password = document.querySelector('.password')

// document.querySelector('button').addEventListener('click', function (){
//     try{
//         if(!isNaN(name_.value.trim())  !name_.value.trim()){
//             throw new Error('Введите имя')
//         }
//         else if(!/^[\w\.]+@[\w]+\.[\w]{2,6}$/.test(email.value.trim())  !email.value.trim()){
//             throw new Error('Введите корректную электронную почту');
//         }
//         else if(password.value.trim().length < 8 || !password.value.trim()){
//             throw new Error('Введите больше восьми символов');
//         }
//         else{
//             console.log('Регистрация прошла успешно')
//         }
//     }
//     catch(error){
//         console.log(error.message)
//     }
// })

// 7
// const div = document.querySelector('div');
// const p = document.querySelector('.result')
// let flag = false
// document.querySelector('button').addEventListener('click', function (){
//     if(flag == false){
//         div.style.display = 'none';
//         flag = true;
//     }
//     else{
//         div.style.display = 'block';
//         flag = false;
//     }
// })
// document.querySelector('div').addEventListener('click', (event) =>{
//     p.textContent = event.target.textContent;
// })

//8
// const arr = [];
// document.querySelector('button').addEventListener('click',function(event){
//     const inp = document.querySelector('input')
//     const par = document.querySelector('p')
//     if(inp.value!='') {
//         arr.push(inp.value);
//         par.innerHTML = arr.join(', ');
//         inp.value=''
//     }
//     else {
//         const error = document.createElement('span'); 
//                 error.textContent = 'Некорректный ввод'; 
//                 error.style.color = 'red'; 
//                 par.innerHTML = ''; 
//                 par.appendChild(error); 
//     }
// })

//9
// const mainImage = document.getElementById('mainImage');
// const originalImage = '1.png'; 
// const hoverImage = '2.png'; 

// mainImage.addEventListener('mouseenter', function() {
//     mainImage.src = hoverImage;
// });

// mainImage.addEventListener('mouseleave', function() {
//     mainImage.src = originalImage; 
// });

//10
// document.getElementById('checkButton').addEventListener('click', function() {
//     const input = document.getElementById('inputField').value.trim();
//     const resultParagraph = document.getElementById('result');
//     if (input === '') {
//         resultParagraph.textContent = 'Введите строку для проверки.';
//         return;
//     }
//     const cleanedInput = input.replaceAll(' ', '').toLowerCase();
//     const reversedInput = cleanedInput.split('').reverse().join('');
//     if (cleanedInput === reversedInput) {
//         resultParagraph.textContent = `"${input}" является палиндромом.`;
//     } else {
//         resultParagraph.textContent = `"${input}" не является палиндромом.`;
//     }
// });

//11
document.querySelector('.btn').addEventListener('click', function(event) {
    const inp = document.querySelector('.inp');
    const t = document.querySelector('.table');
    if (inp.value.trim() === '') {
        alert('Пожалуйста, введите значение.');
        return;
    }
    const newRow = document.createElement('tr');
    const newCell = document.createElement('td');
    newCell.textContent = inp.value; 
    newRow.appendChild(newCell);
    t.appendChild(newRow);
    inp.value = '';
});