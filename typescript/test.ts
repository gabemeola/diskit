import { DiskitClient } from './diskit'
import { getMyUser } from './api/getMyUser'
import { getApplication } from './api/getApplication';

const client = new DiskitClient({
  headers: {
    // TODO: You'll need to update auth after a request in non bot cases
    Authorization: "Bot 12345",
  },
});

async function test() {
  const appId = "123";
  const data = await client.request(getApplication(appId));
  data.owner.id
  const data2 = await client.request(getMyUser())
  // const data2 = await client.request('nice')
  // client.something()
}

// declare module './diskit.ts' {
//   interface DiskitClient {
//     something(): boolean
//   }
// }


// type C = Request