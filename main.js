// Aritmeticos: Processamento de dados de storage
const storageTotal = 5000; // KB
const storageUsado = 1250;
const espacoRestante = storageTotal - storageUsado;
const percentualUso = (storageUsado / storageTotal) * 100;
console.log("Total: ", storageTotal);
console.log("Usado: ", storageUsado);
console.log("Percentual Usado: %", percentualUso);

// Comparacao: Validação de integridade
const linkDigitado = "https://ufersa.edu.br";
const linkExistente = "https://ufersa.edu.br";

const eNovoLink = linkDigitado !== linkExistente;
const campoVazio = linkDigitado === "";