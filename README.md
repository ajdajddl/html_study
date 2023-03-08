<h1>반응형 웹디자인&웹퍼블리셔 양성과정 버전기록</h1>
<p> ex) 날짜 - 제목 - 요약</p>
<p>23.02.13 시작 - HTML</p>
<p>H1~H6, p , br, inline, block</p>
<p>H1~H6은 검색키워드로 활용가능하다. H4~H6 꼭 필요한 경우만 이용하거나 권장안함</P>
<p>block과 inline태그는 의미에 맞게 외부 내부 구조로 구성해서 사용해야 한다. (의미 중첩X)</p>
<hr>
<h2>23.02.14</h2>
<p>gnb(global navigation bar)<br>사이트 최상단 내비게이션 어떤 페이지에 들어가도 고정되어 있는 주 메뉴</p>
<p>lnb(local navigation bar)<br>gnb의 하단에 배치된 서브 메뉴, 중분류 메뉴</p>
<p>snb (side navigation bar)<br>페이지 내에 좌/우측에 일반적으로 존재하는 추가 메뉴</p>
<p>fnb (footer navigation bar)<br>사이트 최하단 내비게이션<br>footer 영역에 존재하는 회사소개 저작권 등의 보조메뉴 (고객센터 번호/ 센터 위치/ 회사위치)</P>
<p>사이트 header - main - footer로 구성
<P><strong>strong</strong>= 포인트 <em>em</em>= 강조
<block qoute cite="https://webty.tistory.com/85">
<hr>
<h2>23.02.15 - HTMl - 문단태그</h2>
<ul>
<li>순서가 있는 목록</li>
<li>순서가 없는 목록</li>
<li>ul 또는 ol 과 li 사이에 다른 태그를 삽입하지 않도록 주의해야한다.</li>
<li>순차/비순차 목록 1단 사용 시 추가 2단 / 3단을 제작하고 싶다면<br>
새로운 목록(li)을 가지고 있는 (ul, ol) 부터 먼저 생성해야 한다.</li>
<li>새로운 목록(li)이 만들어질때는 항상 ul 또는 ol 이 부모로 존재해야한다.</li>
</ul>
<dl>
<dt>dt와dd</dt>
<dd>dt는 제목 dt는 내용, dd보다 dt가 먼저 나온다.</dd>
<dd>dl안에 dt,dd 외에 다른 태그는 올 수 없다.(dd안에서만 사용가능)</dd>
<dd>dt 연속으로 사용 불가, dt dd dt dd 반복해서는 올 수 있다.</dd>
</dl>
<div class="study">
  <h2>23.02.16 - HTML - 시맨틱태그, 그룹태그</h2>
  <dl>
    <dt>그룹div</dt>
    <dd>2개 이상의 인라인 or 블록 요소를 묶어주는 그룹 태그</dd>
    <dt></dt>
    <dd></dd>
  </dl>
</div>  
<hr>
  <h2>23.02.17 - HTML - </h2>
  <dl>
    <dt>하이퍼링크</dt>
    <dd>문서와 문서를 연결하여 이동할 수 있는 모든 링크</dd>
    <dd>절대경로 상대경로<br>
        다른 문서로 이동하는 방법<br>
        절대경로: 최초의 시작점파일이 존재하기 위한 시발점<br>
        상대경로: ‘기준경로’를 기준으로 경로를 구성하는 것</dd></dl>
<hr>
  <h2>23.02.18</h2>
  <p><a href=" " download=" "></p>
  <p>원하는 파일을 zip 파일이 아니어도 바로 다운받을 수 있도록 링크한다.</p><br>
  <p>상대경로, 절대경로 모두 가능</p>
  <ul>
  <li><img> 태그</li>
  <li>이미지태그는 인라인 요소이다.</li>
  <li>이미지태그는 인라인이지만 css명령어를 통해 크기를 적용할 수 있다.</li>
  <li>이미지태그는 HTML5 부터 대체텍스트 alt 속성을 필수로 작성</li>
  <li>대체텍스트 속성에는 주관적인 내용을 작성하는게 아닌 객관적인 내용 작성</li>
  <li>이미지 사용 시 해서 사용해야 한다.</li>
  <li>의미전달이 필요한 이미지와 아닌 이미지를 구분</li>
  <li>src 경로, alt 대체 텍스트</li>
  </ul>
