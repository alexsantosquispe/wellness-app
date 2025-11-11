import { Footer } from "./components/atoms/Footer";
import { Navbar } from "./components/atoms/Navbar";
import SessionsGrid from "./components/molecules/SessionsGrid";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white text-black/80">
      <Navbar />
      <main className="mt-16 flex w-full flex-col justify-center gap-8 p-8 md:max-w-360">
        <div className="flex flex-col gap-4 text-start">
          <h1 className="text-4xl text-black/80">
            Explore Our Wellness Services
          </h1>
          <p className="text-neutral-600">
            We believe mental health is a journey, and every journey
            <br /> deserves personalized guidance.
          </p>
        </div>

        <SessionsGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
