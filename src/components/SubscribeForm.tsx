
import { useState } from 'react';
import { Check } from 'lucide-react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would call an API to handle the subscription
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <div className="w-full max-w-md">
      <h3 className="text-lg font-semibold text-white mb-3">Subscribe to Our Newsletter</h3>
      <p className="text-gray-300 text-sm mb-4">Get the latest market insights delivered to your inbox.</p>
      
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-market-light-blue"
        />
        
        <button
          type="submit"
          className={`mt-3 w-full bg-market-light-blue hover:bg-opacity-90 text-white py-3 px-4 rounded-md transition-all flex items-center justify-center ${isSubmitted ? 'bg-green-500' : ''}`}
          disabled={isSubmitted}
        >
          {isSubmitted ? (
            <>
              <Check size={18} className="mr-2" />
              Subscribed!
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm;
