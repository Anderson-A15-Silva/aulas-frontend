import './home.css';
import Get from '../components/buttons/get/get';
import Create from '../components/buttons/create/create';
import Update from '../components/buttons/update/update';
import Delete from '../components/buttons/delete/delete';
import List from '../components/buttons/list/list';

function Home() {
    return ( 
        <>
        <p className='textHome'>A sigla API deriva da expressão inglesa Application
        Programming Interface, que traduzida para o 
        português significa: interface de programação de 
        aplicação. Ela nada mais é do que um conjunto de normas entre 
        ambos os sistemas para facilitar a comunicação entre 
        o usuário e o software. A API funciona como uma espécie de “mensageira”, 
        que recebe requisições de um cliente e transmite até 
        um servidor, onde será processada e devolvida.</p>
        <Get name='buttonHome' title='Pegando recursos' />
        <Create name='buttonHome' title='Criando recursos' />
        <Update name='buttonHome' title='Atualizando recursos' />
        <Delete name='buttonHome' title='Deletando recursos' />
        <List name='buttonHome' title='Listando recursos' />
        </>
    )
}

export default Home;