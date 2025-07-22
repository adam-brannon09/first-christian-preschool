function AttendanceInfo() {
    return (
      <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6 text-[#ff6f61]">
        <div className="text-center">
  <h1 className="text-4xl font-bold">First Christian Preschool</h1>
  <h2 className="text-2xl font-semibold mt-2">VPK Attendance & Enrollment Policy</h2>
  <p className="text-lg mt-1">
    <strong>School Year:</strong> 2025–2026
  </p>
</div>


      <div className="card bg-white shadow-md p-6 rounded-xl">
        <h3 className="font-bold">Monthly Attendance Statements</h3>
        <p>
          Attendance statements will be sent home each month to track absences. Absences are not categorized as excused or unexcused. An absence is an absence. 
          According to our contract with the state, children may not exceed 30 absences per school year. If this limit is exceeded, VPK services will be terminated at FCP.
        </p>
      </div>

      <div className="card bg-white shadow-md p-6 rounded-xl">
        <h3 className="font-bold">Field Trips</h3>
        <p>
          Field trips are considered instructional school days and count toward attendance. Missing a field trip day will count as an absence.
        </p>
      </div>

      <div className="card bg-white shadow-md p-6 rounded-xl">
        <h3 className="font-bold">Emergency and Weather Closures</h3>
        <p>
          Closures due to emergencies or weather count toward the 30-day absence limit unless credited by the state. 
          We are usually notified of credits the following month. If credited, they will not count against your child's total absences.
        </p>
      </div>

      <div className="card bg-white shadow-md p-6 rounded-xl">
        <h3 className="font-bold">Program Hours and Policies</h3>

        <h4>Full-Day (Wrap-Around) VPK:</h4>
        <ul>
          <li>Instructional Hours: 8:30 AM to 11:30 AM</li>
          <li>Tardy after 8:30 AM</li>
          <li>Wrap-Around Tuition: $450/month, due on the 5th</li>
          <li>Wrap-Around care hours are 7:00 AM to 5:30 PM</li>
          <li>Enrollment requires voucher, enrollment packet, and $100 fee</li>
          <li>All slots are limited and first-come, first-served</li>
        </ul>

        <h4>Afternoon (Part-Time) VPK:</h4>
        <ul>
          <li>Instructional Hours: 12:00 PM to 3:00 PM</li>
          <li>Tardy after 12:00 PM</li>
          <li>Pick-up after 3:00 PM may result in late fees or dismissal</li>
          <li>Unless signed up for extended day, students must attend only between 12:00 PM and 3:00 PM</li>
          <li>All slots are limited and first-come, first-served</li>
        </ul>
      </div>

      <div className="card bg-white shadow-md p-6 rounded-xl">
        <h3 className="font-bold">Summer 2026 Reminder</h3>
        <p>
          The VPK voucher does not cover summer (June and July). Summer tuition is $550/month. Notify the Director by April 2026 if your child will not attend summer session.
        </p>
      </div>
      </div>
      </div>
    );
  }
  
  export default AttendanceInfo;
  