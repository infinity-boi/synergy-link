// https://personalitypolice.com/api

// https://api.personalitypolice.com/v1/ -> /new_test, /check_test

import express from 'express';

const router = express.Router();

router.get("/new_test", processNewTest);
router.get("/check_test", checkTestResult);


const processNewTest = () => {
    // Process the new test request
};

const checkTestResult = ()=> {
    // Check the test result
}

export default router;