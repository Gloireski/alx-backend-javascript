process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  var entree = process.stdin.read();

  if (entree) {
    process.stdout.write(`Your name is: ${entree}`);
  }
});

process.stdin.on('end', function() {
    process.stdout.write('This important software is now closing\n');
});
