
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Cornelius Hope Academy has been transformative for my family. The teachers genuinely care about each student's progress and well-being.",
      author: "Mr. Matsomai",
      role: "Parent"
    },
    {
      quote: "The challenging curriculum and supportive environment prepared students exceptionally well for higher education. They develop both academic skills and confidence.",
      author: "Mrs. Mukwesha",
      role: "Community Leader"
    },
    {
      quote: "As an educator, I've seen many schools, but Cornelius Hope stands out with its commitment to excellence and individual student growth.",
      author: "Professor Gandari",
      role: "Education Consultant"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the students, parents, and community leaders who have experienced the Cornelius Hope difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 text-4xl text-primary">"</div>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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
