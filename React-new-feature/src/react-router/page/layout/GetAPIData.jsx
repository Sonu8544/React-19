export const getProductdata = async () => {
    try {
        const response = await fetch("https://fakestoreapiserver.reactbd.com/products")
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}