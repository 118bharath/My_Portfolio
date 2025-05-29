import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "6be35402-c593-4dc4-a97a-a7457c48faff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-black">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 sm:mb-12 text-white text-center">
          Get In Touch
        </h2>
        
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white text-sm sm:text-base">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white focus:ring-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white text-sm sm:text-base">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-white focus:ring-white"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white text-sm sm:text-base">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
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
            disabled={isSubmitting}
            className="w-full bg-white text-black hover:bg-gray-200 transition-colors text-base sm:text-lg py-3 disabled:opacity-50"
          >
            {isSubmitting ? 'Sent...' : 'Send Message'}
          </Button>
        </form>
        
        {/* <div className="mt-12 text-center">
          <p className="text-sm sm:text-base text-gray-400 mb-4">
            Projects are dynamically fetched through GitHub API
          </p>
          
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full mx-auto flex items-center justify-center">
            <span className="text-black font-medium text-lg sm:text-xl">A</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
