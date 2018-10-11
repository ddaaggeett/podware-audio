import { spawn, exec, spawnSync } from 'child_process'
import {
    audioExt,
    audioRecDir,
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
    const newFile = audioRecDir + Date.now() + '_' + index + audioExt
    exec('ffmpeg -f avfoundation -i ":' + index + '" ' + newFile, (err, stdout, stdin) => {
        if(err) {
            console.log('error recording audio ' + index)
            console.log(err)
        }
    })
    console.log('recording device ' + index)
}
