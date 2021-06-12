import less from './slideLogo.less';

export default function SlideLogo() {
  return (
    <div
      className={less.slideLogo}
      style={{ opacity: 1, transform: `translateX(494.402px)` }}
    >
      <svg className={less.logo} viewBox="0,0,546,103">
        <defs>
          <path
            id="logo-monster-siren"
            d="M535.080,99.605 L528.450,45.289 L528.074,45.289 L529.138,99.605 L519.515,99.605 L519.515,1.777 L528.428,1.777 L534.482,52.852 L535.080,52.852 L533.972,1.777 L543.640,1.777 L543.640,99.605 L535.080,99.605 ZM499.470,1.777 L516.101,1.777 L516.101,14.741 L509.226,14.741 L509.226,45.590 L516.101,45.590 L516.101,58.313 L509.226,58.313 L509.226,86.761 L516.101,86.761 L516.101,99.605 L499.470,99.605 L499.470,1.777 ZM483.505,67.556 C482.352,62.435 480.829,58.834 478.937,56.753 L478.937,99.605 L469.181,99.605 L469.181,1.777 L474.414,1.777 C480.534,1.777 485.301,4.159 488.715,8.919 C492.130,13.682 493.838,20.343 493.838,28.905 C493.838,33.747 493.143,38.048 491.754,41.808 C490.777,44.490 489.255,47.051 487.186,49.490 C488.693,51.733 489.802,53.853 490.511,55.852 C491.990,60.094 493.165,65.536 494.037,72.177 C494.909,78.819 495.656,87.962 496.277,99.605 L486.432,99.605 C486.017,85.041 485.042,74.358 483.505,67.556 ZM483.461,20.883 C482.573,18.466 481.332,16.800 479.735,15.881 L479.735,44.029 C481.302,43.111 482.536,41.404 483.439,38.909 C484.340,36.414 484.791,33.429 484.791,29.955 C484.791,26.323 484.348,23.299 483.461,20.883 ZM454.768,1.777 L464.525,1.777 L464.525,99.605 L454.768,99.605 L454.768,1.777 ZM445.795,47.510 C447.993,55.312 449.596,62.295 450.601,68.456 C451.103,71.577 451.354,74.918 451.354,78.479 C451.354,85.521 450.091,90.932 447.563,94.713 C445.035,98.495 441.879,100.385 438.095,100.385 C436.439,100.385 434.384,99.865 431.930,98.824 L431.930,85.381 C433.439,86.262 434.828,86.701 436.099,86.701 C437.843,86.701 439.226,85.942 440.245,84.421 C441.265,82.900 441.776,80.660 441.776,77.698 C441.776,75.338 441.583,73.078 441.199,70.917 C440.460,66.636 439.099,61.085 437.119,54.263 C435.138,47.441 433.675,41.249 432.729,35.687 C432.197,32.527 431.930,29.005 431.930,25.124 C431.930,16.722 433.135,10.600 435.544,6.759 C437.954,2.918 441.095,0.998 444.968,0.998 C446.771,0.998 448.841,1.498 451.177,2.497 L451.177,15.522 C449.817,14.641 448.575,14.201 447.452,14.201 C445.796,14.201 444.391,15.122 443.239,16.962 C442.086,18.803 441.510,21.484 441.510,25.004 C441.510,27.325 441.698,29.605 442.076,31.846 C442.803,36.048 444.042,41.268 445.795,47.510 ZM402.572,67.556 C401.419,62.435 399.897,58.834 398.005,56.753 L398.005,99.605 L388.248,99.605 L388.248,1.777 L393.482,1.777 C399.601,1.777 404.368,4.159 407.783,8.919 C411.198,13.682 412.905,20.343 412.905,28.905 C412.905,33.747 412.210,38.048 410.821,41.808 C409.845,44.490 408.322,47.051 406.253,49.490 C407.761,51.733 408.870,53.853 409.579,55.852 C411.057,60.094 412.232,65.536 413.105,72.177 C413.977,78.819 414.724,87.962 415.344,99.605 L405.500,99.605 C405.085,85.041 404.110,74.358 402.572,67.556 ZM402.529,20.883 C401.641,18.466 400.400,16.800 398.803,15.881 L398.803,44.029 C400.370,43.111 401.604,41.404 402.506,38.909 C403.408,36.414 403.858,33.429 403.858,29.955 C403.858,26.323 403.415,23.299 402.529,20.883 ZM368.381,1.777 L385.012,1.777 L385.012,14.741 L378.138,14.741 L378.138,45.590 L385.012,45.590 L385.012,58.313 L378.138,58.313 L378.138,86.761 L385.012,86.761 L385.012,99.605 L368.381,99.605 L368.381,1.777 ZM358.093,99.605 L348.337,99.605 L348.337,14.561 L341.463,14.561 L341.463,1.777 L364.923,1.777 L364.923,14.561 L358.093,14.561 L358.093,99.605 ZM333.642,47.510 C335.840,55.312 337.442,62.295 338.447,68.456 C338.950,71.577 339.201,74.918 339.201,78.479 C339.201,85.521 337.938,90.932 335.409,94.713 C332.882,98.495 329.726,100.385 325.942,100.385 C324.286,100.385 322.230,99.865 319.777,98.824 L319.777,85.381 C321.285,86.262 322.674,86.701 323.946,86.701 C325.690,86.701 327.072,85.942 328.092,84.421 C329.112,82.900 329.623,80.660 329.623,77.698 C329.623,75.338 329.429,73.078 329.046,70.917 C328.307,66.636 326.946,61.085 324.966,54.263 C322.985,47.441 321.521,41.249 320.576,35.687 C320.043,32.527 319.777,29.005 319.777,25.124 C319.777,16.722 320.981,10.600 323.391,6.759 C325.801,2.918 328.942,0.998 332.815,0.998 C334.618,0.998 336.688,1.498 339.023,2.497 L339.023,15.522 C337.664,14.641 336.422,14.201 335.299,14.201 C333.643,14.201 332.238,15.122 331.085,16.962 C329.933,18.803 329.357,21.484 329.357,25.004 C329.357,27.325 329.545,29.605 329.923,31.846 C330.649,36.048 331.889,41.268 333.642,47.510 ZM300.863,45.289 L300.486,45.289 L301.551,99.605 L291.928,99.605 L291.928,1.777 L300.841,1.777 L306.895,52.852 L307.493,52.852 L306.385,1.777 L316.052,1.777 L316.052,99.605 L307.493,99.605 L300.863,45.289 ZM274.898,100.385 C270.906,100.385 267.817,96.543 265.629,88.861 C262.968,79.379 261.638,67.075 261.638,51.952 C261.638,33.067 263.130,19.362 266.117,10.841 C268.423,4.279 271.290,0.998 274.720,0.998 C276.317,0.998 277.883,1.799 279.422,3.398 C280.958,4.999 282.377,7.870 283.679,12.011 C284.979,16.152 285.969,21.693 286.650,28.635 C287.330,35.577 287.669,42.989 287.669,50.871 C287.669,70.797 285.881,84.881 282.303,93.123 C280.204,97.965 277.737,100.385 274.898,100.385 ZM276.627,23.563 C276.213,20.603 275.577,18.102 274.720,16.062 C273.951,17.823 273.375,19.753 272.990,21.853 C272.606,23.954 272.326,27.726 272.148,33.167 C271.882,41.729 271.749,48.471 271.749,53.392 C271.749,64.476 272.074,72.457 272.725,77.339 C273.138,80.459 273.803,83.201 274.720,85.561 C275.577,83.241 276.183,81.010 276.539,78.869 C276.894,76.729 277.130,72.957 277.248,67.556 C277.455,57.554 277.559,50.251 277.559,45.650 C277.559,35.367 277.248,28.005 276.627,23.563 ZM246.361,52.012 L241.111,99.605 L237.871,99.605 L233.057,52.012 L230.418,99.605 L221.061,99.605 L228.669,1.777 L236.560,1.777 L239.709,55.912 L243.301,1.777 L251.212,1.777 L258.357,99.605 L248.687,99.605 L246.361,52.012 ZM143.846,1.317 L201.789,1.317 L201.789,99.605 L183.547,99.605 L143.846,1.317 ZM147.533,99.605 L121.650,34.424 L115.281,50.461 L134.796,99.605 L108.305,99.605 L102.036,83.818 L95.766,99.605 L69.275,99.605 L88.790,50.461 L82.422,34.424 L56.538,99.605 L30.047,99.605 L69.077,1.317 L69.275,1.317 L95.568,1.317 L95.766,1.317 L102.036,17.104 L108.305,1.317 L108.503,1.317 L134.796,1.317 L134.994,1.317 L174.024,99.605 L147.533,99.605 ZM1.000,99.605 L1.000,1.317 L58.943,1.317 L19.242,99.605 L1.000,99.605 Z"
          />
          <clipPath id="clip-logo-monster-siren">
            <use href="#logo-monster-siren" />
          </clipPath>
          <clipPath
            id="mask-logo-monster-siren"
            className={less.maskLogoMonsterSirenClipPath}
          >
            <polygon points="-41,103 546,103 587,0 0,0" />
            <polygon points="-41,103 546,103 587,0 0,0" />
          </clipPath>
        </defs>
        <use
          href="#logo-monster-siren"
          stroke="#72caca"
          strokeWidth="4"
          fill="transparent"
          clipPath="url(#clip-logo-monster-siren)"
        />
        <g clipPath="url(#mask-logo-monster-siren)">
          <use href="#logo-monster-siren" />
        </g>
      </svg>
    </div>
  );
}
