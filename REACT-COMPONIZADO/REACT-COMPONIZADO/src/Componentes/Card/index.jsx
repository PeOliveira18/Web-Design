
function Card({dados}) {
    return ( 
        <>
            {
                dados.map(skill => (
                
                <div className="skill-card">
                    <h3>{skill.titulo}</h3>
                    <p>{skill.nivel}</p>
                    <p>Tempo xP: {skill.tempoxp}</p>
                </div>

                ))
            }

        </>
    );
}



const props = {
    titulo: "HTML",
    nivel: "Intermediario"
}

const {titulos, nivel,tempoxp} = props


export default Card;