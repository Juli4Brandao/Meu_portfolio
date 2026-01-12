const skills = [
  'Python (Django, Flask)',
  'JavaScript / React',
  'HTML5 & CSS3',
  'MySQL & SQLite',
  'Git & GitHub',
  'Scrum & Kanban'
]

function Skills() {
  return (
    <section id="skills">
      <h3>Habilidades Técnicas</h3>

      <div className="cards">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills