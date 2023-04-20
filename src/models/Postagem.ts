import Tema from "./Tema";

interface Postagem {
    id: number,
    titulo: string,
    textro: string,
    date: string,
    tema?: Tema | null
}

export default Postagem;