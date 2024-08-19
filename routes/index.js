require('dotenv').config();
var express = require('express');
var router = express.Router();


const HSNM_API_BASE_URL = process.env.HSNM_API_BASE_URL;
const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;


// Function to fetch customer information
const fetchCustomerInfo = async (userId) => {
    const endpoint = `${HSNM_API_BASE_URL}/userRead`;
    const data = { id: userId };
    const response = await axios.post(endpoint, data, {
        headers: {
            'Content-Type': 'application/json',
            'apikey': API_KEY,
            'apisecret': API_SECRET
        }
    });
    return response.data;
};

// Function to fetch subscription information
const fetchSubscriptionInfo = async (userId) => {
    const endpoint = `${HSNM_API_BASE_URL}/subscriptionRead`; // Adjust this endpoint as per the actual API documentation
    const data = { userId: userId };
    const response = await axios.post(endpoint, data, {
        headers: {
            'Content-Type': 'application/json',
            'apikey': API_KEY,
            'apisecret': API_SECRET
        }
    });
    return response.data;
};

// Update subscription status in HSNM here
const updateSubscriptionStatus = async () => {
    const endpoint = `${HSNM_API_BASE_URL}/subscriptionUpdate`;
    const data = { userId: userId, status: 'active' }; // Adjust data as per the actual API
    await axios.post(endpoint, data, {
        headers: {
            'Content-Type': 'application/json',
            'apikey': API_KEY,
            'apisecret': API_SECRET
        }
    });
};

// Endpoint to initiate payment and handle the entire process
router.post('/initiate-payment', async (req, res) => {
    const { userId, amount, currency } = req.body;
    try {
        const customerInfo = await fetchCustomerInfo(userId);
        const subscriptionInfo = await fetchSubscriptionInfo(userId);

        // Process payment with the payment gateway here
        // For demonstration, we'll assume the payment is successful
        const paymentSuccess = true;

        if (paymentSuccess) {
            await updateSubscriptionStatus();
            res.json({ status: 'Payment successful', customerInfo, subscriptionInfo });
        } else {
            res.json({ status: 'Payment failed' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
