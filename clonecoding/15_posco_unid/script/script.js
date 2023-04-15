//posco
//목표 1.개별 서브 나오기
//1.모든 서브 숨기기
//2. gnb 자식 li에 마우스를 올리면 자식 sub 보이기(Node관계처리)
//3. gnb 자식 li에 나가면 자식 sub 숨기기

const li = document.querySelectorAll('.gnb > li ')
const sub = document.querySelectorAll('.sub')
const bg = document.querySelectorAll('.bg')
// console.log(li,sub)


// sub[0].style.display = 'none'
// sub[1].style.display = 'none'
// sub[2].style.display = 'none'
// li.forEach((i,ind)=>{
//     i.addEventListener('mouseover',()=>{
//         for(let j of sub){
//             j.style.height =
//         }
//         sub[ind].style.transform= 'translate(0,100px)'
//     })
//     i.addEventListener('mouseout',()=>{
//         for(let j of sub){
//             j.style.heihgt =
//         }
//     })
// })
// for(let i of sub){i.style.display = 'none'}
for(let i of sub){
    i.style.height ='0'
    i.style.overflow ='hidden'
    i.style.transition ='height 0.3s'
}
for(let j of bg){
    j.style.height ='0'
    j.style.overflow ='hidden'
    j.style.transition ='height 0.3s'
}

for(let i of li){
    i.addEventListener('mouseover',()=>{
        for(let j of bg){
            j.style.height = '250px'
        }
        for(let n of sub){
            n.style.height = '250px'
        }
    })
    i.addEventListener('mouseout',()=>{
        for(let j of bg){
            j.style.height = '0'
        }
        for(let n of sub){
            n.style.height = '0'
        }
    })
}
