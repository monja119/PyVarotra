import Server from "../../lib/GlobalVariable"
const Server = Server.ServerTest
export default {
    fetchAllProducts: async function ()
    {
        const res = await fetch(`${Server}/products`);
        const result = await res.json();
        console.log(result);
        return result;
    },
    fetchProductsById: async function (productId: number)
    {
        const res = await fetch(`${Server}/products/${productId}`);
        const result = await res.json();
        return result;
    },
    fetchProductsBySearchQuery: async function (query: string)
    {
        const res = await fetch(`${Server}/products`);
        const result = await res.json();
        return result.filter((product) => product.title.toLowerCase().includes(query));
    },
};
