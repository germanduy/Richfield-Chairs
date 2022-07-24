/*------------------------Modal Image : Blog Detail-------------------------------*/
// Get the modal
var modals = document.querySelectorAll('.modal');
// Get modal trigger
var modalTrigger = document.querySelectorAll('.imageZoom');
// Get close button
var span = document.querySelectorAll('.close');
// Get modalContent
var modalImg = document.querySelectorAll('.modal-content');
// Get caption
for(var i = 0; i<modals.length; i++){
    modalTrigger[i].onclick = function(e){
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}
for(var i = 0; i<modals.length; i++){
    span[i].onclick = function(){
        for(var index in modals){
            if(typeof modals[index].style !== 'undefined')
                modals[index].style.display = "none"
        }
    }
}
for(var i = 0; i<modals.length; i++){
    window.onclick = function(e){
        if(e.target.classList.contains('modal')){
            for(var index in modals){
                if(typeof modals[index].style !== 'undefined')
                    modals[index].style.display = "none";
            }
        }
    }
}
