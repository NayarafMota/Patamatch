const animaisIniciais = [
  {
    id: 1,
    nome: "Boby",
    idade: 3,
    tipo: "Cachorro",
    raca: "SRD",
    temperamento: "Amigável e carinhoso",
    historia: "Resgatado e muito dócil, adora companhia.",
    imagem: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    nome: "Simba",
    idade: 2,
    tipo: "Gato",
    raca: "Laranja",
    temperamento: "Brincalhão e curioso",
    historia: "Gosta de brincar e descansar perto de pessoas.",
    imagem: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    nome: "Luna",
    idade: 1,
    tipo: "Cachorro",
    raca: "Porte médio",
    temperamento: "Energética e dócil",
    historia: "Cheia de energia e pronta para um novo lar.",
    imagem: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    nome: "Mia",
    idade: 4,
    tipo: "Gato",
    raca: "Rajada",
    temperamento: "Calma e companheira",
    historia: "Ama carinho e ambientes tranquilos.",
    imagem: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    nome: "Snow",
    idade: 1,
    tipo: "Coelho",
    raca: "Branco",
    temperamento: "Fofo e tranquilo",
    historia: "Adora cenoura e carinho.",
    imagem: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    nome: "Pipoca",
    idade: 2,
    tipo: "Coelho",
    raca: "Mini Lop",
    temperamento: "Curioso e dócil",
    historia: "Muito calmo e sociável.",
    imagem: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    nome: "Blue",
    idade: 1,
    tipo: "Passarinho",
    raca: "Calopsita",
    temperamento: "Animado",
    historia: "Adora cantar e interagir.",
    imagem: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    nome: "Sol",
    idade: 2,
    tipo: "Passarinho",
    raca: "Canário",
    temperamento: "Calmo",
    historia: "Canta todas as manhãs.",
    imagem: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=900&q=80"
  }
];

let animais = JSON.parse(localStorage.getItem("patamatch_animais")) || animaisIniciais;
let usuarioLogado = JSON.parse(localStorage.getItem("patamatch_usuario")) || null;
let animalSelecionado = null;

const container = document.getElementById("animaisContainer");
const botoesFiltro = document.querySelectorAll(".filtro-btn");

const abrirLogin = document.getElementById("abrirLogin");
const abrirCadastroNav = document.getElementById("abrirCadastroNav");
const logoutBtn = document.getElementById("logoutBtn");

const loginModal = document.getElementById("loginModal");
const cadastroModal = document.getElementById("cadastroModal");
const modal = document.getElementById("modal");

const fecharLoginModal = document.getElementById("fecharLoginModal");
const fecharCadastroModal = document.getElementById("fecharCadastroModal");
const fecharModal = document.getElementById("fecharModal");

const formLogin = document.getElementById("formLogin");
const loginSucesso = document.getElementById("loginSucesso");
const usuarioLogadoBox = document.getElementById("usuarioLogadoBox");

const formCadastroAnimal = document.getElementById("formCadastroAnimal");
const cadastroSucesso = document.getElementById("cadastroSucesso");

const modalTexto = document.getElementById("modalTexto");
const formInteresse = document.getElementById("formInteresse");
const mensagemSucesso = document.getElementById("mensagemSucesso");

function salvarAnimais() {
  localStorage.setItem("patamatch_animais", JSON.stringify(animais));
}

function salvarUsuario() {
  if (usuarioLogado) {
    localStorage.setItem("patamatch_usuario", JSON.stringify(usuarioLogado));
  } else {
    localStorage.removeItem("patamatch_usuario");
  }
}

function renderAnimais(lista) {
  container.innerHTML = "";

  lista.forEach((animal) => {
    const card = document.createElement("div");
    card.className = "animal-card";

    card.innerHTML = `
      <img src="${animal.imagem}" alt="${animal.nome}" class="animal-img">
      <div class="animal-content">
        <h3>${animal.nome}</h3>
        <span class="tag">${animal.tipo}</span>
        <span class="tag">${animal.raca}</span>
        <p class="animal-info"><strong>Idade:</strong> ${animal.idade} ano(s)</p>
        <p class="animal-info"><strong>Temperamento:</strong> ${animal.temperamento}</p>
        <p class="animal-info">${animal.historia}</p>
        <button class="btn btn-primary" data-id="${animal.id}">Tenho interesse</button>
      </div>
    `;

    container.appendChild(card);
  });

  const botoesInteresse = document.querySelectorAll("[data-id]");
  botoesInteresse.forEach((botao) => {
    botao.addEventListener("click", () => abrirModalInteresse(Number(botao.dataset.id)));
  });
}

function abrirLoginModalFuncao() {
  loginModal.classList.remove("hidden");
}

function fecharLoginModalFuncao() {
  loginModal.classList.add("hidden");
}

function abrirCadastroModalFuncao() {
  if (!usuarioLogado) {
    alert("Você precisa fazer login primeiro.");
    loginModal.classList.remove("hidden");
    return;
  }

  if (usuarioLogado.tipo !== "Doador") {
    alert("Apenas usuários do tipo doador podem cadastrar animais.");
    return;
  }

  cadastroModal.classList.remove("hidden");
}

function fecharCadastroModalFuncao() {
  cadastroModal.classList.add("hidden");
}

