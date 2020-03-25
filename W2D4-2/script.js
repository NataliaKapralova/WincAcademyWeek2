// Deel1 

document.querySelectorAll('.big-five-button').forEach(Btn => {
    Btn.addEventListener('click', () => {
    
    // console.log(Btn.innerHTML); 
   
    const newLi = document.createElement('li'); 
    
    newLi.innerHTML = Btn.innerHTML;
   
    const ul = document.getElementById('spotted-animals-list'); 
    
    ul.appendChild(newLi); 
     })
});



 // Deel2 

 const removeFirstBtn = document.getElementById('remove-first-item-button'); 
 const parent = document.getElementById("spotted-animals-list"); 
 const child = parent.querySelector('.spotted-animals-list-item')

  removeFirstBtn.addEventListener('click', () => { 
    
    //  parent.removeChild(child); 
     parent.removeChild(parent.childNodes[0]);

 }); 


 //Deel 3 

const removeAllBtn = document.getElementById('remove-all-button'); 
removeAllBtn.addEventListener('click', function(){ 
    parent.innerHTML = "";
    // console.log('works')
});



