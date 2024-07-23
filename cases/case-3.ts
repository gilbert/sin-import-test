import s from 'sin'
import { SiweMessage } from 'siwe'
import { BrowserProvider } from 'ethers'

const scheme = window.location.protocol.slice(0, -1);
const domain = window.location.host;
const origin = window.location.origin;
const provider = new BrowserProvider((window as any).ethereum);

export default s(() => {

  if (!s.isServer) {
    const message = new SiweMessage({
      scheme,
      domain,
      address: '0x1230123012301230123012301230123012301230',
      statement: 'hi',
      uri: origin,
      version: '1',
      chainId: 1
    })
    console.log("Message", message)
  }

  return () => s`div`('hello')
})