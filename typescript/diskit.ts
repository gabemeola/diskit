export interface DiskitClient {
  request(request: Request): Promise<unknown>
}


export class DiskitClient {
  constructor(private cfg: { headers: HeadersInit }) {}

  public async request(request: Request): Promise<unknown> {
    return await fetch(request, {
      headers: this.cfg.headers,
    });
  }
}
