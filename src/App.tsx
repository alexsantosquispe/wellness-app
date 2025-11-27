import { Suspense, lazy } from "react";

import { Navbar } from "./components/atoms/Navbar";
import { Spinner } from "./components/atoms/Spinner";

const LazySessionsGrid = lazy(
  () => import("./components/molecules/SessionsGrid")
);
const LazyFooter = lazy(() => import("./components/atoms/Footer"));

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white dark:bg-neutral-900 text-black/80 dark:text-white">
      <Navbar />
      <main className="mt-16 flex w-full flex-col justify-center gap-8 px-4 py-8 md:max-w-360 md:p-8">
        <div className="flex flex-col gap-4 text-start">
          <h1 className="text-4xl text-black/80 dark:text-white">
            Explore Our Wellness Services
          </h1>

          <p className="text-neutral-600 dark:text-neutral-200">
            We believe mental health is a journey, and every journey
            <br /> deserves personalized guidance.
          </p>
        </div>

        <Suspense fallback={<Spinner />}>
          <LazySessionsGrid />
        </Suspense>
      </main>

      <Suspense fallback={<Spinner />}>
        <LazyFooter />
      </Suspense>
    </div>
  );
}

export default App;
