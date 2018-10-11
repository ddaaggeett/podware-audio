import { spawn, exec, spawnSync } from 'child_process'
import {
    audioExt,
    audioFile,
} from './fileConfigs.js'

export const listDevices = () => {
    exec('ffmpeg -f avfoundation -list_devices true -i ""', (err,stdout,stdin) => {
        if(err) {
            console.log('error listing devices')
            console.log(err)
        }
    })
}

export const recordAudio = (index) => {
    const newFile = audioFile + index + audioExt
    exec('ffmpeg -f avfoundation -i ":' + index + '" ' + newFile + ' -y', (err, stdout, stdin) => {
        if(err) {
            console.log('error recording audio ' + index)
            console.log(err)
        }
    })
}
