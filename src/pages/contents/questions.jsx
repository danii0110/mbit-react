const questions = [
  {
    question: '대학생이라면 가장 듣고싶은 교양 과목은?',
    answer: [
      {
        text: '유튜버 영상 트렌드 분석 및 추천 AI 연구',
        field: ['데이터'],
      },
      {
        text: '쉽게 배우는 프로그래밍 언어',
        field: ['백'],
      },
      {
        text: '2023 패션 트렌드',
        field: ['프론트'],
      },
      {
        text: 'Esport 배워보기',
        field: ['게임'],
      },
      {
        text: '핀테크와 블록체인',
        field: ['보안'],
      },
    ],
  },
  {
    question: '당신만의 서비스를 개발하여 출시한다면 어떤 요소에 가장 많은 시간과 재정을 투자하고 싶나요 ?',
    answer: [
      {
        text: '다른 서비스들과 다른 환상적인 디자인과 레이아웃',
        field: ['프론트'],
      },
      {
        text: '무엇보다도 안전이 최고. 고객들의 개인정보를 안전하게 보관하는 신뢰성의 구축',
        field: ['보안'],
      },
      {
        text: '느려서는 안돼 ! 늘 빠르고 신속한 서비스의 제공',
        field: ['백'],
      },
      {
        text: '서비스 이용자 분석 하에 제공되는 맞춤형 서비스로의 이용자 지속적 확대',
        field: ['데이터'],
      },
      {
        text: '재미 요소 추가하기 !',
        field: ['게임'],
      },
    ],
  },
  {
    question: '당신은 바다 앞 해변에서 모래성을 지으려고 합니다. 당신이 생각하는 가장 중점을 둬야할 점은 무엇인가요 ?',
    answer: [
      {
        text: '무너져도 좋으니 무조건 이쁘게 짓는다 ! ',
        field: ['프론트'],
      },
      {
        text: '아니야. 약간 투박하더라도 좋으니 무엇보다도 튼튼하게 지어야 해.',
        field: ['보안', '백'],
      },
      {
        text: '어떻게 짓든 무너질텐데.. 그래도 천천히 구상부터 해볼까 ?',
        field: ['보안', '백'],
      },
      {
        text: '대충 짓고, 다른 사람 모래성이나 부수러 다니자 !',
        field: ['게임'],
      },
      {
        text: '갯벌 진흙으로 지으면 튼튼할거야 ! ',
        field: ['데이터'],
      },
    ],
  },
  {
    question: '당신은 로봇 청소기를 구매하려고 합니다. 이 중 당신이 구매하고 싶은 로봇 청소기는?',
    answer: [
      {
        text: '디자인이 이쁜 로봇 청소기',
        field: ['프론트'],
      },
      {
        text: '청소가 진짜 잘되는 로봇 청소기',
        field: ['백'],
      },
      {
        text: 'cctv 기능이 있어 집 보안에 도움이 되는 로봇 청소기',
        field: ['보안'],
      },
      {
        text: '집 구조를 파악해서 쉽게 더러워지는 곳을 집중적으로 청소하는 로봇 청소기',
        field: ['데이터'],
      },
      {
        text: '음성 인식을 할 수 있어 재밌게 대화할 수 있는 청소기',
        field: ['게임'],
      },
    ],
  },
  {
    question:
      '요즘들어 부쩍 헬스장에 다니는 사람들이 많아진 것을 느낀 당신. 자신도 헬스에 도전해 보려고 한다. 헬스장에 가기 전 가장 먼저 해야 할 일은?',
    answer: [
      {
        text: '초심자 티가 나면 부끄러우니 이쁘고 멋있는 헬스복을 구매한다. ',
        field: ['프론트'],
      },
      {
        text: '운동하다가 다치면 헬스장에 못가 비용이 아까우니 헬스에 필요한 여러 보조 도구를 구매한다.',
        field: ['백'],
      },
      {
        text: '처음 운동을 할 때 제대로 배워야 하기 때문에 pt를 몇 회 받아본다.',
        field: ['데이터'],
      },
      {
        text: '혼자 하면 재미가 없으니 운동 메이트를 구해 같이 운동한다.',
        field: ['게임'],
      },
      {
        text: '운동할 때 자신의 물건이 들어있는 캐비넷 열쇠가 없어질 수도 있으니 팔에 끼고 운동한다.',
        field: ['보안'],
      },
    ],
  },
  {
    question: '여름, 가을이 지나가고 제법 날씨가\n추워졌다.당신이 구매할 겨울 옷은? ',
    answer: [
      {
        text: '얼어 죽어도 무조건 디자인이 이쁜 옷',
        field: ['프론트'],
      },
      {
        text: '요즘 트렌드를 분석한 최신 패션 옷',
        field: ['데이터'],
      },
      {
        text: '따듯한게 최고! 보온성 갑인 옷',
        field: ['백'],
      },
      {
        text: '재밌는 프린팅이 들어간 옷',
        field: ['게임'],
      },
      {
        text: '나의 소중한 물건들을 수납할 수 있는 주머니가 많은 옷',
        field: ['보안'],
      },
    ],
  },
  {
    question:
      '이성 친구를 사귀게 된 당신. 데이트 비용이 용돈으로 감당되지 않아서 아르바이트를 구하려 한다. 가장 하고 싶은 알바는?',
    answer: [
      {
        text: '화장품 가게 알바',
        field: ['프론트'],
      },
      {
        text: '보드게임 카페 알바',
        field: ['게임'],
      },
      {
        text: '경비 알바',
        field: ['보안'],
      },
      {
        text: '공부도 할 수 있고 돈도 버는 독서실 알바',
        field: ['백'],
      },
      {
        text: '자택 근무 가능한 데이터 라벨링 알바',
        field: ['데이터'],
      },
    ],
  },
  {
    question:
      '만약 당신이 손흥민 선수의 팀인 토트넘에 입단하여 같이 경기를 뛸 수 있다고 가정 할 때, 가장 뛰고 싶은 포지션은?',
    answer: [
      {
        text: '팀의 골문을 지키는 골키퍼',
        field: ['보안'],
      },
      {
        text: '경기 중 돋보일 수 있는 측면 공격수',
        field: ['프론트'],
      },
      {
        text: '공격과 수비를 연결하는 중심적인 역할',
        field: ['백'],
      },
      {
        text: '팀의 여러 코치진들에게 의견을 물어봐서 정한다.',
        field: ['데이터'],
      },
      {
        text: '뛰는건 싫어. 축구 게임이나 하자 ',
        field: ['게임'],
      },
    ],
  },
  {
    question: '9번',
    answer: [
      {
        text: '9번-1',
        field: ['프론트'],
      },
      {
        text: '9번-2',
        field: ['백'],
      },
      {
        text: '9번-3',
        field: ['보안'],
      },
      {
        text: '9번-4',
        field: ['데이터'],
      },
      {
        text: '9번-5',
        field: ['게임'],
      },
    ],
  },
  {
    question: '10번',
    answer: [
      {
        text: '10번-1',
        field: ['프론트'],
      },
      {
        text: '10번-2',
        field: ['백'],
      },
      {
        text: '10번-3',
        field: ['보안'],
      },
      {
        text: '10번-4',
        field: ['데이터'],
      },
      {
        text: '10번-5',
        field: ['게임'],
      },
    ],
  },
];

export default questions;
