
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "./ReactCalender.css"
const localizer = momentLocalizer(moment)
const novemberAttendance = [
  { title: 'Present', start: new Date(2023, 10, 1), end: new Date(2023, 10, 1) },
  { title: 'Absent', start: new Date(2023, 10, 2), end: new Date(2023, 10, 2) },
  { title: 'Present', start: new Date(2023, 10, 3), end: new Date(2023, 10, 3) },
  { title: 'Leave', start: new Date(2023, 10, 4), end: new Date(2023, 10, 4) },
  { title: 'Present', start: new Date(2023, 10, 5), end: new Date(2023, 10, 5) },
  { title: 'Leave', start: new Date(2023, 10, 6), end: new Date(2023, 10, 6) },
  { title: 'Absent', start: new Date(2023, 10, 7), end: new Date(2023, 10, 7) },
  { title: 'Present', start: new Date(2023, 10, 8), end: new Date(2023, 10, 8) },
  { title: 'Leave', start: new Date(2023, 10, 9), end: new Date(2023, 10, 9) },
  { title: 'Absent', start: new Date(2023, 10, 10), end: new Date(2023, 10, 10) },
  { title: 'Present', start: new Date(2023, 10, 11), end: new Date(2023, 10, 11) },
  { title: 'Absent', start: new Date(2023, 10, 12), end: new Date(2023, 10, 12) },
  { title: 'Present', start: new Date(2023, 10, 13), end: new Date(2023, 10, 13) },
  { title: 'Leave', start: new Date(2023, 10, 14), end: new Date(2023, 10, 14) },
  { title: 'Present', start: new Date(2023, 10, 15), end: new Date(2023, 10, 15) },
  { title: 'Absent', start: new Date(2023, 10, 16), end: new Date(2023, 10, 16) },
  { title: 'Present', start: new Date(2023, 10, 17), end: new Date(2023, 10, 17) },
  { title: 'Leave', start: new Date(2023, 10, 18), end: new Date(2023, 10, 18) },
  { title: 'Absent', start: new Date(2023, 10, 19), end: new Date(2023, 10, 19) },
  { title: 'Present', start: new Date(2023, 10, 20), end: new Date(2023, 10, 20) },
  { title: 'Present', start: new Date(2023, 10, 21), end: new Date(2023, 10, 21) },
  { title: 'Leave', start: new Date(2023, 10, 22), end: new Date(2023, 10, 22) },
  { title: 'Absent', start: new Date(2023, 10, 23), end: new Date(2023, 10, 23) },
  { title: 'Present', start: new Date(2023, 10, 24), end: new Date(2023, 10, 24) },
  { title: 'Absent', start: new Date(2023, 10, 25), end: new Date(2023, 10, 25) },
  { title: 'Leave', start: new Date(2023, 10, 26), end: new Date(2023, 10, 26) },
  { title: 'Present', start: new Date(2023, 10, 27), end: new Date(2023, 10, 27) },
  { title: 'Present', start: new Date(2023, 10, 28), end: new Date(2023, 10, 28) },
  { title: 'Absent', start: new Date(2023, 10, 29), end: new Date(2023, 10, 29) },
  { title: 'Leave', start: new Date(2023, 10, 30), end: new Date(2023, 10, 30) },
];

const eventStyleGetter = (event) => {
  const styles = {
    Present: {
      backgroundColor: '#00B3A1',
      color: 'white',
      textAlign: 'center',
    },
    Absent: {
      backgroundColor: '#FF5B5BE5',
      color: 'white',
      textAlign: 'center',
    },
    Leave: {
      backgroundColor: '#797274',
      color: 'white',
      textAlign: 'center',
    },
  };

  const { backgroundColor, color, width, textAlign } = styles[event.title] || {};

  return {
    style: {
      backgroundColor,
      color,
      width,
      textAlign,
    },
  };
};
const ReactCalendar = () => {
  return (
    <div className="w-11/12 mx-auto py-16" style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={novemberAttendance}
        eventPropGetter={eventStyleGetter}
        defaultView='month'
        views={["month"]}
      />
    </div>
  );
};

export default ReactCalendar;