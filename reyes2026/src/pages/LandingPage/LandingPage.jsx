import { useState } from "react";
import WelcomeButton from "../../components/WelcomeButton/WelcomeButton";

function LandingPage() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Show popup if user hasn't entered */}
      {!entered && <WelcomeButton onEnter={handleEnter} />}

      {/* Main landing page content */}
      {entered && (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold mb-4">Landing Page</h1>
          <p className="text-xl text-gray-300">
            This is the main content of the landing page.
          </p>
        </div>
      )}

    </div>
  );
}

export default LandingPage;