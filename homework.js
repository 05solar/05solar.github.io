const scheduleData1 = { //안서현 파트
    '1': '수업',
    '8': '수업',
    '12': '수업',
    '15': '수업',
    '19': '수업',
    '22': '수업',
    '26': '수업',
    '29': '수업'
  };
  
  const scheduleData2 = { //권민지 파트 
    '9': '수업',
    '14': '수업',
    '16': '수업',
    '21': '수업',
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
  
function generateCalendar(containerId, scheduleBoxId, scheduleData) {
  const calendar = document.getElementById(containerId);
  const scheduleBox = document.getElementById(scheduleBoxId);

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
      scheduleBox.innerHTML = '';  // 기존 내용 지우기

      const event = scheduleData[day];
      const card = document.createElement('div');
      card.classList.add('event-card');
      card.textContent = event || '📭 No events today';

      scheduleBox.appendChild(card);
    });

    calendar.appendChild(div);
  }
}

  
  // 각 탭별로 서로 다른 일정 전달
  generateCalendar('calendar1', 'schedule1', scheduleData1);
  generateCalendar('calendar2', 'schedule2', scheduleData2);
  