
const allSideMenu = document.querySelectorAll('#sidebar .side-menu li a');

allSideMenu.forEach(item=>{
    const li = item.parentElement;

    item.addEventListener('click', function (){
        allSideMenu.forEach(i=>{
            i.parentElement.classList.remove('active')
        })
        li.classList.add('active')
    })
})

//TOGGER SIDEBAR//

const menuBar =document.querySelector('#content nav .bx.bx-menu');
const sideBar=document.getElementById('sidebar');

menuBar.addEventListener('click',function(){
    sideBar.classList.toggle('hide');
})



//sự kiện click icon search

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm =document.querySelector ('#content nav form');

searchButton.addEventListener('click', function (e){
        
    if(window.innerWidth < 576){
        e.preventDefault();
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')){
            searchButtonIcon.classList.replace('bx-search-alt-2','bx-x');
        }
        else{
            searchButtonIcon.classList.replace('bx-x','bx-search-alt-2');

        }
    }
});

if(window.innerWidth < 768 ){
    sideBar.classList.add('hide');
}else if(window.innerWidth < 576)
{
    searchButtonIcon.classList.replace('bx-x','bx-search-alt-2');
    searchForm.classList.remove('show');

}



window.addEventListener('resize', function(){
    if(this.innerWidth < 576)
        {
            searchButtonIcon.classList.replace('bx-x','bx-search-alt-2');
            searchForm.classList.remove('show');
        
        }
})




//button delete
// const buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const row = button.parentNode.parentNode;
//         row.parentNode.removeChild(row);
//     });
// });
