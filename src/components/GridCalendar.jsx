const GridCalendar = ({ daysArray, currentDay, setActive }) => {
    return (
        <div className="grid-wrapper">
            <div className="grid">
                {daysArray.map(day =>
                        <div className={day.isoWeekday() == 6 || day.isoWeekday() == 7 ? "grid-item weekend" : "grid-item"} key={day.format('DD-MM-YYYY')}>
                            <p onClick={() => setActive(true)} className={currentDay.format('DD-MM-YYYY') == day.format('DD-MM-YYYY') ? "active" : ''}>
                                {day.format('D')}
                            </p>
                        </div>
                )}
            </div>
        </div>
    );
}

export default GridCalendar;