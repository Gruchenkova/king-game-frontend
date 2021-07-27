interface Request {
  resource: string,
  id: string,
  verb: string,
}

const Utils = {
  parseRequestURL: (): Request => {
    const url = window.location.hash.slice(1).toLowerCase() || '/';
    const r = url.split('/');
    const request: Request = {
      resource: r[1],
      id: r[2],
      verb: r[3],
    };
    return request;
  },
  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
};

export default Utils;
