/* Vídeo: https://www.pexels.com/es-es/video/2869107/ */
const video = document.getElementById('video')

addEventListener('visibilitychange', () => document.visibilityState === 'visible' ? video.play() : video.pause())