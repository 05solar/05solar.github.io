const scheduleData1 = { //안서현 파트
    '2': '수업',
    '3': '수업',
    '5': '숙제 : <br> 1. 씨뮬 6회 풀어오기 <br> 2. 수능특강 38, 44, 50, 56, 60 페이지 단어 외워오기 <br> 3. 단어시험 틀린거 5번씩 써오기 ',
    '9': '수업',
    '12': '수업',
    '16': '수업',
    '19': '수업',
    '23': '수업'
  };
  
  const scheduleData2 = { //권민지 파트 
    '4': '수업',
    '6': '<br>1. 자이스토리 220 ~ 230 p 풀어오기',
    '11': '수업 ',
    '13': '수업 ',
    '18': '수업',
    '20': '수업',
    '25': '수업',
    '27': '수업'
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


  
generateCalendar('calendar1', 'schedule1', scheduleData1, 0);
generateCalendar('calendar2', 'schedule2', scheduleData2, 0);
