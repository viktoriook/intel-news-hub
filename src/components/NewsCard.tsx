
import { ArrowRight } from 'lucide-react';

type NewsCardProps = {
  image: string;
  title: string;
  description: string;
  category: string;
  date: string;
};

const NewsCard = ({ image, title, description, category, date }: NewsCardProps) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden news-card-shadow transition-all hover:translate-y-[-5px] group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-market-light-blue font-semibold uppercase tracking-wider">{category}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <a 
          href="#" 
          className="inline-flex items-center text-market-blue font-medium group/link"
        >
          Read More 
          <ArrowRight 
            size={16} 
            className="ml-1 transition-transform group-hover/link:translate-x-1" 
          />
        </a>
      </div>
    </article>
  );
};

export default NewsCard;
