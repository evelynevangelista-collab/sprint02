import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Bem-vindo à Central de informações da Escola!");
});

app.get("/paginaInicial", (req, res) => {
  res.send("Bem-vindo à Central de informações da Escola!");
});

app.get("/status", (req, res) => {
  res.json({
    status: "online",
    sprint: 1
  });
});


app.get("/escola", (req, res) => {
  res.json([{
    nome: "SENAI",
    cidade: "Valinhos",
    tipo: "Técnico"
  }]);
});

app.get("/cursos", (req, res) => {
  res.json([
    {id: 1, nome: "Desenvolvimento de Sistemas"},
    {id: 2, nome: "Eletroeletrônica"},
    {id: 3, nome: "Mecânica"}
  ]);
});

app.get("/professor", (req, res) => {
  res.json([{
    nome: "Eduardo",
    disciplina: "Back-End"
  }]);
});

app.get("/ajuda", (req, res) => {
  const ajuda = {
    descricao: "Centro de ajuda para informações sobre a escola",
    rotas: [
      {rota: "/paginaInicial", descricao: "Página inicial da escola"},
      {rota: "/status", descricao: "Verifica o status do servidor"},
      {rota: "/escola", descricao: "Informações sobre a escola"},
      {rota: "/cursos", descricao: "Lista de cursos oferecidos"},
      {rota: "/professor", descricao: "Informações sobre o professor"}
    ]
  };
  res.json(ajuda);
});

app.get("/requisicao", (req, res) => {
  res.json([{
    metodo: req.method,
    caminho: req.path,
    mensagem: "Requisição recebida com sucesso!"
  }]);
});

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});