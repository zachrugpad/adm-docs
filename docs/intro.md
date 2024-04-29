---
title: ADM Marketplace API
sidebar_position: 1
---

# ADM Marketplace API

## Overview

Welcome to the American Digital Marketing (ADM) Marketplace API documentation. This API is designed to facilitate seamless integration between your fulfillment services and our order management systems, ensuring efficient communication and processing of e-commerce orders.

## Objects

### Orders

The Orders endpoint allows ADM to send comprehensive order details directly to your systems for efficient processing and fulfillment. This ensures that all necessary information, including quantities and customer shipping details, are transmitted securely and promptly.

#### How It Works

1. **Prepare Order Data:** ADM gathers all relevant order information, structured according to the format specified in the [Data Format](./orders) section.
2. **Send to Partners:** Using the provided API credentials, ADM securely submits the order data to the partner's system.
3. **Confirmation Receipt:** Upon successful submission, ADM receives a confirmation from the partner, acknowledging the receipt of the order.

For more detailed information on the data fields required and the submission process, refer to the [Order Submission Guide](./orders).

### Fulfillments

Once orders are processed and items begin to ship, partners will use the Fulfillments endpoint to transmit real-time notifications back to ADM. These updates provide detailed information about the shipping status of each line item in an order, helping ADM keep track of fulfillment progress.

#### Update Flow

1. **Shipping Notification:** When an item ships, partners send a fulfillment update to ADM containing the shipping details, including SKU information and tracking numbers.
2. **Receive Updates:** ADM receives these updates, allowing it to update the order status in its system and manage customer expectations accordingly.
3. **Handling Exceptions:** In cases of delays or issues, partners provide additional updates to assist ADM in managing customer service.

For a comprehensive guide on integrating and handling fulfillment updates, please see the [Fulfillment Updates Guide](./fulfillments).

## Getting Started

To begin integrating with the ADM Order Connector API, follow these steps:

1. **API Credentials:** Ensure you have received your API credentials from ADM. These are necessary for authenticating your requests.

2. **Read the Documentation:** Familiarize yourself with the API endpoints detailed in this documentation. Each section provides examples and required parameters to guide your integration process.

3. **Test Your Integration:** Utilize our sandbox environment to test your API calls. This ensures that your integration is working correctly before going live.

4. **Go Live:** Once testing is complete and you are satisfied with the integration, you can move to production and start automating your order fulfillment process.

## Support

Should you encounter any issues or have questions during your integration, our support team is available to assist you. Contact us at [support@adm.marketing.com](mailto:support@adm.marketing.com) for technical support and integration queries.

We look forward to supporting your e-commerce operations and helping you achieve streamlined order fulfillment with the ADM Order Connector API.
