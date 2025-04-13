
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Info } from 'lucide-react';

type InsightCardProps = {
  title: string;
  trend: 'up' | 'down' | 'neutral';
  percentage: string;
  description: string;
  data: Array<{
    name: string;
    value: number;
  }>;
  color: string;
};

const InsightCard = ({ title, trend, percentage, description, data, color }: InsightCardProps) => {
  return (
    <div className="insights-card rounded-xl p-6 text-white h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center">
          {trend === 'up' ? (
            <TrendingUp size={20} className="text-green-400 mr-1" />
          ) : trend === 'down' ? (
            <TrendingDown size={20} className="text-red-400 mr-1" />
          ) : (
            <Info size={20} className="text-market-light-blue mr-1" />
          )}
          <span className={`font-medium ${
            trend === 'up' ? 'text-green-400' : 
            trend === 'down' ? 'text-red-400' : 
            'text-market-light-blue'
          }`}>
            {percentage}
          </span>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm mb-6">{description}</p>
      
      <div className="flex-grow h-40 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            />
            <YAxis 
              tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(10, 35, 66, 0.8)', 
                border: 'none',
                borderRadius: '4px',
                color: 'white'
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={{ r: 3, fill: color }}
              activeDot={{ r: 5, fill: color }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InsightCard;
