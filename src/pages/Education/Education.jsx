import "./education.css";

const timelineData = [
  {
    year: "2024-2026",
    title: "Masters of Computer Applications (MCA)",
    description:
      "Currently I am pursuing MCA from Garden City University, Bangalore.",
  },
  {
    year: "2020-2023",
    title: "Bachelor of Computer Applications (BCA)",
    description:
      "Graduated with an 8.76 CGPA from MAKUT, Kolkata. Studied Programming, Data Structures & Algorithms (DSA), Operating Systems (OS), Database Management Systems (DBMS), Computer Networks (CN), Object-Oriented Programming (OOP). Learned Web-Development and developed projects and more.",
  },
  {
    year: "2020",
    title: "Higher Secondary (12th standard)",
    description:
      "Scored 98% in the Vocational stream. Studied Mathematics, Physics, Chemistry, HTML, CSS, JavaScript, DBMS, and Visual Basic.",
  },

  {
    year: "2018",
    title: "Matriculation (10th standard)",
    description: "Scored 45%.",
  },
];

export default function Education() {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h2 className="timeline-title">{item.title}</h2>
              <p className="timeline-sub-title">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
