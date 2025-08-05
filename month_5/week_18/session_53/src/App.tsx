import './App.css'
import ControlledInput from './components/ControlledInputs';
import EnterKeyListener from './components/EnterKeyListener';
import FocusableInput from './components/FocusableInput';
import { LoginPage } from './components/LoginPage';
import SubmissionForm from './components/SubmissionForm';

function App() {

  return (
    <>
      <LoginPage/>
      <ControlledInput/>
      <SubmissionForm/>
      <FocusableInput/>
      <EnterKeyListener/>
    </>
  )
}

export default App;