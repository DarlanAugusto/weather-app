const API_KEY = "b453bbde30364980b54192451222206"; // chave da API weather

const fetchData = async (city) => {
    //
    // Função assincrona que retorna os dados da API .json
    //
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;

    const fetchResponse = await fetch(url); // faz uma requisição na url da api
    const data = await fetchResponse.json(); // pega o retorno JSON da api com as informações

    return data;

}

export default fetchData;