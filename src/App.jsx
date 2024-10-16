import './App.css'
import Form from './component/Form'
import Mybutton from './component/Mybutton'
import withAuth from './component/utils/withAuth'

function App() {
  const IsAuth = withAuth(Mybutton)

  return (
      <Form/>
  )
}

export default App
