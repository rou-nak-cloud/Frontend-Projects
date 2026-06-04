export default function Svg() {
  return (
    // Wrapper container with a black background
    <div className="star bg-[#0a0a0a] p-8 flex items-center justify-center min-h-screen">
      <svg
        className="w-84 h-84 lg:w-150 lg:h-150" // Adjust size as needed
        viewBox="0 0 660 660"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Your exact SVG path string */}
        <path
          d="M290.361 1.55586L333.686 284.91L333.88 286.179L334.595 285.113L496.712 43.717L530.894 66.1539L354.53 298.389L353.719 299.458L355.031 299.181L644.761 238.164L651.693 276.115L359.086 321.397L357.759 321.603L358.897 322.315L605.849 476.828L581.885 510.335L344.939 341.783L343.894 341.039L344.16 342.294L403.733 622.684L363.139 630.093L319.819 346.737L319.626 345.469L318.911 346.533L156.783 587.928L122.522 565.048L298.964 332.261L299.777 331.192L298.463 331.469L8.73027 392.473L1.564 354.211L294.405 310.246L295.74 310.046L294.596 309.329L47.5646 154.374L71.6092 121.305L308.567 289.864L309.612 290.609L309.345 289.353L249.767 8.96535L290.361 1.55586Z"
          stroke="url(#paint0_linear_1074_2)"
          strokeWidth="2" // Adjust thickness here if needed
        />

        <defs>
          {/* Linear gradient optimized to pop off a dark background */}
          <linearGradient
            id="paint0_linear_1074_2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#6b21a8" /> {/* purple */}
            <stop offset="100%" stopColor="#1e3a8a" /> {/*  Blue */}
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
