
import { TrendingUp, TrendingDown } from 'lucide-react';

type CryptoCardProps = {
  name: string;
  symbol: string;
  price: string;
  change: number;
  logo: string;
};

const CryptoCard = ({ name, symbol, price, change, logo }: CryptoCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white rounded-lg p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="w-10 h-10 mr-3"
        />
        <div>
          <h3 className="font-medium">{name}</h3>
          <span className="text-sm text-gray-500">{symbol}</span>
        </div>
      </div>
      
      <div className="text-right">
        <div className="font-semibold">${price}</div>
        <div className={`text-sm flex items-center justify-end ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? (
            <TrendingUp size={14} className="mr-1" />
          ) : (
            <TrendingDown size={14} className="mr-1" />
          )}
          {isPositive ? '+' : ''}{change}%
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
