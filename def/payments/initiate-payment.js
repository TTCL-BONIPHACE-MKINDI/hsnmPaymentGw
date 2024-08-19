
/**
 * @swagger
 * /initiate-payment:
 *   post:
 *     summary: Initiate a payment and handle the entire process
 *     description: This endpoint initiates a payment, fetches customer and subscription information, processes the payment, and updates the subscription status.
 *     tags:
 *       - Payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               amount:
 *                 type: number
 *               currency:
 *                 type: string
 *     responses:
 *       200:
 *         description: Payment successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 customerInfo:
 *                   type: object
 *                 subscriptionInfo:
 *                   type: object
 *       500:
 *         description: Server error
 */