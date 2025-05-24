const scheduleData1 = { //안서현 파트
    '1': '수업',
    '8': '수업',
    '12': '숙제 : <br> 1. 수능특강 숙제 170p ~ 191p',
    '15': '숙제 : <br> 1. 수능특강 숙제 188p ~ 199p',
    '19': '숙제 : <br> 1. 수능특강 숙제 200p ~ 213p',
    '22': '숙제 : <br> 1. 수능특강 숙제 200p ~ 213p',
    '26': '숙제 : <br> 1. 수능특강 숙제 210 ~ 235p',
    '29': '수업'
  };
  
  const scheduleData2 = { //권민지 파트 
    '9': '수업',
    '14': '숙제 :<br> 1. 수능 보카 2000+ day 7,8 암기<br> 2. 영어 시험지 사진 찍어서 보내기<br> 3. 자이스토리 296p ~ 308p 풀어오기 ',
    '16': '수업 못함 ',
    '21': '숙제 : <br> 1. 자이스토리 306 ~ 313p 풀어오기 <br> 2. 자이스토리 216 ~ 226p 풀어오기 ',
    '23': '수업',
    '28': '수업',
    '30': '수업'
  };
  
  function showPanel(index) {
    const panels = document.querySelectorAll('.panel');
    const buttons = document.querySelectorAll('.tab-button');
  
    panels.forEach((panel, i) => {
      panel.classList.toggle('active', i === index);
    });
  
    buttons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
  }
  
  let selectedDateDiv = null; // 현재 선택된 날짜를 추적

function generateCalendar(containerId, scheduleBoxId, scheduleData, firstDayOfWeek) {
  const calendar = document.getElementById(containerId);
  const scheduleBox = document.getElementById(scheduleBoxId);

  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  daysOfWeek.forEach(day => {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = day;
    dayDiv.style.fontWeight = 'bold';
    dayDiv.style.backgroundColor = '#eee';
    dayDiv.style.borderRadius = '4px';
    calendar.appendChild(dayDiv);
  });

  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptyDiv = document.createElement('div');
    emptyDiv.innerHTML = '&nbsp;';
    calendar.appendChild(emptyDiv);
  }

  for (let day = 1; day <= 31; day++) {
    const div = document.createElement('div');
    div.textContent = day;

    if (scheduleData[day]) {
      div.classList.add('has-event');
    }

    if (day === 11) {
      div.classList.add('today');
    }

    div.addEventListener('click', () => {
      // 이전 선택된 날짜가 있으면 클래스 제거
      if (selectedDateDiv) {
        selectedDateDiv.classList.remove('selected-day');
      }
      // 새로 클릭한 날짜에 클래스 추가
      div.classList.add('selected-day');
      selectedDateDiv = div;

      // 스케줄 표시
      scheduleBox.innerHTML = '';
      const event = scheduleData[day];
      const card = document.createElement('div');
      card.classList.add('event-card');
      card.innerHTML = event || '📭 이 날은 수업이 없습니다! ';
      scheduleBox.appendChild(card);
    });

    calendar.appendChild(div);
  }
}


  
  // 각 탭별로 서로 다른 일정 전달
  generateCalendar('calendar1', 'schedule1', scheduleData1,4);
  generateCalendar('calendar2', 'schedule2', scheduleData2,4);
  
