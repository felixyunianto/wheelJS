function Spinner() {
    var x = 1024;
    var y = 9999;

    var deg = Math.floor(Math.random() * (x - y) + y);
    document.querySelector('.box').style.transform = "rotate(" + deg + "deg)"
    document.querySelector('.image-results').src = './img/tanda_tanya.png'
}
document.querySelector('#image1').addEventListener('click', function () {
    document.querySelector('.image-results').src = './img/MacBook - 1.png'
})

document.querySelector('#image2').addEventListener('click', function () {
    document.querySelector('.image-results').src = './img/MacBook - 2.png'
})

document.querySelector('#image3').addEventListener('click', function () {
    alert('Spin lagi')
})

document.querySelector('#image4').addEventListener('click', function () {
    document.querySelector('.image-results').src = './img/MacBook - 3.png'
})

document.querySelector('#image5').addEventListener('click', function () {
    document.querySelector('.image-results').src = './img/MacBook - 4.png'
})

document.querySelector('#image6').addEventListener('click', function () {
    document.querySelector('.image-results').src = './img/MacBook - 5.png'
})

document.querySelector('#image7').addEventListener('click', function () {
    alert('Spin Lagi')
})

document.querySelector('#image8').addEventListener('click', function () {
    document.querySelector('.image-results').src = './img/MacBook - 6.png'
})