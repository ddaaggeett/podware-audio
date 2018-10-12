import {
    listDevices,
    recordAudio,
} from './src'

console.clear()
console.log('\nPODWARE AUDIO')

if(process.argv[2] == undefined) {
    recordAudio(0)
}
else if(process.argv[2].toLowerCase() === 'list') {
    listDevices()
}
else {
    const devices = process.argv[2].split(',')
    devices.forEach(device => {
        recordAudio(device)
    })
}
