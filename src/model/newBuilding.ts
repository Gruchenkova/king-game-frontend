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
import theater from '../assets/img/theater.png';
import bookСlub from '../assets/img/book.png';
import library from '../assets/img/library.png';

export class NewBuilding {
  name: string;

  benefits: ResourceAmount[];

  id: string;

  cost: ResourceAmount[];

  population: Capacity[];

  constructor(name: string, benefits: ResourceAmount[], cost: ResourceAmount[], population: Capacity[]) {
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

  liGold: HTMLElement = document.createElement('li') as HTMLElement;

  liScienth: HTMLElement = document.createElement('li') as HTMLElement;

  capacity: HTMLElement = document.createElement('div') as HTMLElement;

  people: HTMLElement = document.createElement('p') as HTMLElement;

  benefit:  HTMLElement = document.createElement('div') as HTMLElement;

  ulBenefit: HTMLElement = document.createElement('ul') as HTMLElement;

  liBefitGold: HTMLElement = document.createElement('li') as HTMLElement;

  liBenefitScienth: HTMLElement = document.createElement('li') as HTMLElement;

  liBenefitPower: HTMLElement = document.createElement('li') as HTMLElement;

  createBuild(): void {
    this.title.innerHTML = `${this.name}`;
    this.mainSection.appendChild(this.buildingBlock);
    this.buildingBlock.appendChild(this.title);
    this.buildingBlock.classList.add('buildingBlock');
    this.buildingBlock.id = this.id;
    this.buildingBlock.appendChild(this.button);
    this.button.appendChild(this.img);
    this.button.classList.add('buttonBuildings');
    this.button.setAttribute('data', `${this.name}`);
    this.button.setAttribute('disabled', 'disabled');
    this.img.classList.add('icon')
    this.img.src = house;
    this.buildingBlock.appendChild(this.costBlock);
    this.costBlock.appendChild(this.ulCost);
    this.ulCost.appendChild(this.liGold);
    this.ulCost.appendChild(this.liScienth);
    this.buildingBlock.appendChild(this.capacity);
    this.capacity.appendChild(this.people);
    this.buildingBlock.appendChild(this.benefit);
    this.benefit.appendChild(this.ulBenefit);
    this.ulBenefit.appendChild(this.liBefitGold);
    this.ulBenefit.appendChild(this.liBenefitScienth);
    this.ulBenefit.appendChild(this.liBenefitPower);
  }
}
