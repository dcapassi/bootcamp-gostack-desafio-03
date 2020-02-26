Fastfeet
Desafio 3: FastFeet, continuando a aplica��o
?? Etapa 2/4 do Desafio Final ??
Esse desafio faz parte do Desafio Final, que � uma aplica��o completa (Back-end, Front-end e Mobile) que � avaliada para emiss�o do Certificado do Bootcamp GoStack, por isso � fundamental que ele seja feito com muito empenho!

�Fa�a seu melhor, mas sempre com prazo de entrega�!

?? Sobre o desafio
Durante esse desafio vamos aprimorar a aplica��o FastFeet que demos in�cio no desafio anterior implementando funcionalidades que aprendemos durante as aulas at� agora.

Funcionalidades do administrador
Abaixo est�o descritas as funcionalidades que voc� deve adicionar em sua aplica��o para administradores.

1. Gest�o de entregadores
Permita que o administrador possa cadastrar entregadores para a plataforma, o entregador deve possuir os seguintes campos:

id (id do entregador)
name (nome do entregador);
avatar_id (foto do entregador);
email (email do entregador)
created_at;
updated_at;
Crie rotas para listagem/cadastro/atualiza��o/remo��o de entregadores;

Obs.: Essa funcionalidade � para administradores autenticados na aplica��o.

2. Gest�o de encomendas
Apesar do entregador estar cadastrado, ele n�o � independente dentro da plataforma, e voc� deve cadastrar encomendas para os entregadores.

Nessa funcionalidade criaremos um cadastro de encomendas por entregador, a encomenda possui os campos:

id (id da entrega)
recipient_id (refer�ncia ao destinat�rio);
deliveryman_id (refer�ncia ao entregador);
signature_id (refer�ncia � uma assinatura do destinat�rio, que ser� uma imagem);
product (nome do produto a ser entregue);
canceled_at (data de cancelamento, se cancelada);
start_date (data de retirada do produto);
end_date (data final da entrega);
created_at;
updated_at;
A data de in�cio deve ser cadastrada assim que for feita a retirada do produto pelo entregador, e as retiradas s� podem ser feitas entre as 08:00 e 18:00h.

A data de t�rmino da entrega deve ser cadastrada quando o entregador finalizar a entrega:

Os campos recipient_id e deliveryman_id devem ser cadastrados no momento que for cadastrada a encomenda.

Quando a encomenda � cadastrada para um entregador, o entregador recebe um e-mail com detalhes da encomenda, com nome do produto e uma mensagem informando-o que o produto j� est� dispon�vel para a retirada.

Crie rotas para listagem/cadastro/atualiza��o/remo��o de encomendas;

Obs.: Essa funcionalidade � para administradores autenticados na aplica��o.

Funcionalidades do entregador
Abaixo est�o descritas as funcionalidades que voc� deve adicionar em sua aplica��o para os entregadores.

1. Visualizar encomendas
Para que o entregador possa visualizar suas encomendas, ele dever� informar apenas seu ID de cadastro (ID do entregador no banco de dados). Essa funcionalidade deve retornar as encomendas atribuidas a ele, que n�o estejam entregues ou canceladas;

Permita tamb�m que ele liste apenas as encomendas que j� foram entregues por ele, com base em seu ID de cadastro;

Exemplo de requisi��o: GET https://fastfeet.com/deliveryman/1/deliveries

2. Alterar status de encomendas
Voc� deve permitir que o entregador tenha rotas para incluir uma data de retirada (start_date) e data de entrega (end_date) para as encomendas. O entregador s� pode fazer 5 retiradas por dia.

Obs.: Para a funcionalidade de finalizar a entrega, voc� dever� permitir o envio de uma imagem que ir� preencher o campo signature_id da tabela de encomendas.

3. Cadastrar problemas nas entregas
O entregador nem sempre conseguir� entregar as encomendas com sucesso, algumas vezes o destinat�rio pode estar ausente, ou o pr�prio entregador poder� ter algum problema com seu ve�culo na hora de entregar.

A tabela delivery_problems deve conter os seguintes campos:

delivery_id (refer�ncia da encomenda);
description (descri��o do problema que o entregador teve);
created_at;
updated_at;
Crie uma rota para a distribuidora listar todas as entregas com algum problema;

Crie uma rota para listar todos os problemas de uma encomenda baseado no ID da encomenda.

Exemplo de requisi��o: GET https://fastfeet.com/delivery/2/problems

Crie uma rota para o entregador cadastrar problemas na entrega apenas informando seu ID de cadastro (ID da encomenda no banco de dados);

Exemplo de requisi��o: POST https://fastfeet.com/delivery/3/problems

Crie uma rota para a distribuidora cancelar uma entrega baseado no ID do problema. Esse cancelamento pode acontecer devido a gravidade do problema da entrega, por exemplo, em caso de perda da encomenda.

Exemplo de requisi��o: DELETE https://fastfeet.com/problem/1/cancel-delivery

Quando uma encomenda for cancelada, o entregador deve receber um e-mail informando-o sobre o cancelamento.

?? Entrega
Esse desafio n�o precisa ser entregue e n�o receber� corre��o. Al�m disso, o c�digo fonte n�o est� dispon�vel por fazer parte do desafio final, que ser� corrigido para certifica��o do bootcamp. Ap�s concluir o desafio, adicionar esse c�digo ao seu Github � uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

?? Licen�a
Esse projeto est� sob a licen�a MIT. Veja o arquivo LICENSE para mais detalhes.

Feito com ? by Rocketseat ?? Entre na nossa comunidade!