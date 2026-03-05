function WelcomeButton({ onEnter }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-black to-[#B2D365]">
      <div className="bg-black p-10 shadow-lg font-['Orbit'] text-center m-10 rounded-sm">
        <h1 className="text-xl font-bold mb-6 text-white">EXECUTE alyssa_reyes.exe?</h1>

        <button
          onClick={onEnter}
          className="px-6 py-2 bg-[#D9D9D9] rounded-lg hover:bg-blue-600 transition text-black"
        >
          YES
        </button>
      </div>
    </div>
  );
}

export default WelcomeButton;