/** @type {HTMLCanvasElement} */

                        // change this to 'load' when done
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 800;

    class Game {
        constructor() { 
            this.enemies = [];
            this.#addNewEnemy();
            console.log(this.enemies)
        }

        update() {
            this.enemies.forEach(obj => obj.update());
        }

        draw() {
            this.enemies.forEach(obj => obj.draw());
        }

        //hashtag indicates private method, cant be called outside class
        #addNewEnemy() {
            this.enemies.push(new Enemy());
        }
    }

    class Enemy {
        constructor() {
            this.x = 100;
            this.y = 100;
            this.width = 100;
            this.height = 100;
        }

        update() {
            this.x--
        }

        draw() {
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }

    const game = new Game();

    let lastTime = 1
    function animate(timeStamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;

        game.update();
        game.draw();

        requestAnimationFrame(animate);
    }
    animate(0);
    
})