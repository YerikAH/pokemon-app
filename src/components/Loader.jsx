import React from "react";

const Loader = () => {
  const centerLoad = {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    zIndex: "3000",
    display: "grid",
    background: "#121212",
    placeItems: "center",
    top: "0",
    left: "0",
    placeContent: "center",
  };
  const lettercenter = {
    color: "white",
    fontStyle: "italic",
    fontWeight: "700",
    letterSpacing: "0.1em",
    marginTop: "1rem",
  };
  return (
    <div>
      <div className="center-loader" style={centerLoad}>
        <div>
          <svg
            width="148"
            height="54"
            viewBox="0 0 148 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5139 24.1294C26.013 21.4578 22.5065 19.955 19 21.8474L19.8905 24.9086L21.282 29.4727L21.9499 31.532C24.5659 29.9179 27.1818 27.8586 26.5139 24.1294ZM23.0631 28.3038C22.6735 27.0793 21.8386 24.4077 21.8386 24.4077C21.8386 24.4077 21.6716 23.8511 21.449 23.1832C22.1725 23.0719 22.8961 23.1276 23.4527 23.4059C23.7866 23.5728 24.3432 23.9068 24.4545 24.6304C24.7885 26.0775 24.2876 27.1906 23.0631 28.3038Z"
              fill="white"
            />
            <path
              d="M79.9978 20.2631C78.0497 18.482 75.0442 18.5933 73.2631 20.5414C71.482 22.4894 71.5933 25.495 73.5414 27.2761C73.7084 27.4431 73.8753 27.5544 74.0423 27.6657L80.3317 20.5414C80.2204 20.4857 80.1091 20.3744 79.9978 20.2631ZM74.098 25.2724C73.4857 24.1592 73.597 22.7121 74.5432 21.7102C75.4338 20.764 76.7696 20.4857 77.9384 20.931L74.098 25.2724Z"
              fill="white"
            />
            <path
              d="M45.1818 30.449C45.1818 31.7848 43.9573 32.8423 42.5102 32.8423C41.0074 32.8423 39.8386 31.7848 39.8386 30.449C39.8386 29.2245 40.8961 28.167 42.2876 28.0557C42.0093 28 41.731 28 41.4527 28C38.9481 28 37 29.8367 37 32.0631C37 34.4007 38.9481 36.2375 41.397 36.2375C43.9017 36.2375 45.8497 34.4007 45.8497 32.0631C45.8497 31.2282 45.5714 30.5046 45.1262 29.8367C45.1262 30.0037 45.1818 30.2263 45.1818 30.449Z"
              fill="white"
            />
            <path
              d="M121.182 27.449C121.182 28.7848 119.957 29.8423 118.51 29.8423C117.007 29.8423 115.839 28.7848 115.839 27.449C115.839 26.2245 116.896 25.167 118.288 25.0557C118.009 25 117.731 25 117.453 25C114.948 25 113 26.8367 113 29.0631C113 31.4007 114.948 33.2375 117.397 33.2375C119.902 33.2375 121.85 31.4007 121.85 29.0631C121.85 28.2282 121.571 27.5046 121.126 26.8367C121.126 27.0037 121.182 27.2263 121.182 27.449Z"
              fill="white"
            />
            <path
              d="M136.308 16.0853L135.195 20.6493L134.193 15.5844L120.501 12.5788L120.612 20.2041L122.672 20.6493L122.505 22.0408C122.505 22.0408 122.449 22.0408 122.449 21.9852C119.889 20.6493 116.716 20.4824 113.766 21.6512C112.764 22.0408 111.818 22.5417 110.983 23.154L108.924 10.1299H99.8516L99.6289 11.6327H90.0556L88.9425 18.3117L88.1633 17.3098C85.8256 14.4712 82.4861 12.9128 78.757 12.8015L86.8831 8.46011L81.2059 0L70.9647 11.7996L72.7458 13.9703C71.1317 14.6382 69.7403 15.5288 68.5714 16.6419L59.7774 8.84972L56.7161 14.6939L56.8274 9.0167L43.0798 13.4137L43.4694 20.7607L45.807 20.1484L46.141 23.8776C43.4694 22.6531 40.2412 22.7087 37.2913 23.9889C36.4007 24.3785 35.5659 24.8237 34.8423 25.3803C35.3432 23.0983 35.2319 20.872 34.3414 18.8683C33.3395 16.5306 31.5028 14.5269 29.3321 13.3024C27.7737 12.2449 25.9369 11.6327 23.9889 11.41C19.2579 10.5751 13.525 11.41 7.90352 13.8033C5.84415 14.6939 3.8961 15.6957 2.17069 16.8089L0 18.2004L1.33581 20.4267L5.45454 27.4397L6.73469 29.5547L8.96104 28.4416L9.29499 28.2746L19.5362 51.0946L20.538 53.2653L22.82 52.5417L28.3302 50.7607L30.7792 49.9814L30.167 47.5325L27.2171 36.2894C28.0519 35.6772 28.8312 35.0093 29.5547 34.2857C29.3878 35.6215 29.4991 37.013 29.833 38.2931C30.6122 41.0204 32.3933 43.1911 34.898 44.3599C37.5696 45.6401 40.8534 45.6401 43.859 44.3599C45.3618 43.692 46.7532 42.8015 47.8664 41.6327L48.256 46.141L57.9406 44.6939V36.0111L78.1447 46.0297V36.4007C78.9796 36.3451 79.7588 36.1781 80.5937 36.0111C82.82 35.4545 84.7124 34.731 86.4378 33.7291L85.603 38.9054L96.512 40.6308L97.1243 36.679L99.9629 41.9666L101.688 38.6271L102.301 44.1373L114.657 46.308L113.989 42.1336C115.659 42.3006 117.44 42.0779 119.165 41.4657C119.555 41.2987 120 41.1317 120.334 40.9091L119.833 45.3618L128.07 46.5306L128.126 49.9258L136.698 52.5974L147.885 18.9239L136.308 16.0853ZM87.9963 21.0946L88.5529 20.4824L87.885 24.7124L86.1039 23.0983L87.9963 21.0946ZM80.7607 3.72913L83.7662 7.79221L75.1948 12.0223L74.5826 11.1317C74.5826 11.1874 80.7607 3.72913 80.7607 3.72913ZM24.0445 35.1206L27.4397 48.256L21.9295 50.0371L10.5751 24.6568C9.96289 24.9907 8.79406 25.5473 7.79221 26.0482L3.67347 19.0909C5.28757 18.0334 7.1243 17.1429 9.0167 16.308C14.3599 14.026 19.4805 13.3581 23.5436 14.0816C24.9907 14.2486 26.4935 14.6939 27.8293 15.5844C29.666 16.6419 31.0575 18.0891 31.8924 19.9814C33.8961 24.5455 30.6122 31.1132 24.0445 35.1206ZM49.4805 32.7829C49.4249 34.731 48.7013 36.679 47.4768 38.3488C46.308 39.9629 44.7495 41.243 42.8571 42.0779C38.0705 44.1373 33.2839 42.0779 32.0037 37.5139C30.7792 33.1169 33.6735 27.885 38.2931 25.8813C41.243 24.6011 44.2486 24.9351 46.3636 26.3822C47.6994 27.2727 48.7013 28.6085 49.1466 30.2783C49.2022 30.4453 49.2579 30.6679 49.2579 30.8349C49.4805 31.5028 49.4805 32.1707 49.4805 32.7829ZM75.5844 42.0779L55.4916 32.0594L55.5473 42.5788L50.3711 43.3024L49.9814 38.961C51.5955 36.2338 52.1521 32.9499 51.3172 30C50.872 28.3859 50.0371 26.9388 48.8683 25.8256L48.1447 16.9759L45.807 17.5881L45.6957 15.3618L54.0445 12.8571L54.5454 21.4286L60.6679 12.8015L66.7347 18.5343L62.5325 22.9592L58.3302 27.384L66.2338 30.5009C67.1243 32.1707 68.4601 33.5622 70.1299 34.6197C71.744 35.6215 73.6363 36.2338 75.5844 36.4007V42.0779ZM65.1762 27.4954L62.3933 26.4378L65.0093 23.9332C64.8423 25.102 64.898 26.2709 65.1762 27.4954ZM86.9944 30.167C85.0464 31.7811 82.8757 32.7829 79.9814 33.5065C79.3692 33.6735 78.7013 33.7848 78.1447 33.7848C73.525 34.2301 69.6846 32.115 68.2375 28.7199C68.0705 28.3302 67.9035 27.885 67.7922 27.4397C67.1243 24.5455 67.6809 21.9852 69.128 19.9258C69.5176 19.3135 70.0185 18.8126 70.5751 18.3117C71.9109 17.0872 73.6363 16.2523 75.5844 15.7514C79.9814 14.6939 83.8219 16.0297 86.2152 18.9239L77.8664 27.8293C78.423 27.9406 79.3135 27.7737 79.9814 27.6067C81.9851 27.1058 83.0983 26.0482 84.0445 24.9351L87.384 27.9406L88.3859 28.8312C87.9406 29.3321 87.4953 29.7774 86.9944 30.167ZM104.75 42.0223L102.913 30L100.352 36.6234L96.512 28.3302H96.4564L94.9536 37.9592L88.5529 36.846L89.4434 31.5028C89.666 31.2801 89.9443 31.0575 90.167 30.7792L92.2263 28.6642L90.2226 26.8275L92.3933 14.026H98.8497L100.464 22.8757L102.301 12.6345H106.92L108.868 25.102C106.419 27.885 105.25 31.6141 106.03 35.0649C106.642 37.7365 108.312 39.8516 110.649 41.1317C110.872 41.243 111.15 41.3544 111.373 41.4657L111.596 43.0798L104.75 42.0223ZM120.724 38.0705C120 38.5714 119.221 39.0167 118.386 39.295C116.716 39.9072 115.102 40.0742 113.599 39.7403C112.597 39.5176 111.651 39.128 110.816 38.5714C109.536 37.6252 108.59 36.2894 108.145 34.564C107.644 32.5046 108.089 30.2783 109.202 28.3302C109.759 27.384 110.482 26.4935 111.317 25.7143C112.263 24.8794 113.377 24.1558 114.545 23.7106C117.384 22.6531 120.167 23.0427 122.115 24.4341C122.839 24.9351 123.451 25.603 123.896 26.3822C124.23 26.9944 124.508 27.6623 124.675 28.3859C125.288 30.8905 124.564 33.5622 123.006 35.6772C122.505 36.6234 121.67 37.4026 120.724 38.0705ZM135.195 49.4249L130.464 48.0334L130.074 30.5566L127.681 44.026L122.505 43.1911L122.894 39.295C126.289 36.4564 128.07 31.9481 127.069 27.8293C126.623 26.0482 125.733 24.4341 124.397 23.2653L124.842 18.7013L122.894 18.2004L122.95 15.7514L131.855 17.5325L134.861 31.7254L137.922 18.9796L144.712 20.4824L135.195 49.4249Z"
              fill="white"
            />
          </svg>
        </div>
        <p style={lettercenter}>loading . . .</p>
      </div>
    </div>
  );
};

export default Loader;
