export interface DiskitClient {
  request(request: Request): Promise<unknown>;
}

export class DiskitClient {
  #headers: Headers;
  constructor(cfg: { headers: HeadersInit }) {
    this.#headers = new Headers(cfg.headers);
  }

  // TODO: Would be nice to have individual types per response code
  // e.g. 401 unauthorized, 500 client error etc
  public async request(request: Request): Promise<Response> {
    return await fetch(request, {
      headers: this.#headers,
    });
  }
}
