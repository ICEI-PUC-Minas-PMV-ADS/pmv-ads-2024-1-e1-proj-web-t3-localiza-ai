let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}
document.addEventListener('DOMContentLoaded', function () {
  const clientForm = document.getElementById('client-form');
  const clientType = document.getElementById('client-type');
  const fisicaFields = document.getElementById('fisica-fields');
  const juridicaFields = document.getElementById('juridica-fields');
  const clientId = document.getElementById('client-id');
  const nomeCompleto = document.getElementById('nome-completo');
  const dataNascimento = document.getElementById('data-nascimento');
  const cpf = document.getElementById('cpf');
  const razaoSocial = document.getElementById('razao-social');
  const nomeFantasia = document.getElementById('nome-fantasia');
  const cnpj = document.getElementById('cnpj');
  const inscricaoEstadual = document.getElementById('inscricao-estadual');
  const cep = document.getElementById('cep');
  const logradouro = document.getElementById('logradouro');
  const numero = document.getElementById('numero');
  const complemento = document.getElementById('complemento');
  const bairro = document.getElementById('bairro');
  const cidade = document.getElementById('cidade');
  const estado = document.getElementById('estado');
  const endereco = document.getElementById('endereco');
  const email = document.getElementById('email');
  const telefone = document.getElementById('telefone');
  const clientsTable = document.getElementById('clients-table').getElementsByTagName('tbody')[0];

  clientType.addEventListener('change', function () {
    if (clientType.value === 'fisica') {
      fisicaFields.style.display = 'block';
      juridicaFields.style.display = 'none';
    } else {
      fisicaFields.style.display = 'none';
      juridicaFields.style.display = 'block';
    }
  });

  cep.addEventListener('blur', function () {
    const cepValue = cep.value.replace(/\D/g, '');
    if (cepValue.length === 8) {
      fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            logradouro.value = data.logradouro;
            bairro.value = data.bairro;
            cidade.value = data.localidade;
            estado.value = data.uf;
          } else {
            alert('CEP não encontrado!');
          }
        })
        .catch(error => {
          alert('Erro ao buscar CEP!');
          console.error(error);
        });
    }
  });

  clientForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const id = clientId.value || new Date().getTime().toString();
    const type = clientType.value;
    const client = { id, type };

    if (type === 'fisica') {
      client.nomeCompleto = nomeCompleto.value;
      client.dataNascimento = dataNascimento.value;
      client.cpf = cpf.value;
    } else {
      client.razaoSocial = razaoSocial.value;
      client.nomeFantasia = nomeFantasia.value;
      client.cnpj = cnpj.value;
      client.inscricaoEstadual = inscricaoEstadual.value;
    }

    client.cep = cep.value;
    client.logradouro = logradouro.value;
    client.numero = numero.value;
    client.complemento = complemento.value;
    client.bairro = bairro.value;
    client.cidade = cidade.value;
    client.estado = estado.value;
    client.email = email.value;
    client.telefone = telefone.value;

    saveClient(client);
    clearForm();
    loadClients();
  });

  function saveClient(client) {
    const clients = getClients();
    const existingClientIndex = clients.findIndex(c => c.id === client.id);

    if (existingClientIndex > -1) {
      clients[existingClientIndex] = client;
    } else {
      clients.push(client);
    }

    localStorage.setItem('clients', JSON.stringify(clients));
  }

  function getClients() {
    const clients = localStorage.getItem('clients');
    return clients ? JSON.parse(clients) : [];
  }

  function loadClients() {
    clientsTable.innerHTML = '';

    const clients = getClients();
    clients.forEach(client => {
      const row = clientsTable.insertRow();
      row.insertCell(0).innerText = client.id;
      row.insertCell(1).innerText = client.type === 'fisica' ? client.nomeCompleto : client.razaoSocial;
      row.insertCell(2).innerText = client.email;
      row.insertCell(3).innerText = client.telefone;
      row.insertCell(4).innerText = client.type === 'fisica' ? 'Pessoa Física' : 'Pessoa Jurídica';

      const actionsCell = row.insertCell(5);
      const editButton = document.createElement('button');
      editButton.innerText = 'Editar';
      editButton.classList.add('edit');
      editButton.addEventListener('click', () => editClient(client));
      actionsCell.appendChild(editButton);

      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Excluir';
      deleteButton.classList.add('delete');
      deleteButton.addEventListener('click', () => deleteClient(client.id));
      actionsCell.appendChild(deleteButton);
    });
  }

  function editClient(client) {
    clientId.value = client.id;
    clientType.value = client.type;
    if (client.type === 'fisica') {
      fisicaFields.style.display = 'block';
      juridicaFields.style.display = 'none';
      nomeCompleto.value = client.nomeCompleto;
      dataNascimento.value = client.dataNascimento;
      cpf.value = client.cpf;
    } else {
      fisicaFields.style.display = 'none';
      juridicaFields.style.display = 'block';
      razaoSocial.value = client.razaoSocial;
      nomeFantasia.value = client.nomeFantasia;
      cnpj.value = client.cnpj;
      inscricaoEstadual.value = client.inscricaoEstadual;
    }
    cep.value = client.cep;
    logradouro.value = client.logradouro;
    numero.value = client.numero;
    complemento.value = client.complemento;
    bairro.value = client.bairro;
    cidade.value = client.cidade;
    estado.value = client.estado;
    email.value = client.email;
    telefone.value = client.telefone;
  }

  function deleteClient(id) {
    let clients = getClients();
    clients = clients.filter(client => client.id !== id);
    localStorage.setItem('clients', JSON.stringify(clients));
    loadClients();
  }

  function clearForm() {
    clientId.value = '';
    clientType.value = 'fisica';
    nomeCompleto.value = '';
    dataNascimento.value = '';
    cpf.value = '';
    razaoSocial.value = '';
    nomeFantasia.value = '';
    cnpj.value = '';
    inscricaoEstadual.value = '';
    cep.value = '';
    logradouro.value = '';
    numero.value = '';
    complemento.value = '';
    bairro.value = '';
    cidade.value = '';
    estado.value = '';
    email.value = '';
    telefone.value = '';
    fisicaFields.style.display = 'block';
    juridicaFields.style.display = 'none';
  }

  loadClients();
});
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const clientDetails = document.getElementById('client-details');
  const emailForm = document.getElementById('email-form');
  const emailTo = document.getElementById('email-to');
  const emailSubject = document.getElementById('email-subject');
  const emailBody = document.getElementById('email-body');
  const emailAttachments = document.getElementById('email-attachments');
  const sendEmailButton = document.getElementById('send-email');
  const sendWhatsAppButton = document.getElementById('send-whatsapp');

  function getClients() {
    const clients = localStorage.getItem('clients');
    return clients ? JSON.parse(clients) : [];
  }

  function searchClient() {
    const query = searchInput.value.toLowerCase();
    const clients = getClients();
    const client = clients.find(client =>
      client.nomeCompleto?.toLowerCase().includes(query) ||
      client.cpf?.toLowerCase().includes(query) ||
      client.id?.toLowerCase().includes(query)
    );

    if (client) {
      displayClientDetails(client);
    } else {
      clientDetails.innerHTML = '<p>Cliente não encontrado.</p>';
    }
  }

  function displayClientDetails(client) {
    clientDetails.innerHTML = `
      <p><strong>ID:</strong> ${client.id}</p>
      <p><strong>Nome:</strong> ${client.nomeCompleto || client.razaoSocial}</p>
      <p><strong>E-mail:</strong> ${client.email}</p>
      <p><strong>Telefone:</strong> ${client.telefone}</p>
    `;
    emailTo.value = client.email;
  }

  function sendEmail() {
    const to = emailTo.value;
    const subject = emailSubject.value;
    const body = emailBody.value;
    const attachments = emailAttachments.files;

    if (!to || !subject || !body) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Aqui você pode usar uma API de envio de e-mails, como SendGrid, Mailgun, etc.
    // Exemplo de chamada de API (substitua pelos detalhes da sua API):
    /*
    fetch('https://api.seu-servico-email.com/send', {
      method: 'POST',
      body: JSON.stringify({ to, subject, body, attachments }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => alert('E-mail enviado com sucesso!'))
    .catch(error => console.error('Erro ao enviar e-mail:', error));
    */
    alert('Funcionalidade de envio de e-mail não implementada nesta demo.');
  }

  function sendWhatsApp() {
    const to = emailTo.value;
    const body = emailBody.value;

    if (!to || !body) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const whatsappUrl = `https://wa.me/${to.replace(/\D/g, '')}?text=${encodeURIComponent(body)}`;
    window.open(whatsappUrl, '_blank');
  }

  searchButton.addEventListener('click', searchClient);
  sendEmailButton.addEventListener('click', sendEmail);
  sendWhatsAppButton.addEventListener('click', sendWhatsApp);
});
document.addEventListener('DOMContentLoaded', function () {
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".sidebarBtn");
  sidebarBtn.onclick = function() {
    sidebar.classList.toggle("active");
    if(sidebar.classList.contains("active")){
      sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
    }else
      sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }

  document.getElementById("profile-icon").addEventListener("click", function() {
    document.querySelector(".dropdown-menu").classList.toggle("show");
  });

  function setStatus(status) {
    console.log("Status alterado para:", status);
    document.querySelector(".dropdown-menu").classList.remove("show");
  }
});
