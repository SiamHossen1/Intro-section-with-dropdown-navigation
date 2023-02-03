const menuBtn = document.querySelector('.menu_bar')
const navbar = document.querySelector('.navbar')
const menuCloseBtn = document.querySelector('.menu_close_btn')
const select = document.querySelectorAll('.select')
const options = document.querySelectorAll('.options')
const rotate = document.querySelectorAll('.rotate')

menuBtn.addEventListener("click", ()=>{
    navbar.classList.add('active')
})

menuCloseBtn.addEventListener("click", ()=>{
    navbar.classList.remove('active')
})



select.forEach((dropDown,index1)=>{

    dropDown.addEventListener('click',()=>{

        options.forEach((option,index2)=>{

            if(index1 == index2){

                option.classList.toggle('active')

            }
        })

        rotate.forEach((rot,index3)=>{

            if(index1 == index3){

                rot.classList.toggle('active')
                
            }
        })
    })
})