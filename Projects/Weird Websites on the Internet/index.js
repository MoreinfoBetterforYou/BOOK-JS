let arr = [
    'https://pointerpointer.com',
    'https://theuselessweb.com',
    'https://smashthewalls.com',
    'https://corndog.io',
    'https://longdogechallenge.com',
    'https://zoomquilt.org',
    'https://beesbeesbees.com',
    'https://endless.horse',
    'https://cat-bounce.com/',
    'https://koalastothemax.com/'
]

document.getElementById('button').onclick = () => {
    let min = 0;
    let max = 9;
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    let randomWebsite = arr[randomNumber];
    window.location.href = randomWebsite;
}