//main-row1 카테고리 제목 글자 색 마우스 이벤트 변경
const category_a =document.querySelectorAll('.category a')
console.log(category_a)
for(let i of category_a){
    console.log(i)
    i.addEventListener('click',()=>{
        for(let j of category_a){
        j.style.background = 'rgba(255,255,255,0.8)'
        j.style.color = '#222'
    } 
        i.style.background = '#ff5252'
        i.style.color = '#fff'
    })
}
//main-video 안내, 사용방법 클릭 시 관련 내용 보이기
//초기: 안내 기본 활성화 = 안내제목 밑줄, 안내 내용 보이기/방법 숨기기
//사용방법 클릭=>방법제목밑줄/안내 숨기기/방법 보이기
//안내 클릭=> 안내제목 밑줄/안내 보이기/방법 숨기기
const video_t = document.querySelectorAll('#video .tab a')
const video_c = document.querySelectorAll('#video .tab_contents > div')
console.log(video_t, video_c)

//사용방법 내용 숨기기
video_c[1].style.display = 'none'
video_t.forEach((i, index)=>{
    console.log(i, index)
    i.addEventListener('click',(e)=>{
        e.preventDefault();
        for(let j of video_t){
        j.style.border = 'none'
    }
        i.style.borderBottom = '4px solid #189bfa'
        for(let j of video_c){
        j.style.display = 'none'
        }video_c[index].style.display = 'block'
    })//for문의 반복 사용으로 조건 넣어줌 {} 조건 끝난 후 다음 조건 읽어줌.
}) //클릭한 대상과 같은 인덱스의 같은 video_c를 잡아라

//main-row3 자주사용하는 메뉴
//탭 제목 클리시 탭 활성화 디자인 적용하기(border)
//탭 제목 클리시 관련 탭 내용 보이기/ 나머지 숨기기
const menu_t = document.querySelectorAll('#menu .tab a')
const menu_c = document.querySelectorAll('#menu .tab_contents > div')
console.log(menu_t, menu_c)
for(let i of menu_c){i.style.display='none'}
menu_c[0].style.display = 'grid'
menu_t.forEach((target,index)=>{
    target.addEventListener('click',(e)=>{
        e.preventDefault();
        for(let i of menu_t){
            i.style.borderBottom = '1px solid #222'
        }
        for(let j of menu_c){
            j.style.display = 'none'
        }
        menu_c[index].style.display = 'grid'
        target.style.borderBottom = 'none'
    })
})