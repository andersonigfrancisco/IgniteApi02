import fastify from "fastify";

const app = fastify();

app.get('/teste', () => {
  return 'Ola, Mundo! Anderson'
})



app.listen({
  port: 3333,

}).then(() => {
  console.log("Infor=>", "HTTP server Running")
})