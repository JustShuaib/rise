const GooglePlay = ({fill, stroke}: {fill?: string; stroke?: string}) => {
  return (
    <svg
      width="27"
      height="29"
      viewBox="0 0 27 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.01428 3.8591C3.81416 4.08395 3.68953 4.43174 3.68953 4.89826V23.2369C3.68953 23.7019 3.81335 24.0489 4.0123 24.2738L14.4197 14.1307V14.0003L4.01428 3.8591Z"
        fill={fill || "#1C232B"}
        stroke={stroke || "white"}
        strokeWidth="0.212626"
      />
      <path
        d="M18.0877 10.6834L14.6856 14.0005V14.131L18.0851 17.4495L22.2416 15.1478L18.0877 10.6834ZM18.0877 10.6834L22.2417 12.9878L22.2419 12.988C22.8122 13.3026 23.0639 13.6991 23.0639 14.0662C23.0639 14.4335 22.8121 14.8311 22.2417 15.1477L18.0877 10.6834Z"
        fill={fill || "#1C232B"}
        stroke={stroke || "white"}
        strokeWidth="0.212626"
      />
      <mask id="path-4-inside-1_1_8537" fill="white">
        <path d="M18.145 17.5683L14.5527 14.0658L3.95117 24.4033C4.34559 24.8075 4.98878 24.8563 5.72021 24.452L18.145 17.5683Z" />
      </mask>
      <path
        d="M18.145 17.5683L14.5527 14.0658L3.95117 24.4033C4.34559 24.8075 4.98878 24.8563 5.72021 24.452L18.145 17.5683Z"
        fill={fill || "#1C232B"}
      />
      <path
        d="M14.5527 14.0658L14.3671 13.8755L14.5527 13.6946L14.7382 13.8755L14.5527 14.0658ZM3.95117 24.4033L3.76094 24.5889L3.57527 24.3986L3.76562 24.213L3.95117 24.4033ZM5.72021 24.452L5.84902 24.6845L5.84878 24.6846L5.72021 24.452ZM17.9594 17.7586L14.3671 14.2561L14.7382 13.8755L18.3305 17.378L17.9594 17.7586ZM14.7382 14.2561L4.13672 24.5936L3.76562 24.213L14.3671 13.8755L14.7382 14.2561ZM4.14141 24.2177C4.42162 24.5049 4.9208 24.5902 5.59165 24.2194L5.84878 24.6846C5.05676 25.1224 4.26956 25.1102 3.76094 24.5889L4.14141 24.2177ZM5.59141 24.2195L18.0162 17.3358L18.2738 17.8008L5.84902 24.6845L5.59141 24.2195Z"
        fill="white"
        mask="url(#path-4-inside-1_1_8537)"
      />
      <path
        d="M14.5527 13.8803L17.9242 10.593L5.65644 3.79628C5.65637 3.79625 5.6563 3.79621 5.65623 3.79617C5.01985 3.44813 4.49048 3.47103 4.14582 3.73671L14.5527 13.8803Z"
        fill={fill || "#1C232B"}
        stroke={stroke || "white"}
        strokeWidth="0.212626"
      />
    </svg>
  );
};

export default GooglePlay;
