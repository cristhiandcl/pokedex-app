import ReactToPdf from "react-to-pdf";

function DownloadStats({ pokemon, refs }) {
  return (
    <div className="text-center">
      <p className="font-bold uppercase text-blue-300">Download stats</p>
      <ReactToPdf
        targetRef={refs}
        filename={`${pokemon.length !== 0 ? pokemon.name : "Pikachu"} stats`}
        x={-60}
        y={60}
        scale={0.8}
      >
        {({ toPdf }) => (
          <button onClick={toPdf}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:scale-125 hover:text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        )}
      </ReactToPdf>
    </div>
  );
}

export default DownloadStats;
