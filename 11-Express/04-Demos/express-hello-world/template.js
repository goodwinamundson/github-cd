const { response } = require("express");
const langList = require('./translations');

function responsePage(language){

    return `
    <div class="view sky ">
    <div class='stars'>  </div>
      <div class="home-page-animation ">
          <h1 style="margin=100%">${langList[language].split(" ")[0]}</h1>
        <br>
        <img src="https://www.dataformsjs.com/examples/hello-world/img/sun.svg" class="sun">
            ${langList[language].split(" ")[1] ? "<h1>"+(langList[language].split(" ").slice(1).join(" "))+"</h1>":''}
        <div class="orbit">
          <img src="https://www.dataformsjs.com/examples/hello-world/img/planet.svg" class="planet">
          <img width='50' src="https://www.dataformsjs.com/examples/hello-world/img/moon.svg" class="moon">
        </div>
      </div>
    
    </div>
      </div>
    <style>
    * {
        padding: 0;
        margin: 0;
    }
    
    html {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    
    .view {
      
        display: flex;
        flex-direction: column;
        padding: 0px;
    }
    
    h1, p {
    
        background-color: white;
        box-shadow: 0 1px 2px rgba(0,0,0,.5);
        padding: 20px 40px;
        display: inline-block;
        flex: 1 0 auto;
        align-self: center;
        border-radius: 2em;
    }
    
    h1 {
        background-image: linear-gradient(180deg, hsla(0, 0%, 100%, .6) 1%, hsla(0, 0%, 100%, .5) 30%,#fff),linear-gradient(25deg, #E91E63, #2196F3 32%,#FFEB3B);
        color: #65110b;
    }
    
    p {
      text-align: center;
      line-height: 1.4em;
      margin-top: 40px;
    }

    .home-page-animation {
        margin: 200px auto 150px auto;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    
    .home-page-animation .sun {
        animation: scale 8s linear infinite;
        will-change: transform;
        margin-bottom:20px
    }
    
    .home-page-animation .orbit {
        display: flex;
        position: absolute;
        height: 152px;
        width: 152px;
        will-change: transform;
    }
    /* Adjust top/left of orbit for IE */
    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
        .home-page-animation .orbit {
            top: calc((100% - 152px) / 2);
            left: calc((100% - 152px) / 2);
        }
    }
    
    .home-page-animation .orbit {
        animation: rotate-and-spin-clockwise 6s linear infinite;
    }
    
    .home-page-animation .planet {
        position: absolute;
        top: calc((152px - 82px) / 2);
        left: calc((152px - 82px) / 2);
    }
    
    .home-page-animation .moon {
        position: absolute;
        top: calc((102px - 62px) / 2);
        left: calc((102px - 62px) / 2);
        will-change: transform;
        animation: rotate-and-spin-counter-clockwise 1s linear infinite;
    }
    
    @keyframes scale {
        0%, 100% { transform: scale3d(0.8, 0.8, 0.8); }
        50% { transform: scale3d(1, 1, 1); }
    }
    
    @keyframes rotate-and-spin-clockwise {
        from { transform: rotate(0deg) translate(-160px); }
        to { transform: rotate(360deg) translate(-160px); }
    }
    
    @keyframes rotate-and-spin-counter-clockwise {
        from { transform: rotate(360deg) translate(80px); }
        to { transform: rotate(0deg) translate(80px); }
    }
    
    .sky {
      position:absolute;
      width:100%;
      background: #4B79A1;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to top, #283E51, #0A2342);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to top, #283E51, #0A2342); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      background: -olinear-gradient(to top, #283E51, #0A2342); 
    
    }
    
    .stars {
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      width:100%;
      height:100%;
      display:block;
      background:url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat ;
      z-index:100;
    
    } 
    </style>`

}



module.exports = responsePage;