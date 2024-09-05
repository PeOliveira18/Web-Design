import Header from './components/Header'

function App() {

  const estiloTitulo = {
    backgroundColor: 'yellow',
    color: 'blue'
  } 
  return (
    <>
    <Header/>
      <h1 
      className='titulo'
      style={estiloTitulo}
      >Titulo da pagina</h1>
      <p className='text-blue-800 text-5xl bg-gray-800 ml-8 mr-7 flex justify-center'>Paragrafo</p>
    </>
  )
}

export default App
