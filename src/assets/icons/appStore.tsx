const AppStore = ({fill}: {fill?: string}) => {
  return (
    <svg
      width="25"
      height="28"
      viewBox="0 0 25 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1151 14.7325C18.0907 12.0892 20.335 10.8032 20.4376 10.7433C19.1666 8.93648 17.1965 8.68961 16.5042 8.66993C14.8496 8.50016 13.2446 9.63525 12.4018 9.63525C11.5421 9.63525 10.2441 8.68633 8.84523 8.71422C7.0451 8.74128 5.36104 9.75745 4.43742 11.3354C2.5313 14.5529 3.9529 19.2811 5.77911 21.8818C6.69264 23.1555 7.7601 24.5777 9.15731 24.5276C10.5242 24.4727 11.0348 23.678 12.6844 23.678C14.3188 23.678 14.7983 24.5276 16.2233 24.4956C17.6903 24.4727 18.6139 23.2162 19.4955 21.931C20.5512 20.4711 20.9751 19.0334 20.9919 18.9596C20.9575 18.9481 18.1429 17.9008 18.1151 14.7325Z"
        fill={fill ||"#1C232B"}
      />
      <path
        d="M15.4233 6.95908C16.1585 6.06265 16.6615 4.84308 16.5219 3.60547C15.4578 3.6514 14.127 4.3231 13.3607 5.19985C12.6827 5.97244 12.0771 7.23876 12.2335 8.42962C13.4289 8.51656 14.6561 7.84157 15.4233 6.95908Z"
        fill={fill ||"#1C232B"}
      />
    </svg>
  );
};

export default AppStore;
