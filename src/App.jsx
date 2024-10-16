import './App.css'
import Form from './component/Form'
import Mybutton from './component/Mybutton'
import withAuth from './component/utils/withAuth'
import ValidatedForm from './component/ValidatedForm'

function App() {
  const IsAuth = withAuth(Mybutton)

  return (
      <ValidatedForm/>
  )
}

export default App
