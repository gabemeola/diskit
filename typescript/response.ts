import { HttpStatusCode, AnyStatusCode } from "./status";

type ResponseWithoutJson = Omit<Response, "json">;
type StatusResponseMap = Partial<Record<HttpStatusCode, any>>;

// export type TypedResponse<T extends StatusResponseMap> = ResponseWithoutJson &
//   (
//     | {
//         [Status in keyof T]: {
//           // TODO: There is some fancy way to do "type hints" but I'm forgetting
//           // Currently this says the status code could be "200 | 500", but technically
//           // it could be any number since multiple servers may proxy.
//           // I'd like this to say `number | 200 | 500` *without* widening the type
//           // to just `number` with `any` for json().
//           status: Status;
//         } & T[Status];
//       }[keyof T]
//     // | {
//     //     status: Exclude<AnyStatusCode, keyof T>;
//     //     json(): Promise<any>;
//     //   }
//     | {
//         ok: false;
//         status: 500;
//         json(): Promise<never>;
//       }
//   );

type ResponseWithData<T> = ResponseWithoutJson & T;
// interface ResponseWithData<T> = ResponseWithoutJson & T;

export type TypedResponse<T extends StatusResponseMap> =
  | {
      [Status in keyof T]: ResponseWithData<
        {
          status: Status;
        } & T[Status]
      >;
    }[keyof T]
  | ResponseWithData<{
      ok: false;
      status: 500;
      json(): Promise<never>;
    }>
  | ResponseWithData<{
      // status: Exclude<AnyStatusCode, keyof T>;
      json(): Promise<never>;
    }>;

type C = TypedResponse<{
  [HttpStatusCode.OK]: {
    ok: true,
    json(): Promise<"OK">;
  };
  [HttpStatusCode.ACCEPTED]: {
    ok: true,
    json(): Promise<"accepted">;
  };
}>;

const c = "" as unknown as C;
c.status;
c.json();
if (c.ok) {
  const r = c.json()
}
if (c.status === HttpStatusCode.OK) {
  const r = c.json();
}
if (c.status === HttpStatusCode.ACCEPTED) {
  const r = c.json();
}
if (c.status !== HttpStatusCode.OK && c.status !== HttpStatusCode.ACCEPTED) {
  const r = c.json();
}
if (c.status === 500) {
  const r = c.json();
}

if (c.status === 300) {
  const r = c.json();
}
