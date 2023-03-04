import './App.css';

function App() {



  function recieveCsv(){
    console.log('recieved CSV')
  }


  return (
    <div className="App">

          <form>
                <input type={"file"} accept={".csv"} />
                <button onClick={recieveCsv}>IMPORT CSV</button>
          </form>
     


    </div>
  );
}

export default App;
