import React, { useState } from 'react'
import DayPicker from 'react-day-picker';
import moment from 'moment';

import MomentLocaleUtils from '../../node_modules/react-day-picker/moment';
import '../../node_modules/moment/locale/id';


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

const WEEKDAYS_SHORT = {
    id: ['M', 'S', 'S', 'R', 'K', 'J', 'S'],
};

const DayPickerWrap = ({setData}) => {

  const dateDefault = getWeekDays(getWeekRange(new Date()).from);
  const [hoverRange, setHoverRange] = useState(hoverRange)
  const [selectedDays, setSelectedDays] = useState(dateDefault)

  const handleDayChange = date => {
    const d = getWeekDays(getWeekRange(date).from);
    const dateRange = moment(d[0]).format("DD MMMM YYYY").concat(' - ',moment(d[6]).format("DD MMMM YYYY"));

    setSelectedDays(getWeekDays(getWeekRange(date).from));
    setData( dateRange);
  };
  
  const handleDayEnter = date => {
    setHoverRange(getWeekRange(date));
  };
  
  const handleDayLeave = () => {
    getWeekRange(undefined);
  };
  
  const handleWeekClick = (weekNumber, days, e) => {
    setSelectedDays(days);
  };

  const daysAreSelected = selectedDays.length > 0;

  const modifiers = {
    hoverRange,
    selectedRange: daysAreSelected && {
      from: selectedDays[0],
      to: selectedDays[6],
    },
    hoverRangeStart: hoverRange && hoverRange.from,
    hoverRangeEnd: hoverRange && hoverRange.to,
    selectedRangeStart: daysAreSelected && selectedDays[0],
    selectedRangeEnd: daysAreSelected && selectedDays[6],
  };

  const notActiveDays = [
    new Date(2020, 7, 30),
    new Date(2020, 8, 1),
    new Date(2020, 8, 5),
    new Date(2020, 8, 6),
    new Date(2020, 8, 12),
    new Date(2020, 8, 13),
    new Date(2020, 8, 20),
    new Date(2020, 8, 26),
    new Date(2020, 8, 27),
    new Date(2020, 9, 3),
  ]

  return (
    <div className="SelectedWeekExample">
      <DayPicker
        weekdaysShort={WEEKDAYS_SHORT.id}
        selectedDays={selectedDays}
        showOutsideDays
        modifiers={modifiers}
        onDayClick={handleDayChange}
        onDayMouseEnter={handleDayEnter}
        onDayMouseLeave={handleDayLeave}
        onWeekClick={handleWeekClick}
        
        onMonthChange={ (d) => {
          const month = moment(d).format("MMMM");
          const firstDay = moment(selectedDays[0]).format("DD");
          const firstYear = moment(selectedDays[0]).format("YYYY");
          let firsDate = firstDay.concat(' ',month,' ',firstYear);
          firsDate = moment(firsDate,'DD MMMM YYYY').toDate();

          const date = getWeekDays(getWeekRange(firsDate).from);
          const dateRange = moment(date[0]).format("DD MMMM YYYY").concat(' - ',moment(date[6]).format("DD MMMM YYYY"));
          
          setSelectedDays(getWeekDays(getWeekRange(firsDate).from));
          setData( dateRange);

        }}

        localeUtils={MomentLocaleUtils} 
        locale={"id"}
      />
    </div>
  )
}

export default DayPickerWrap;