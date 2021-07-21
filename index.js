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
                    border:1px solid #d3d3d3; 
                    background-color: ${color};
                }
            </style>
        </head>
        <body>

            <canvas class="myCanvas" width="970" height="500">
                Your browser does not support the HTML5 canvas tag.
            </canvas>

        </body>
        </html>
    `
}