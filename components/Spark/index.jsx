import "./Spark.css";

export default function Spark({ colored = false }) {
  const className = colored ? "spark-color" : "spark";
  const leafClassName = colored ? "" : "spark-leaf";
  
  const colors = colored 
    ? ["#8800FF", "#117D45", "#91F925", "#332BFD", "#FA0B54", "#FB42DF", "#FBA808", "#0BC1FA"]
    : Array(8).fill("white");

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <title>Spark</title>
      <g clipPath="url(#clip0_spark)">
        <path 
          className={`${leafClassName} ${leafClassName ? 'spark-leaf-1' : ''}`.trim()} 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M23.0758 10.5778L26.4676 0.0774231L29.7482 1.13712L23.653 20.0067L17.1307 5.96063L20.2576 4.50869L23.0758 10.5778Z" 
          fill={colors[0]}
        />
        <path 
          className={`${leafClassName} ${leafClassName ? 'spark-leaf-2' : ''}`.trim()} 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M32.8379 13.8556L35.1366 7.57253L31.899 6.38802L26.5777 20.9327L44.2303 11.8974L42.6595 8.82851L32.8379 13.8556Z" 
          fill={colors[1]}
        />
        <path 
          className={`${leafClassName} ${leafClassName ? 'spark-leaf-3' : ''}`.trim()} 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M37.4202 23.0758L43.4894 20.2576L42.0374 17.1308L27.9913 23.6531L46.8609 29.7483L47.9206 26.4677L37.4202 23.0758Z" 
          fill={colors[2]}
        />
        <path 
          className={`${leafClassName} ${leafClassName ? 'spark-leaf-4' : ''}`.trim()} 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M27.0656 26.5775L41.6103 31.8988L40.4258 35.1364L34.1427 32.8377L39.1698 42.6593L36.1009 44.2301L27.0656 26.5775Z" 
          fill={colors[3]}
        />
        <path 
          className={`${leafClassName} ${leafClassName ? 'spark-leaf-5' : ''}`.trim()} 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M24.3454 27.9914L30.8677 42.0375L27.7409 43.4894L24.9227 37.4203L21.5309 47.9207L18.2502 46.861L24.3454 27.9914Z" 
          fill={colors[4]}
        />
        <path 
          className={`${leafClassName} ${leafClassName ? 'spark-leaf-6' : ''}`.trim()} 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M21.4209 27.0653L16.0996 41.61L12.862 40.4255L15.1607 34.1424L5.33909 39.1695L3.76831 36.1007L21.4209 27.0653Z" 
          fill={colors[5]}
        />
        <path 
          className={`${leafClassName} ${leafClassName ? 'spark-leaf-7' : ''}`.trim()} 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M10.5779 24.9225L0.0774231 21.5307L1.13712 18.2501L20.0067 24.3453L5.96064 30.8675L4.50869 27.7407L10.5779 24.9225Z" 
          fill={colors[6]}
        />
        <path 
          className={`${leafClassName} ${leafClassName ? 'spark-leaf-8' : ''}`.trim()} 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M13.8562 15.1616L8.82856 5.33881L11.8974 3.76804L20.9341 21.4233L6.38785 16.0992L7.5728 12.8618L13.8562 15.1616Z" 
          fill={colors[7]}
        />
      </g>
      <defs>
        <clipPath id="clip0_spark">
          <rect width="48" height="48" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}
