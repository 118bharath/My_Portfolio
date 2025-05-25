import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, message });
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 sm:mb-12 text-white text-center">
          Get In Touch
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white text-sm sm:text-base">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white focus:ring-white"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white text-sm sm:text-base">
              Message
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project or just say hello..."
              required
              rows={6}
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white focus:ring-white resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-white text-black hover:bg-gray-200 transition-colors text-base sm:text-lg py-3"
          >
            Send Message
          </Button>
        </form>
        
        
      </div>
    </section>
  );
};

export default Contact;
