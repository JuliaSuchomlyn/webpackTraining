import * as $ from 'jquery'

function createAnalitics() {
    let counter = 0;
    let destroyed = false;

    const listner = () => counter++;

    $(document).on('click', listner);
    return {
        destroy() {
            $(document).off('click', listner);
            destroyed = true;
        },
        getClicks() {
            if (destroyed) {
                return `Analitics is destroyed. Total clicks = ${counter}`
            }
            return counter
        }
    }
}
window.analytics = createAnalitics()