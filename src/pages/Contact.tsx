
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // In a real production app, you would send this to a server
    // For now, simulate a successful submission
    toast({
      title: "Message sent",
      description: "Your message has been sent to chassecondary@gmail.com. We will get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">P.O. Box WGT 412 WESTGATE, Harare</p>
                    <p className="text-gray-600 mt-1">Goodhope suburb, near Westgate Round along Nemakonde (former Lomagundi), Harare</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone size={24} className="text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <div className="text-gray-600 space-y-1">
                      <a href="tel:+0242003287" className="block hover:text-primary">(0242) 00328 97</a>
                      <a href="tel:+263772855611" className="block hover:text-primary">0772 85611</a>
                      <a href="tel:+263772585706" className="block hover:text-primary">0772 585 706</a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <div className="text-gray-600 space-y-1">
                      <a href="mailto:chaps-primaryschool@gmail.com" className="block hover:text-primary break-words">chaps-primaryschool@gmail.com</a>
                      <a href="mailto:chassecondary@gmail.com" className="block hover:text-primary break-words">chassecondary@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-6">School Hours</h2>
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Monday - Friday</td>
                      <td className="py-2 text-right">8:00 AM - 3:30 PM</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Office Hours</td>
                      <td className="py-2 text-right">7:30 AM - 4:30 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Weekends & Holidays</td>
                      <td className="py-2 text-right">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Find Us</h2>
                <div className="rounded-lg overflow-hidden border border-gray-300 h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.521083855366!2d30.97212207532662!3d-17.99020148316131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4931fce5a67%3A0x8c9b850eea683a37!2sCORNELIUS%20HOPE%20ACADEMY!5e0!3m2!1sen!2szw!4v1714693444962!5m2!1sen!2szw"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">Send Message</Button>
                <p className="text-xs text-center text-gray-500">
                  Your message will be sent to chassecondary@gmail.com
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
