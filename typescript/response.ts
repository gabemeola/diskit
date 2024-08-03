import { HttpStatusCode, AnyStatusCode } from "./status";

type ResponseWithoutJson = Omit<Response, "json">;
type StatusResponseMap = Partial<Record<HttpStatusCode, any>>;

export type TypedResponse<T extends StatusResponseMap> = ResponseWithoutJson &
  (
    {
        [Status in keyof T]: {
          status: Status;
        } & T[Status];
      }[keyof T]
    // | {
    //     status: Exclude<AnyStatusCode, keyof T>;
    //     json(): Promise<any>;
    //   }
    | {
        ok: false,
        status: 500;
        json(): Promise<never>;
      }
  );

type C = TypedResponse<{
  [HttpStatusCode.OK]: {
    json(): Promise<"OK">
  };
  [HttpStatusCode.ACCEPTED]: {
    json(): Promise<"accepted">
  };
}>;

const c = "" as unknown as C;
c.status;
c.json();
if (c.status === HttpStatusCode.OK) {
  const r = c.json();
}
if (c.status === HttpStatusCode.ACCEPTED) {
  const r = c.json();
}
if (c.status !== HttpStatusCode.OK && c.status !== HttpStatusCode.ACCEPTED) {
  const r = c.json();
}
