export interface DiskitClient {
  request(request: Request): Promise<unknown>;
}

export class DiskitClient {
  #headers: Headers;
  constructor(cfg: { headers: HeadersInit }) {
    this.#headers = new Headers(cfg.headers);
  }

  public async request(request: Request): Promise<unknown> {
    return await fetch(request, {
      headers: this.#headers,
    });
  }
}
