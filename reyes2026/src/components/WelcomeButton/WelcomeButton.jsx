function WelcomeButton({ onEnter }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent">
      <div className="bg-gray-300 border-4  border-black p-10 shadow-lg font-['Orbit'] text-center m-10 rounded-xl">
        <h1 className="text-xl font-bold mb-6 text-black">EXECUTE alyssa_reyes.exe?</h1>

        <button
          onClick={onEnter}
          className="font-['Silkscreen'] bg-[#B2D365] border-2 border-black px-2 text-md hover:bg-gray-400 hover:scale-110 transition rounded-lg px-4 py-2"
        >
          YES
        </button>
      </div>
    </div>
  );
}

export default WelcomeButton;