window.addEventListener('load', function () {
    let images = this.document.getElementsByTagName('img');
    let sources = this.document.getElementsByTagName('source');


    function changeImageSize_px_to_rem(tags) {
        // change HTML Collection to array
        tags = Array.prototype.slice.call(tags);

        tags.forEach(image => {
            if (image.classList.contains('exception')) { return; }

            // Attention!! you need to set 1rem = 10px
            let width_px = image.naturalWidth;
            let width_rem = width_px / 10;
            image.setAttribute('style', `width: ${width_rem}rem`);
        });
    }

    function init() {
        changeImageSize_px_to_rem(images);
        changeImageSize_px_to_rem(sources);
    }

    init();

    this.window.addEventListener('resize', init);
})

window.addEventListener('DOMContentLoaded', function () {
    // TO DO : function
    let exceptions = [];
    const fv_img_data = this.document.querySelectorAll('.main_visual img');
    except_images(fv_img_data);

    const plan_slider_content_img = this.document.querySelectorAll('.plan_slider_content img');
    except_images(plan_slider_content_img);
    exceptions.forEach(exception => exception.classList.add('exception'));

    function except_images(tags) {
        // change HTML Collection to array
        tags = Array.prototype.slice.call(tags);
        exceptions.push(...tags);
    }
})