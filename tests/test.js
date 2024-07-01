const fs = require('fs');
const { compileJavaScript, runJavaScript } = require('../language/javascript');
const { compileJava, runJava } = require('../language/java'); // Import Java functions
const CircularJSON = require('circular-json');

describe('Compiler Tests', () => {
    
    describe('JavaScript Compiler', () => {
        test('should compile JavaScript code', async () => {
            try {
                const code = 'console.log("Hello, JavaScript!")';
                const result = await compileJavaScript(code);
                expect(result).toBeTruthy();
            } catch (error) {
                console.error('JavaScript Compile Error:', CircularJSON.stringify(error));
                throw error;
            }
        });

        test('should run JavaScript code', async () => {
            try {
                const code = 'console.log("Hello, JavaScript!")';
                const result = await runJavaScript(code);
                expect(result.trim()).toBe('Hello, JavaScript!');
            } catch (error) {
                console.error('JavaScript Run Error:', CircularJSON.stringify(error));
                throw error;
            }
        });
    });

    describe('Java Compiler and Runner', () => {
        test('should compile Java code', async () => {
            try {
                const javaFilePath = 'path/to/your/JavaFile.java'; // Update with your Java file path
                const result = await compileJava(javaFilePath);
                console.log('Java Compilation Result:', result);
                expect(result).toContain('compiled successfully'); // Modify as per your expected output
            } catch (error) {
                console.error('Java Compile Error:', CircularJSON.stringify(error));
                throw error;
            }
        });

        test('should run Java program', async () => {
            try {
                const className = 'ClassName'; // Update with your Java class name
                const result = await runJava(className);
                console.log('Java Program Output:', result);
                expect(result).toContain('expected output'); // Modify as per your expected output
            } catch (error) {
                console.error('Java Run Error:', CircularJSON.stringify(error));
                throw error;
            }
        });
    });
});
