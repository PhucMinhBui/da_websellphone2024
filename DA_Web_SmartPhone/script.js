const userbtn = document.querySelector('#user-form')
const userclose = document.querySelector('#userclose')
//console.log(userbtn)
userbtn.addEventListener("click",function(){
    document.querySelector('.user-form').style.display = "flex"
})

userclose.addEventListener("click",function(){
    document.querySelector('.user-form').style.display = "none"
})

// Advertisement
const next_btn = document.querySelector('.btn-next')
const pre_btn = document.querySelector('.btn-pre')
let index = 0
const imgNumber = document.querySelectorAll('.Flyer-left-top img')

next_btn.addEventListener("click",function(){
    index = index + 1 
    if(index > imgNumber.length - 1)
    {
        index = 0
    }
    remove_Active()
    document.querySelector(".Flyer-left-top").style.right = index * 100 + "%"
    liNumber_bottom[index].classList.add("active")
})

pre_btn.addEventListener("click",function(){
    index = index - 1
    if(index < 0)
    {
        index = imgNumber.length - 1
    }
    remove_Active()
    document.querySelector(".Flyer-left-top").style.right = index * 100 + "%"
    liNumber_bottom[index].classList.add("active")
})

const liNumber_bottom = document.querySelectorAll('.Flyer-left-bottom li')
liNumber_bottom.forEach(function(image,index){
    image.addEventListener("click",function(){
        remove_Active ()
        document.querySelector(".Flyer-left-top").style.right = index * 100 + "%"
        image.classList.add("active")
    })
})

function remove_Active (){
    let active_Number = document.querySelector('.active')
    active_Number.classList.remove("active")
}

function img_Auto(){
    index = index + 1
    if(index > imgNumber.length - 1){
        index = 0
    }
    remove_Active()
    document.querySelector(".Flyer-left-top").style.right = index * 100 + "%"
    liNumber_bottom[index].classList.add("active")
}
setInterval(img_Auto,5000)