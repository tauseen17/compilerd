const { exec } = require('child_process');

function compileJava(javaFilePath) {
    return new Promise((resolve, reject) => {
        // Command to compile Java code
        const command = `javac ${javaFilePath}`;

        // Execute the compilation command
        exec(command, (error, stdout, stderr) => {
            if (error) {
                // Compilation error, reject with stderr
                reject(stderr);
            } else {
                // Compilation successful, resolve with stdout
                resolve(stdout);
            }
        });
    });
}

function runJava(className) {
    return new Promise((resolve, reject) => {
        // Command to run Java program
        const command = `java ${className}`;

        // Execute the run command
        exec(command, (error, stdout, stderr) => {
            if (error) {
                // Runtime error, reject with stderr
                reject(stderr);
            } else {
                // Successful execution, resolve with stdout
                resolve(stdout);
            }
        });
    });
}

module.exports = { compileJava, runJava };
