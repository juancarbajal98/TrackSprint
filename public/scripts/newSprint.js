console.log('entered ' + window.location.href);
const returnHome = () => {
    window.location.href = window.location.href.substr(0, window.location.href.length-10);
}