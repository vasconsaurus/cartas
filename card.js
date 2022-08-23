const root = document.getElementById('cards_container')

const card_content = {
  lua: "A princípio, os dois cães, as duas torres e as gotas atraídas pela lua são símbolos fortíssimos que anunciam a necessidade de reflexão das direções."
}

function Card({cardName, cardText}) {
  return (
    <div className="card">
      <h3>{cardName}</h3>
      <p>{cardText}</p>
    </div>
  );
}

const element = (
  <Card className="card" cardName={Object.keys(card_content)} cardText={Object.values(card_content)} />
)

ReactDOM.createRoot(root).render(element)
