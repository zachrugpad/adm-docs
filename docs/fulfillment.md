---
sidebar_position: 3
id: fulfillments
title: Fulfillments 
---

# Fulfillments

## Overview

The `Fulfillment` resource represents work that is completed as part of a marketplace order and can include one or more items. You can use the `Fulfillment` resource to manage fulfillments for marketplace orders. This resource is typically used in application that perform shipping-related actions, such as making tracking and delivery updates, or creating additional shipments as required for an order.

Each fulfillment supports a single tracking number. If you need to use multiple tracking numbers, then you should create separate fulfillments.

## Fulfillment resource

### Properties

#### `created_at`
- Type: `string`
- Format: ISO 8601
- Description: The date and time when the fulfillment was created.

#### `id`
- Type: `integer`
- Description: The ID of the fulfillment.

#### `line_items`
- Type: `array`
- Description: The order line items and the quantity of each which should be fulfilled. If this property is undefined, then all of the fulfillment order line items of the associated order are fulfilled.
  - **`sku`**: (string) The SKU of the order line item.
  - **`quantity`**: (integer) The quantity of the order line item, minimum of 1.

#### `order_id`
- Type: `string`
- Description: The ID of the order you are fulfilling.

#### `origin_address`
- Type: `object`
- Object Type: `OriginAddress`
- Description: The address of the fulfillment location.
  <details>
  <summary>
  See Origin Address Properties
  </summary>
  - **`address1`**: (string) The street address of the fulfillment location.
  - **`address2`**: (string) The second line of the address. Typically the number of the apartment, suite, or unit.
  - **`city`**: (string) The city of the fulfillment location.
  - **`country_code`**: (string) The two-letter country code (ISO 3166-1 alpha-2 format) of the fulfillment location.
  - **`province_code`**: (string) The province of the fulfillment location.
  - **`zip`**: (string) The zip code of the fulfillment location.
  </details>

#### `service`
- Type: `string`
- Description: A reference to the shipping service that is used for the fulfillment.

#### `shipment_status`
- Type: `string`
- Description: A reference to the fulfillment service that is used for the shipping method.
<details>
<summary>
Valid Values
</summary>
- pending: ADM has created the fulfillment and is waiting for the fulfillment service to transition it to 'open' or 'success'.
- open: The fulfillment has been acknowledged by the service and is in processing.
- success: The fulfillment was successful.
- cancelled: The fulfillment was cancelled.
- error: There was an error with the fulfillment request.
- failure: The fulfillment request failed.
</details>

#### `tracking_number`
- Type: `string`
- Description: A crucial element for logistics, the tracking number allows ADM and the customer to track the shipment's progress.

### Example

<details>
<summary>
Fulfillment.json
</summary>

```js
{
  "cancel_reason": null,
  "cancelled_at": null,
  "created_at": "2023-12-20T10:15:30Z", 
  "deliver_by": "2023-12-27T00:00:00Z", 
  "email": "customer@example.com",
  "fulfillments": [], 
  "id": 987654321, 
  "line_items": [
    {
      "quantity": 2,
      "sku": "ABC-123"
    },
    {
      "quantity": 1,
      "sku": "XYZ-789"
    }
  ],
  "refunds": [],
  "shipping_address": {
    "address1": "123 Main Street",
    "city": "Anytown",
    "province": "CA",
    "zip": "12345",
    "country": "United States",
    "country_code": "US",
    "first_name": "Jane",
    "last_name": "Doe"
  },
  "shipping_service": "Standard Ground", 
  "subtotal_price": "79.98",
  "total_discounts": "5.00",
  "total_price": "85.97", 
  "total_shipping_price": "10.99", 
  "total_tax": "0.00" 
}
```
</details>

## Fulfillment endpoint
Creates a fulfillment for one or more line items. The line items are associated with the same marketplace order

### Parameters

#### `line_items` <sup class="required">required</sup>
- Type: `array`
- Description: The order line items and the quantity of each which should be fulfilled.
  - **`sku`**: (string) The SKU of the order line item.
  - **`quantity`**: (integer) The quantity of the order line item, minimum of 1.

#### `order_id` <sup class="required">required</sup>
- Type: `string`
- Description: The ID of the order you are fulfilling.

#### `origin_address` <sup class="required">required</sup>
- Type: `object`
- Object Type: `OriginAddress`
- Description: The address of the fulfillment location.
  <details>
  <summary>
  See Origin Address Properties
  </summary>
  - **`address1`**: (string) The street address of the fulfillment location.
  - **`address2`**: (string) The second line of the address. Typically the number of the apartment, suite, or unit.
  - **`city`**: (string) The city of the fulfillment location.
  - **`country_code`**: (string) The two-letter country code (ISO 3166-1 alpha-2 format) of the fulfillment location.
  - **`province_code`**: (string) The province of the fulfillment location.
  - **`zip`**: (string) The zip code of the fulfillment location.
  </details>

#### `service` <sup class="required">required</sup>
- Type: `string`
- Description: A reference to the shipping service that is used for the fulfillment.

#### `tracking_number` <sup class="required">required</sup>
- Type: `string`
- Description: A crucial element for logistics, the tracking number allows ADM and the customer to track the shipment's progress.

### Example

<details>
<summary>
POST `fulfillments/create`
</summary>

```js
{
    "order_id": 156465,
    "line_items": [
        {
            "sku": "ABC-123",
            "quantity": 2
        },
        {
            "sku": "RPBF24-2211",
            "quantity": 1
        }
    ],
    "tracking_number": "1ZE356F8YW01937117"
}
{
  "line_items": [
    {
      "sku": "ABC-123",
      "quantity": 2
    }
  ],
  "order_id": "987654321",
  "origin_address": {
    "address1": "123 Main Street",
    "city": "Anytown",
    "province_code": "CA",
    "country_code": "US",
    "zip": "12345"
  },
  "service": "Standard Ground",
  "tracking_number": "1Z987Y65432109876" 
}

```
</details>

### HTTP Responses

Included are examples of both the request format and the various responses you might encounter. These examples help to clarify the expected data format and guide proper API usage.

This endpoint is a key component in the fulfillment process, enabling efficient and accurate updates on order processing and shipment.

#### 200 OK
**Description:** The fulfillment was successfully created.

<details>
<summary>
Response
</summary>

```js
{
    "line_items": [
        {
            "quantity": 1,
            "sku": "RPBF24-1941"
        }
    ],
    "order_id": 450789469,
    "status": "created",
    "tracking_number": "1ZE356F8YW01937117"
}
```

</details>

#### 400 Bad Request
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

#### 401 Unauthorized
**Description:** The request was not authorized.

<details>
<summary>
Response
</summary>

```js
{
  "error": "Unauthorized Request",
  "message": "The key provided is invalid."
}
```

</details>

#### 404 Not Found
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

#### 409 Conflict
**Description:** The specified item was already fulfilled.

<details>
<summary>
Response
</summary>

```js
{
  "error": "Item Already Fulfilled",
  "message": "The specified item was already fulfilled."
}
```

</details>

#### 500 Internal Server Error
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
