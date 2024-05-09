import { Header } from './components/Header';
import { Card } from './components/Card';
import './App.css';

export const App = () => {
  return (
    <div className='container-father'>
      <Header />
      <div className='container'>
        <Card className='container-card' icon='barbie.png'
          title='Acces To Resources'
          text='Este es el primer parrafo de la card' />
        <Card className='container-card' icon='barbie.png'
          title='Peace Of Mind'
          text='Este es el segundo parrafo de la card' />
        <Card className='container-card' icon='barbie.png'
          title='Time-Saving'
          text='Este es el tercer parrafo de la card' />
        <Card className='container-card' icon='barbie.png'
          title='Lifetime Support'
          text='Este es el cuarto parrafo de la card' />
      </div>
    </div>



  );
}
