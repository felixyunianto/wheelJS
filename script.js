function Spinner() {
    var x = 1024;
    var y = 9999;

    var deg = Math.floor(Math.random() * (x - y) + y);
    document.querySelector('.box').style.transform = "rotate(" + deg + "deg)"
}
document.querySelector('#image1').addEventListener('click', function () {
    alert('1')
})

document.querySelector('#image2').addEventListener('click', function () {
    alert('2')
})

document.querySelector('#image3').addEventListener('click', function () {
    alert('3')
})

document.querySelector('#image4').addEventListener('click', function () {
    alert('4')
})

document.querySelector('#image5').addEventListener('click', function () {
    alert('5')
})

document.querySelector('#image6').addEventListener('click', function () {
    alert('6')
})

document.querySelector('#image7').addEventListener('click', function () {
    alert('7')
})

document.querySelector('#image8').addEventListener('click', function () {
    alert('8')
})