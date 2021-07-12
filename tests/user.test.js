import req from 'supertest';
import routes from '../src/routes';

let users;

beforeEach(() => {
  users = [{
    username: 'Testando',
    password: 123456,
    email: 'teste@teste.com',
    foto: 'apwejp1j23i112391jdanfasqweqwe'
  }, {
    username: 'Teste',
    password: 123456,
    email: 'testaando@ateste.com',
    foto: 'apwejp1j23i112391jdaasdwawdt'
  }];
});

describe('Listagem de usuários', () => {

  test('Deve ser possível listar todos usuários', async () => {
    // console.log(users[0]);
    await req(routes)
      .post('/users')
      .send(users[0]);

    const resGet = await req(routes)
      .get('/users');

    console.log(resGet.body);
    expect(resGet.body).toHaveLength(1);
  });
});

// describe('Cadastro de usuário', () => {

//   test('Deve ser possível adicionar um novo usuário', async () => {
//     const res = await req(routes)
//       .post('/users')
//       .send(users[0]);

//     expect(res.body).toMatchObject(users[0]);
//   });

//   test('O status code de um usuário criado deve ser 201', async () => {
//     await req(routes)
//       .post('/users')
//       .send(users[0]);

//     expect(201);
//   });
// });

// describe('Atualização de usuário', () => {

//   test('Deve ser possível atualizar dados do usuário', async () => {
//     await req(routes)
//       .post('/users')
//       .send(users[0]);

//     const updatedUser = {
//       ...users[0],
//       username: 'TesteUpdate'
//     };

//     const resUpdate = await req(routes)
//       .put('/users')
//       .send(updatedUser);

//     expect(resUpdate.body).toMatchObject(updatedUser);
//   });

//   test('O status code de uma atualização de dados do usuário deve ser 200', async () => {
//     await req(routes)
//       .post('/users')
//       .send(users[0]);

//     const updatedUser = {
//       ...users[0],
//       username: 'TesteUpdate'
//     };

//     await req(routes)
//       .put('/users')
//       .send(updatedUser);

//     expect(200);
//   });

//   test('O status code de uma atualização de dados de usuário inválido deve ser 400', async () => {
//     await req(routes)
//       .post('/users')
//       .send(users[0]);

//     const updatedUser = {
//       ...users[0],
//       id: 123
//     };

//     await req(routes)
//       .put('/users')
//       .send(updatedUser);

//     expect(400);
//   });
// });

// describe('Remoção de usuário', () => {

//   test('O status code de remoção de usuário inválido deve ser 400', async () => {
//     await req(routes)
//       .post('/users')
//       .send(users[0]);

//     const updatedUser = {
//       ...users[0],
//       id: 123
//     };

//     await req(routes)
//       .put('/users')
//       .send(updatedUser);


//     await req(routes)
//       .delete('/users')
//       .send(updatedUser);

//     expect(400);
//   });

//   test('O status code de remoção de usuário deve ser 204', async () => {
//     await req(routes)
//       .post('/users')
//       .send(users[0]);

//     await req(routes)
//       .delete('/users')
//       .send(users[0]);

//     expect(204);
//   });
// });
