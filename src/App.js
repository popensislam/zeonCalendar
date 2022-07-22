import React from 'react';
import './App.scss';
import DaysOfWeek from './components/DaysOfWeek';
import GridCalendar from './components/GridCalendar';
import Header from './components/Header';
import SwitchMonth from './components/SwitchMonth';
import moment from 'moment'

function App() {
  moment().startOf('month').format('DD-MM-YYYY')
  moment.updateLocale('en', { week: { dow: 1 } })
  const [today, setToday] = React.useState(moment())
  const startDay = today.clone().startOf('month').startOf('week').subtract(1, 'day')
  const currentMonth = today.clone().format('MMMM')
  const currentYear = today.clone().format('YYYY')
  const currentDay = moment().clone()
  const day = startDay.clone()
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone())
  

  const handlePrevMonth = () => {
    setToday(prev => prev.clone().subtract(1, 'month'))
  }
  const handleNextMonth = () => {
    setToday(prev => prev.clone().add(1, 'month'))
  }
  const handleThisMonth = () => {
    setToday(moment())
  }
  return (
    <div className="App">
      <Header />
      <div className='calendar'>
        <SwitchMonth
          currentMonth={currentMonth}
          currentYear={currentYear}
          handleNextMonth={handleNextMonth}
          handlePrevMonth={handlePrevMonth}
          handleThisMonth={handleThisMonth}
        />
        <DaysOfWeek />
        <GridCalendar daysArray={daysArray} currentDay={currentDay} />
      </div>
    </div>
  );
}

export default App;
