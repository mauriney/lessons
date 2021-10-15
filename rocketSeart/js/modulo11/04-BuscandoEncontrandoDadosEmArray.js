/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/



const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
            {
                title: "Teste",
                author: "Teste",
            },
        ],
    },
];

//Quantidade de categorias
const totalCategories = booksByCategory.length
console.log(totalCategories)

//numero de livros em cada categoria
for (let categoria of booksByCategory){
    console.log('Total de livros da categoria', categoria.category)//colocando a propriedade category do objeto booksByCategory na variável categoria
    console.log(categoria.books.length)//categoria é a variável, books o item do array
}

//Contar o número de autores
function contAuthors(){//função para contar autores
    let authors = []
    //dois laços, um para entrar na categoria e outro para os livros da categoria
    for (let category of booksByCategory){//laço para categoria
        for (let book of category.books){//laço para os livros da categoria
            if(authors.indexOf(book.author) == -1){//verifica se têm algum author dentro do elemento do array
                authors.push(book.author)//puxa o nome do autor no array booksByCategory
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

contAuthors();


//Mostrar livros do autor Auguto Cury
function booksOfAugustoCury(){//função para contar livros
    let books = []
    //dois laços, um para entrar na categoria e outro para os livros da categoria
    for (let category of booksByCategory){//laço para categoria
        for (let book of category.books){//laço para os livros da categoria
            if (book.author === 'Augusto Cury'){//condição para comparar o autor com o livro
                books.push(book.title)//pega o titulo do livro e coloca na array declarada no inicio da função
            }
        }
    }

    console.log("Livros: ", books)
}

booksOfAugustoCury();//retorna a função



// Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
function booksOfAuthor(author){//função para contar livros
    let books = []
    //dois laços, um para entrar na categoria e outro para os livros da categoria
    for (let category of booksByCategory){//laço para categoria
        for (let book of category.books){//laço para os livros da categoria
            if (book.author === author){//condição para comparar o autor com o livro
                books.push(book.title)//pega o titulo do livro e coloca na array declarada no inicio da função
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)//join inclui uma virgula e espaço pra otimizar o texto
}

booksOfAuthor('Stephen R. Covey');//retorna a função


/* Testes
//First part
console.log(`São ${booksByCategory.length} categorias`) //Conta quantas categorias têm no aray
console.log(`São ${booksByCategory[1].books.length} livros nesta categoria`)//conta o numero de livros em cada categorias


//Contar o número de autores
console.log(`São ${booksByCategory[1].books[3].author.length} autores nesta categoria`)//Erro! está contando numero de caracteres
*/