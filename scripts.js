document.addEventListener('DOMContentLoaded', () => {
    navigate('Home');
});

function navigate(page) {
    const mainContent = document.getElementById('main-content');
    switch (page) {
        case 'Home':
            mainContent.innerHTML = `
        <div class="section profile-container" style="display: flex; align-items: center;">
            <img src="temp.jpeg" alt="Profile Picture" style="margin-right: 20px;">
            <div>
                <h1>Step into my site!</h1>
                <p>안녕하세요! 저는 강원대학교 컴퓨터공학과에 재학 중인 신재혁입니다. 자바와 코틀린 언어를 집중적으로 공부하고 있으며, 
                   특히 백엔드 개발에 깊은 관심을 가지고 있습니다. 현재 학업과 함께 다양한 프로젝트를 통해 경험을 쌓고 있습니다. 
                   저의 MBTI는 ISFP로, 섬세하고 독창적인 성격을 가지고 있습니다. 앞으로 창의적이고 뛰어난 개발자가 되는 것을 목표로 하고 있습니다.</p>
            </div>
        </div>
    `;
            break;



        case 'About me':
            mainContent.innerHTML = `
                <div class="section">
                    <h1>About ME</h1>
                    <div class="section-content">
                        <p>안녕하세요, 저는 신재혁이라고 합니다. 24살이며 청주에서 태어나 현재 춘천 강원대학교에서 대학생 생활을 하고 있습니다. 현재 컴퓨터공학과에 재학 중이며, 백엔드 개발자로서의 꿈을 키워가고 있습니다.</p>
                        <p>저는 ISFP 성격 유형으로, 감성적이고 섬세하며 정직을 올바른 가치관으로 살아가고 있습니다. 사람들과의 관계에서 진실함을 중요하게 여기고, 항상 솔직하게 대하려고 노력합니다. 이러한 성격은 저의 장점이라고 생각합니다.</p>
                        <p>어릴 때부터 피아노를 배우며 취미로 삼아왔고, 지금도 여유 시간에는 피아노를 치며 마음의 안정을 찾습니다. 또한, 영화를 보는 것을 좋아해서 다양한 장르의 영화를 통해 새로운 아이디어와 영감을 얻고 있습니다.</p>
                        <p>개발자를 향한 경험을 쌓아가면서, 보다 나은 시스템을 만들기 위해 학습하고 노력하고 있습니다. 실습과 프로젝트를 통해 얻은 경험을 바탕으로, 사용자들에게 안정적이고 효율적인 서비스를 제공하는 것을 목표로 하고 있습니다.</p>
                        <p>장기적인 목표로는 은퇴 후에 카페를 차리는 꿈을 가지고 있습니다. 사람들이 편안하게 쉴 수 있는 공간을 만들고, 제가 좋아하는 커피와 디저트를 함께 즐길 수 있는 곳을 운영하고 싶습니다.</p>
                        <p>앞으로도 개발에 대한 열정을 가지고 꾸준히 발전해 나갈 것이며, 진실되고 정직한 자세로 제 목표를 이루기 위해 노력해 나갈 것입니다.</p>
                        <p>감사합니다.</p>
                    </div>
                </div>
            `;
            break;

        case 'Goals':
            mainContent.innerHTML = `
                <div class="section">
                    <h1>My Goals</h1>
                    <div class="section-content">
                        <h2>백엔드 개발자 되기</h2>
                        <p>소프트웨어 개발에 대한 열정을 가지고 있으며, 특히 백엔드 개발에 큰 관심이 있습니다. </p>
                        <p>프로그래밍 언어 학습: Python, Java, JavaScript 등 주요 언어 마스터하기</p>
                        <p>프레임워크 익히기: Spring, Django, Node.js 등 백엔드 프레임워크 실습</p>
                        <p>프로젝트 수행: 실제 프로젝트 참여 및 개인 프로젝트 개발</p>
                        <h2>건강한 라이프스타일 유지</h2>
                        <p>규칙적인 운동과 균형 잡힌 식단을 통해 몸과 마음을 건강하게 유지하고자 합니다. </p>
                        <p>규칙적인 운동: 주 5회 이상 운동하기 (러닝, 헬스)</p>
                        <p>건강한 식단: 과일과 채소, 단백질 중심의 식단 유지</p>
                        <p>심신 단련: 명상 및 심호흡 연습을 통한 스트레스 관리</p>
                        <h2>긍정적인 인간관계 형성</h2>
                        <p>긍정적인 인간관계는 행복한 삶의 중요한 요소라 생각합니다.</p>
                        <p>가족 및 친구들과의 시간: 정기적으로 가족과 친구들을 만나기</p>
                        <p>커뮤니티 참여: 동아리등 다양한 모임에 참여하기</p>
                        <p>의사소통 기술 향상: 적극적인 경청과 공감을 바탕으로 한 대화 나누기</p>
                        <h2>피아노를 비롯한 취미생활 활성화</h2>
                        <p>피아노 연주는 저의 중요한 취미 중 하나입니다. 또한 다른 취미 활동들도 활성화할 계획입니다.</p>
                        <p>피아노 연습: 매일 최소 30분 이상 연습하기</p>
                        <p>다른 취미 찾기: 그림 그리기, 독서 등 새로운 취미 시도</p>
                        <p>취미 관련 커뮤니티 참여: 피아노 동호회나 관련 행사 참여</p>
                        <h2>외국어 학습</h2>
                        <p>영어는 개발자 업무와 관련이 많기에 영어를 중심으로 학습하여 다양한 문화와 소통하고 싶습니다:</p>
                        <p>영어 학습: 일일 1시간 이상 영어 공부 (읽기, 쓰기, 듣기, 말하기)</p>
                        <p>언어 교환: 외국인 친구들과의 언어 교환 프로그램 참여</p>
                    </div>
                </div>
            `;
            break;

        case 'Contact':
            mainContent.innerHTML = `
                <div class="section">
                    <h1>Contact Me</h1>
                    <div class="section-content">
                        <p>저의 연락처입니다.</p>
                        <p>이메일: <a href="mailto:wogur293@gmail.com">wogur293@gmail.com</a></p>
                        <p>전화번호: 010-6252-9731</p>
                    </div>
                </div>
            `;
            break;
    }
}
