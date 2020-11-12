"use strict";

var header = $(`<header>
      <div class="head">
        <a href="index.html">
          <svg
            class="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 398.68 172.47"
          >
            <g id="Ebene_2" data-name="Ebene 2">
              <g id="Ebene_1-2" data-name="Ebene 1">
                <g id="Ebene_2-2" data-name="Ebene 2">
                  <g id="Ebene_1-2-2" data-name="Ebene 1-2">
                    <path
                      d="M85.36,2v78H63.48v-9.7c-5.55,7.76-16.41,11.21-25.14,11.21C18.28,81.48,0,66,0,40.86S18.28,0,38.34,0c9.07,0,19.4,3.38,25.14,11.21V2ZM62.78,40.82a20.18,20.18,0,0,0-40.35-.35v.39a20.29,20.29,0,0,0,40.54,0Z"
                    />
                    <path
                      d="M174.14,37.17V79.85H152.21V39.54c0-12.42-7.37-17.93-14.93-17.93S119.7,25.8,119.7,40v40H97.78V2H119.7V15.09C123.08,4.54,135.45,0,143.17,0,163.58,0,174.29,13.74,174.14,37.17Z"
                    />
                    <path
                      d="M174.14,128v42.68H152.21V130.29c0-12.41-7.37-17.92-14.93-17.92s-17.58,4-17.58,18.43v39.92H97.78V92.77H119.7v13.08c3.38-10.56,15.75-15.1,23.28-15.1C163.58,90.75,174.29,104.49,174.14,128Z"
                    />
                    <path
                      d="M264.5,138.83H205.64c2.37,9,9.7,14.08,20.26,14.08a27.15,27.15,0,0,0,20.45-8.73l12.88,12.88c-7.38,9.9-21.11,15.25-34.92,15.25-23.94,0-41.52-16.41-41.52-40.5,0-25.3,19.09-41.06,41.52-41.06s40.54,15.76,40.54,39.7C264.85,132.62,264.7,135.3,264.5,138.83Zm-21.57-14.24c-.7-9.2-8.38-14.75-18.27-14.75a18,18,0,0,0-19,14.75Z"
                    />
                    <path
                      d="M330.46,93.12l-5,20.95a22.9,22.9,0,0,0-11.18-2.71c-11.21,0-18.89,10.4-18.89,32.67v26.69h-22V92.77h21.77v16.57c4.38-13,13.23-18.59,23-18.59A27.68,27.68,0,0,1,330.46,93.12Z"
                    />
                    <path
                      d="M333.34,145.7h20.6c0,4.54,3.88,9.39,11.64,9.39,6.32,0,11.21-2.68,11.21-7.22,0-3.34-2.67-5-8.53-6.52l-10.4-2.52c-20.1-5.36-22.78-16.57-22.78-24.8,0-12.06,12.57-23.28,30.65-23.28,14.24,0,31,7.07,30.81,25.46h-21a8.47,8.47,0,0,0-8.81-8.1,6,6,0,0,0-.73.07c-5.05,0-9.08,2.52-9.08,6.55s3.37,5.51,7.76,6.68l12.88,3.33c18.78,5,21.11,16.77,21.11,23.28,0,16.42-16.73,24.45-32.83,24.45S333.69,163,333.34,145.7Z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div class="menu">
        <button class="nav-tgl" type="button" aria-label="toggle menu">
          <span aria-hidden="true"></span>
        </button>
        <nav class="nav">
          <div class="nav-container">
            <div class="left-flex">
              <h1 class="menu-head">menu</h1>
            </div>
            <div class="right-flex">
              <ul class="link">
                <div class="menucenter">
                  <li>
                    <a class="links1" href="index.html"><span>Startseite</span></a>
                  </li>
                  <li>
                    <a class="links1" href="editorial.html"><span>Editorial</span></a>
                  </li>
                  <li>
                    <a class="links1" href="aboutAnners.html"
                      ><span>Das Team</span></a
                    >
                  </li>
                  <li>
                    <a class="links1" href="Unterstuetzer.html"
                      ><span>Sponsoren</span></a
                    >
                  </li>
                  <li>
                    <a class="links1" href="makingOf.html"
                      ><span>Making-Of</span></a
                    >
                  </li>
                </div>
                <div class="menubottom">
                  <li class="float">
                    <a class="links2" href="impressum.html">Impressum</a>
                  </li>
                  <li class="float">
                    <a class="links2" href="datenschutz.html">Datenschutz</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <!-- navbar & back to top -->
      <div class="back-to-top">
        <svg
          class="back-top-chevron"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
        </svg>
      </div>
    </header>`);

$("body").prepend(header);
