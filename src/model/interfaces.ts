export interface UrlParameter {
  key: string;
  value: string | number
}
export interface State {
  population: {};
  resources: ResourceAmount[];
}
export interface Human {
  peasant: number,
  soldier: number,
  intellectual: number,
}
export interface ResourceAmount {
  resourceType: Resource;
    amount: number;
}
export enum Resource {
  gold = "gold",
  power = "power",
  science = "science",
  food = "food"
}
export interface Capacity {
  humanType: string;
  capacity: number;
}
export interface Building {
  name: string;
  cost: ResourceAmount[];
  capacity: Capacity[];
  benefit: ResourceAmount[];
  currentPopulation: Human[];
}
export interface Body {}
export interface Options {
  [key: string]: string | HeadersInit
}
