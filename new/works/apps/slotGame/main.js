'use strict';
{
    const images = [
        'https://res.cloudinary.com/dj9rvtqmh/image/upload/v1638613845/flat-icons/cow_oeom0w.png', 'https://res.cloudinary.com/dj9rvtqmh/image/upload/v1638613845/flat-icons/fox_skmvrr.png', 'https://res.cloudinary.com/dj9rvtqmh/image/upload/v1638613845/flat-icons/giraffe_m5ab18.png'
    ];
    let count = 0;

    class Panel {
        constructor(index) {

            this.img1 = document.createElement('img');
            this.img2 = document.createElement('img');
            this.img3 = document.createElement('img');
            this.img4 = document.createElement('img');
            this.frame = document.createElement('div');
            this.item = document.createElement('li');
            this.stop = document.createElement('div');

            this.frame.classList.add('panel-frame');
            this.item.classList.add('panel-item');
            this.stop.classList.add('panel-btn');

            this.img1.src = images[index];
            this.img2.src = images[Math.floor(Math.random() * 3)];
            this.img3.src = images[Math.floor(Math.random() * 3)];
            this.img4.src = images[index];
            this.stop.textContent = 'STOP';
            this.frame.appendChild(this.img1);
            this.frame.appendChild(this.img2);
            this.frame.appendChild(this.img3);
            this.frame.appendChild(this.img4);
            this.item.appendChild(this.frame);
            this.item.appendChild(this.stop);
            ul.appendChild(this.item);

            spin.addEventListener('click', () => {
                this.spin();
            });

            this.stop.addEventListener('click', () => {
                this.stopped();
            })
        }

        shuffle() {
            const image = images[Math.floor(Math.random() * 3)];
            this.img1.src = image;
        }

        stopped() {
            let isPressed = false;
            if (isPressed) {
                this.stop.classList.add('pressed');
                return;
            }
            this.img1.classList.remove('active');
            this.img2.classList.remove('active');
            this.img3.classList.remove('active');
            this.img4.classList.remove('active');
            this.shuffle();
            isPressed != isPressed;
            count++;
            if (count === 3) {
                spin.classList.remove('pressed');
                count = 0;
            }
        }

        spin() {
            this.img1.classList.add('active');
            this.img2.classList.add('active');
            this.img3.classList.add('active');
            this.img4.classList.add('active');
            spin.classList.add('pressed');
        }

    }

    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const panel = document.createElement('div');
    const ul = document.createElement('ul');
    const spin = document.createElement('div');

    container.classList.add('container');
    h1.textContent = 'スロットゲーム';
    panel.classList.add('panel');
    spin.textContent = 'SPIN';
    spin.classList.add('spin-btn');

    container.appendChild(h1);
    container.appendChild(panel);
    container.appendChild(spin);
    panel.appendChild(ul);

    document.querySelector('body').appendChild(container);


    new Panel(0);
    new Panel(1);
    new Panel(2);
}