import { DiskitClient } from "diskit";
import { getMyUser } from "diskit/api/getMyUser";
import { getApplication } from "diskit/api/getApplication";

const client = new DiskitClient({
  headers: {
    // TODO: You'll need to update auth after a request in non bot cases
    Authorization: "Bot 12345",
  },
})

async function test() {
  const na = await client.request(new Request(''))
  // if (na.status === 200) {
  //   const json = await na.json()
  // } else if (na.status === 201) {
  //   const json = await na.json()
  // } else {
  //   const json = await na.json()
  // }


  const appId = "123";
  const appRes = await client.request(getApplication(appId));
  appRes.json()
  if (appRes.status === 200) {
    const app = await appRes.json()
    app.owner.id;
  }
  const userRes = await client.request(getMyUser());
  const user = await userRes.json()
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
