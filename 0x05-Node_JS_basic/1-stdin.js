/**
 * display the message Welcome to Holberton School,
 * what is your name? (followed by a new line)
 * program should display Your name is: INPUT
 * @author Belem Gloire BEKOUTOU <https://github.com/Gloireski>
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', function() {
    var entree = process.stdin.read();

    if (entree !== null) {
        process.stdout.write('Your name is: '+ entree);
    }
  });

process.stdin.on('end', function() {
    process.stdout.write('This important software is now closing \n');
  });
