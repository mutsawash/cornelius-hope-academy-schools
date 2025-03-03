
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Admissions</h1>
          <p className="text-lg mb-6">
            This is the Admissions page. More detailed content will be added here.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionsPage;
