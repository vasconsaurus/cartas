const root = document.getElementById('container')

const cardContent = {
  lua: "A princípio, os dois cães, as duas torres e as gotas atraídas pela lua são símbolos fortíssimos que anunciam a necessidade de reflexão das direções.",
  sol: "Não poderia ser diferente a mensagem quando o assunto é o O Sol. Sua luz é sinal de positividade e está completamente associado aos objetivos e sucesso.",
  mundo: "É aqui que aparece as conquistas feitas, os aprendizados adquiridos, as barreiras rompidas e toda a batalha travada.",
  estrela: "Não é de se admirar que a estrela represente em nossas vidas sinal de luz e renovação. Sem essa âncoras é possível agora caminhar em direção a uma nova vida."
}

function Card({cardName, cardText}) {
  return (
    <div className="card" onClick={handleClick}>
      <h3>{cardName}</h3>
      <p>{cardText}</p>
    </div>
  );
}

function handleClick() {
  console.log('clicked!')
}

const element = (
  <div className="cards_container">
    {Object.entries(cardContent).map(itemArr => (
    <Card cardName={itemArr[0]} cardText={Object.values(itemArr[1])} key={itemArr[0]}></Card>
    ))}
  </div>
  )

ReactDOM.createRoot(root).render(element)
