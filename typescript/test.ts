import { DiskitClient } from './diskit'
import { get_my_user } from './api/get_my_user'
import { get_application } from './api/get_application';

const client = new DiskitClient({
  headers: {
    Authorization: "Bot 12345",
  },
});

async function test() {
  const appId = "123";
  const data = await client.request(get_application(appId));
  data.owner.id
  const data2 = await client.request(get_my_user())
  // const data2 = await client.request('nice')
  // client.something()
}

// declare module './diskit.ts' {
//   interface DiskitClient {
//     something(): boolean
//   }
// }


// type C = Request