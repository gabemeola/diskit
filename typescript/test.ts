import { DiskitClient } from "./diskit";
import { getMyUser } from "./api/getMyUser";
import { getApplication } from "./api/getApplication";

const client = new DiskitClient({
  headers: {
    // TODO: You'll need to update auth after a request in non bot cases
    Authorization: "Bot 12345",
  },
})

async function test() {
  // const na = await client.request(new Request(''))
  // if (na.status === 200) {
  //   const json = await na.json()
  // } else if (na.status === 201) {
  //   const json = await na.json()
  // } else {
  //   const json = await na.json()
  // }


  const appId = "123";
  const app = await client.request(getApplication(appId));
  app.owner.id;
  const user = await client.request(getMyUser());
  user.username;
  // const data2 = await client.request('nice')
  // client.something()
}

// declare module './diskit.ts' {
//   interface DiskitClient {
//     something(): boolean
//   }
// }

// type C = Request
