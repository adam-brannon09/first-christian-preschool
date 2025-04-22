function ProgramInfo() {
    return (
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto space-y-6 text-[#ff6f61]">
          
          {/* Full Time Program */}
          <div className="card bg-white shadow-md p-6 rounded-xl">
            <h2 className="card-title text-2xl mb-2">Full Time Program</h2>
            <p>
              Childcare is available <strong>Monday – Friday</strong> between the hours of <strong>7:00 a.m. – 5:30 p.m.</strong> from <strong>August through May</strong>.
            </p>
            <p>
              During <strong>June and July</strong>, hours are <strong>7:00 a.m. – 5:00 p.m.</strong>
            </p>
            <p className="mt-2 font-semibold">Instructional time begins at 8:30 a.m.</p>
          </div>
  
          {/* Part Time Program */}
          <div className="card bg-white shadow-md p-6 rounded-xl">
            <h2 className="card-title text-2xl mb-2">Part Time Program</h2>
            <p>
              Childcare is available on <strong>Thursday/Friday</strong> or <strong>Monday/Tuesday/Wednesday</strong> between <strong>7:00 a.m. – 5:30 p.m.</strong> during <strong>August through May</strong>,
              and <strong>7:00 a.m. – 5:00 p.m.</strong> during <strong>June and July</strong>.
            </p>
            <p className="mt-2">Part-time VPK: <strong>8:30 a.m. – 11:30 a.m.</strong></p>
            <p className="mt-2 font-semibold">Instructional time begins at 8:30 a.m.</p>
          </div>
  
          {/* Monthly Payments */}
          <div className="card bg-white shadow-md p-6 rounded-xl">
            <h2 className="card-title text-2xl mb-4">Monthly Tuition</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li><strong>One Year Olds</strong> – $850/month <span className="italic">(Must be one by Sept. 1st)</span></li>
              <li><strong>Two Year Olds</strong> – $775/month <span className="italic">(Must be two by Sept. 1st)</span></li>
              <li><strong>Three Year Olds</strong> – $725/month <span className="italic">(Must be three by Sept. 1st)</span></li>
              <li><strong>VPK / Wrap-Around</strong> – $450/month <span className="italic">(Must be four by Sept. 1st)</span></li>
            </ul>
  
            <div className="mt-4 space-y-2">
              <p className="font-semibold">Part-time care is available in each age group as space allows.</p>
              <p><strong>Part-time VPK</strong> – <span className="font-semibold">No charge</span> with ELC VPK voucher.</p>
              <p className="italic">The 3-hour VPK program is a separate program and available as space allows.</p>
              <p><strong>Part-time Ones, Twos & Threes</strong> –</p>
              <ul className="list-disc ml-5">
                <li>$325/month for Thursday & Friday</li>
                <li>$425/month for Monday, Tuesday, Wednesday</li>
              </ul>
              <p className="italic">(Must reach age required by Sept. 1st)</p>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default ProgramInfo;
  