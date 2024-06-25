# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na internet;
- Navegador da internet - Chrome, Firefox ou Edge;
- Conectividade de internet para acesso à aplicação.

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

| CASO DE TESTE | `CT-01 – CADASTRO DE CLIENTES` |
| :----------: | :---------- |
| Requisitos Associados | RF-01 - A aplicação deve permitir ao usuário selecionar se o usuário é pessoa física ou pessoa jurídica. |
| Objetivo do Teste   | Verificar se o usuário consegue selecionar qual o tipo de cliente e se as informações mudam para cadastro |
| Passos | 1) Acessar o navegador <br> 2) Informar a URL [Localiza.Ai](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-localiza-ai/)<br> 3) Dentro da dashboard <br> 4) Clicar em "Clientes" |
|  Critérios de Êxito | Após a seleção do usuário, os dados de cadastro alternam conforme cadastro |
|  Responsável | Lucas de Araújo |


[Inserir aqui as evidências de teste que podem ser apresentadas por print de telas ou por .gif de execução de teste]

| CASO DE TESTE | `CT-02 – EDIÇÃO DE CADASTRO` |
| :----------: | :---------- |
| Requisitos Associados | RF-04 - A aplicação deve permitir ao usuário editar o cliente criado para quaisquer alterações. |
| Objetivo do Teste   | Verificar se o usuário consegue editar as informações inseridas e salvas no site |
| Passos | 1) Acessar o navegador <br> 2) Informar a URL [Localiza.Ai](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-localiza-ai/)<br> 3) Na lista de Clientes <br> 4) Clicar em "Editar" |
|  Critérios de Êxito | Após o usuário clicar em editar, as informações são liberadas para editar |
|  Responsável | Lucas de Araújo |


[Inserir aqui as evidências de teste que podem ser apresentadas por print de telas ou por .gif de execução de teste]

| CASO DE TESTE | `CT-03 – EXCLUSÃO DE CADASTRO` |
| :----------: | :---------- |
| Requisitos Associados | RF-05 - A aplicação deve permitir ao usuário apagar o cliente cadastrado. |
| Objetivo do Teste   | Verificar se o usuário consegue apagar o cadastro do cliente no site |
| Passos | 1) Acessar o navegador <br> 2) Informar a URL [Localiza.Ai](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-localiza-ai/)<br> 3) Na lista de Clientes <br> 4) Clicar em "Excluir" |
|  Critérios de Êxito | Após o usuário clicar em excluir, o cliente será removido da lista |
|  Responsável | Lucas de Araújo |

[Inserir aqui as evidências de teste que podem ser apresentadas por print de telas ou por .gif de execução de teste]

| CASO DE TESTE | `CT-04 – ENVIAR MENSAGEM PARA CLIENTES` |
| :----------: | :---------- |
| Requisitos Associados | RF-01 - A aplicação deve permitir ao usuário visualizar o histórico de mensagens enviadas/recebidas com os clientes. |
| Objetivo do Teste   | Verificar se o usuário consegue visualizar o histórico de mensagens e enviar uma nova mensagem |
| Passos | 1) Acessar o navegador <br> 2) Informar a URL [Localiza.Ai](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-localiza-ai/)<br> 3) No menu de Caixa de Entrada <br> 4) Clicar em "Nova mensagem" |
|  Critérios de Êxito | Após o usuário clicar em nova mensagem, o usuário será direcionado para a página de nova mensagem |
|  Responsável | Lucas de Araújo |


[Inserir aqui as evidências de teste que podem ser apresentadas por print de telas ou por .gif de execução de teste]

| CASO DE TESTE | `CT-05 – ENVIO DE MENSAGEW - BUSCA DO CLIENTE` |
| :----------: | :---------- |
| Requisitos Associados | RF-02 - A aplicação deve permitir ao usuário buscar o cliente já cadastrado por ID, CPF ou Nome e preencher os campos de comunicação. |
| Objetivo do Teste   | Verificar se o usuário consegue buscar o cliente por meio do ID de cadastro, nome ou CPF para enviar uma nova mensagem |
| Passos | 1) Acessar o navegador <br> 2) Informar a URL [Localiza.Ai](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-localiza-ai/)<br> 3) Na página de nova mensagem <br> 4) Digitar o filtro desejado e "Buscar" |
|  Critérios de Êxito | Após o usuário inserir a informação de cadastro como ID, CPF, ou Nome, o sistema buscará as informações básicas de comunicação e preencherá os campos, deixando apenas o assunto, mensagem e anexo se desejável. |
|  Responsável | Lucas de Araújo |


[Inserir aqui as evidências de teste que podem ser apresentadas por print de telas ou por .gif de execução de teste]

| CASO DE TESTE | `CT-06 – ENVIO DE MENSAGEW - ANEXO DE ARQUIVO` |
| :----------: | :---------- |
| Requisitos Associados | RF-03 - A aplicação deve permitir ao usuário anexar arquivos para enviar. |
| Objetivo do Teste   | Verificar se o usuário consegue visualizar arquivos no seu computador e anexar para envio |
| Passos | 1) Acessar o navegador <br> 2) Informar a URL [Localiza.Ai](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-localiza-ai/)<br> 3) Na página de nova mensagem <br> 4) Clicar em "anexar arquivo" |
|  Critérios de Êxito | Após o usuário clicar em "anexar arquivo", o sistema carregará o item selecionado para upload/envio de e-mail ou mensagem. |
|  Responsável | Lucas de Araújo |


[Inserir aqui as evidências de teste que podem ser apresentadas por print de telas ou por .gif de execução de teste]

| CASO DE TESTE | `CT-07 – ENVIO DE MENSAGEW - ENVIAR VIA E-MAIL OU WHATSAPP` |
| :----------: | :---------- |
| Requisitos Associados | RF-01 - A aplicação deve permitir ao usuário criar novas mensagens e enviar por e-mail ou WhatsApp conforme solicitação. |
| Objetivo do Teste   | Verificar se o usuário consegue enviar uma mensagem para o cliente via e-mail ou WhatsApp. |
| Passos | 1) Acessar o navegador <br> 2) Informar a URL [Localiza.Ai](https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t3-localiza-ai/)<br> 3) Na página de nova mensagem <br> 4) Clicar em "Enviar e-mail" ou "Enviar WhatsApp" |
|  Critérios de Êxito | Após o usuário clicar em "Enviar e-mail" o site irá direcionar para o serviço de e-mail do computador. Se o usuário clicar em "Enviar WhatsApp" o site irá direcionar para uma nova mensagem via WhatsApp com o número de cadastro do cliente. |
|  Responsável | Lucas de Araújo |


[Inserir aqui as evidências de teste que podem ser apresentadas por print de telas ou por .gif de execução de teste]
