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
  </ul>
