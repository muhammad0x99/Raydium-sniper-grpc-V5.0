import { streamNewTokens } from './streaming/raydium';
import { streamOpenbook } from './streaming/openbook';


async function start() {

  await init();

  streamNewTokens();
  streamOpenbook();

}

start();
