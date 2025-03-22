const certifications = [
  {
    title: "Responsive Web Design - freeCodeCamp",
    imgSrc: "/certifications/Responsive Web Design Certification.png",
    link: "https://www.freecodecamp.org/certification/Augustinas/responsive-web-design",
  },
  {
    title: "JavaScript Algorithms & Data Structures - freeCodeCamp",
    imgSrc: "/certifications/JavaScriptCertification.png",
    link: "https://www.freecodecamp.org/certification/Augustinas/javascript-algorithms-and-data-structures-v8",
  },
];

const Certifications = () => {
  return (
    <section id="certifications">
      <h2 className="section-title">Certifications</h2>
      <div className="certification-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <a target="_blank" href={cert.link}>
              <img
                src={cert.imgSrc}
                alt={cert.title}
                className="certification-image"
              />
            </a>
            <p className="cert-title">{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
