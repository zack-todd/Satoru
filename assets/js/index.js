'use strict';


import { sidebar } from "./sidebar.js";
import { api_key, imageBsaseURL, fetchDataServer } from "./api";

const pageContent = document.querySelector('.page-content');

sidebar ();

const genreList = {

    asString(genreIdList) {
        let newGenreList = [];

        for ( const genreId of genreIdlist) {
            this[genreId] && newGenreList.push(this[genreId]);
        }

        return newGenreList.join(", ");
    }
};

fetchDataServer(`https://api.themoviedb.org/3/genre/movie/list=${api_key}`, function ({ genres }) {

for (const { id, name } of genres ) {
    genreList[id] = name;
}

fetchDataServer(`https://api.themoviedb.org/3/movie/popular?{api_key=$api_key}&page=1`, heroBanner);
});




const heroBanner = function ({results: movieList }) {

    const banner = document.createElement("section");
    banner.classList.add("banner");
    banner.ariaLabel = "popular Animes"

    banner.innterHtml =  `
   
    <div class="banner-slider">
   <div class="slider-control">
    <div class="control-inner">
        
    </div>
    
        
            <h2 class="heading">
                Attack on Titan
            </h2>
        
            <div class="meta-list">
                <div class="meta-item">2013</div>
        
                <div class="meta-item card-badge">9.1</div>
            </div>
        
            <p class="genre">Animation, Action, Adventure</p>
        
            <p class="banner-text">
                After his hometown is destroyed and is traumatized, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.
        
            </p>
        
            <a href="./detail.html" class="btn">
             <img src="assets/images/play_circle.png"  width="24" 
             height="24" aria-hidden="true" alt="play circle">
            
             <span class="span">Watch Now</span>
        
            
            </a>
        </div>
        
<button class="poster-box slider-item active">
    <img src="https://publish.one37pm.net/wp-content/uploads/2022/04/attack-on-titan-twitter.jpg" 
    alt="Attack on Titan" loading="lazy"
    draggable="false" class="img-cover">

        
<button class="poster-box slider-item">

    <button class="poster-box slider-item">

        <button class="poster-box slider-item">

            <button class="poster-box slider-item">

            <button class="poster-box slider-item">

            <button class="poster-box slider-item"></button>
            </div>
             `;

             let controlItemIndex = 0;

             for (const [index, movie] of movieList.entries()) {

                const {
        backdrop_path,
    title,
release_date,
genre_ids
overview,
poster_path,
vote_average,
id
                } = anime


                const sliderItem = document.createElement("dive");
                sliderItem.classList.add("slider-item");
                sliderItem.setAttribute("slider-item", "");
                

                sliderItem.innerHtml = `
                
                <div class="slider-item" slider-item>
                <img src="${imageBaseURL}w1280${backdrop_path}" alt="${title}"
                class="img-cover" 
                loading=${index === 0 ? "eager" : "lazy"
            }>
                <div class="banner-content">
                
                    <h2 class="heading>${title}</h2>
                
                    <div class="meta-list">
                        <div class="meta-item">${release_date.split("-")[0]}</div>
                
                        <div class="meta-item card-badge">${vote_average.toFixed(1)}</div>
                    </div>
                
                    <p class="genre">${genreList.asString(genre_ids)}</p>
                
                    <p class="banner-text">${overview}</p>
                
                    <a href="./detail.html" class="btn">
                     <img src="assets/images/play_circle.png"  width="24" 
                     height="24" aria-hidden="true" alt="play circle">
                    
                     <span class="span">Watch Now</span>
                
                    
                    </a>
                </div>
                `;

                banner.querySelector(".banner-slider").appendChild
                (sliderItem);

                const controlItem = document.createElement("button");
                controlItem.classList.add("poster-box, slider-item");
                controlItem.setAttribute("slider-control", `$
                {controlItemIndex}`);

                controlItemIndex++;

                controlItem.innerHTML = `
    <img src="${imageBaseURL}w154${poster_path}" 
    alt="${title}" loading="lazy"
    draggable="false" class="img-cover">
   `;
   banner.querySelector(".control-inner").appendChild(controlItem);
             }

             pageContent.appendChild(banner);

             addHeroSlide();
           
}




const addHeroSlide = function () {

const sliderItem = document.querySelectorAll("[slider-item]");

const sliderControl = document.querySelectorAll("[slider-control]");

let lastSliderItem = sliderItem[0];
let lastSliderControl = sliderControl[0];

lastSliderItem.classList.add("active");
lastSliderControl.classList.add("active");

const sliderStart = function () {
    lastSliderItem.classList.remove("active");
    lastSliderControl.classList.remove("active");


    sliderItem[Number(this.getAttribute("slider-control"))];
    classList.add("active");
    this.classList.add("active");

    lastSliderControl = sliderItems[Number(this.getAttribute
        ("slider-control"))];
        lastSliderControl = this;
}

addEventOnElements(sliderControl, "click", sliderStart);
}




