import http from 'k6/http';
import { check, sleep } from 'k6';


const url = 'https://paciente-staging.lacreisaude.com.br/';

export let options = {
  // Configuração de cenário de carga
  vus: 5, // Número de usuários virtuais
  duration: '1m', // Tempo de execução do teste
};

export default function () {
  // Simula o acesso de um usuário ao site
  let res = http.get(url);

  // Verifica se a resposta do servidor foi bem-sucedida
  check(res, {
    'status é 200': (r) => r.status === 200,
  });

  // Atraso entre as requisições para simular o comportamento real de navegação
  sleep(1);
}