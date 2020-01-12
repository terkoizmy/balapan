let player = Number(process.argv[2])
let map = Number(process.argv[3])

const pemain = () => {
    let pemain = []
    for (var i = 0 ; i < player; i++){
        pemain.push(0)
    }
    return pemain
}

const board = () => {
    let jumlah  = pemain()
    let check = 0
    for (var j = 0 ; j < player ; j++){
        let tampung = ''
        jumlah[j] += dadu()
        for (var i = 1 ; i < map ; i++){
            if (i === map - 1){
                tampung +='|'
            } else {
                tampung +=' '
            }
        }
        if (jumlah[j] < map -1) {
            console.log(jalan(tampung,jumlah[j],j))
            check++   
        } else {
            console.log(jalan(tampung,jumlah[j],j))
            continue
        }

        if (check === player) {
            check = 0
            j = -1
            sleep(500)
            clearScreen()
        }
    }
}

const clearScreen = () => {
    // Un-comment this line if you have trouble with console.clear();
    // return process.stdout.write('\033c');
    console.clear();
}

const dadu = () => {
    var min=1; 
    var max=7;  
    var random = Math.floor(Math.random() * (+max - +min))
    return random
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
}
const jalan = (track,jumlah,namaPlayer)  => {
    let arr1 = track.split('')
    arr1[jumlah] = namaPlayer

    return arr1.join('')
    

       
}
board()
