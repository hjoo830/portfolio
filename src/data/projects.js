export const projects = [
  {
    name: "오늘 한 잔",
    title: "칵테일 레시피 웹사이트",
    date: "23.03 ~ 23.06 (1명)",
    techStack: ["JavaScript", "HTML", "CSS", "Express", "LocalStorage"],
    githubUrl: "https://github.com/hjoo830/SWDesign",
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
    githubUrl: "https://github.com/MO-DI-RA/frontend",
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
    date: "24.03 ~ 24.11 (5명)",
    techStack: ["ReactNative", "React", "Context API", "FCM"],
    githubUrl: "https://github.com/O-DI-GA",
    content: [
      {
        client: "사용자 앱",
        features: [
          {
            function: "내 웨이팅 정보",
            descriptions: [
              "자신이 등록한 웨이팅 목록 조회",
              "웨이팅 목록에서 가게 이름, 인증 코드, 남은 대기 팀 수 조회",
              "가게 입장 시 인증 코드를 웨이팅 기기에 입력하여 입장",
              "웨이팅 시 담았던 메뉴가 입장 후 자동으로 장바구니에 추가",
            ],
          },

          {
            function: "내 예약 정보",
            descriptions: [
              "예약한 가게 이름과 예약 시간 조회",
              "예약 정보 조회를 위해 서버 API와 비동기 통신 구현",
            ],
          },
          {
            function: "주변 가게 목록",
            descriptions: [
              "사용자의 위치 기반으로 주변 가게 목록 표시",
              "expo-location을 사용하여 위치 정보 수집 및 활용",
              "웨이팅 많은 순, 후기 많은 순, 인기순 정렬",
            ],
          },
          {
            function: "가게 검색 및 상세 페이지",
            descriptions: [
              "검색창을 통해 가게 이름으로 검색 가능",
              "가게 기본 정보(카테고리, 별점 등)를 조회하고 전화 연결 기능 구현",
              "찜 기능으로 마이페이지의 찜 목록에 가게 추가",
              "웨이팅 현황과 빈 테이블 현황 조회",
              "장바구니에 메뉴를 담아 웨이팅 및 예약 가능",
            ],
          },
          {
            function: "마이페이지",
            descriptions: [
              "프로필 사진과 닉네임 수정",
              "웨이팅 및 예약 내역 조회 및 상세 정보 조회",
              "찜한 가게 목록과 작성한 리뷰 관리 기능",
            ],
          },
          {
            function: "설정",
            descriptions: [
              "알림, 위치, 카메라 권한 설정 가능",
              "모바일 기기의 설정 앱으로 이동",
            ],
          },
          {
            function: "QR 코드 스캐너 및 결제",
            descriptions: [
              "키오스크의 QR 코드를 스캔하여 앱과 키오스크 연결",
              "QR 코드 스캔으로 결제 내역과 방문 날짜 등을 앱으로 전송해 결제 화면 표시",
              "키오스크에서 'ODIGA 앱으로 결제'를 선택하면 주문 정보를 담은 QR코드가 생성되고, 이를 앱에서 스캔하여 앱 결제 페이지로 이동",
            ],
          },
        ],
      },
      {
        client: "키오스크",
        features: [
          {
            function: "테이블 설정",
            descriptions: ["테이블 번호 초기 설정"],
          },

          {
            function: "주문 및 직원 호출",
            descriptions: [
              "카테고리별 메뉴 조회",
              "장바구니에 담긴 메뉴를 주문하여 포스기에서 확인 가능",
              "물, 수저 등 요청 및 직원 호출 가능",
            ],
          },
          {
            function: "결제",
            descriptions: [
              "주문 내역 조회 및 결제 방식 선택",
              "현장 결제와 앱 결제 지원",
              "앱 결제 시 QR 코드를 제공하여 앱으로 정보 전송",
            ],
          },
        ],
      },
      {
        client: "포스기",
        features: [
          {
            function: "로그인 및 가게 선택",
            descriptions: [
              "로그인 및 회원가입",
              "로그인 후 등록된 가게 목록 조회",
              "가게 선택 시 해당 가게에 설정된 테이블 번호별 주문 내역 표시",
            ],
          },

          {
            function: "테이블 관리 및 주문 내역",
            descriptions: [
              "테이블별 주문 내역 실시간 조회",
              "빈 테이블(회색)과 주문 중인 테이블(노란색) 시각적 구분",
              "주문 목록에서 확인 또는 취소 가능",
              "확인 시 테이블별 주문 내역에 추가, 취소 시 추가되지 않음",
            ],
          },
          {
            function: "웨이팅 관리",
            descriptions: [
              "현재 웨이팅 인원 및 대기 번호 표시",
              "웨이팅 상세 보기(웨이팅 번호, 사용자 이름, 인원수, 메뉴 보기)",
              "웨이팅 취소 가능(손님이 오지 않을 경우)",
              "웨이팅 시 담긴 메뉴는 입장 시 자동으로 테이블 장바구니에 추가",
            ],
          },
          {
            function: "주문 알림",
            descriptions: [
              "키오스크에서 주문이 들어올 경우 오른쪽에 주문 목록 표시",
              "포그라운드에서 Firebase Cloud Messaging(FCM)을 이용해 새로운 주문 내역 실시간 확인",
            ],
          },
        ],
      },

      {
        client: "웨이팅 기기",
        features: [
          {
            function: "대기 등록 및 인증",
            descriptions: [
              "가게 앞 웨이팅 기기를 통해 인증번호 입력 시 입장 가능",
              "현재 웨이팅 번호 표시",
            ],
          },
        ],
      },
      {
        client: "관리자 웹",
        features: [
          {
            function: "가게 및 메뉴 관리",
            descriptions: [
              "로그인 및 회원가입",
              "가게 정보 등록 및 수정 가능",
              "등록한 가게 목록 조회",
              "각 카테고리별 메뉴 등록 및 관리",
              "테이블 정보 설정(테이블 개수, 착석 가능 인원)",
            ],
          },

          {
            function: "예약 관리",
            descriptions: [
              "예약 가능 시간 등록 및 간격 설정 기능",
              "날짜 별 예약 가능 시간 조회 및 수정, 삭제",
              "데이터베이스와의 연동을 통해 예약 시간 업데이트 실시간 반영",
            ],
          },
          {
            function: "매출 분석",
            descriptions: [
              "오늘 매출 현황(매출액, 방문자 수, 웨이팅 수, 인기 메뉴) 조회",
              "카테고리별 및 메뉴별 매출 분석 시각화",
              "GPT API를 이용한 매출 분석 조언 제공",
              "요일별, 시간대별 방문자 및 웨이팅 수 시각화",
              "연간 예약 패턴 시각화",
              "리뷰 통계 및 GPT API 기반 요약 및 개선 사항 제공",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "inbestpharm",
    title: "의약품 도매 회사 홈페이지",
    date: "24.07 ~ 24.08 (1명)",
    techStack: ["React", "SMTP", "SHA256", "AWS", "MySQL", "AWS Lambda"],
    githubUrl: "https://github.com/hjoo830/inbestpharm",
    websiteUrl: "",
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
  {
    name: "Pin it",
    title: "Pinterest 클론 코딩 및 기능 추가",
    date: "24.12 ~ 25.01 (5명)",
    techStack: ["React", "TypeScript", "Firebase", "Tailwind.css"],
    githubUrl: "https://github.com/GoormPinIt/pin-it",
    websiteUrl: "http://goorm-pin-it.s3-website.ap-northeast-2.amazonaws.com/",
    content: [
      {
        function: "마이페이지 및 프로필 페이지",
        descriptions: [
          "프로필의 공유 버튼을 눌러 링크 복사, WhatsApp 공유, Facebook Messenger 공유, Facebook 공유, X(Twitter) 공유 가능",
          "팔로워 목록과 팔로잉 목록을 볼 수 있으며 팔로우 / 언팔로우 가능",
          "생성한 핀 목록과 저장한 핀 목록을 Masonry Layout으로 표시",
          "생성한 보드 목록을 볼 수 있으며, 최신순 / 알파벳순으로 정렬 가능",
          "마이페이지에서만 + 버튼이 나타나며, 핀 만들기 페이지로 이동하거나 보드 만들기 모달 표시",
          "보드 만들기에서 비밀보드 유지, 참여자 초대 가능",
        ],
      },
      {
        function: "스토리",
        descriptions: [
          "팔로우 중인 사용자의 스토리만 목록에 표시",
          "스토리를 올린 유저의 프로필 클릭 시 업로드한 스토리와 상대 시간 표시",
          "한 유저가 여러개의 스토리를 올린 경우 화살표가 나타나며 다음 스토리 조회 가능",
          "스토리는 업로드 후 24시간이 지나면 자동 삭제",
          "본인이 올린 스토리가 없을 경우, 프로필 클릭 또는 + 버튼으로 스토리 생성",
        ],
      },
      {
        function: "프로필 수정",
        descriptions: ["프로필 사진, 닉네임, 소개글, 아이디 변경 가능"],
      },
    ],
  },
  {
    name: "Chat HHJ",
    title: "ChatGPT 클론 코딩",
    date: "25.02 ~ 25.03 (1명)",
    techStack: ["Next.js", "TypeScript", "ChatGPT API", "Neon", "Vercel"],
    githubUrl: "https://github.com/hjoo830/nextjs-chatgpt-clone",
    websiteUrl: "https://nextjs-chatgpt-clone-ebon.vercel.app/",
    content: [
      {
        function: "회원가입 및 로그인",
        descriptions: [
          "이름, 이메일, 비밀번호 유효성 검사",
          "중복 가입 여부 확인",
          "존재하지 않는 회원 처리",
          "비밀번호 불일치 처리",
        ],
      },
      {
        function: "채팅",
        descriptions: [
          "첫 채팅 입력 시 대화 목록에 추가",
          "채팅 내용 DB 저장 및 로그인 후 확인 가능",
          "새로운 대화 버튼으로 새로운 대화 시작 가능",
          "GPT-3.5 Turbo, GPT-4, GPT-4o 중 모델 선택 가능",
        ],
      },
      {
        function: "대화 수정 및 삭제",
        descriptions: [
          "마우스 호버 시 … 아이콘 표시",
          "Edit 버튼으로 대화 제목 수정",
          "Delete 버튼으로 대화 삭제",
        ],
      },
    ],
  },
  {
    name: "IT TIME",
    title: "대규모 IT 컨퍼런스 운영 웹 사이트",
    date: "25.02.26 ~ 25.04.01 (9명)",
    techStack: ["Next.js", "TypeScript", "Tailwind.css", "Zustand", "Vercel"],
    githubUrl: "https://github.com/saero-jinro/saerojinro-client",
    websiteUrl: "https://ittime.site/",
    content: [
      {
        function: "강의 목록",
        descriptions: ["날짜별 시간대별 강의 조회", "카테고리 필터링"],
      },
      {
        function: "강의 상세 페이지",
        descriptions: [
          "강의 시간 및 장소, 제목, 카테고리, 상세 설명 등 표시",
          "강연자 소개 표시",
          "강의자료 다운로드",
          "사전 질문 등록 및 조회",
          "본인이 등록한 사전 질문의 경우 수정 및 삭제 가능",
        ],
      },
      {
        function: "시간표",
        descriptions: [
          "날짜별로 본인이 신청한 강의들을 시간표 형태로 조회",
          "빈 시간 클릭 시 우측에 해당 시간에 추가한 즐겨찾기 목록과 추천 강의 목록 표시",
          "전체 즐겨찾기 목록 조회",
          "모바일의 경우 우측에 표시되는 것이 아닌, 바텀 시트로 구현",
        ],
      },
      {
        function: "강의 신청 기능",
        descriptions: [
          "강의 신청 버튼을 컴포넌트로 분리하여 카드, 상세 페이지 등 여러 곳에서 재사용",
          "강의 신청 / 취소 토글",
          "강의 신청 시 시간표에 바로 반영되도록 구현",
        ],
      },
      {
        function: "즐겨찾기 기능",
        descriptions: [
          "즐겨찾기 버튼을 컴포넌트로 분리하여 카드, 상세 페이지 등 여러 곳에서 재사용",
          "즐겨찾기 추가 / 삭제 토글",
          "zustand를 이용하여 전역으로 상태 관리",
        ],
      },
    ],
  },
];
