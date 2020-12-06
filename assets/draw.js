
        var r = 2;
        var posX = 200,
        posY = 200;

        var prevPosY = 200;
        var prevPosX = 200;

        let words = [1, 2, 3, 4];

        function setup() {
            let canvas = createCanvas(windowWidth, windowHeight);
            canvas.parent('p5Canvas');
            strokeWeight(3);
        }

        function draw() {

            frameRate(15);
            r = random(words);
            //up
            if (r == 1) {
                posY+=10;
            }
            //down
            if (r == 2) {
                posY-=10;
            }
            //left
            if (r == 3) {
                posX-=10;
            }
            //right
            if (r == 4) {
                posX+=10;
            }
            line(prevPosX,prevPosY,posX,posY);
            prevPosX = posX;
            prevPosY = posY;
        }
