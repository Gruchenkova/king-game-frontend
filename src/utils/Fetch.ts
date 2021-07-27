import { UrlParameter, Options, Body, State, Building } from '../model/interfaces';

// const baseURL = 'http://127.0.0.1:3000'; // базовый url
const baseURL = 'http://localhost:3000'; // базовый url
let header: string | null = null;
function objectToQueryString(obj: UrlParameter[]) { // функция которая склеит правильный запрос
  return obj.map((p) => `${p.key}=${p.value}`).join('&');
}
async function request(url: string, params: UrlParameter[], body: Body = {}, method: string) {
  const options: Options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (params) {
    if (method === 'GET') { // если метод get, то доклеиваем параметры
      url += `?${objectToQueryString(params)}`;
    } else { // если нужно отправить на сервер body, то в объект options добавляем ключ-значение
      options.body = JSON.stringify(body);
    }
  }
  function generateErrorResponse(status: number, message: string) { // функция показывающая ошибку
    return Promise.reject({
      status,
      message,
    });
  }
  const response = await fetch(baseURL + url, options); // отправляем запрос
  header = response.headers.get('X-Total-Count');
  if (response.status === 500) {
    return generateErrorResponse(500, 'TCar has been stopped suddenly. It is engine was broken down.');
  }
  if (response.status === 404) {
    return generateErrorResponse(404, '404 NOT FOUND');
  }
  const result = await response.json();
  return result;
}

function get(url: string, params: UrlParameter[]): Promise<State> {
  return request(url, params, {}, 'GET');
}
function getAllBuildings(url: string,params: UrlParameter[]): Promise<Building[]> {
  return request(url, params, {}, 'GET');
}
function getAvalableBuildings(url: string,params: UrlParameter[]): Promise<Building[]> {
  return request(url, params, {}, 'GET');
}
// function getWinners(url: string, params: UrlParameter[]): Promise<[{ id: number, wins: number, time: number }]> {
//   return request(url, params, {}, 'GET');
// }
// function getCar(url: string, params: UrlParameter[]): Promise<{ name: string, color: string, id: number }> {
//   return request(url, params, {}, 'GET');
// }
function buyBuilding(url: string, params: UrlParameter[]): Promise<void> {
  return request(url, params, [], 'PUT');
}
function update(url: string, params: UrlParameter[], body: Body): Promise<{ id: number, name: string, color: string }> {
  return request(url, params, body, 'PUT');
}
function updateWinner(url: string, params: UrlParameter[], body: Body): Promise<{ id: number, wins: number, time: number }> {
  return request(url, params, body, 'PUT');
}
function remove(url: string, params: UrlParameter[]): Promise<void> {
  return request(url, params, {}, 'DELETE');
}
function move(url: string, params: UrlParameter[]): Promise<{ velocity: number, distance: number }> {
  return request(url, params, {}, 'GET');
}
function drive(url: string, params: UrlParameter[]): Promise<{ success: boolean }> {
  return request(url, params, {}, 'GET');
}
function stopCar(url: string, params: UrlParameter[]): Promise<void> {
  return request(url, params, {}, 'GET');
}
function getHeader(): string {
  return header as string;
}

export default {
  get,
  getAllBuildings,
  getAvalableBuildings,
  buyBuilding,
  update,
  remove,
  getHeader,
  move,
  drive,
  stopCar,
  updateWinner,
};
