const root = document.getElementById('container')

const card_content = {
  lua: "A princípio, os dois cães, as duas torres e as gotas atraídas pela lua são símbolos fortíssimos que anunciam a necessidade de reflexão das direções."
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
    <Card cardName={Object.keys(card_content)} cardText={Object.values(card_content)}></Card>
    <Card cardName={Object.keys(card_content)} cardText={Object.values(card_content)}></Card>
  </div>
  )

ReactDOM.createRoot(root).render(element)
