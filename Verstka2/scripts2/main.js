createActive('hb1', 'hbi');
createActive('hm', 'hbi');
createActive('in-search', 'search');



let b = document.getElementById('hb1');
let s = document.querySelector('body');
b.addEventListener('click', function (){
		s.classList.toggle('active')
	})


 let set = document.querySelectorAll('.settings__list__item');
 let links = document.querySelectorAll('.settings__list__item > a');
 

   for(i of links){
   	i.addEventListener('click', function() {

   		this.classList.toggle('active')
   	})
        
   }
   


  
    

