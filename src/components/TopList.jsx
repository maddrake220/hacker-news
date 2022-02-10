import styled from "styled-components";
import Loading from "./Loading";
import SearchInput from "./SearchInput";
import Story from "./Story";
import DateTopDay from "./DateTopDay";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DateTop from "./DateTop";
const TopList = ({ loading, list, getData }) => {
  const [slideState, setSlideState] = useState(0);
  useEffect(() => {
    getData();
  }, [getData]);
  //list.forEach((v) => v[1].sort((a, b) => b.score - a.score));
  return (
    <StyledTopList>
      <header>
        <h2>TopStories</h2>
        <svg
          className="hackernews-logo"
          width="65"
          height="25"
          viewBox="0 0 65 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_173_5559)">
            <path
              d="M23.7901 2.26738H24.9713V5.64411H28.8419V2.26738H30.0269V10.0464H28.8419V6.65827H24.9713V10.0464H23.7901V2.26738ZM30.8016 10.0464L33.5972 2.26738H34.9684L37.764 10.0464H36.5067L34.3113 3.68796H34.2505L32.0551 10.0464H30.8016ZM36.3054 7.00012V7.99148H32.2602V7.00012H36.3054ZM43.4318 4.80088C43.3711 4.47675 43.2444 4.19694 43.052 3.96144C42.8621 3.72341 42.6253 3.54362 42.3417 3.42208C42.0606 3.30053 41.7542 3.23976 41.4225 3.23976C40.9718 3.23976 40.5691 3.35371 40.2146 3.58161C39.8627 3.80951 39.5866 4.1425 39.3866 4.58057C39.1866 5.01865 39.0865 5.54408 39.0865 6.15688C39.0865 6.77475 39.1866 7.30272 39.3866 7.74079C39.5866 8.17634 39.8627 8.50806 40.2146 8.73596C40.5666 8.96133 40.9692 9.07401 41.4225 9.07401C41.7517 9.07401 42.0568 9.01324 42.3379 8.89169C42.619 8.77014 42.8545 8.59415 43.0444 8.36372C43.2369 8.13329 43.366 7.85854 43.4318 7.53948H44.6245C44.5435 8.04846 44.3574 8.50173 44.0662 8.89929C43.775 9.29431 43.4002 9.60198 42.9418 9.82228C42.4835 10.0426 41.9733 10.1527 41.4111 10.1527C40.735 10.1527 40.1323 9.99068 39.6031 9.66655C39.0739 9.34243 38.6598 8.8803 38.361 8.28016C38.0622 7.67749 37.9128 6.96973 37.9128 6.15688C37.9128 5.34404 38.0622 4.63628 38.361 4.03361C38.6624 3.42841 39.0777 2.96501 39.6069 2.64342C40.1361 2.32182 40.7375 2.16103 41.4111 2.16103C41.9606 2.16103 42.4633 2.26611 42.9191 2.47629C43.3749 2.68393 43.7509 2.98653 44.0472 3.38409C44.346 3.78165 44.5384 4.25391 44.6245 4.80088H43.4318ZM45.6779 2.26738H46.8592V5.97836H46.9617L50.2131 2.26738H51.6983L48.5646 5.76945L51.7097 10.0464H50.2815L47.7822 6.5747L46.8592 7.63444V10.0464H45.6779V2.26738ZM52.4511 2.26738H57.3357V3.28534H53.6324V5.64411H57.0813V6.65827H53.6324V9.02843H57.3775V10.0464H52.4511V2.26738ZM58.5582 2.26738H61.3386C61.9261 2.26738 62.4211 2.36994 62.8238 2.57505C63.2289 2.77762 63.5315 3.0625 63.7316 3.42967C63.9316 3.79431 64.0316 4.21973 64.0316 4.70592C64.0316 5.1921 63.9316 5.61625 63.7316 5.97836C63.534 6.33794 63.2327 6.61648 62.8276 6.814C62.4224 7.01151 61.9248 7.11027 61.3348 7.11027H59.2305V6.09231H61.2171C61.5944 6.09231 61.9033 6.03787 62.1439 5.92898C62.3844 5.8201 62.5604 5.66437 62.6718 5.46179C62.7858 5.25668 62.8428 5.00472 62.8428 4.70592C62.8428 4.40711 62.7858 4.15136 62.6718 3.93865C62.5604 3.72594 62.3832 3.56388 62.1401 3.45246C61.897 3.33851 61.588 3.28154 61.2133 3.28154H59.7395V10.0464H58.5582V2.26738ZM64.3279 10.0464H62.9833L61.0955 6.53672H62.4097L64.3279 10.0464ZM30.0725 22.0464H28.9862L25.0435 16.3641H24.9713V22.0464H23.7901V14.2674H24.8878L28.8305 19.9611H28.9026V14.2674H30.0725V22.0464ZM31.4333 14.2674H36.318V15.2853H32.6146V17.6441H36.0635V18.6583H32.6146V21.0284H36.3598V22.0464H31.4333V14.2674ZM36.9214 14.2674H38.1672L39.679 20.2802H39.7511L41.3236 14.2674H42.5543L44.1268 20.284H44.1952L45.7069 14.2674H46.9528L44.7953 22.0464H43.6026L41.9694 16.2349H41.9086L40.2753 22.0464H39.0788L36.9214 14.2674ZM51.9149 16.3147C51.8896 16.0792 51.8073 15.8766 51.668 15.707C51.5287 15.5348 51.3426 15.4044 51.1097 15.3157C50.8767 15.2271 50.6121 15.1828 50.3158 15.1828C50.0043 15.1828 49.7309 15.2322 49.4954 15.3309C49.2599 15.4297 49.0775 15.5664 48.9484 15.7411C48.8218 15.9159 48.7585 16.1121 48.7585 16.3299C48.7559 16.6591 48.8889 16.9123 49.1573 17.0895C49.4257 17.2643 49.7638 17.4035 50.1715 17.5074L50.9273 17.7049C51.3274 17.8036 51.6908 17.9353 52.0175 18.0999C52.3441 18.2645 52.6163 18.4962 52.8341 18.795C53.0544 19.0913 53.1646 19.4572 53.1646 19.8927C53.1646 20.3359 53.0506 20.7296 52.8227 21.074C52.5948 21.4184 52.2644 21.6881 51.8313 21.8831C51.3983 22.078 50.8818 22.1755 50.2816 22.1755C49.7043 22.1755 49.2016 22.0831 48.7737 21.8983C48.3483 21.7134 48.014 21.45 47.7709 21.1082C47.5278 20.7663 47.3936 20.3612 47.3683 19.8927H48.5534C48.5762 20.1637 48.6648 20.3928 48.8193 20.5802C48.9763 20.7651 49.1801 20.9044 49.4308 20.998C49.684 21.0917 49.9664 21.1386 50.2778 21.1386C50.607 21.1386 50.902 21.0867 51.1628 20.9829C51.4237 20.8765 51.6275 20.7284 51.7744 20.5384C51.9212 20.3485 51.9947 20.1295 51.9947 19.8813C51.9947 19.6661 51.9326 19.485 51.8086 19.3382C51.687 19.1888 51.5211 19.0672 51.311 18.9735C51.1008 18.8773 50.8374 18.7874 50.5209 18.7038L49.6055 18.457C48.9522 18.2797 48.4508 18.0239 48.1014 17.6897C47.7519 17.3529 47.5772 16.9224 47.5772 16.3983C47.5772 15.9576 47.6975 15.5689 47.938 15.2322C48.1811 14.8928 48.5116 14.6295 48.9294 14.4421C49.3472 14.2547 49.8182 14.161 50.3424 14.161C50.8615 14.161 51.3262 14.2535 51.7364 14.4383C52.1466 14.6206 52.4669 14.8764 52.6974 15.2056C52.9278 15.5322 53.0481 15.9019 53.0582 16.3147H51.9149Z"
              fill="#96D9FF"
            />
            <g clip-path="url(#clip1_173_5559)">
              <path
                d="M23.7901 2.26738H24.9713V5.64411H28.8419V2.26738H30.0269V10.0464H28.8419V6.65827H24.9713V10.0464H23.7901V2.26738ZM30.8016 10.0464L33.5972 2.26738H34.9684L37.764 10.0464H36.5067L34.3113 3.68796H34.2505L32.0551 10.0464H30.8016ZM36.3054 7.00012V7.99148H32.2602V7.00012H36.3054ZM43.4318 4.80088C43.3711 4.47675 43.2444 4.19694 43.052 3.96144C42.8621 3.72341 42.6253 3.54362 42.3417 3.42208C42.0606 3.30053 41.7542 3.23976 41.4225 3.23976C40.9718 3.23976 40.5691 3.35371 40.2146 3.58161C39.8627 3.80951 39.5866 4.1425 39.3866 4.58057C39.1866 5.01865 39.0865 5.54408 39.0865 6.15688C39.0865 6.77475 39.1866 7.30272 39.3866 7.74079C39.5866 8.17634 39.8627 8.50806 40.2146 8.73596C40.5666 8.96133 40.9692 9.07401 41.4225 9.07401C41.7517 9.07401 42.0568 9.01324 42.3379 8.89169C42.619 8.77014 42.8545 8.59415 43.0444 8.36372C43.2369 8.13329 43.366 7.85854 43.4318 7.53948H44.6245C44.5435 8.04846 44.3574 8.50173 44.0662 8.89929C43.775 9.29431 43.4002 9.60198 42.9418 9.82228C42.4835 10.0426 41.9733 10.1527 41.4111 10.1527C40.735 10.1527 40.1323 9.99068 39.6031 9.66655C39.0739 9.34243 38.6598 8.8803 38.361 8.28016C38.0622 7.67749 37.9128 6.96973 37.9128 6.15688C37.9128 5.34404 38.0622 4.63628 38.361 4.03361C38.6624 3.42841 39.0777 2.96501 39.6069 2.64342C40.1361 2.32182 40.7375 2.16103 41.4111 2.16103C41.9606 2.16103 42.4633 2.26611 42.9191 2.47629C43.3749 2.68393 43.7509 2.98653 44.0472 3.38409C44.346 3.78165 44.5384 4.25391 44.6245 4.80088H43.4318ZM45.6779 2.26738H46.8592V5.97836H46.9617L50.2131 2.26738H51.6983L48.5646 5.76945L51.7097 10.0464H50.2815L47.7822 6.5747L46.8592 7.63444V10.0464H45.6779V2.26738ZM52.4511 2.26738H57.3357V3.28534H53.6324V5.64411H57.0813V6.65827H53.6324V9.02843H57.3775V10.0464H52.4511V2.26738ZM58.5582 2.26738H61.3386C61.9261 2.26738 62.4211 2.36994 62.8238 2.57505C63.2289 2.77762 63.5315 3.0625 63.7316 3.42967C63.9316 3.79431 64.0316 4.21973 64.0316 4.70592C64.0316 5.1921 63.9316 5.61625 63.7316 5.97836C63.534 6.33794 63.2327 6.61648 62.8276 6.814C62.4224 7.01151 61.9248 7.11027 61.3348 7.11027H59.2305V6.09231H61.2171C61.5944 6.09231 61.9033 6.03787 62.1439 5.92898C62.3844 5.8201 62.5604 5.66437 62.6718 5.46179C62.7858 5.25668 62.8428 5.00472 62.8428 4.70592C62.8428 4.40711 62.7858 4.15136 62.6718 3.93865C62.5604 3.72594 62.3832 3.56388 62.1401 3.45246C61.897 3.33851 61.588 3.28154 61.2133 3.28154H59.7395V10.0464H58.5582V2.26738ZM64.3279 10.0464H62.9833L61.0955 6.53672H62.4097L64.3279 10.0464ZM30.0725 22.0464H28.9862L25.0435 16.3641H24.9713V22.0464H23.7901V14.2674H24.8878L28.8305 19.9611H28.9026V14.2674H30.0725V22.0464ZM31.4333 14.2674H36.318V15.2853H32.6146V17.6441H36.0635V18.6583H32.6146V21.0284H36.3598V22.0464H31.4333V14.2674ZM36.9214 14.2674H38.1672L39.679 20.2802H39.7511L41.3236 14.2674H42.5543L44.1268 20.284H44.1952L45.7069 14.2674H46.9528L44.7953 22.0464H43.6026L41.9694 16.2349H41.9086L40.2753 22.0464H39.0788L36.9214 14.2674ZM51.9149 16.3147C51.8896 16.0792 51.8073 15.8766 51.668 15.707C51.5287 15.5348 51.3426 15.4044 51.1097 15.3157C50.8767 15.2271 50.6121 15.1828 50.3158 15.1828C50.0043 15.1828 49.7309 15.2322 49.4954 15.3309C49.2599 15.4297 49.0775 15.5664 48.9484 15.7411C48.8218 15.9159 48.7585 16.1121 48.7585 16.3299C48.7559 16.6591 48.8889 16.9123 49.1573 17.0895C49.4257 17.2643 49.7638 17.4035 50.1715 17.5074L50.9273 17.7049C51.3274 17.8036 51.6908 17.9353 52.0175 18.0999C52.3441 18.2645 52.6163 18.4962 52.8341 18.795C53.0544 19.0913 53.1646 19.4572 53.1646 19.8927C53.1646 20.3359 53.0506 20.7296 52.8227 21.074C52.5948 21.4184 52.2644 21.6881 51.8313 21.8831C51.3983 22.078 50.8818 22.1755 50.2816 22.1755C49.7043 22.1755 49.2016 22.0831 48.7737 21.8983C48.3483 21.7134 48.014 21.45 47.7709 21.1082C47.5278 20.7663 47.3936 20.3612 47.3683 19.8927H48.5534C48.5762 20.1637 48.6648 20.3928 48.8193 20.5802C48.9763 20.7651 49.1801 20.9044 49.4308 20.998C49.684 21.0917 49.9664 21.1386 50.2778 21.1386C50.607 21.1386 50.902 21.0867 51.1628 20.9829C51.4237 20.8765 51.6275 20.7284 51.7744 20.5384C51.9212 20.3485 51.9947 20.1295 51.9947 19.8813C51.9947 19.6661 51.9326 19.485 51.8086 19.3382C51.687 19.1888 51.5211 19.0672 51.311 18.9735C51.1008 18.8773 50.8374 18.7874 50.5209 18.7038L49.6055 18.457C48.9522 18.2797 48.4508 18.0239 48.1014 17.6897C47.7519 17.3529 47.5772 16.9224 47.5772 16.3983C47.5772 15.9576 47.6975 15.5689 47.938 15.2322C48.1811 14.8928 48.5116 14.6295 48.9294 14.4421C49.3472 14.2547 49.8182 14.161 50.3424 14.161C50.8615 14.161 51.3262 14.2535 51.7364 14.4383C52.1466 14.6206 52.4669 14.8764 52.6974 15.2056C52.9278 15.5322 53.0481 15.9019 53.0582 16.3147H51.9149Z"
                fill="#96D9FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 2H20V7H0V2ZM0 9H20V20.3959L0 12.2478V9ZM0 14.4074V22H18.6364L0 14.4074Z"
                fill="#96D9FF"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_173_5559">
              <rect
                width="65"
                height="24"
                fill="white"
                transform="translate(0 0.0463867)"
              />
            </clipPath>
            <clipPath id="clip1_173_5559">
              <rect
                width="65"
                height="24"
                fill="white"
                transform="translate(0 0.0463867)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          className="useravatar"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4381 10.1281C12.279 10.1281 13.7714 8.63571 13.7714 6.79476C13.7714 4.95381 12.279 3.46143 10.4381 3.46143C8.59712 3.46143 7.10474 4.95381 7.10474 6.79476C7.10474 8.63571 8.59712 10.1281 10.4381 10.1281Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.77124 18.4614V15.1281C3.77124 14.2076 4.51743 13.4614 5.43791 13.4614H15.4379C16.3584 13.4614 17.1046 14.2076 17.1046 15.1281V18.4614"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </header>

      <SearchInput />
      <DateTopDay slideState={slideState} />
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="date-top">
            <Swiper
              slidesPerView={1}
              onSlideChange={(swiper) => {
                setSlideState(swiper.activeIndex);
              }}
              style={{
                width: "390px",
                marginBottom: "6px",
              }}
              dir="rtl"
            >
              {list?.map((story, i) => (
                <div>
                  {story[1].map((v, index) => (
                    <>
                      {index === 0 && i < 3 && (
                        <SwiperSlide>
                          <DateTop story={v} ranking={index + 1} />
                        </SwiperSlide>
                      )}
                    </>
                  ))}
                </div>
              ))}
            </Swiper>
          </div>
          <div className="top-list">
            {list?.map((story, i) => (
              <ul>
                {story[1].slice(0, 5).map((v, index) => (
                  <li>
                    {index !== 0 && i < 3 && i === slideState && (
                      <Story story={v} ranking={index + 1} />
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </>
      )}
    </StyledTopList>
  );
};

const StyledTopList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > header {
    padding-top: 49px;
    padding-bottom: 38px;
    > h2 {
      font-size: 0;
    }
    .hackernews-logo {
      position: absolute;
      top: 49px;
      left: 20px;
    }
    .useravatar {
      position: absolute;
      top: 49px;
      right: 28.56px;
    }
  }
`;

export default TopList;
