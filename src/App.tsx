import SessionsGrid from "./components/molecules/SessionsGrid";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <header>Wellness App</header>
      <main className="flex w-full flex-col items-center justify-center md:max-w-360">
        <h1>Home</h1>
        <SessionsGrid />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
