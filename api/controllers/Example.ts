import { Get } from "./../models/_Example";

/*
  This is a controller file, controller files call functions in the models and
  can gather data from different models to be returned from an endpoint.
*/

export const GetExample = async () => {
  let products;

  try {
    products = await Get();
  } catch (error) {
    console.error(error);
  }

  return products;
};
