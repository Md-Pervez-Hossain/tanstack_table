import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)
const calenderInfo = [
  { title: '', start: new Date(2023, 10, 1), end: new Date(2023, 10, 1) },
  { title: '', start: new Date(2023, 10, 2), end: new Date(2023, 10, 2) },
  { title: '', start: new Date(2023, 10, 3), end: new Date(2023, 10, 3) },
  { title: '', start: new Date(2023, 10, 4), end: new Date(2023, 10, 4) },
  { title: '', start: new Date(2023, 10, 5), end: new Date(2023, 10, 5) },
  { title: '', start: new Date(2023, 10, 6), end: new Date(2023, 10, 6) },
  { title: '', start: new Date(2023, 10, 7), end: new Date(2023, 10, 7) },
  { title: '', start: new Date(2023, 10, 8), end: new Date(2023, 10, 8) },
  { title: 'Class Party Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum harum deleniti maiores veritatis totam, blanditiis, ut ad numquam in sed aliquam ipsam ratione modi itaque delectus, sit exercitationem obcaecati.', start: new Date(2023, 10, 9), end: new Date(2023, 10, 9) },
  { title: '', start: new Date(2023, 10, 10), end: new Date(2023, 10, 10) },
  { title: '', start: new Date(2023, 10, 11), end: new Date(2023, 10, 11) },
  { title: '', start: new Date(2023, 10, 12), end: new Date(2023, 10, 12) },
  { title: '', start: new Date(2023, 10, 13), end: new Date(2023, 10, 13) },
  { title: 'Holiday', start: new Date(2023, 10, 14), end: new Date(2023, 10, 14) },
  { title: '', start: new Date(2023, 10, 15), end: new Date(2023, 10, 15) },
  { title: '', start: new Date(2023, 10, 16), end: new Date(2023, 10, 16) },
  { title: '', start: new Date(2023, 10, 17), end: new Date(2023, 10, 17) },
  { title: '', start: new Date(2023, 10, 18), end: new Date(2023, 10, 18) },
  { title: '', start: new Date(2023, 10, 19), end: new Date(2023, 10, 19) },
  { title: 'Exam', start: new Date(2023, 10, 20), end: new Date(2023, 10, 20) },
  { title: '', start: new Date(2023, 10, 21), end: new Date(2023, 10, 21) },
  { title: '', start: new Date(2023, 10, 22), end: new Date(2023, 10, 22) },
  { title: 'Exam', start: new Date(2023, 10, 23), end: new Date(2023, 10, 23) },
  { title: '', start: new Date(2023, 10, 24), end: new Date(2023, 10, 24) },
  { title: '', start: new Date(2023, 10, 25), end: new Date(2023, 10, 25) },
  { title: '', start: new Date(2023, 10, 26), end: new Date(2023, 10, 26) },
  { title: 'Exam', start: new Date(2023, 10, 27), end: new Date(2023, 10, 27) },
  { title: 'Exam', start: new Date(2023, 10, 28), end: new Date(2023, 10, 28) },
  { title: '', start: new Date(2023, 10, 29), end: new Date(2023, 10, 29) },
  { title: '', start: new Date(2023, 10, 30), end: new Date(2023, 10, 30) },
];
const eventStyleGetter = (event) => {
  const date = new Date(event.start);
  const dayName = date.toLocaleString("en-US", { weekday: "long" });

  if (dayName === "Friday") {
    event.title = "Weekend";
  }
  const styles = {
    Present: {
      backgroundColor: "#00B3A1",
      color: "white",
      textAlign: "center",
    },
    Absent: {
      backgroundColor: "#FF5B5BE5",
      color: "white",
      textAlign: "center",
    },
    Leave: {
      backgroundColor: "#797274",
      color: "white",
      textAlign: "center",
    },
    Holiday: {
      backgroundColor: "#FFBF64",
      color: "white",
      textAlign: "center",
    },
    Exam: {
      backgroundColor: "#F36AFF",
      color: "white",
      textAlign: "center",
    },
    Weekend: {
      backgroundColor: "red",
      color: "white",
      textAlign: "center",
    },
    // Add custom style for events with an empty title
    '': {
      backgroundColor: "transparent", // Change this to the desired color for empty title cells
      color: "black",
      textAlign: "center",
    },
  };

  const { backgroundColor, color, textAlign } = styles[event.title] || {};

  return {
    style: {
      backgroundColor,
      color,
      textAlign,
    },
  };
};

const StudentCalender = () => {
  return (
    <div className='w-11/12 mx-auto py-16'>
      <Calendar
        localizer={localizer}
        events={calenderInfo}
        style={{ height: 600 }}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default StudentCalender;