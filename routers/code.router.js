const express = require('express');
const router = express.Router();
const { respond } = require('../loader.js').helpers;
const { compileJavaScript, runJavaScript } = require('../languages/javascript');
const { compileJava, runJava } = require('../languages/java'); // Import Java functions

router.post('/compile', async (req, res) => {
    const { code, language } = req.body;
    
    try {
        let result;
        switch (language) {
            case 'javascript':
                result = await compileJavaScript(code);
                break;
            case 'java':
                // Assuming compileJava function exists and compiles Java code
                result = await compileJava(code);
                break;
            default:
                return respond(res, 400, { message: 'Unsupported language' });
        }
        return respond(res, 200, { result });
    } catch (error) {
        return respond(res, 500, { message: error.message });
    }
});

router.post('/run', async (req, res) => {
    const { code, language } = req.body;
    
    try {
        let result;
        switch (language) {
            case 'javascript':
                result = await runJavaScript(code);
                break;
            case 'java':
                // Assuming runJava function exists and runs Java code
                result = await runJava(code);
                break;
            default:
                return respond(res, 400, { message: 'Unsupported language' });
        }
        return respond(res, 200, { result });
    } catch (error) {
        return respond(res, 500, { message: error.message });
    }
});

module.exports = router;
