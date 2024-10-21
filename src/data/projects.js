export const projects = [
  {
    name: "오늘 한 잔",
    title: "칵테일 레시피 웹사이트",
    date: "23.03 ~ 23.06 (1명)",
    techStack: ["JavaScript", "HTML", "CSS", "Express", "LocalStorage"],
    content: [
      {
        function: "칵테일 목록",
        descriptions: ["선택한 칵테일의 레시피 조회"],
      },
      {
        function: "양주 목록",
        descriptions: ["선택한 양주로 만들 수 있는 칵테일 목록 조회"],
      },
      {
        function: "간편 칵테일 목록",
        descriptions: [
          "선택한 간편 칵테일의 레시피 조회",
          "마트나 편의점에서 쉽게 구할 수 있는 재료로 만든 레시피",
        ],
      },
      {
        function: "나만의 칵테일",
        descriptions: [
          "로그인한 상태에서만 사용 가능",
          "나만의 칵테일 레시피 추가",
          "LocalStorage를 활용해 저장",
          "추가한 나만의 칵테일 레시피 조회",
        ],
      },
      {
        function: "회원가입 및 로그인",
        descriptions: [
          "사용자 정보는 JSON 파일에 저장",
          "기존 사용자 확인 및 비밀번호 일치 검사 후 로그인",
          "회원가입 시 비밀번호 확인을 통한 입력 검증",
        ],
      },
    ],
  },
  {
    name: "MODIRA",
    title: "소모임 매칭 웹사이트",
    date: "23.09 ~ 23.12 (6명)",
    techStack: ["React", "Redux", "JWT"],
    content: [
      {
        function: "회원가입 및 로그인",
        descriptions: [
          "자체 회원가입 및 OAuth(카카오) 통합 구현",
          "JWT(JSON Web Token)를 사용하여 사용자 인증 및 세션 관리",
        ],
      },
      {
        function: "등록된 소모임과 Q&A 조회 및 검색",
        descriptions: [
          "REST API를 통해 서버에서 데이터를 가져와 태그 검색, 상태 검색(모집중/모집완료), 키워드 검색 구현",
        ],
      },
      {
        function: "소모임 상세 페이지",
        descriptions: [
          "모집 구분, 인원, 진행 방식 등 소모임 정보 조회",
          "댓글 조회 및 작성",
          "하트 버튼을 눌러 관심 목록 등록",
        ],
      },
      {
        function: "Q&A 상세 페이지",
        descriptions: [
          "질문 및 답변 조회/작성 기능 구현",
          "답변에 대한 댓글 조회 및 작성 기능 구현",
          "하트 버튼을 눌러 관심 목록 등록",
        ],
      },
      {
        function: "소모임 및 Q&A 등록",
        descriptions: ["REST API를 통해 서버에 소모임 정보 및 Q&A 등록 구현"],
      },
      {
        function: "마이페이지",
        descriptions: ["닉네임, 프로필 사진 변경", "등록한 관심 목록 조회"],
      },
      {
        function: "내가 작성한 글",
        descriptions: ["자신이 작성한 소모임 모집 글, Q&A 목록 조회"],
      },
    ],
  },
  {
    name: "ODIGA",
    title: "웨이팅 및 테이블링 앱과 키오스크, 포스기, 관리자 웹",
    date: "24.03 ~ 24.12 (5명)",
    techStack: ["ReactNative", "React", "Context API"],
    content: [
      {
        function: "사용자 앱 - 내 웨이팅 정보",
        descriptions: [
          "자신이 등록한 웨이팅 목록 조회",
          "웨이팅 목록에서 가게 이름, 인증 코드, 남은 대기 팀 수 조회",
          "가게 입장 시 인증 코드를 웨이팅 기기에 입력하여 입장",
        ],
      },
      {
        function: "사용자 앱 - 내 예약 정보",
        descriptions: [
          "예약한 가게 이름과 예약 시간 조회",
          "예약 정보 조회를 위해 서버 API와 비동기 통신 구현",
        ],
      },
      {
        function: "사용자 앱 - 주변 가게 목록",
        descriptions: [
          "사용자의 위치 기반으로 주변 가게 목록 표시",
          "expo-location을 사용하여 위치 정보 수집 및 활용",
          "웨이팅 많은 순, 후기 많은 순, 인기순 정렬",
        ],
      },
      {
        function: "사용자 앱 - 가게 검색 및 상세 페이지",
        descriptions: [
          "검색창을 통해 가게 이름으로 검색 가능",
          "가게 기본 정보(카테고리, 별점 등)를 조회하고 전화 연결 기능 구현",
          "찜 기능으로 마이페이지의 찜 목록에 가게 추가",
          "웨이팅 현황과 빈 테이블 현황 조회",
          "장바구니에 메뉴를 담아 웨이팅 및 예약 가능",
        ],
      },
      {
        function: "사용자 앱 - 마이페이지",
        descriptions: [
          "프로필 사진과 닉네임 수정",
          "웨이팅 및 예약 내역 조회 및 상세 정보 조회",
          "찜한 가게 목록과 작성한 리뷰 관리 기능",
        ],
      },
      {
        function: "사용자 앱 - 설정",
        descriptions: [
          "알림, 위치, 카메라 권한 설정 가능",
          "모바일 기기의 설정 앱으로 이동",
        ],
      },
      {
        function: "사용자 앱 - QR 코드 스캐너",
        descriptions: ["키오스크의 QR 코드를 스캔하여 앱과 키오스크 연결"],
      },
      {
        function: "사용자 앱 - 결제",
        descriptions: [
          "카카오페이, 네이버페이 등의 결제 방식으로 결제 가능",
          "키오스크에서 ‘ODIGA 앱으로 결제'를 선택하면 해당 결제 페이지로 이동",
        ],
      },
      {
        function: "키오스크 - 회원/비회원 선택",
        descriptions: [
          "비회원 선택 시 현장 결제만 가능",
          "회원 선택 시 QR 코드를 제공하여 앱으로 정보 전송",
        ],
      },
      {
        function: "키오스크 - 주문 및 직원 호출",
        descriptions: [
          "사장님이 설정한 카테고리와 메뉴 조회",
          "장바구니에 담긴 메뉴를 주문하여 포스기에서 확인 가능",
          "물, 수저 등 요청사항으로 직원 호출 가능",
        ],
      },
      {
        function: "키오스크 - 결제",
        descriptions: [
          "주문 내역 조회 및 결제 방식 선택",
          "현장 결제와 앱 결제 지원",
        ],
      },
      {
        function: "포스기 - 메인 화면 및 웨이팅 관리",
        descriptions: [
          "대시보드를 통해 테이블별 주문 내역 실시간 조회",
          "웨이팅 현황과 대기 인원 관리",
          "주문한 메뉴의 상태 변경 및 결제 기능 제공",
        ],
      },
      {
        function: "웨이팅 기기 - 대기 등록 및 인증",
        descriptions: [
          "가게 앞 웨이팅 기기를 통해 대기 등록 및 인증",
          "앱이 없는 경우 기기에서 직접 대기 등록 가능",
        ],
      },
      {
        function: "관리자 웹 - 가게 및 메뉴 관리",
        descriptions: [
          "가게 정보 등록 및 수정 가능",
          "등록한 가게 목록 조회",
          "각 카테고리별 메뉴 등록 및 관리",
          "통계 및 분석",
        ],
      },
      {
        function: "관리자 웹 - 예약 관리",
        descriptions: [
          "예약 가능 시간 등록 및 간격 설정 기능",
          "날짜 별 예약 가능 시간 조회 및 수정, 삭제",
          "데이터베이스와의 연동을 통해 예약 시간 업데이트 실시간 반영",
        ],
      },
    ],
  },
  {
    name: "inbestpharm",
    title: "의약품 도매 회사 홈페이지",
    date: "24.07 ~ 24.08 (1명)",
    techStack: ["React", "SMTP", "SHA256", "AWS", "MySQL", "AWS Lambda"],
    content: [
      {
        function: "회사 소개",
        descriptions: [
          "회사의 경영 이념 및 연혁 조회",
          "정적 데이터 렌더링을 통해 주요 정보 표시",
        ],
      },
      {
        function: "공지사항",
        descriptions: [
          "비밀번호 입력을 통해 관리자만 게시글 작성 가능",
          "SHA-256 암호화 알고리즘을 사용하여 비밀번호 처리",
        ],
      },
      {
        function: "의약품 검색",
        descriptions: [
          "REST API를 통해 등록된 의약품 목록 조회",
          "초성 검색, 카테고리별 검색, 키워드 검색 기능으로 필터링 가능",
        ],
      },
      {
        function: "의약품 주문",
        descriptions: [
          "사용자가 입력한 정보 기반으로 SMTP 프로토콜을 사용해 주문서를 회사 대표의 메일로 전송",
        ],
      },
      {
        function: "배포",
        descriptions: [
          "프론트엔드 코드를 S3를 통해 정적 파일로 배포",
          "MySQL 데이터베이스와 AWS RDS를 연결하여 의약품 데이터 관리",
          "AWS Lambda를 사용해 백엔드 코드를 서버리스 환경에서 실행",
        ],
      },
    ],
  },
];
