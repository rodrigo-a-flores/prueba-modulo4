const animales = (() => {    
    const getData = async () => {
        const response = await fetch("../../../animales.json");
        const { animales } = await response.json();

        return animales;
    };
    return {
        getData
    }
})();

export default animales