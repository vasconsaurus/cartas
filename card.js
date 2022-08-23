    function message({children}) {
      return <div className="message">{children}</div>
    }

    const element = (
      <div className="container">
        {message({children: 'Hello World'})}
        {message({children: 'Goodbye World'})}
      </div>
    )

ReactDOM.createRoot(document.getElementById('cards_container')).render(element)
