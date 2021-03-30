/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Main from '../templates/Main'

export default props =>
    <Main icon="home" title="Início" subtitle="Sistema para atribuição de notas aos alunos">
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar a atribuição de notas desenvolvido em React</p>
    </Main>