<hr>
  <h2>23.02.19</h2>
  <ul>
  <li>html - 비디오태그 기본&활용 공부</ul>
  <li>video태그는 블록 요소이다.</li>
  <li>video는 웹 사이트에 출력되는 영상을 재생하는 역할을 한다.</li>
  <li>video작성 시 추가속성 없이 태그만 작성한다면 자동재생되지 않고 첫 화면에서 정지한 모습을 볼 수 있다.</li><br>
  
  <li>video 속성</li>
  <li>video의 속성은 일반적인 태그의 속성과 다르게 속성명만 작성해도 결과가 적용된다.</li>
  <li>autoplay = "autoplay" 속성명과 결과값이 같기 때문에 autoplay 속성명만 작성해도 동작하는 구조이다.</li>
  <li> 명령 입력 안할 시 자동재생, 음소거, 컨트롤바 표시, 영상반복 속성이 모두 적용되지 않는다.</li>
  <li>autoplay //자동재생</li>
  <li>muted //음소거</li>
  <li>controls //컨트롤 바 표시</li>
  <li>loop //반복</li>
  </ul>
<hr>
  <h2>23.02.20-Table</h2>
    <body>
      <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>태그명</th>
              <th>의미</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowspan="3">block</th>
              <td>&lt;tr&gt;</td>
              <td>가로행태그</td>
            </tr>
            <tr>
              <!-- <th>1</th> -->
              <td>&lt;td&gt;</td>
              <td>내용(열)태그</td>
            </tr>
            <tr>
              <!-- <th>1</th> -->
              <td>&lt;th&gt;</td>
              <td>제목(열)태그</td>
            </tr>
          </tbody>
<hr>   
  <h2>23.02.21-HTML-form</h2>
  <form action="#" method="get">
  <fieldset>
  <legend>form 퀴즈</legend>
  <span>다음 중 label for와 연관된 input 속성은?</span><br>
  <label><input type="radio" name="quiz" value="id">1. id</label><br>
  <label><input type="radio" name="quiz" value="id">2. class</label><br>
  <label><input type="radio" name="quiz" value="id">3. name</label>
  </fieldset>
  </form>
<hr>
  <h2>23.02.22 - HTML </h2>
  복습
<hr>
  <h2>23.02.23 - CSS </h2>
  <p> HTML : 틀 , 구조, 의미<br>
    CSS : HTML 디자인 역할<br>
    cascading(위에서 아래로 흐른다) style sheet<br>
    CSS 작성 시에는 HTML의 가족관계 순서대로 작성해야 한다.<br>
    HTML의 문법: <태그 속성= "값"></태그><br>
    CSS문법: 선택자 {속성:값;}      ; = /와 같음 (속성값마다 ; 붙여야함)<br>
    CSS 속성 값에 "",'' 작성하는 경우는 => 값에 한글, 공백이 들어갈 경우 (글꼴 사용시 "" 사용)<br>
    선택자란? CSS로 디자인 하는 HTMl 대상<br>
    ex) <!---<p>text</p>---> p태그로 묶인 글자를 빨강   p {글자색:빨강;}<br>
    글꼴적용방법1. 사용자 컴퓨터에 내장된 글꼴 불러오기<br> 
    (위)주의사항: 해당글꼴이 접속한 사용자에게 없을 경우 글꼴이 임의의 다른 글꼴로 대체될 수 있다. 
    </p>
<hr>
  <h2>23.02.24</h2>
  <p>
  em은 사용자 디바이스에 맞춰서 변화<br>
  font-size rem: body의 16px에 맞춰서 변경<br>
  letter =음수 많이 사용<br>
  word =양수 많이 사용<br>
  line-height 행간<br>
  letter-spacing 자간<br>
  word-spacing 단어와 단어 사이 간격<br>
  font-weight:600; 글자 굵기<br>
  text-decoration:underline; 밑줄<br>
  text-decoration:line-through; 취소선<br>
  link rel="shortcut icon" href="파비콘.ico 경로" type="image/x-icon"<br>
  link rel="icon" href="파비콘.ico 경로" type="image/x-icon"<br>
  파비콘 넣기<br>
  inline-block 크기 인식 하면서 옆으로<br> 
  block 내려가며 크기 인식 <br>
  inline 옆으로 크기 X<br>
  box-sizing:border-box; 여백 값 고정(reset 위치에 넣기)<br>
  border-radius:250px; or 50%  (가로, 세로 비율 일정할시 원모양)
  </p>
