import React, { useState } from 'react';
import './Calendar.css';

const holidays = {
    2023: {
        1: { 1: 'New Year\'s Day' },
        1: { 26: 'Republic Day' },
        3: { 21: 'Nawroz' },
        3: { 25: 'Holi' },
        4: { 11: 'Id-ul-fitr' },
        4: { 21: 'Mahavir Jayanti' },
        5: { 23: 'Buddha Purnima' },
        6: { 17: 'Id-ul-Zuha (Bakrid)' },
        7: { 17: 'Muharram' },
        8: { 15: 'Independence Day' },
        8: { 26: 'Janmashtami' },
        9: { 16: 'Milad-un-Nabi (Prophet’s Birthday)' },
        10: { 2: 'Mahatma Gandhi’s Birthday' },
        10: { 3: 'Iraqi Independence Day' },
        10: { 12: 'Dussehra' },
        10: { 31: 'Diwali' },
        12: { 25: 'Christmas Day' }
    },
    
    2024: {
        1: { 1: 'New Year\'s Day' },
        1: { 26: 'Republic Day' },
        3: { 21: 'Nawroz' },
        3: { 25: 'Holi' },
        4: { 11: 'Id-ul-fitr' },
        4: { 21: 'Mahavir Jayanti' },
        5: { 23: 'Buddha Purnima' },
        6: { 17: 'Id-ul-Zuha (Bakrid)' },
        7: { 17: 'Muharram' },
        8: { 15: 'Independence Day' },
        8: { 26: 'Janmashtami' },
        9: { 16: 'Milad-un-Nabi (Prophet’s Birthday)' },
        10: { 2: 'Mahatma Gandhi’s Birthday' },
        10: { 3: 'Iraqi Independence Day' },
        10: { 12: 'Dussehra' },
        10: { 31: 'Diwali' },
        12: { 25: 'Christmas Day' }
    }
    
    // Add more years and holidays here
};

const Calendar = () => {
    const today = new Date();
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());

    const renderDays = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days.map((day, index) => <div key={index} className="day">{day}</div>);
    };

    const renderDates = () => {
        const date = new Date(currentYear, currentMonth, 1);
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDay = date.getDay();
        const dates = [];

        for (let i = 0; i < firstDay; i++) {
            dates.push(<div key={`empty-${i}`} className="date empty"></div>);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const isHoliday = holidays[currentYear] && holidays[currentYear][currentMonth + 1] && holidays[currentYear][currentMonth + 1][i];
            const dayOfWeek = new Date(currentYear, currentMonth, i).getDay();
            const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
            const dateClass = `date ${isHoliday ? 'holiday' : ''} ${isWeekend ? 'weekend' : ''}`;
            dates.push(
                <div key={`date-${i}`} className={dateClass}>
                    {i}
                    {isHoliday && <span className="holiday-name">{holidays[currentYear][currentMonth + 1][i]}</span>}
                    {isWeekend && !isHoliday && <span className="holiday-name">Weekend</span>}
                </div>
            );
        }

        return dates;
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(prev => prev - 1);
        } else {
            setCurrentMonth(prev => prev - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(prev => prev + 1);
        } else {
            setCurrentMonth(prev => prev + 1);
        }
    };

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
        <div className="calendar">
            <div className="month">
                <button onClick={handlePrevMonth}>&lt;</button>
                <span>{months[currentMonth]} {currentYear}</span>
                <button onClick={handleNextMonth}>&gt;</button>
            </div>
            <div className="days">{renderDays()}</div>
            <div className="dates">{renderDates()}</div>
        </div>
    );
};

export default Calendar;
