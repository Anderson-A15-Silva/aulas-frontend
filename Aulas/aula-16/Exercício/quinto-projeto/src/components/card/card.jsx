import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./card.css";

export default function BasicCard({repositors}) {
    return (
      <Card className="cardBox" sx={{ minWidth: 75, backgroundColor: '#000', color: '#fff'}}>
        <CardContent  className='cardContent'>
            {/* Busca a imagem de perfil */}
            <img className='icon' src={repositors.owner.avatar_url} />
            {/* Busca o ID do usuário */}
            <p>ID: {repositors.owner.id}</p>
            {/* Busca o nome do usuário */}
            <p>Nome: {repositors.name}</p>
            {/* Busca a descrição do repositório do usuário */}
            <p>Descrição: {repositors.description ? repositors.description : 'Sem descrição'}</p>
            {/* Busca o repositório baseado em seu link (observável no NetWork ao lado do Console em um site) */}
            <a href={repositors.html_url} target="_blank" >Acessar repositório</a>
        </CardContent>
      </Card>
    );
  };