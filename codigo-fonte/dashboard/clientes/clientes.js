document.addEventListener('DOMContentLoaded', function () {
  const clientTypeSelect = document.getElementById('client-type');
  const fisicaFields = document.getElementById('fisica-fields');
  const juridicaFields = document.getElementById('juridica-fields');
  const form = document.getElementById('client-form');

  clientTypeSelect.addEventListener('change', function () {
    if (this.value === 'fisica') {
      fisicaFields.style.display = 'block';
      juridicaFields.style.display = 'none';
    } else {
      fisicaFields.style.display = 'none';
      juridicaFields.style.display = 'block';
    }
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const client = {
      type: clientTypeSelect.value,
      nomeCompleto: document.getElementById('nome-completo').value,
      dataNascimento: document.getElementById('data-nascimento').value,
      cpf: document.getElementById('cpf').value,
      razaoSocial: document.getElementById('razao-social').value,
      nomeFantasia: document.getElementById('nome-fantasia').value,
      cnpj: document.getElementById('cnpj').value,
      cep: document.getElementById('cep').value,
      logradouro: document.getElementById('logradouro').value,
      numero: document.getElementById('numero').value,
      complemento: document.getElementById('complemento').value,
      bairro: document.getElementById('bairro').value,
      cidade: document.getElementById('cidade').value,
      estado: document.getElementById('estado').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value
    };
    
    saveClient(client);
    renderClients();
    form.reset();
    fisicaFields.style.display = 'block';
    juridicaFields.style.display = 'none';
  });

  function saveClient(client) {
    let clients = localStorage.getItem('clients');
    if (!clients) {
      clients = [];
    } else {
      clients = JSON.parse(clients);
    }
    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients));
  }

  function renderClients() {
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const clientsTableBody = document.querySelector('#clients-table tbody');
    clientsTableBody.innerHTML = '';
    clients.forEach((client, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${client.type === 'fisica' ? client.nomeCompleto : client.razaoSocial}</td>
        <td>${client.email}</td>
        <td>${client.telefone}</td>
        <td>${client.type === 'fisica' ? 'Pessoa Física' : 'Pessoa Jurídica'}</td>
        <td><button class="edit" onclick="editClient(${index})">Editar</button><button class="delete" onclick="deleteClient(${index})">Excluir</button></td>
      `;
      clientsTableBody.appendChild(row);
    });
  }

  window.editClient = function (index) {
    const clients = JSON.parse(localStorage.getItem('clients'));
    const client = clients[index];
    document.getElementById('client-id').value = index;
    clientTypeSelect.value = client.type;
    if (client.type === 'fisica') {
      fisicaFields.style.display = 'block';
      juridicaFields.style.display = 'none';
      document.getElementById('nome-completo').value = client.nomeCompleto;
      document.getElementById('data-nascimento').value = client.dataNascimento;
      document.getElementById('cpf').value = client.cpf;
    } else {
      fisicaFields.style.display = 'none';
      juridicaFields.style.display = 'block';
      document.getElementById('razao-social').value = client.razaoSocial;
      document.getElementById('nome-fantasia').value = client.nomeFantasia;
      document.getElementById('cnpj').value = client.cnpj;
    }
    document.getElementById('cep').value = client.cep;
    document.getElementById('logradouro').value = client.logradouro;
    document.getElementById('numero').value = client.numero;
    document.getElementById('complemento').value = client.complemento;
    document.getElementById('bairro').value = client.bairro;
    document.getElementById('cidade').value = client.cidade;
    document.getElementById('estado').value = client.estado;
    document.getElementById('email').value = client.email;
    document.getElementById('telefone').value = client.telefone;
  };

  window.deleteClient = function (index) {
    let clients = JSON.parse(localStorage.getItem('clients'));
    clients.splice(index, 1);
    localStorage.setItem('clients', JSON.stringify(clients));
    renderClients();
  };

  renderClients();
});