function abrirModalInteresse(id) {
  if (!usuarioLogado) {
    alert("Você precisa fazer login para demonstrar interesse em adoção.");
    loginModal.classList.remove("hidden");
    return;
  }

  if (usuarioLogado.tipo !== "Adotante") {
    alert("Apenas usuários do tipo adotante podem demonstrar interesse em adoção.");
    return;
  }

  animalSelecionado = animais.find((animal) => animal.id === id);
  if (!animalSelecionado) return;

  modalTexto.textContent = `Você demonstrou interesse em adotar ${animalSelecionado.nome}. Preencha seus dados abaixo.`;
  document.getElementById("nomeUsuario").value = usuarioLogado.nome;
  document.getElementById("emailUsuario").value = "";
  document.getElementById("mensagemUsuario").value = "";
  mensagemSucesso.classList.add("hidden");
  formInteresse.classList.remove("hidden");
  modal.classList.remove("hidden");
}

function fecharModalFuncao() {
  modal.classList.add("hidden");
}

function atualizarPermissoes() {
  if (!usuarioLogado) {
    usuarioLogadoBox.classList.add("hidden");
    abrirLogin.classList.remove("hidden");
    logoutBtn.classList.add("hidden");
    return;
  }

  usuarioLogadoBox.classList.remove("hidden");
  usuarioLogadoBox.textContent = `Usuário logado: ${usuarioLogado.nome} • Perfil: ${usuarioLogado.tipo}`;
  abrirLogin.classList.add("hidden");
  logoutBtn.classList.remove("hidden");
}

function logout() {
  usuarioLogado = null;
  salvarUsuario();
  atualizarPermissoes();
  alert("Você saiu do sistema.");
}

botoesFiltro.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoesFiltro.forEach((b) => b.classList.remove("active"));
    botao.classList.add("active");

    const filtro = botao.dataset.filtro;

    if (filtro === "todos") {
      renderAnimais(animais);
    } else {
      const filtrados = animais.filter((animal) => animal.tipo === filtro);
      renderAnimais(filtrados);
    }
  });
});

abrirLogin.addEventListener("click", abrirLoginModalFuncao);

abrirCadastroNav.addEventListener("click", (e) => {
  e.preventDefault();
  abrirCadastroModalFuncao();
});

logoutBtn.addEventListener("click", logout);

fecharLoginModal.addEventListener("click", fecharLoginModalFuncao);
fecharCadastroModal.addEventListener("click", fecharCadastroModalFuncao);
fecharModal.addEventListener("click", fecharModalFuncao);

loginModal.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    fecharLoginModalFuncao();
  }
});

cadastroModal.addEventListener("click", (e) => {
  if (e.target === cadastroModal) {
    fecharCadastroModalFuncao();
  }
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    fecharModalFuncao();
  }
});

formLogin.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("loginNome").value.trim();
  const tipo = document.getElementById("loginTipo").value;

  if (!nome || !tipo) return;

  usuarioLogado = { nome, tipo };
  salvarUsuario();

  loginSucesso.classList.remove("hidden");
  loginSucesso.textContent = `Login realizado com sucesso como ${tipo}.`;

  atualizarPermissoes();
  formLogin.reset();

  setTimeout(() => {
    loginSucesso.classList.add("hidden");
    fecharLoginModalFuncao();
  }, 800);
});

formCadastroAnimal.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (!usuarioLogado || usuarioLogado.tipo !== "Doador") {
    alert("Apenas usuários do tipo doador podem cadastrar animais.");
    return;
  }

  const nome = document.getElementById("animalNome").value.trim();
  const idade = Number(document.getElementById("animalIdade").value);
  const tipo = document.getElementById("animalTipo").value;
  const raca = document.getElementById("animalRaca").value.trim();
  const temperamento = document.getElementById("animalTemperamento").value.trim();
  const imagem = document.getElementById("animalImagem").value.trim();
  const historia = document.getElementById("animalHistoria").value.trim();

  if (!nome || !idade || !tipo || !raca || !temperamento || !imagem || !historia) {
    return;
  }

  const novoAnimal = {
    id: animais.length ? Math.max(...animais.map(a => a.id)) + 1 : 1,
    nome,
    idade,
    tipo,
    raca,
    temperamento,
    historia,
    imagem
  };

  animais.push(novoAnimal);
  salvarAnimais();
  renderAnimais(animais);

  formCadastroAnimal.reset();
  cadastroSucesso.classList.remove("hidden");
  cadastroSucesso.textContent = `${nome} foi cadastrado com sucesso.`;

  setTimeout(() => {
    cadastroSucesso.classList.add("hidden");
    fecharCadastroModalFuncao();
  }, 1000);
});

formInteresse.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nomeUsuario").value.trim();
  const email = document.getElementById("emailUsuario").value.trim();

  if (!nome || !email || !animalSelecionado) return;

  formInteresse.classList.add("hidden");
  mensagemSucesso.classList.remove("hidden");
  mensagemSucesso.textContent = `Obrigada, ${nome}. Seu interesse em ${animalSelecionado.nome} foi enviado com sucesso.`;

  setTimeout(() => {
    mensagemSucesso.classList.add("hidden");
    formInteresse.classList.remove("hidden");
    fecharModalFuncao();
  }, 1800);
});

renderAnimais(animais);
atualizarPermissoes();