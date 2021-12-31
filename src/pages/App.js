import { CardNFT } from '../components/CardNFT';

function App() {
  return (
    <div style={{ backgroundColor: 'hsl(217, 54%, 11%)'}}>
      <div className='mx-auto content-card-center'>
        <div>
          <CardNFT />
          <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Bayu Ridho Alkifli</a>.
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
