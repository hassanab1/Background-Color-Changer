
const div= document.querySelector('#list');         
const inputTab=document.querySelector('Input');      
const submitButton=document.querySelector('#button');
const globBlock = document.querySelector('.Glob');
const colorChangerbutton = document.querySelector('.colorChangerButton');

submitButton.addEventListener('click', ()=>{
    let userin=inputTab.value;
    if(userin != ''){
        const newitem=document.createElement('li');
        newitem.textContent=userin;
        div.appendChild(newitem);
        inputTab.value='';
    }
});
//------------------------colors hex code Array---------------//
let colors = [
    "#F5F5F5", // White Smoke
    "#D3D3D3", // Light Gray
    "#A9A9A9", // Dark Gray
    "#C0C0C0", // Silver
    "#808080", // Gray
    "#696969", // Dim Gray
    "#B0E0E6", // Powder Blue
    "#F0E68C", // Khaki
    "#FFE4B5", // Moccasin
    "#FAEBD7"  // Antique White
];
let i=0;

//------------------------------------------color changer ---------------//

colorChangerbutton.addEventListener('click', () => {

    //----------------------------globBlock color changer ---------------//
    while(true){
        if(i<=colors.length){
            globBlock.style.backgroundColor = colors[i];
            i++;
            break;
        }else{
            i=0;
            globBlock.style.backgroundColor = colors[i];
            i++;
            break;
        }
    }
    //------------------------Submit button and color chnager button color changer ---------------//
    while(true){
        if(i<=colors.length){
            colorChangerbutton.style.backgroundColor=colors[i+1];
            submitButton.style.backgroundColor=colors[i+1];
            i++;
            break;
        }else{
            i=0;
            colorChangerbutton.style.backgroundColor=colors[i+1];
            submitButton.style.backgroundColor=colors[i+1];
            i++;
            break;
        }
    }
});
