import './styles/global.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';


export function App() {

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center text-gray-100">
      <Header />
      <Form />
      <Footer />
    </div>
  )
}