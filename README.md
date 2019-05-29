# Hotel Management Data Generator

Data generator for FE2 final solo project (Overlook Hotel). The theme of the project is to create a hotel management tool interface.

## Data Model

**Users**

An array of users. Each user has:

```js
{
  id: [number],
  name: [string]
}
```

**Bookings**

Each booking record has:

```js
{
  userID: [number],
  date: [string],
  roomNumber: [number]
}
```

**Room Services**

Each room service record has:

```js
{
  userID: [number],
  food: [string],
  totalCost: [number]
}
```

**Rooms**

Each room has:

```js
{
  number: [number],
  roomType: [string],
  bidet: [boolean],
  bedSize: [string],
  numBeds: [number],
  costPerNight: [number]
}
```
