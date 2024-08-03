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
  public async request(request: Request): Promise<unknown> {
    const res = await fetch(request, {
      headers: this.#headers,
    });
    if (res.status >= 400) {
      throw res
    }
    return await res.json()
  }
}

// export type Responses = Omit<Response, "json" | "status"> &
//   (
//     | {
//         status: 200;
//         json(): Promise<"nice">;
//       }
//     | {
//         status: 201;
//         json(): Promise<"oh">;
//       }
//     | {
//         status: 500;
//         // json(): Promise<"anything">;
//       }
//   );

// export interface SomeResponse extends Omit<Response, "status"> {
//   status: 200;
//   stuff: "stuff";
//   json(): Promise<"nice">;
// }

// export type TypedResponse = Response & {
//   status: 200;
//   json(): Promise<"nice">;
// };
