
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary">About Cornelius Hope Academy</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-lg mb-6">
                Cornelius Hope Academy is a Christian private school located in Goodhope suburb, about 5 kilometers from Westgate Round along Nemakonde (former Lomagundi). We are situated about 8km from the Cyber city.
              </p>
              <p className="text-lg mb-6">
                Our primary school was established in 2007. It has grown over the years with the establishment of the secondary school in 2010. The schools have become a force to reckon with in the fields of both academics and sports.
              </p>
              <p className="text-lg mb-6">
                We have both day and boarding facilities for secondary school that is focused on developing a holistic graduate. We offer not only academic development but we also offer spiritual, physical and psycho-social support to our learners. We are a one-stop school from ECD to Form 4. The health needs of our learners are also taken care of by qualified medical staff at our clinic.
              </p>
            </div>
            <div className="bg-secondary/20 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
              <p className="mb-6">
                To produce graduates who are responsive to the needs of the nation.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
              <p className="mb-6">
                Cornelius Hope Academy schools seek to offer education of the highest quality and relevance to the children thus enabling them to develop to their full potential academically, physically, socially, emotionally and spiritually.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 text-primary">To Become</h2>
              <p className="mb-6">
                Competent, self-reliant and acceptable members of the global society.
              </p>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-primary">Core Values</h2>
            <div className="bg-white p-8 rounded-lg shadow-md border border-secondary">
              <p className="text-lg">
                Professionalism, team work, honesty, transparency, commitment, fairness, compassion, self-discipline, continuous learning, customer satisfaction, innovativeness and optimal resource utilization.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-secondary">
              <h3 className="text-2xl font-semibold mb-4 text-primary">School Clinic</h3>
              <p className="mb-4">
                Cornelius Hope Academy offers onsite medical services to its learners. Our medical staff supervises environmental cleanliness that includes ablution facilities. They also offer health talks to all learners.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-secondary">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Discipleship and Child Safeguarding</h3>
              <p className="mb-4">
                The school develops learners spiritually through Christian discipleship programmes planned and led by full-time pastors. We have a department led by a qualified social worker that deals with child safeguarding issues.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
