// 1. 상품가격 입력
// 2. 할인율보기 클릭
// 3. 1번의 가격이 할인율 계산함수로 계산
// 4. 3번결과가가 li 출력

// DOM 변수 3개
const moneyInput = document.querySelector('#money');
const resultBtn = document.querySelector('#result');
const disCountLi = document.querySelectorAll('.discount > li');
const resetBtn = document.querySelector('.reset');

//console 확인
console.log(moneyInput , resultBtn , disCountLi , resetBtn);

//price 변수 초기값 100 대입
//<input value="100"> value 속성!
// 객체.함수(); 
// 객체.속성;
moneyInput.value = ''; //초기값 대입

// 버튼 이벤트 (버튼에 동작을 넣어 함수 실행시키는 목적)
// 객체 .addEventListener('이벤트',실행함수);

resultBtn.addEventListener('click', function(){
    //'이벤트' 했을때 실행하고 싶은 명령
    //alert('값을 입력하고 다시 버튼을 누르세요.');
    //console.log(disCountFunc(productPrice.value));
    disCountLi[0].textContent = `입력가 : ${moneyInput.value}원`;
    disCountFunc(moneyInput.value);
});

//초기화 클릭하면 입력값부터 li의 모든값까지 초기화되게 하기
resetBtn.addEventListener('click', resetFunc);
function resetFunc(){
    productPrice.value =''; // 0 또는 빈문자열 '' 사용
    disCountLi[0].textContent = '';
    disCountLi[1].textContent = '';
    disCountLi[2].textContent = '';
    disCountLi[3].textContent = '';
    disCountLi[4].textContent = '';
    disCountLi[5].textContent = '';
    disCountLi[6].textContent = '';
}

// 초기값 또는 입력값에 따라 할인율 계산하는 함수
function disCountFunc(price){
    disCountLi[1].textContent = `5% 할인율 : ${price * 0.95}`; //n번째 li에 해당 할인율 대입
    disCountLi[2].textContent = `10% 할인율 : ${price * 0.9}`;
    disCountLi[3].textContent = `20% 할인율 : ${price * 0.8}`;
    //return;
    disCountLi[4].textContent = `30% 할인율 : ${price * 0.7}`;
    disCountLi[5].textContent = `40% 할인율 : ${price * 0.6}`;
    disCountLi[6].textContent = `50% 할인율 : ${price * 0.5}`;
    return; //위에서 쌓은 값을 함수호출시 내보냄. 함수 종료역할. (값 다 썼어도 값 중간에 return 사용시 함수값 끊김)
}