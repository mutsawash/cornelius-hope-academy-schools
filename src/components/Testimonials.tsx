
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  likes: number;
  isDefault?: boolean;
}

interface UserComment {
  id: string;
  quote: string;
  author: string;
  role: string;
  likes: number;
  timestamp: number;
}

// Create a unique identifier for the current user's session
const sessionId = Date.now().toString();

const Testimonials = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [comment, setComment] = useState("");
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [userComments, setUserComments] = useState<UserComment[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [likedTestimonials, setLikedTestimonials] = useState<Record<string, boolean>>({});
  
  const defaultTestimonials = [
    {
      id: "1",
      quote: "Cornelius Hope Academy has been transformative for my family. The teachers genuinely care about each student's progress and well-being.",
      author: "Mr. Matsomai",
      role: "Parent",
      likes: 12,
      isDefault: true
    },
    {
      id: "2",
      quote: "The challenging curriculum and supportive environment prepared students exceptionally well for higher education. They develop both academic skills and confidence.",
      author: "Mrs. Mukwesha",
      role: "Community Leader",
      likes: 8,
      isDefault: true
    },
    {
      id: "3",
      quote: "As an educator, I've seen many schools, but Cornelius Hope stands out with its commitment to excellence and individual student growth.",
      author: "Professor Gandari",
      role: "Education Consultant",
      likes: 15,
      isDefault: true
    }
  ];

  useEffect(() => {
    // Load stored user comments from localStorage
    const storedComments = localStorage.getItem("userComments");
    if (storedComments) {
      setUserComments(JSON.parse(storedComments));
    }
    
    // Load default testimonial likes from localStorage
    const storedDefaultLikes = localStorage.getItem("defaultTestimonialLikes");
    if (storedDefaultLikes) {
      const parsedDefaultLikes = JSON.parse(storedDefaultLikes);
      setTestimonials(defaultTestimonials.map(t => ({
        ...t,
        likes: parsedDefaultLikes[t.id] || t.likes
      })));
    } else {
      setTestimonials([...defaultTestimonials]);
    }
    
    // Set initial testimonials (defaults + user comments)
    setTestimonials(prevTestimonials => 
      [...prevTestimonials, ...(storedComments ? JSON.parse(storedComments) : [])]
    );
    
    // Load the user's liked testimonials to prevent duplicate likes
    const storedLikedTestimonials = localStorage.getItem(`likedTestimonials_${sessionId}`);
    if (storedLikedTestimonials) {
      setLikedTestimonials(JSON.parse(storedLikedTestimonials));
    }
  }, []);

  const handleAddComment = () => {
    if (!name || !role || !comment) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to submit your testimonial",
        variant: "destructive",
      });
      return;
    }

    const newComment: UserComment = {
      id: Date.now().toString(),
      quote: comment,
      author: name,
      role: role,
      likes: 0,
      timestamp: Date.now()
    };

    const updatedComments = [...userComments, newComment];
    setUserComments(updatedComments);
    
    // Update testimonials state
    const currentDefaultLikes = localStorage.getItem("defaultTestimonialLikes");
    const defaultLikes = currentDefaultLikes ? JSON.parse(currentDefaultLikes) : {};
    const updatedDefaultTestimonials = defaultTestimonials.map(t => ({
      ...t,
      likes: defaultLikes[t.id] || t.likes
    }));
    
    setTestimonials([...updatedDefaultTestimonials, ...updatedComments]);
    
    // Save to localStorage
    localStorage.setItem("userComments", JSON.stringify(updatedComments));
    
    // Reset form
    setName("");
    setRole("");
    setComment("");
    setIsFormVisible(false);
    
    toast({
      title: "Testimonial submitted",
      description: "Thank you for sharing your experience with our school!",
    });
  };

  const handleLike = (id: string) => {
    // Check if the user has already liked this testimonial
    if (likedTestimonials[id]) {
      toast({
        title: "Already liked",
        description: "You've already liked this testimonial",
      });
      return;
    }
    
    // Check if it's a default testimonial
    const isDefault = defaultTestimonials.some(t => t.id === id);
    
    if (isDefault) {
      // Handle default testimonial likes (store in localStorage)
      const currentDefaultLikes = localStorage.getItem("defaultTestimonialLikes");
      const defaultLikes = currentDefaultLikes ? JSON.parse(currentDefaultLikes) : {};
      
      // Find the current testimonial
      const currentTestimonial = testimonials.find(t => t.id === id);
      if (!currentTestimonial) return;
      
      // Update the likes count
      const updatedLikes = (defaultLikes[id] || currentTestimonial.likes) + 1;
      defaultLikes[id] = updatedLikes;
      
      // Save to localStorage
      localStorage.setItem("defaultTestimonialLikes", JSON.stringify(defaultLikes));
      
      // Update state
      setTestimonials(prev => 
        prev.map(t => t.id === id ? { ...t, likes: updatedLikes } : t)
      );
    } else {
      // Handle user comment likes (stored in localStorage)
      const updatedComments = userComments.map(comment => 
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      );
      
      setUserComments(updatedComments);
      localStorage.setItem("userComments", JSON.stringify(updatedComments));
      
      // Update the testimonials state
      const currentDefaultLikes = localStorage.getItem("defaultTestimonialLikes");
      const defaultLikes = currentDefaultLikes ? JSON.parse(currentDefaultLikes) : {};
      const updatedDefaultTestimonials = defaultTestimonials.map(t => ({
        ...t,
        likes: defaultLikes[t.id] || t.likes
      }));
      
      setTestimonials([...updatedDefaultTestimonials, ...updatedComments]);
    }
    
    // Mark this testimonial as liked by the current user
    const updatedLikedTestimonials = { ...likedTestimonials, [id]: true };
    setLikedTestimonials(updatedLikedTestimonials);
    localStorage.setItem(`likedTestimonials_${sessionId}`, JSON.stringify(updatedLikedTestimonials));
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the students, parents, and community leaders who have experienced the Cornelius Hope difference.
          </p>
          
          <Button 
            onClick={() => setIsFormVisible(prev => !prev)} 
            className="mt-6"
          >
            {isFormVisible ? "Cancel" : "Share Your Experience"}
          </Button>
          
          {isFormVisible && (
            <div className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Add Your Testimonial</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-left text-sm font-medium mb-1">Your Name</label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-left text-sm font-medium mb-1">Your Role</label>
                  <Input
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Parent, Student, Teacher, etc."
                  />
                </div>
                
                <div>
                  <label htmlFor="comment" className="block text-left text-sm font-medium mb-1">Your Experience</label>
                  <Textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your experience with Cornelius Hope Academy..."
                    rows={4}
                  />
                </div>
                
                <Button onClick={handleAddComment} className="w-full">
                  Submit Testimonial
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 text-4xl text-primary">"</div>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => handleLike(testimonial.id)}
                      className="flex items-center gap-1"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span>{testimonial.likes}</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
