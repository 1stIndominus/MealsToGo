import { mocks } from "./restaurants/mock"

const restaurantRequest = (lacotion = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject("not found")
    }
    resolve(mock);
  });
};

restaurantRequest()
  .then((res) => res)
  .catch((error) => error)