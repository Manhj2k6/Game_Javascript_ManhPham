var ManhPham = prompt('Chọn Búa, Kéo hay Lá');

console.log("Người chới:", ManhPham)
var random = Math.ceil(Math.random() * 20)
if (random === 1 || random === 3 || random === 7 || random === 10 || random === 13 || random === 16 || random === 19) {
    random = 'Búa';
}else if (random === 2 || random === 5 || random === 8 || random === 11 || random === 14 || random === 17 || random === 20) {
    random = 'Kéo';
}else if (random === 4 || random === 6 || random === 9 || random === 12 || random === 15 || random === 18 || random === 21) {
    random = 'Lá'
}
console.log("Máy tính:", random)
if (random === "Búa" && ManhPham === "Búa" || random === "Lá" && ManhPham === "Lá" || random === "Kéo" && ManhPham === "Kéo") {
    console.log('Cả hai hòa')
} else if(random === "Búa" && ManhPham === "Lá" || random === "Kéo" && ManhPham === "Búa" || random === "Lá" && ManhPham === "Kéo") {
    console.log('Người chơi thắng')
} else {
    console.log('Máy tính thắng')
}