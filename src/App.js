import logo from "./logo.svg";
import "./App.css";
import NftListing from "./components/NftListing";
import Dashboard from "./pages/Dashboard";
// import { Metaplex } from "@metaplex-foundation/js-next";
// import { clusterApiUrl, Connection } from "@solana/web3.js";
// import { Metaplex } from "@metaplex-foundation/js";
// import { Connection, clusterApiUrl } from "@solana/web3.js";

function App() {
  /*  const connection = new Connection(clusterApiUrl("devnet"));
  const mx = Metaplex.make(connection);
  console.log(mx); */
  return <Dashboard />;
}

export default App;
