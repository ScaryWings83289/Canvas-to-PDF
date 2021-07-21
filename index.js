module.exports = ({ color }) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Canvas</title>
            <style>
                .myCanvas {
                    margin: auto;
                    display: block;
                    position: absolute
                    left: 0;
                    right: 0;
                    border:1px solid #d3d3d3; 
                    background-color: ${color};
                }
            </style>
        </head>
        <body>

            <canvas class="myCanvas" width="500" height="400">
                Your browser does not support the HTML5 canvas tag.
            </canvas>

        </body>
        </html>
    `
}