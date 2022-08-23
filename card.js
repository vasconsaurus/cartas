const root = document.getElementById('cards_container')

const card_content = {
  lua: "A princípio, os dois cães, as duas torres e as gotas atraídas pela lua são símbolos fortíssimos que anunciam a necessidade de reflexão das direções."
}

function message({children}) {
  return <div className="message">{children}</div>
}

const element = (
  <div className="card">
    <h3>{Object.keys(card_content)}</h3>
    <p>{Object.values(card_content)}</p>
  </div>
)

ReactDOM.createRoot(root).render(element)
