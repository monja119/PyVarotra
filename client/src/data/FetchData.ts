import Server from "../lib/GlobalVariable.ts"
const ApiServer = Server.ApiServer
export default {
    fetchAllProducts: async function ()
    {
        const res = await fetch(`${ApiServer}/produits/`);
        const result = await res.json();
        return result;
    },
    fetchProductsById: async function (productId: number)
    {
        const res = await fetch(`${ApiServer}/produits/${productId}`);
        const result = await res.json();
        return result;
    },
    fetchProductsBySearchQuery: async function (query: string)
    {
        const res = await fetch(`${ApiServer}/produits/`);
        const result = await res.json();
        return result.filter((product) => product.title.toLowerCase().includes(query));
    },
    fetchCategories: async function () 
    {
        const res = await fetch(`${ApiServer}/categories/`);
        const result = await res.json();
        return result;
    },
    fetchAllProductsByCategoryId: async function (categoryId: number) {
        const res = await fetch(`${ApiServer}/categories/${categoryId}`);
        const result = await res.json();
        return result;
    },
};
