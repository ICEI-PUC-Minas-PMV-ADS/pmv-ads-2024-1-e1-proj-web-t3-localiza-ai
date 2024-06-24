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

    client.endereco = endereco.value;
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
    endereco.value = client.endereco;
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
    endereco.value = '';
    email.value = '';
    telefone.value = '';
    fisicaFields.style.display = 'block';
    juridicaFields.style.display = 'none';
  }

  loadClients();
});