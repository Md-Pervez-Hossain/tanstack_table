import PropTypes from 'prop-types';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "./Routine.css"
const localizer = momentLocalizer(moment);


const EventDisplay = ({ event }) => (
  <div style={{ backgroundColor: 'transparent', color: 'black', textAlign: 'center' }}>
    <div>{event.title}</div>
    <div>
      {moment(event.start).format('hh:mmA')} - {moment(event.end).format('hh:mmA')}
    </div>
    <div>{event.subjectTeacher}</div>
  </div>
);

EventDisplay.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    subjectTeacher: PropTypes.string.isRequired,
  }).isRequired,
};

const Routine = () => {
  const calenderInfo = [
    {
      start: moment('2023-12-02T09:00:00').toDate(),
      end: moment('2023-12-02T10:00:00').toDate(),
      title: 'Bangla 1st Paper',
      subjectTeacher: 'Salam Sir',
    },
    {
      start: moment('2023-12-02T10:30:00').toDate(),
      end: moment('2023-12-02T11:30:00').toDate(),
      title: 'Mathematics',
      subjectTeacher: 'John Doe',
    },
  ];

  const eventStyleGetter = (event) => {
    console.log(event);
    // const dayOfMonth = start.getDate();
    // console.log(dayOfMonth);
    const style = {
      backgroundColor: 'red', // Example background color for the event
      color: 'white', // Example text color for the event
    };

    // You can adjust the date color specifically here
    style.start = {
      backgroundColor: 'red', // Change the background color of the date
      color: 'white', // Change the text color of the date
    };

    return {
      style,
    };
  };

  return (
    <div style={{ height: 800 }} className="w-9/12 mx-auto py-16 overflow-x-auto">
      <Calendar
        localizer={localizer}
        events={calenderInfo}
        components={{
          event: EventDisplay,
        }}

        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default Routine;
