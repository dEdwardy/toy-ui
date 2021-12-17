const { spawn } = require('child_process')

const copyDir = (src, dist) => {
  const copy = spawn('cp', ['-r', , src, dist])
  copy.on('error', (err) => err)
  copy.on('exit', () => console.log('exit'))
}

copyDir('./packages', './docs')
