---
sidebar_position: 2
id: create-fulfillment
title: Create a Fulfillment
---


Creates a fulfillment for one or many fulfillment orders. The fulfillment orders are associated with the same order and are assigned to the same location.

### Parameters

#### `line_items_by_fulfillment_order`
- Type: `array`
- Required
- Description: The fulfillment order line items that have to be fulfilled.
  - **`order_id`**: (integer) (required) The ID of the fulfillment order.
  - **`line_items`**: (array) (required) The fulfillment order line items and the quantity of each which should be fulfilled. If this property is undefined, then all of the fulfillment order line items of the associated fulfillment order are fulfilled.
  - **`id`**: (integer) (required) The ID of the fulfillment order line item.
  - **`sku`**: (integer) (required) The ID of the fulfillment order line item.
  - **`quantity`**: (integer) (required) The quantity of the fulfillment order line item, minimum of 1.

<!-- #### `message`
- Type: `string`
- Description: A message associated with the fulfillment request. This message is only available if the associated fulfillment order is assigned to a third-party fulfillment service that has opted in to managing fulfillment orders. -->

<!-- #### `notify_customer`
- Type: `boolean`
- Description: Whether the customer should be notified. If set to true, then an email will be sent when the fulfillment is created or updated. The default value is false.

#### `origin_address`
- Type: `object`
- Description: The address of the fulfillment location, intended for tax purposes. A full address is required for tax providers to accurately calculate taxes. To retrieve a fulfillment location's address, use the `assigned_location` property on the FulfillmentOrder resource. -->

#### `tracking_info`
- Type: `object`
- Description: The tracking information for the fulfillment.
  <!-- - **`company`**: (string) The name of the tracking company. For tracking company names listed on the Shopify Shipping Carriers help page, Shopify will automatically update the fulfillment's shipment_status field during the fulfillment process. -->
  - **`tracking_number`**: (string) (required) The tracking number for the fulfillment. The tracking number will be clickable in the interface under certain conditions:
    - Tracking URL provided in the `url` field.
    - Shopify-known tracking company name specified in the company field. Shopify will build the tracking URL automatically based on the tracking number specified.
    - The tracking number has a Shopify-known format. Shopify will guess the tracking provider and build the tracking URL based on the tracking number format.
  - **`tracking_url`**: (string) (required) The URL to track the fulfillment. Displayed in the merchant's admin on the order page and in the shipping confirmation email, which can optionally be sent to the customer. Also displayed in the customer's order history when accounts are enabled.

**Note**: You can set only one tracking number and one tracking URL per fulfillment. If you send multiple shipments with one order, you must 



<details>
<summary>
Fulfillment JSON
</summary>
```jsx title="Fulfillment.JSON"
{
  "fulfillment": {
    "order_id": 450789469,
    "line_items": [
      {
        "id": 1071823177,
        "quantity": 1,
        "sku": "RPBF24-1941",
        "product_id": 910489600,
        "fulfillment_status": "fulfilled",
      }
    ],
    "tracking_number": "MS1562678",
    "tracking_url": "https://www.my-shipping-company.com?tracking_number=MS1562678",
  }
}
```

</details>