---
sidebar_position: 3
id: fulfillment-update
title: Fulfillment Update
---

# Fulfillment Update

This endpoint is crucial for partners as it facilitates the creation of a fulfillment record for specific orders. Utilizing this function, partners can effectively communicate back to ADM the completion of the order processing phase, including the shipping details for each line item within an order. This seamless communication helps ensure that all parties are updated on the progress and status of order fulfillment. This endpoint is designed to handle both complete and partial fulfillments, allowing for flexibility in order fulfillment strategies.

## Functionality

When an order is ready to be shipped, the `Create a Fulfillment` endpoint enables the registering of each package with its respective tracking details. This information is vital for maintaining transparency and allows ADM to update customers on their order status in real-time.

## Parameters and Use

To create a fulfillment, you must specify which line items in the order are being fulfilled, and provide a tracking number for the shipment. The endpoint requires detailed information about each line item, including the SKU and the quantity that is being shipped. This structured approach ensures precise tracking and handling of individual order components.

### Parameters

#### `line_items_by_fulfillment_order` <sup class="required">required</sup>
- Type: `array`
- Description: This array should contain detailed information about each item that is part of the fulfillment, ensuring that the correct items are shipped and tracked.
  - **`order_id`**: <sup class="required">required</sup> (integer) The ID of the order you are fulfilling.
  - **`line_items`**: <sup class="required">required</sup> (array) The fulfillment order line items and the quantity of each which should be fulfilled. If this property is undefined, then all of the fulfillment order line items of the associated fulfillment order are fulfilled.
    - **`sku`**: <sup class="required">required</sup> (string) The SKU of the order line item.
    - **`quantity`**: <sup class="required">required</sup> (integer) The quantity of the order line item, minimum of 1.

#### `tracking_number` <sup class="required">required</sup>
- Type: `string`
- Description: A crucial element for logistics, the tracking number allows ADM and the customer to track the shipment's progress.

:::note

You can set only one tracking number and one tracking URL per fulfillment. If you send multiple shipments with one order, you must create separate fulfillments for each shipment.

:::

### Responses

Success and error responses are clearly defined to provide feedback on the fulfillment creation process:
- **200 OK**: Indicates that the fulfillment was successfully created, with details of the created record.
- **400 Bad Request**: Returned when there are issues with the input data, such as an invalid SKU or quantity.
- **404 Not Found**: Occurs if the specified order ID does not exist, ensuring that fulfillments are only created for valid orders.
- **500 Internal Server Error**: Covers any unexpected errors on the server side, protecting against unforeseen issues.

<details>
<summary>
Example Request JSON
</summary>

```js
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

## Example Responses

Included are examples of both the request format and the various responses you might encounter. These examples help to clarify the expected data format and guide proper API usage.

This endpoint is a key component in the fulfillment process, enabling efficient and accurate updates on order processing and shipment.

### 200 OK
**Description:** The fulfillment was successfully created.

<details>
<summary>
Response
</summary>

```js
{
  "order_id": 450789469,
  "status": "created",
  "tracking_number": "1ZE356F8YW01937117",
  "created_at": "2024-04-30T12:00:00Z"
}
```

</details>

### 400 Bad Request
**Description:** The request was invalid. An accompanying message will provide details about the error.

<details>
<summary>
Response
</summary>

```js
{
  "error": "Invalid SKU or Quantity",
  "message": "One or more line items have an invalid SKU or quantity specified."
}
```

</details>

### 404 Not Found
**Description:** The specified order ID does not exist.

<details>
<summary>
Response
</summary>

```js
{
  "error": "Order Not Found",
  "message": "The order with the specified ID was not found."
}
```

</details>

### 500 Internal Server Error
**Description:** An unexpected error occurred.

<details>
<summary>
Response
</summary>

```js
{
  "error": "Server Error",
  "message": "An error occurred on our server. Please try again later."
}
```

</details>
