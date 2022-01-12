let num = +prompt("Какое задание вывести?", 1);
switch (num) {
    case 1: {
        let x = +prompt('Введите количество столбов');
        let triangle = document.querySelector('.triangle');
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < i; j++) {
                triangle.innerHTML += '*';
            }
            triangle.innerHTML += "<br>";
        }
        break;
    }
    case 2: {
        let x = +prompt('Введите количество столбов');
        let star = "";
        let square = document.querySelector('.square');
        for (i = 1; i <= x; i++) {
            star += "*";
            for (j = i; j < x; j++) {
                square.innerHTML += '*';
            }
            square.innerHTML += star;
            square.innerHTML += '<br>'
        }
        break;
    }
    case 3: {
        let x = +prompt('Введите количество столбов');
        let triangleRev = document.querySelector('.triangle-rev');
        for (let i = x; i > 0; i--) {
            for (let j = i; j > 0; j--) {
                triangleRev.innerHTML += '*';
            }
            triangleRev.innerHTML += "<br>";
        }
        break;
    }
    default:
        break;
}