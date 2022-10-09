'use strict';
{

    class Panel {
        constructor(game) {
            this.game = game;
            this.el = document.createElement('li');
            this.el.classList.add('pressed');
            this.el.addEventListener('click', () => {
                this.check();
            })
        }

        check() {
            if (this.game.getCurrentNum() === parseInt(this.el.textContent, 10)) {
                this.el.classList.add('pressed');
                this.game.addCurrentNum();

                if (this.game.getCurrentNum() === this.game.getLevel() ** 2) {
                    level++;
                    this.game.reset();
                    new Game(level);
                }
            }
        }

        getEl() {
            return this.el;
        }

        activate(num) {
            this.el.classList.remove('pressed');
            this.el.textContent = num;
        }
    }


    class Board {
        constructor(game) {
            this.game = game;
            this.panels = [];
            for (let i = 0; i < this.game.getLevel() ** 2; i++) {
                this.panels.push(new Panel(this.game));
            }
            this.setup();
        }

        reset() {
            const board = document.getElementById('board');
            while (board.firstChild) {
                board.removeChild(board.firstChild);
            }
        }

        setup() {
            const board = document.getElementById('board');
            this.panels.forEach(panel => {
                board.appendChild(panel.getEl());
            })
        }

        activate() {
            const nums = [];
            for (let i = 0; i < this.game.getLevel() ** 2; i++) {
                nums.push(i);
            }
            this.panels.forEach(panel => {
                const num = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
                panel.activate(num);
            })
        }
    }

    class Game {
        constructor(level) {
            this.level = level;
            this.board = new Board(this);
            this.currentNum = undefined;
            this.startTime = undefined;
            this.timeoutId = undefined;

            const btn = document.getElementById('btn');
            btn.addEventListener('click', this.start);

            this.setup();
        }


        reset() {
            this.board.reset();
            const btn = document.getElementById('btn');
            clearTimeout(this.timeoutId);
            btn.removeEventListener('click', this.start);
        }

        setup() {
            const title = document.getElementById('title');
            title.textContent = 'LEVEL ' + (this.level - 1);

            const container = document.getElementById('container');
            const PANEL_WIDTH = 50;
            const PANEL_PADDING = 10;
            const PANNEL_GAP = 10;
            container.style.width = PANEL_WIDTH * this.level + PANEL_PADDING * 2 * (this.level - 1) + PANNEL_GAP * 2 + 10 * 2 + 'px';
        }

        getLevel() {
            return this.level;
        }

        getCurrentNum() {
            return this.currentNum;
        }

        addCurrentNum() {
            this.currentNum++;
        }

        getTimeoutId() {
            return this.timeoutId;
        }

        start = () => {
            if (typeof this.timeoutId !== undefined) {
                clearTimeout(this.timeoutId);
            }
            this.currentNum = 0;
            this.board.activate();
            this.startTime = Date.now();
            this.runTime();
        }

        runTime() {
            const timer = document.getElementById('timer');
            let time = (Date.now() - this.startTime) / 1000;
            this.timeoutId = setTimeout(() => {
                timer.textContent = time.toFixed(2);
                this.runTime();
            }, 10)
        }
    }

    let level = 2;
    let game = new Game(level);
}