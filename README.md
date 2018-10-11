### podware-audio

    npm i

get list of available AV devices with

    npm start list

record preferred audio input devices, say `0 and 2` with the following

    npm start 0,2

otherwise, record with the default device

    npm start

note:
- make sure [FFMPEG](https://www.ffmpeg.org/) is already installed
