const booth_info = [
  {
    id: 1,
    name: "총학생회 부스",
    location: "학생누리관 앞 만주벌판",
    desc: "100% 당첨 가챠를 통해서 서랑제의 여운을 오래 간직해보세요!",
    locXY: {
      day1: [235, 165],
      day2: [235, 165],
      day3: [235, 165],
    },
    show: true,
  },
  {
    id: 2,
    name: "기업 및 단체 부스",
    location: "도서관 앞",
    desc: "기업 및 단체 부스",
    locXY: {
      day1: [153, 114],
      day2: [153, 114],
      day3: [153, 114],
    },
    show: false,
  },
  {
    id: 3,
    name: "동아리연합회",
    location: "학생누리관 앞",
    desc: "24일(수): 마주보기, 무한비트, 슈터플라이, AIESEC, Enactus, TIPSSY\n25일(목): 만화방, 서우회, 슈터플라이, 여아, 작은자매, AIESEC\n26일(금): 서우회, 작은자매, 해다움, 한혜윰, Enactus",
    locXY: {
      day1: [203, 92],
      day2: [203, 92],
      day3: [203, 92],
    },
    show: false,
  },
  {
    id: 4,
    name: "미래산업융합대학",
    location: "잔디광장",
    desc: "미산융: 융's YOUTH\n경영: 2-3 분홍이를 깨워라\n데사: 데단한 1교시\n디미: 디디를 이겨라!\n산디: 슬기로운 산디생활\n소융: 지금 우리 소융은\n정보: 정보 1000(천)제\n패산: 초성게임, 이어말하기, 의상보고 노래 맞추기",
    locXY: {
      day1: [263, 120],
      day3: [333, 120],
    },
    show: false,
  },
  {
    id: 5,
    name: "아트앤디자인스쿨",
    location: "잔디광장",
    desc: "아일랜디만의 네버랜드! 야작 에바랜드로 아디 학우분들을 초대합니다~\n- 포토존, 페이스페인팅, 소원팔찌 만들기, 낚시게임, 해적 룰렛",
    locXY: {
      day1: [300, 165],
      day3: [300, 120],
    },
    show: false,
  },
  {
    id: 6,
    name: "인문대학",
    location: "잔디광장",
    desc: "INtro. 인문: 우리들의 설레는 시작\nS#1. 국문: 국문학개론\nS#2. 영문: Re:ady? Action!\nS#3. 불문: Midnight In 불문\nS#4. 독문: Alles über Deutschland\nS#5. 중문\nS#6. 일문: 우리두리후타리마츠Re:\nS#7. 사학: 사극탈출\nS#8. 기독",
    locXY: {
      day1: [333, 120],
      day2: [333, 120],
    },
    show: false,
  },
  {
    id: 7,
    name: "자율전공학부",
    location: "잔디광장",
    desc: "젓가락으로 콩 옮기기 게임, 땅 따먹기, 만보기 게임",
    locXY: {
      day1: [284, 120],
      day2: [284, 120],
    },
    show: false,
  },
  {
    id: 8,
    name: "사회과학대학",
    location: "잔디광장",
    desc: "SADAE pREmium",
    locXY: {
      day2: [263, 120],
      day3: [263, 120],
    },
    show: false,
  },
  {
    id: 9,
    name: "자연과학대학",
    location: "잔디광장",
    desc: '대과자의 LAST MOVIE "한 편의 추억이 대과자"\n상영 극장: 제1과학관 앞 잔디광장 자연과학대학 부스',
    locXY: {
      day2: [300, 165],
      day3: [300, 165],
    },
    show: false,
  },
];

export default booth_info;
