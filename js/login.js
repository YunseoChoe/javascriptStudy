document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const LOGIN_API_URL = "http://34.22.81.103/auth/login";

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // 사용자가 입력한 정보를 가져옴
        const userid = document.getElementById('userid').value;
        const password = document.getElementById('password').value;

        // JSON 데이터 생성
        const jsonData = {
            userid: userid,
            password: password
        };
        
        // fetch 요청 보내기
        fetch(LOGIN_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => {
            // 응답 실패시
            if (!response.ok) {
                throw new Error('서버 응답에 실패했습니다.');
            }
            // 응답 성공시
            return response.json(); // JSON 데이터를 추출하여 JavaScript 객체로 파싱
        })
        .then(data => {
            // 서버에서 반환된 데이터 출력
            console.log(data.access_token);
            // localStorage에 저장
            localStorage.setItem('access_token', data.access_token);
        })
        .catch(error => {
            // 에러 처리
            console.error('오류 발생:', error.message);
        });
    });
});