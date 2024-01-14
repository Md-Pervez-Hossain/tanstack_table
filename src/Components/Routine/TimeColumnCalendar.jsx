/* eslint-disable react/prop-types */

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const TimeColumnCalendar = ({ events }) => {


  const CustomHeader = ({ label }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1, textAlign: 'center' }}>Time</div>
        <div style={{ flex: 7, textAlign: 'center' }}>
          {label}
          <br />
          {events.map((event, index) => (
            <div key={index}>{event.title}</div>
          ))}
        </div>
      </div>
    );
  };

  const eventStyleGetter = (event) => {
    //const date = new Date(event.start);
    // const dayName = date.toLocaleString('en-US', { weekday: 'long' });
    // Define event styles based on title
    const styles = {
      Present: { backgroundColor: '#00B3A1', color: 'white', textAlign: 'center' },
      Absent: { backgroundColor: '#FF5B5BE5', color: 'white', textAlign: 'center' },
      Leave: { backgroundColor: '#797274', color: 'white', textAlign: 'center' },
      Holiday: { backgroundColor: '#FFBF64', color: 'white', textAlign: 'center' },
      Exam: { backgroundColor: '#F36AFF', color: 'white', textAlign: 'center' },
      Weekend: { backgroundColor: 'red', color: 'white', textAlign: 'center' },
      '': { backgroundColor: 'transparent', color: 'black', textAlign: 'center' },
    };

    const { backgroundColor, color, textAlign } = styles[event.title] || {};

    return {
      style: { backgroundColor, color, textAlign },
    };
  };
  const dayPropGetter = (date) => {
    const day = date.getDate(); // Get the day of the month
    const styles = {
      10: { backgroundColor: "blue" }, // Change the color for the 1st day of the month
      20: { backgroundColor: "green" }, // Change the color for the 2nd day of the month
      // Add more styles for specific days as needed
    };

    return styles[day] || {};
  };
  return (
    <div style={{ height: 700 }} className="w-11/12 mx-auto py-16">
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="month"
        views={['month']}
        components={{
          header: {
            day: CustomHeader,
          },
        }}
        eventPropGetter={eventStyleGetter}
        dayPropGetter={dayPropGetter}
      />
    </div>
  );
};

export default TimeColumnCalendar;
