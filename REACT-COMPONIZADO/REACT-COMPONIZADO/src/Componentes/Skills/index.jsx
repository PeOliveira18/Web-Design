import Card from "../Card/index.jsx";

function Skills({ skills }) {
  const habilidades = [
    {
      titulo: "HTML",
      nivel: "Intermediario",
      tempoxp: "2 meses",
      color: "blue",
    },
    {
      titulo: "CSS",
      nivel: "Basico",
      tempoxp: "1 ano",
      color: "red",
    },
    {
      titulo: "JavaScript",
      nivel: "Avancado",
      tempoxp: "1 mes",
      color: "green",
    },
  ]
  
  return (
    <div className="skills">
      <h2>Habilidades</h2>
        <Card dados = {habilidades}/>
    </div>
  );
}

export default Skills;