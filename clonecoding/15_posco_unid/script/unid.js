const gnb = document.querySelectorAll('.gnb > li')
const sub = document.querySelectorAll('.sub1')
const bg = document.querySelector('.nav_bg')
const h_bg = document.querySelector('#h_bg')
// const sub1 = document.querySelectorAll('.sub1')
// const sub2 = document.querySelectorAll('.sub2')
console.log(gnb,sub,bg,h_bg)

sub_func('none')

for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        sub_func('block','#fff')
        i.children[1].style.background = '#eee'
        i.children[0].style.color = '#f00'
    })
    i.addEventListener('mouseout',()=>{
        sub_func('none','rgba(255,255,255,0.6)')
        i.children[1].style.background = '#fff'
        i.children[0].style.color = '#000'
    })
}
function sub_func(value,nav_bg){
    h_bg.style.background = nav_bg
    bg.style.display = value
    for(let i of sub){i.style.display = value}
}

console.log('----------------------------')

// for(let i of sub){
//     i.style.height = '0'
//     i.style.overflow = 'hidden'
//     i.style.transition = 'height 0.3s'
// }

// for(let j of bg){
//     j.style.height = '0'
//     j.style.overflow = 'hidden'
//     j.style.transition = 'height 0.3s'
// }

// for(let i of li){
//     i.addEventListener('mouseover',()=>{
//         for(let j of bg){
//             j.style.height = '500px'
//         }
//         for(let n of sub){
//             n.style.height = '500px'
//         }
//     })
//     i.addEventListener('mouseout',()=>{
//         for(let j of bg){
//             j.style.height = '0'
//         }
//         for(let n of sub){
//             n.style.height = '0'
//         }
//         })
//     }