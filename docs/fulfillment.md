---
sidebar_position: 3
id: create-fulfillment
title: Create a Fulfillment
---


Creates a fulfillment for an orders.

### Parameters

#### `line_items_by_fulfillment_order` <sup class="required">required</sup>
- Type: `array`
- Description: The fulfillment order line items that have to be fulfilled.
  - **`order_id`**: (integer) (required) The ID of the order you are fulfilling.
  - **`line_items`**: (array) (required) The fulfillment order line items and the quantity of each which should be fulfilled. If this property is undefined, then all of the fulfillment order line items of the associated fulfillment order are fulfilled.
    - **`sku`**: (integer) (required) The SKU of the order line item.
    - **`quantity`**: (integer) (required) The quantity of the order line item, minimum of 1.

#### `tracking_number` <sup class="required">required</sup>
- Type: `string`
- Description: The tracking number for the fulfillment.

**Note**: You can set only one tracking number and one tracking URL per fulfillment. If you send multiple shipments with one order, you must create separate fulfillments for each shipment.

<details>
<summary>
Request JSON
</summary>
```
{
    "order_id": 450789469,
    "line_items": [
      {
        "sku": "RPBF24-1941",
        "quantity": 1,
      }
    ],
    "tracking_number": "1ZE356F8YW01937117"
}
```

</details>

### Example Responses

#### 200 OK
**Description:** The fulfillment was successfully created.

<details>
<summary>
Response
</summary>
```
{
  "order_id": 450789469,
  "status": "created",
  "tracking_number": "1ZE356F8YW01937117",
  "created_at": "2024-04-30T12:00:00Z"
}
```

</details>

#### 400 Bad Request
**Description:** The request was invalid. An accompanying message will provide details about the error.

<details>
<summary>
Response
</summary>
```
{
  "error": "Invalid SKU or Quantity",
  "message": "One or more line items have an invalid SKU or quantity specified."
}
```

</details>

#### 404 Not Found
**Description:** The specified order ID does not exist.

<details>
<summary>
Response
</summary>
```
{
  "error": "Order Not Found",
  "message": "The order with the specified ID was not found."
}
```

</details>

#### 500 Internal Server Error
**Description:** An unexpected error occurred.

<details>
<summary>
Response
</summary>
```
{
  "error": "Server Error",
  "message": "An error occurred on our server. Please try again later."
}
```

</details>