<hr>
  <h2>23.02.26</h2>
  <p>block 요소 특징<br>
  ex) h1~6, p, div, blockquote, dl, dt, dd, ol, ul, li, header, footer, nav,<br>
  main, section, article, video, iframe, table, tr, td, th, thead, tbody, tfoot, hr, form, fieldset 등<br>
  기본 너비 100%를 가지고 있다.<br>
  크기, 여백 적용이 가능하다.<br>
  너비100%와는 별도로 항상 줄바꿈이 이루어진다.<br>
  inline 요소 특징<br>
  ex) a, img, span, em, strong, i, del, s, q, code, button, input, select, option, legend, label, br 등<br>
  인라인 태그 내 내용(텍스트 및 이미지)의 크기만큼만 인식한다.<br>
  크기를 적용할 수 없습니다.<br>
  여백(margin, padding)이 적용은 되나 크기 적용불가 특징으로 인해 주변 요소와 겹침현상이 발생한다.<br>
  줄바꿈이 되지 않고 옆으로 나열된다.<br>
  width 너비<br>
  요소의 너비 값을 설정한다.<br>
  상대값과 절대값에 따라 %, px로 구분한다.<br>
  height 높이<br>
  요소의 높이 값을 설정한다.<br>
  상대값과 절대값에 따라 %, px로 구분한다.<br>
  화면 높이(viewport) 기준으로 vh 단위를 사용 가능하다.</p>
  <hr>
      <h2>23.02.27 - CSS - </h2>
      <p>vw vh:화면에서 보이는 영역 설정<br>
       float 블록요소의 흐름을 변경하기 위해 사용하는 레이아웃 배치 CSS 속성<br>
       웹 페이지에서 좌, 우배치 레이아웃 제작시 사용<br>
       부모의 높이는 크기가 따로 안들어가면 자식만큼 인식<br>
       자식이 올라가면서 부모의 높이가 0처리 - 다른 형제가 겹쳐서 올라옴(문제 발생)<br>
       CSS는 속성 값에 따라 태그와 다른 순서를 재창조 가능
        </p>  
  <hr>
      <h2>23.02.28</h2>
      <p>복습</p>
  <hr>
      <h2>23.03.3</h2>
      <p></p>
  <hr>
      <h2>23.03.04</h2>
      <ul>
          <li>position:relative(필수) / left , right , top , bottom(보조)<br> 자기 자신의 현재 위치를 기준으로 이동<br>absolute의 기준으로 부모 위치를 잡을 때도 사용</li>
          <li>position:absolute(필수) / left , right , top , bottom(보조)부모 위치를 기준으로 상대적으로 위치 이동<br>부모 기준은 가장 가까운 부모 기준 position 인식</li>
          <li>position:fixed(필수) / left , right , top , bottom(보조)<br>페이지 스크롤길이와 관계없이 웹브라우저 위치에 고정</li>
          <li>shite-space:공백과 줄바꿈을 지정</li>
          <li>overflow:hidden;범위 이탈 요소 처리(부유하는 속성 잡아줌) </li>
      </ul>
  <hr>
       <h2>23.03.07</h2>
        <p>position:00; left:50%; top:50%;<br>transform:translate(-50%, -50%); 기준점이 왼상단에 있는 위치를 가운데로 옮겨줌.</p>
        <p>position:sticky; / z-index: position이 있어야 사용 가능한 옵션(겹쳐있을 경우 높은 숫자가 먼저 위로 오게)<br>-999부터 999까지 사용 가능 
          <br>10, 100 단위 큰 숫자 사용</p>
        <p>flex-direction:row  왼쪽->오른쪽 수평축 (기본값)</p><br>
        <p>flex-direction:row-reverse  오른쪽->왼쪽</p><br> 
        <p>flex-direction:column 위->아래 수직축 변경</p><br> 
        <p>flex-direction:column-reverse 아래->위</p><br>
        <p>flex-wrap:wrap:기본값(자동 줄바꿈) ex) 1 2 3</p><br>
        <p>flex-wrap:wrap-reverse:행 기준 역방향으로 자동 줄바꿈 처리</p><br>
        <p>:줄바꿈하지 않음(한 줄 처리) 가변너비에 따라 자동으로 % 크기 변경</p>
  <hr>
      <h2>23.03.08</h2>
      css 스프라이트 연습
