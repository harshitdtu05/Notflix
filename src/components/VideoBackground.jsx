import React from "react";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ videoId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer({ videoId });
  return (
    <div className="absolute w-full h-full -z-10">
      <iframe
        className="w-full h-full scale-150"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {
//     "id": 1290821,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "\"the first great action film of the year\"",
//         "key": "kdcxogb4leQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-28T18:00:00.000Z",
//         "id": "697ce993fa186c66515d9f3c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "shelter | fortnite tournament",
//         "key": "c_n1oBADaiU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2026-01-27T23:30:00.000Z",
//         "id": "697950b8dfeb89540e14e57a"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Shed Fight Scene",
//         "key": "X3RfKTNo95E",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2026-01-27T19:32:40.000Z",
//         "id": "6979467a030dd85ff106a4f8"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Hold On",
//         "key": "kCY4Y3Y8UpA",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-25T03:49:43.000Z",
//         "id": "6975f7aa4837467d6c10620c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "shelter x fortnite",
//         "key": "_5PdP2E_1fo",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2026-01-24T21:56:26.000Z",
//         "id": "69756c012495071dfd106369"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "This is Michael Mason",
//         "key": "Bvrbi8fZb7g",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-23T19:40:32.000Z",
//         "id": "69751839de9bfb62a1a37ad2"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "one week out",
//         "key": "3KcD7A9Pzgc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-22T17:00:00.000Z",
//         "id": "69725c472e8e6428e3093e7a"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Outrun",
//         "key": "k60_82uoPiE",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-22T15:25:37.000Z",
//         "id": "69725cb20445e25873820845"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Featurette",
//         "key": "8vWhn31RXzk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2026-01-21T18:59:16.000Z",
//         "id": "69715d2709b79fc22a94da7e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "“Become The Shelter” Fortnite Promo",
//         "key": "SQGFoxWBr6k",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2026-01-21T15:59:38.000Z",
//         "id": "697653558f929b7eef088b5e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "“Become The Shelter” Fortnite Gameplay Trailer",
//         "key": "PzgFLpIIVYU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2026-01-21T15:59:33.000Z",
//         "id": "69715d586cc8bcf3fe774534"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "only in theaters january 30",
//         "key": "fymv4fn7frw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-18T17:00:00.000Z",
//         "id": "696d17926e9bb185a936af58"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "two weeks",
//         "key": "sopqeqjGEfU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-15T17:01:29.000Z",
//         "id": "6969385bdefb8166bd078f98"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Mission",
//         "key": "-dXj_jk-QSc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-15T09:36:12.000Z",
//         "id": "6969392229b38a76c5079073"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Unshackled",
//         "key": "ioT_i-Iq7u4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-15T09:29:39.000Z",
//         "id": "696938dd5619d84343e56f70"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Protect",
//         "key": "jn3fADS3dNI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-15T09:21:12.000Z",
//         "id": "696938a1b3da159d24e56db5"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "only in theaters january 30",
//         "key": "9hvNKrPIVOk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-14T17:00:28.000Z",
//         "id": "696938400731f28e70dbd3ff"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Weapon",
//         "key": "GI5T1g6Fv0s",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-12T10:19:00.000Z",
//         "id": "69693766f46ad238d5f40e0f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Precision",
//         "key": "WaojMZ9woMI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-12T10:18:56.000Z",
//         "id": "6969374a2e4a45b24001a98a"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Elite Operative",
//         "key": "Xbvti75Sdsk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-12T10:18:39.000Z",
//         "id": "696936fadb1163ce87079040"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "in theaters january 30",
//         "key": "awWkqBGieDg",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-09T17:00:04.000Z",
//         "id": "69693823bed2f6fc59e56e0d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "in theaters january 30",
//         "key": "jZfyVnWmc8U",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-08T20:17:16.000Z",
//         "id": "696937ee71ca24f358dbd44c"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "in theaters january 30",
//         "key": "QNeXSac6Y1E",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2026-01-05T20:27:15.000Z",
//         "id": "696937b98abbad7651f40d54"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "one month",
//         "key": "ZRaJdEqt2X8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2025-12-30T16:05:11.000Z",
//         "id": "6969377f6ac4314e28e714a7"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Shelter | Official Trailer | Only In Theaters January 30",
//         "key": "auHiLFjaIc0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2025-12-02T16:17:56.000Z",
//         "id": "699c2e97b1e6355f82b2940f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "PPMawzJxKF4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2025-12-02T16:15:20.000Z",
//         "id": "692f6a6de8e785d06d114850"
//       }
//     ]
//   }
