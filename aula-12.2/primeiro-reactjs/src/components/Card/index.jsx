import './index.css';

const Card = () => {
    return (
        <article>
            <form>
                <label for="email">Email: </label>
                <input type="email" name="email" placeholder="Digite o seu email..." className='cardInput'maxLength={40}/>
                <br />
                <label for="keyword">Senha: </label>
                <input type="keyword" name="keyword" placeholder="Digite a sua senha..." className='cardInput' minLength={6}/>
                <br />
                <br />
                <fieldset placeholder='Digite um comentário...'>
                    <legend>Comentário</legend>
                    <input type="text" className='comentario'/>
                </fieldset>
            </form>
        </article>
    )
}

export default Card;