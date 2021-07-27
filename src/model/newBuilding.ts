import { ContextExclusionPlugin } from "webpack";
import { Capacity, Human, ResourceAmount } from "./interfaces";
import house from '../assets/img/home.png';
import barn from '../assets/img/barn.png';
import farm from '../assets/img/farm.png';
import incubator from '../assets/img/incubator.png';
import workshop from '../assets/img/workshop.png';
import forge from '../assets/img/shop.png';
import gild from '../assets/img/manufactory.png';
import factory from '../assets/img/factory.png';
import watchtower from '../assets/img/tower.png';
import barracks from '../assets/img/tent.png';
import castle from '../assets/img/castle.png';
import theater from '../assets/img/theatre.png';
import bookСlub from '../assets/img/book.png';
import library from '../assets/img/library.png';


const imageArr = [house, barn, farm, incubator, workshop, forge, gild,factory,watchtower,barracks,castle,theater,bookСlub,library]
function getRandom(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
export class NewBuilding {
  name: string;

  benefits: ResourceAmount[];

  id: string;

  cost: ResourceAmount[];

  population: Capacity;

  constructor(name: string, benefits: ResourceAmount[], cost: ResourceAmount[], population: Capacity) {
    this.name = name;

    this.benefits = benefits;

    this.id = name;

    this.cost = cost;

    this.population = population
  }

  mainSection: HTMLElement = document.getElementById('buildings') as HTMLElement;

  buildingBlock: HTMLElement = document.createElement('div') as HTMLElement;

  title: HTMLElement = document.createElement('p') as HTMLElement;

  button: HTMLButtonElement = document.createElement('button') as HTMLButtonElement;

  img: HTMLImageElement = document.createElement('img') as HTMLImageElement;

  costBlock: HTMLElement = document.createElement('div') as HTMLElement;

  ulCost: HTMLElement = document.createElement('ul') as HTMLElement;

  capacity: HTMLElement = document.createElement('div') as HTMLElement;

  people: HTMLElement = document.createElement('p') as HTMLElement;

  benefit:  HTMLElement = document.createElement('div') as HTMLElement;

  ulBenefit: HTMLElement = document.createElement('ul') as HTMLElement;

  createBuild(): void {
    this.ulCost.innerHTML = 'Cost';
    for (let i = 0; i < this.cost.length; i++){
      let li = document.createElement('li') as HTMLElement;
      this.ulCost.appendChild(li);
      li.innerHTML = `${this.cost[i].resourceType} ${this.cost[i].amount}`;
    }
    this.title.innerHTML = `${this.name}`;
    this.mainSection.appendChild(this.buildingBlock);
    this.buildingBlock.appendChild(this.title);
    this.buildingBlock.classList.add('buildingBlock');
    // this.buildingBlock.id = this.id;
    this.buildingBlock.appendChild(this.button);
    this.button.appendChild(this.img);
    this.button.classList.add('buttonBuildings');
    this.button.setAttribute('data', `${this.name}`);
    this.button.setAttribute('id', `${this.name}`);
    // this.button.setAttribute('disabled', 'disabled');
    this.img.classList.add('icon');
    let num = getRandom(0, 13);
    this.img.src = imageArr[num];
    this.buildingBlock.appendChild(this.costBlock);
    this.costBlock.appendChild(this.ulCost);
    this.buildingBlock.appendChild(this.capacity);
    this.capacity.innerHTML = 'Capacity';
    this.capacity.appendChild(this.people);
    this.people.innerHTML = `${this.population.humanType} ${this.population.capacity}`;
    this.buildingBlock.appendChild(this.benefit);
    this.benefit.appendChild(this.ulBenefit);
    this.ulBenefit.innerHTML = 'Benefit';
    for (let i = 0; i < this.benefits.length; i++){
      let li = document.createElement('li') as HTMLElement;
      this.ulBenefit.appendChild(li);
      li.innerHTML = `${this.benefits[i].resourceType} ${this.benefits[i].amount}`;
    }
  }
}
