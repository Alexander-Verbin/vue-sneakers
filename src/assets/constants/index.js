import axios from "axios";

export const CONSTANTS = Object.freeze({
  BASE_URL: "https://ccd135b3f5aa4dbf.mokky.dev",
  ROUTE_ITEMS: "/items",
  SELECT_VALUE_NAME: "name",
  SELECT_VALUE_PRICE_UP: "price",
  SELECT_VALUE_PRICE_DOWN: "-price",
})

export const fetchItems = async (items, filters) => {
    try {
      const params = {
        sortBy: filters.sortBy,
      }
      if (filters.searchQuery) {
        params.title = `*${filters.searchQuery}*`;
      }
      const { data } = await axios.get(
        `${CONSTANTS.BASE_URL + CONSTANTS.ROUTE_ITEMS}`,
        {params}
        );

      items.value = data;
  }
  catch (error) {
    console.error(error);
  }
}
