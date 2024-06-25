document.addEventListener('DOMContentLoaded', function () {
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  const clientDetails = document.getElementById('client-details');
  const emailTo = document.getElementById('email-to');
  const sendEmailButton = document.getElementById('send-email');
  const sendWhatsAppButton = document.getElementById('send-whatsapp');

  searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') {
      alert('Por favor, insira um termo de busca.');
      return;
    }

    const clients = JSON.parse(localStorage.getItem('clients')) || [];

    const client = clients.find(client => 
      client.nomeCompleto?.toLowerCase().includes(searchTerm) ||
      client.cpf?.toLowerCase().includes(searchTerm) ||
      client.razaoSocial?.toLowerCase().includes(searchTerm) ||
      clients.indexOf(client).toString() === searchTerm
    );

    if (client) {
      displayClientDetails(client);
    } else {
      clientDetails.innerHTML = '<p>Cliente não encontrado.</p>';
    }
  });

  function displayClientDetails(client) {
    clientDetails.innerHTML = `
      <p><strong>Nome:</strong> ${client.nomeCompleto || client.razaoSocial}</p>
      <p><strong>Email:</strong> ${client.email}</p>
      <p><strong>Telefone:</strong> ${client.telefone}</p>
      <p><strong>CPF/CNPJ:</strong> ${client.cpf || client.cnpj}</p>
    `;
    emailTo.value = client.email;
  }

  sendEmailButton.addEventListener('click', function () {
    const emailSubject = document.getElementById('email-subject').value;
    const emailBody = document.getElementById('email-body').value;
    const emailAttachments = document.getElementById('email-attachments').files;

    // Montando o corpo do email
    const mailtoLink = `mailto:${emailTo.value}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Abrindo o cliente de email padrão do usuário
    window.location.href = mailtoLink;
  });

  sendWhatsAppButton.addEventListener('click', function () {
    const emailBody = document.getElementById('email-body').value;
    const client = JSON.parse(localStorage.getItem('clients')).find(client => client.email === emailTo.value);

    if (client && client.telefone) {
      const whatsappLink = `https://wa.me/${client.telefone}?text=${encodeURIComponent(emailBody)}`;

      // Abrindo o WhatsApp Web ou app do WhatsApp com a mensagem pré-preenchida
      window.open(whatsappLink, '_blank');
    } else {
      alert('Número de telefone do cliente não encontrado.');
    }
  });
});
