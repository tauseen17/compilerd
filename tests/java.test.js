const { compileJava, runJava } = require('../language/java'); // Adjust path as needed

describe('Java Compiler', () => {
    test('should compile Java code', async () => {
        const javaFilePath = 'path/to/your/JavaFile.java'; // Update with your Java file path
        const result = await compileJava(javaFilePath);
        console.log('Compilation Result:', result);
        expect(result).toContain('compiled successfully'); // Modify as per your expected output
    });

    test('should run Java program', async () => {
        const className = 'ClassName'; // Update with your Java class name
        const result = await runJava(className);
        console.log('Java Program Output:', result);
        expect(result).toContain('expected output'); // Modify as per your expected output
    });
});
