<php>

</php>

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="assets/css/index.css" defer />
        <script src="assets/scripts/index.js" defer></script>
        <title>Still Loadin' - RAW Str.</title>
    </head>
    <body>
        <nav>
            <div class="nav-left">
                <button id="jtwbtn"><h2 class="raw-center">RAW</h2></button>
            </div>
        </nav>
        <div>
            <canvas class="bg" id="grain"></canvas>
            <script src="assets/scripts/bg-script.js"></script>
        </div>

        <script src="assets/scripts/geographic.js" defer></script>

        <div id="waitlistModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="geographic" id="geoCodeContainer"></div>

                <form action="waitlist.php" method="post" id="waitlistForm">
                    <label id="email-text" for="email-input">Your Email:</label><br />
                    <input type="email" id="email-input" name="email" required autocomplete="email" />
                    <br /><br />

                    <label id="city-text" for="city-input">Your City:</label><br />
                    <input type="text" id="city-input" name="city" required />
                    <br /><br />

                    <input id="submitWaitlistBtn" type="submit" value="Join the Waitlist" />
                </form>
            </div>
        </div>
    </body>
</html>