import React, { useState } from 'react';
import DayPickerWrap from '../DayPickerWrap';
import { Menu, Dropdown } from 'antd';
import moment from 'moment';

function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate()
    );
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date)
      .startOf('week')
      .toDate(),
    to: moment(date)
      .endOf('week')
      .toDate(),
  };
}

const Calendar = () => {
  const initDate = getWeekDays(getWeekRange(new Date()).from);
  const dateRange = moment(initDate[0]).format("DD MMMM YYYY").concat(' - ',moment(initDate[6]).format("DD MMMM YYYY"));

  const [visible, setVisible] = useState(false);
  const [date, setData] = useState(dateRange)

  const handleVisibleChange = flag => {
    setVisible(flag);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <div className="calendar-wrapper">
          <div className="calendar-wrapper__date">
            <div className="calendar-wrapper__arrow">
              <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.8689 12.1661L8.36122 0.995068L14.8535 12.1661L8.36122 12.1661L1.8689 12.1661Z" fill="white" stroke="#DADADA"/>
                <path d="M1.67249 11.5H15.065L16.0002 13H0.761728L1.67249 11.5Z" fill="white"/>
              </svg>
            </div>
              {date}
            </div>
          <DayPickerWrap setData={setData}/>
          <div className="calendar-wrapper__info">
            <p className="calendar-wrapper__info-title">Keterangan:</p>
            <ul>
              <li className="calendar-wrapper__info-item">Tersedia</li>
              <li className="calendar-wrapper__info-item">Tidak Tersedia</li>
            </ul>
          </div>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="dropdown-calendar">
      <Dropdown 
        overlay={menu} 
        trigger={['click']}
        placement="bottomCenter"
        overlayClassName="dropdown-overlay"
        onVisibleChange={handleVisibleChange}
        visible={visible}
      >
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <span>{date}</span>             
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 10H7V12H9V10ZM13 10H11V12H13V10ZM17 10H15V12H17V10ZM19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM19 19H5V8H19V19Z" fill="black"/>
          </svg>
        </a>
      </Dropdown>
    </div>
  );
};

export default Calendar;