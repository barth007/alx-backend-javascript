const { spawn } = require('child_process');

// Example: spawning a child process to list files in the current directory
const ls = spawn('ls', ['-l', '-a']); // 'ls -l -a' command

ls.stdout.on('data', (me) => {
  console.log(`stdout: ${me}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

