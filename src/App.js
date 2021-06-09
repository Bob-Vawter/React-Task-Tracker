import Header from './components/Header'

function App() {
    const name = 'Bob'

    return (
        <div className="container">
            <Header title="Header"/>
            <h1>Hello From React</h1>
            <h2>Hello {name}</h2>
        </div>
    );
}

export default App;
