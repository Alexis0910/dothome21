<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    
    <title>tmap API</title>
    <link rel="stylesheet" href="assets/css/pageStyle/tmap.css" />
  </head>
  <body>
    <div id="container">
      <div class="option-bar">
        <div class="option-bar__column">
          <button class="option-bar__column__button" id="button1"></button>
        </div>
        <div class="option-bar__column">
          <button class="option-bar__column__button" id="button2"></button>
        </div>

        <div class="option-bar__column">
          <div class="option-bar__column__checkbox">
            <p>
              <input type="checkbox" name="checkbox1" id="checkbox1" /><label
                for="checkbox1"
                ></label
              >
              <br />
              <input
                type="checkbox"
                name="checkbox2"
                id="checkbox2"
                value="true"
              /><label for="checkbox2"></label>
            </p>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="main__header">
          <span class="main__header__result"> </span>
        </div>
        <div class="main__map main__map-empty" id="map"></div>
      </div>
    </div>

    <script src="assets/js/data.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>    
    <script src="assets/js/whentogo.js"></script>
    <script src="assets/js/findpath.js"></script>
    
    <script src="assets/js/logic.js"></script>
    <script src="https://api2.sktelecom.com/tmap/js?version=1&format=javascript&appKey=l7xx46c00b11477744339549d3160f8ae14a"></script>
      </body>
</html>