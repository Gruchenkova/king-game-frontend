import PageInterface from './page_interface';
import carrot from '../assets/img/carrot.png';
import dollar from '../assets/img/dollar.png';
import power from'../assets/img/strong.png';
import brain from '../assets/img/brain.png';
import soldier from '../assets/img/soldier.png';
import intellegent from '../assets/img/idea.png';
import farmer from '../assets/img/farmer.png';
import game from '../services/game-services'
import { Human } from '../model/interfaces';
import { NewBuilding } from '../model/newBuilding';

const Game: PageInterface = {

  render: async () => {
    const view = /* html */`
                <section class="section">
                    <div id ='map'></div>
                    <div id='resources'>
                      <div>
                        <img id='dollar' class='icon' alt='gold'>
                        <span id ='gold'></span>
                      </div>
                      <div>
                        <img class='icon' id='carrot' alt='food'>
                        <span id='food'></span>
                      </div>
                      <div>
                        <img class='icon' id='strong' alt='power'>
                        <span id='power'></span>
                      </div>
                      <div>
                        <img class='icon' id='brain' alt='science'>
                        <span id='science'></span>
                      </div>
                    </div>
                    <div id='population'>
                      <div>
                        <img class='icon' id='peasantImg' alt='peasant'>
                        <span id ='peasant'></span>
                      </div>
                      <div>
                        <img class='icon' id='soldierImg' alt='soldier'>
                        <span id='soldier'></span>
                      </div>
                      <div>
                        <img class='icon' id='intellectualImg' alt='intellectual'>
                        <span id='intellectual'></span>
                      </div>
                    </div>
                    <div id ='buildings'></div>
                </section>
            `;
    return view;
  },
  after_render: async () => {
    let dollarImg = document.getElementById('dollar') as HTMLImageElement
    dollarImg.src = dollar;
    let carrotImg = document.getElementById('carrot') as HTMLImageElement;
    carrotImg.src = carrot
    let powerImg = document.getElementById('strong') as HTMLImageElement;
    powerImg.src = power;
    let scienceImg = document.getElementById('brain') as HTMLImageElement;
    scienceImg.src = brain;
    let soldierImg = document.getElementById('soldierImg') as HTMLImageElement;
    soldierImg.src = soldier;
    let famerImg = document.getElementById('peasantImg') as HTMLImageElement;
    famerImg.src = farmer;
    let intellectualImg = document.getElementById('intellectualImg') as HTMLImageElement;
    intellectualImg.src = intellegent;
    getState();
    setInterval(getState, 50000)
    function getState(){
      game.getState([]).then((data) => {
        let resources = data.resources;
        let population = data.population as Human;
        let keys = Object.keys(population);
        for (let i = 0; i < resources.length; i++) {
          let block = document.getElementById(`${resources[i].resourceType}`) as HTMLElement;
          block.innerHTML = `${resources[i].amount}`;
        }
        for (let i = 0; i < keys.length; i++) {
          let block = document.getElementById(`${keys[i]}`) as HTMLElement;
          if (keys[i] === 'peasant'){
            block.innerHTML = `${population.peasant}`;
          }else if (keys[i] === 'soldier'){
            block.innerHTML = `${population.soldier}`;
          }else if (keys[i] === 'intellectual'){
            block.innerHTML = `${population.intellectual}`;
          }
        }
      });
    };
    game.getBuildings([]).then((data) => {
      for (let i = 0; i < data.length; i++){
        new NewBuilding(data[i].name, data[i].benefit, data[i].cost, data[i].capacity).createBuild();
      }
      canBuyBuildings();
    });

    setInterval(canBuyBuildings, 50000)
    function canBuyBuildings(){
      console.log("UPDATE")
      game.getAvalableBuildings([]).then((data) => {
        console.log(data);
        let allBuildings = document.getElementsByClassName('buttonBuildings');
        for (let i = 0; i < allBuildings.length; i++) {
          allBuildings[i].setAttribute('disabled', 'disabled');
        };
        for (let i = 0; i < data.length; i++){
          let name = data[i].name;
          let button = document.getElementById(`${name}`);
          button?.removeAttribute('disabled');
          button?.classList.add('activeButton');
        }
      });
    };
    const buildingsBlock = document.getElementById('buildings');
    buildingsBlock?.addEventListener('click', (e)=>{
      let eventTarget = e.target as HTMLElement;
      let el = eventTarget.closest('button');
      if (el?.hasAttribute('disabled') === false){
        let name = el.getAttribute('data') as string;
          game.buyNewBuilding([], name);
          getState();
      }
    })
  },
};
export default Game;
