document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const SIGNUP_API_URL = "";

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // 사용자가 입력한 정보를 가져옴
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        // FormData 객체를 생성하고 데이터를 추가합니다.
        const formData = new FormData();
        formData.append('username', name);
        formData.append('password', password);

        fetch('SIGNUP_API_URL', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('서버 응답에 실패했습니다.');
            }
            return response.json();
        })
        .then(data => {
            // 서버로부터 받은 데이터를 처리합니다.
            console.log(data); // 서버로부터 받은 응답을 콘솔에 출력

            alert('회원가입이 완료되었습니다.');
            // 원하는 페이지로 리다이렉트하거나 다른 동작을 수행할 수 있음
        })
        .catch(error => {
            console.error('에러 발생:', error);
            alert('회원가입에 실패했습니다.');
        });
    });
});
