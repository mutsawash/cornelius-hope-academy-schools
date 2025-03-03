
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "WiseLearn Academy has provided my child with an exceptional educational experience. The teachers are dedicated and the curriculum is challenging yet engaging.",
      author: "Sarah Johnson",
      role: "Parent"
    },
    {
      quote: "As a former student, I can attest to the quality of education at WiseLearn. The school prepared me well for university and beyond.",
      author: "Michael Chen",
      role: "Alumni"
    },
    {
      quote: "The supportive environment at WiseLearn allows students to explore their interests and develop their talents. My children have thrived here.",
      author: "David Williams",
      role: "Parent"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our parents, students, and alumni about their experiences at WiseLearn Academy.
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
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
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
