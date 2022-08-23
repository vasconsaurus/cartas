const root = document.getElementById('cards_container')

const card_content = {
  lua: "A princípio, os dois cães, as duas torres e as gotas atraídas pela lua são símbolos fortíssimos que anunciam a necessidade de reflexão das direções."
}

function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

const element = (
  <Card className="card">
    <h3>{Object.keys(card_content)}</h3>
    <p>{Object.values(card_content)}</p>
  </Card>
)

ReactDOM.createRoot(root).render(element)
