let allAccord = document.querySelectorAll('.accordion-head')
// console.log(allAccord)
allAccord.forEach((item)=>{
    item.addEventListener('click', function(e){
        let newActive = document.querySelector('.accordion-head.active')
        if(newActive && newActive !== item){
            newActive.classList.remove('active')
            newActive.nextElementSibling.style.maxHeight = 0 + 'px'
        }
      if(item.classList.contains('active')){
        item.nextElementSibling.style.maxHeight = 0 + 'px'
        item.classList.remove('active')
      }
      else{
        item.classList.add('active')
        item.nextElementSibling.style.maxHeight = item.nextElementSibling.scrollHeight + 'px';
      }
    });
})
