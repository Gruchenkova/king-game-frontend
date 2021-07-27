import Fetch from '../utils/Fetch';
import { Building, State } from '../model/interfaces'
const game = {
  async getState(params: []): Promise<State> {
    const state = await Fetch.get('/state', params);
    return state;
  },
  async getBuildings(params: []): Promise<Building[]> {
    const buildings = await Fetch.getAllBuildings('/buildings',params);
    return buildings;
  },
  async getAvalableBuildings(params: []): Promise<Building[]> {
    const buildings = await Fetch.getAvalableBuildings('/availableBuildings', params);
    return buildings;
  },
  async buyNewBuilding(params: [], name: string): Promise<void> {
    await Fetch.buyBuilding(`/building/${name}`, params)
  }
}
export default game
