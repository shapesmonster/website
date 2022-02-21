import { useWeb3React} from "@web3-react/core"
import { injected } from "../components/wallet/Connectors"
import { useState, useEffect} from 'react'
import { getContract } from "../utils"
import Web3 from 'web3'

export default function Home() {
  const {
    active,
    account,
    library,
    connector,
    activate,
    deactivate,
    chainId
  } = useWeb3React()
  const fromWei = Web3.utils.fromWei

  const [web3, setWeb3] = useState()
  const [installMetamask, setInstallMetamask] = useState(false)
  const [landingPadding, setLandingPadding] = useState("0")
  const gas = 1e6
  const gasPrice = Web3.utils.toWei("25", "gwei")

  useEffect(()=> {
    setLandingPadding(window.innerHeight/2)
  },[])


  function percent(base, percentage) {
    return base.mul(percentage).div(100)
  }

  function LandingLogo(){
    return (<div className="landing-logo" style={{
      paddingTop: `${landingPadding}px`,
      paddingBottom: `${landingPadding}px`
    }}>
    Amazing shapes are for SALE! Earn passive income with NFT monster Shapes!
   </div>)
  }

  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    try {
      setWeb3(new Web3(window.web3.currentProvider, null, {
        transactionConfirmationBlocks: 1
      }))
    } catch(e) {
      setInstallMetamask(true)
    }

  }, [])


  return (
    <
    div className = "background-yellow" >
    <LandingLogo />
    {
      !active &&
      <
      button onClick = {
        connect
      }
      className = "py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800" > Connect to MetaMask < /button>
    }
    {installMetamask && (<a href="https://metamask.io/download" rel="noreferrer"> Install Metamask </a>)}

     <
    p > {
      active ? < span > < /span> : <span>Wallet not connected, please hit Connect button</span >
    } <
    /p> {
      active &&
        <
        button onClick = {
          disconnect
        }
      className = "py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800" > Disconnect < /button>
    } <
    /div>

  )
}
