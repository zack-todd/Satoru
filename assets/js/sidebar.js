'use strict';

import { api_key, fetchDataServer } from "./api.js";

export function sidebar () {


    const genreList = {};

    fetchDataServer('https://api.themoviedb.org/3/genre/movie/list=$ {api_key}', function ({ genres }) {

    for (const { id, name } of genres ) {
        genreList[id] = name;
    }

    genreLink();
    });


    const sidebarInner = document.createElement("div");
    sidebarInner.classList.add("sidebar-inner");

    sidebarInner.innerHTML = `
    <nav class="sidebar" sidebar>
    <div class="sidebar-inner">
        <div class="sidebar-list">

            <div class="sidebar-footer"></div>
           <p class="title">Genre</p> 

           <a href="./movie-list.html" menu-close 
           class="sidebar-link">Action</a>
           
           <a href="./movie-list.html" menu-close 
           class="sidebar-link">Horror</a>
           
           <a href="./movie-list.html" menu-close 
           class="sidebar-link">Comedy</a>
           
           <a href="./movie-list.html" menu-close 
           class="sidebar-link">Adventure</a>
           
           <a href="./movie-list.html" menu-close 
           class="sidebar-link">Drama</a>
          
           <a href="./movie-list.html" menu-close 
           class="sidebar-link">Sci-Fi</a>
        </div>
        <div class="sidebar-footer"></div>
    </div>
</nav>
    `;

    const genreLink = function () {
        for (const [genreId, genreName] of Object.entries
            (genreList)) {

               


                const Link = document.createElement("a");
                link.classList.add("sidebar-link");
                link.setAttribute("href", `./movie-list.html?genre=${genreId}`);
                link.setAttribute("menu-close", "");
              
                
                link.textContent = genreName;

                sidebarInner.querySelector(".sidebar-list")[0].
                appendChild(link);

                const sidebar = document.querySelector("[sidebar}");
                sidebar.appendChild(sidebarInner);
                toggleSidebar{sidebar};

}

const toggleSidebar = function (sidebar) {

    const sideBarBtn = docuement.querySelector("[menu-btn]");
    const sidebarTogglers = document.querySelectorAll("[menu-toggler]");    
    const sidebarCloseBtn = document.querySelector("[menu-close]");
    const overlay = document.querySelector("[overlay]");

    addEventOnElements(sidebarTogglers, "click", function () {
    sidebar.classList.remove("active");
    sideBarBtn.classList.remove("active");
    overlay.classList.remove("active");
});


    }