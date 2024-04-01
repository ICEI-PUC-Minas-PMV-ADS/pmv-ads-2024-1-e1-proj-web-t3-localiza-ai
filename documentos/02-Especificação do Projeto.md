# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil de Usuário 01: Consumidor </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Homens e mulheres que precisam contratar empresas para dar 
reparo/manutenção em equipamentos eletrônicos</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Encontrar empresas confiáveis;
2. Sentir maior confiança ao contratar o serviço pois, por se tratar de 
assunto muito técnico, muitas pessoas relatam não entender se 
estão pagando um preço justo ou se, até mesmo, estão 
contratando um serviço adequado para o problema que o aparelho 
eletrônico apresenta;
3. Saber quais empresas prestam serviço a domicílio;
4. Poder checar avaliações feitas por outros clientes em relação a 
empresa.</td>
</tr>
</tbody>
  
</table>
<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil de Usuário 02: Colaborador</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Homens e mulheres que sejam donos ou funcionários de empresa do setor</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Ter mais uma opção de plataforma para divulgar a 
empresa/serviço</td>
</tr>
</tbody>
</table>



## Histórias de Usuários


> **Link Útil**:
> - [Como escrever boas histórias de usuário](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

Dado o grande volume de respostas e o fato de que muitas se repetem, selecionamos 7
histórias que representam melhor as questões dos clientes e Donos

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`|
|--------------------|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Cliente| Comparar diferentes empresas pela avaliação de cada uma   |Escolher uma que tenha uma reputação melhor entre os clientes.|
| Cliente |Saber quais empresas cobram um valor melhor|Não gastar além do necessário.|
| Cliente |Saber quais empresas são mais transparentes em relação ao serviço prestado|Entender melhor o problema antes de contratar/pagar pelo serviço.|
| Cliente |Saber quais empresas prestam serviçoa domicílio|Não ter que deslocar para entregar/buscar a material a ser reparado.|
| Cliente |Saber quais empresas cumprem com os prazos estipulados e quais possuem melhores prazos|Não sentir que o produto está demorando além do necessário na manutenção (especialmente em casos em que o equipamento é de uso diário e tem muita importância na rotina do cliente).|
| Cliente |Saber quais empresas responder melhor os clientes em seus canais de atendimento|Ter mais tranquilidade na comunicação com a empresa em caso de necessidade.|
| Colaborador |Ter mais um canal de divulgação da empresa|Aumentar a prospecção de clientes.|

## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |O sistema deve dar opções de cadastro de colaborador/dono ou cliente.|Alta| 
|RF-02| A aplicação deve permitir ao usuário fazer o login da sua conta.   | Alta | 
|RF-03 |O sistema deve pedir as informações de e-mail e senha para o usuário e realizar a validação através de um e-mail de confirmação.|Alta| 
|RF-04 |O sistema deve possibilitar ao usuário solicitar a redefinição de sua senha, informando o e-mail cadastrado.|Alta| 
|RF-05 |O sistema deve pedir ao colaborador/dono nome, empresa,localidade, horário de atendimento, contato, quantidade de funcionários, etc...|Alta| 
|RF-06 |O sistema deve pedir para o cliente mencionar sua localidade, o problema e qual tipo de aparelho e sistema para ser resolvido.|Alta| 
|RF-07 | O sistema deve pedir para o cliente informar se deseja atendimento em domicílio.|Médio| 
|RF-08 |O sistema deve buscar e mostrar quais profissionais adeptos para o tipo de problema e necessidades do cliente.|Alta| 
|RF-09 |O sistema deve levar em consideração estabelecimentos mais próximos ao usuário.|Média| 
|RF-10 |O sistema deve notificar ou acionar o colaborador/dono quando estiver sendo cotado para prestar um serviço.|Alta|
|RF-11 | O sistema deve possibilitar o contato entre cliente e empresa por meio de um chat.|Média|
|RF-12 |O sistema deve permitir o usuário avaliar o colaborador que lhe prestou serviço|Alta|
 
**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |O sistema deve fazer com que o cadastro de cliente e colaborador leve em média 3 minutos para ser concluído.|Baixa| 
| RNF-02 |O sistema deve ser desenvolvido e implementado usando CSS3, HTML5 e linguagens de programação como Javascript e Biblioteca React.|Alta| 
| RNF-03 |O sistema deve ser manutenção passiva podendo ser implementado novas ferramentas e ser migrado para outras plataformas e sistemas em até 4 semanas|Média| 
| RNF-04 |O sistema deve se recuperar de uma falha no sistema em até 5 segundos.|Média| 
| RNF-05 |O sistema deve ser capaz de fazer a busca de colaboradores utilizando o sistema de localização em até 8 segundos.|Média| 
| RNF-06 |O sistema deve ter integrado uma API de localização.|Média| 
| RNF-07 |O sistema deve ser acessível na web.|Alta  | 
| RNF-08 |O sistema deve ser responsivel para diversos aparelhos (computadores, celulares, notebooks, tablets etc...).|Alta| 
| RNF-09 |O sistema deve utilizar um banco de dados Oracle e MySQL para persistência e gerenciamento das informações do usuário e colaborador.|Alta| 
| RNF-10 |O sistema deve estar acessível 98% do tempo em relação a 24 horas do dia e 7 dias da semana.|Alta| 
| RNF-11 |O sistema de ser capaz de ser utilizado de acordo com uma determinada versão operacional.|Média| 

**Prioridade: Alta / Média / Baixa. 

