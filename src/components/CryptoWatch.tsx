
import CryptoCard from './CryptoCard';

const cryptoData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "58,932.45",
    change: 2.3,
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022"
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "3,521.78",
    change: 4.7,
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022"
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "1.42",
    change: -1.2,
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=022"
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "123.45",
    change: 5.9,
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=022"
  },
  {
    name: "Ripple",
    symbol: "XRP",
    price: "0.89",
    change: -0.5,
    logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=022"
  }
];

const CryptoWatch = () => {
  return (
    <section className="py-20 bg-gray-50" id="crypto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-market-blue mb-4">Crypto Watch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Monitor the latest cryptocurrency prices and trends in real-time.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cryptoData.map((crypto, index) => (
              <CryptoCard
                key={index}
                name={crypto.name}
                symbol={crypto.symbol}
                price={crypto.price}
                change={crypto.change}
                logo={crypto.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoWatch;
