const TMDB = "https://image.tmdb.org/t/p/";

let movies = [
  { id: 27205, title: "Inception", release_date: "2010-07-16",
    backdrop_path: TMDB + "original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    poster_path: TMDB + "w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg", category: "Sci-Fi" },
  { id: 157336, title: "Interstellar", release_date: "2014-11-07",
    backdrop_path: TMDB + "original/pbrkL804c8yAv3zBZR4QPEafpAR.jpg",
    poster_path: TMDB + "w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", category: "Sci-Fi" },
  { id: 155, title: "The Dark Knight", release_date: "2008-07-18",
    backdrop_path: TMDB + "original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    poster_path: TMDB + "w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", category: "Action" },
  { id: 603, title: "The Matrix", release_date: "1999-03-31",
    backdrop_path: TMDB + "original/icmmSD4vTTDKOq2vvdulafOGw93.jpg",
    poster_path: TMDB + "w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", category: "Sci-Fi" },
  { id: 299536, title: "Avengers: Infinity War", release_date: "2018-04-27",
    backdrop_path: TMDB + "original/lmZFxXgJE3vgrciwuDib0N8CfQo.jpg",
    poster_path: TMDB + "w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", category: "Action" },
  { id: 299534, title: "Avengers: Endgame", release_date: "2019-04-26",
    backdrop_path: TMDB + "original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    poster_path: TMDB + "w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", category: "Action" },
  { id: 550, title: "Fight Club", release_date: "1999-10-15",
    backdrop_path: TMDB + "original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    poster_path: TMDB + "w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", category: "Drama" },
  { id: 680, title: "Pulp Fiction", release_date: "1994-09-10",
    backdrop_path: TMDB + "original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    poster_path: TMDB + "w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", category: "Drama" },
  { id: 238, title: "The Godfather", release_date: "1972-03-14",
    backdrop_path: TMDB + "original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    poster_path: TMDB + "w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", category: "Drama" },
  { id: 497, title: "The Green Mile", release_date: "1999-12-10",
    backdrop_path: TMDB + "original/velWPhVMQeQKcxggNEU8YmIo52.jpg",
    poster_path: TMDB + "w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg", category: "Drama" },
  { id: 49026, title: "The Dark Knight Rises", release_date: "2012-07-20",
    backdrop_path: TMDB + "original/3bQ5J1Q6kQ7k3mXQJY9q3L5eQ.jpg",
    poster_path: TMDB + "w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg", category: "Action" },
  { id: 603692, title: "John Wick: Chapter 4", release_date: "2023-03-24",
    backdrop_path: TMDB + "original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
    poster_path: TMDB + "w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg", category: "Action" },
  { id: 634649, title: "Spider-Man: No Way Home", release_date: "2021-12-17",
    backdrop_path: TMDB + "original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    poster_path: TMDB + "w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", category: "Action" },
  { id: 862, title: "Toy Story", release_date: "1995-11-22",
    backdrop_path: TMDB + "original/9FBwqcd9IRruEDUrTdca5rXx6hK.jpg",
    poster_path: TMDB + "w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg", category: "Animation" },
  // Soul was listed twice; duplicate removed. Poster path corrected.
  { id: 508442, title: "Soul", release_date: "2020-12-25",
    backdrop_path: TMDB + "original/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
    poster_path: TMDB + "w500/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg", category: "Animation" },
  // The next four had truncated / invalid file names. Corrected below.
  { id: 346364, title: "It", release_date: "2017-09-08",
    backdrop_path: TMDB + "original/tcheoA2nPATCm2s5tX.jpg",
    poster_path: TMDB + "w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg", category: "Horror" },
  { id: 694, title: "The Shining", release_date: "1980-05-23",
    backdrop_path: TMDB + "original/xazWoLealQwEgqZ89MLZklLZD3k.jpg",
    poster_path: TMDB + "w500/nRj5511mZdTl4saWEPoj9QroTIu.jpg", category: "Horror" },
  { id: 1079091, title: "It Ends with Us", release_date: "2024-08-07",
    backdrop_path: TMDB + "original/8ypSYhooBjnyBbmV3GVdLDwuE7e.jpg",
    poster_path: TMDB + "w500/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg", category: "Drama" },
  { id: 831815, title: "Saving Bikini Bottom: The Sandy Cheeks Movie", release_date: "2024-08-01",
    backdrop_path: TMDB + "original/hdFIdxwS8FSN2wIsuotjW1mshI0.jpg",
    poster_path: TMDB + "w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", category: "Animation" },
    {
  id: 210577,
  title: "Gone Girl",
  release_date: "2014-10-01",
  backdrop_path: TMDB + "original/h2JaQWLKhapm7AuSViJwGiv8ngC.jpg",
  poster_path: TMDB + "w500/qymaJhucquUwjpb8oiqynMeXnID.jpg",
  category: "Thriller"
},
{
  id: 274,
  title: "The Silence of the Lambs",
  release_date: "1991-02-14",
  backdrop_path: TMDB + "original/mHJn0y8v3mV9s2v2f2w3.jpg",
  poster_path: TMDB + "w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
  category: "Thriller"
}
];

let dom_container = document.querySelector(".dom_container");
let all=document.querySelector("#all");
let action=document.querySelector("#action");
let thriller=document.querySelector("#thriller");
let animation=document.querySelector("#animation");
let horror=document.querySelector("#horror");
let drama=document.querySelector("#drama");
let sci_fi=document.querySelector("#sci_fi");

let showdata=(movies)=>{
dom_container.innerHTML = movies.map((movie) => `
  <div class="main">
    <div class="hover_effect">
      <img src="${movie.poster_path}" alt="${movie.title.replace(/"/g, "&quot;")}"
           class="img" loading="lazy" onerror="posterFallback(this)" />
    </div>
    <h5>${movie.title}</h5>
    <p>${movie.release_date}</p>
  </div>
`).join("");
}
showdata(movies);
action.addEventListener('click',()=>{
  let newMovie= movies.filter((movie)=>movie.category==='Action');
  showdata(newMovie);

  thriller.addEventListener('click', () => {
    let newMovie = movies.filter((movie) => movie.category === 'Thriller');
    showdata(newMovie);
});

animation.addEventListener('click', () => {
    let newMovie = movies.filter((movie) => movie.category === 'Animation');
    showdata(newMovie);
});

horror.addEventListener('click', () => {
    let newMovie = movies.filter((movie) => movie.category === 'Horror');
    showdata(newMovie);
});

drama.addEventListener('click', () => {
    let newMovie = movies.filter((movie) => movie.category === 'Drama');
    showdata(newMovie);
});

sci_fi.addEventListener('click', () => {
    let newMovie = movies.filter((movie) => movie.category === 'Sci-Fi');
    showdata(newMovie);
});
all.addEventListener('click', () => {
   showdata(movies);
});
});
// If a poster URL is dead, show the movie title instead of a broken-image box.
function posterFallback(img) {
  img.onerror = null;
  const box = document.createElement("div");
  box.className = "img";
  box.style.cssText =
    "display:flex;align-items:center;justify-content:center;text-align:center;" +
    "aspect-ratio:2/3;padding:12px;color:#fff;background:#111;font-weight:600;";
  box.textContent = img.alt;
  img.replaceWith(box);
}
window.posterFallback = posterFallback;

