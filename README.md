# Principais Funcionalidades do Angular

Projeto desenvolvido para praticar os principais recursos do Angular, com exemplos de data binding, componentes, comunicação entre componentes, diretivas de controle de fluxo, formulários, serviços e navegação com rotas.

## Tecnologias utilizadas

- [Angular](https://angular.dev/) 22
- TypeScript
- HTML e CSS
- Angular Router
- Angular Forms
- RxJS
- JSONPlaceholder (API pública para testes)

## Funcionalidades exploradas

### 1. Componentes e comunicação

- Organização da aplicação em componentes, como `App`, `Header` e `Content`.
- Uso de `@Input()` para receber dados do componente pai.
- Uso de `@Output()` e `EventEmitter` para emitir eventos do componente filho para o componente pai.

### 2. Data binding

Exemplos práticos de diferentes formas de vincular dados à interface:

- **Interpolação:** exibição de valores com `{{ }}`.
- **Property binding:** vinculação de propriedades, como o estado `disabled` de um botão.
- **Event binding:** execução de métodos a partir de eventos, como `(click)`.
- **Two-way data binding:** sincronização entre o valor de um campo e a propriedade correspondente usando `[(ngModel)]`.

### 3. Estilização dinâmica

- Aplicação condicional de classes CSS com `[class.minha-cor]`.
- Alteração dinâmica de estilos com `[style.color]`.

### 4. Controle de fluxo no template

Prática das estruturas de controle de fluxo do Angular:

- `@if` e `@else`
- `@switch` e `@case`
- `@for`, com identificação dos itens por meio de `track`

### 5. Formulários

- Formulário baseado em template com `ngModel` (exemplo comentado).
- Formulário reativo com `FormGroup`, `FormControl` e `Validators`.
- Validação de campo obrigatório e controle do botão de envio conforme a validade do formulário.

### 6. Rotas

Navegação entre componentes usando Angular Router:

- `/header` — exibe o componente `Header`.
- `/content` — exibe o componente `Content`.
- `routerLink` para navegar e `router-outlet` para renderizar o componente da rota ativa.

### 7. Serviços e requisições HTTP

- Uso de serviços para separar responsabilidades da lógica dos componentes.
- Requisição HTTP para a API pública JSONPlaceholder, buscando uma lista de posts.
- Exemplo de atualização de um valor compartilhado por meio de um serviço.

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) compatível com a versão do Angular utilizada.
- npm, instalado junto com o Node.js.

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/brunowwdev/principais-funcionalidades-angular.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd principais-funcionalidades-angular
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra no navegador o endereço exibido no terminal, normalmente `http://localhost:4200/`.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Compila a aplicação para produção. |
| `npm test` | Executa os testes configurados no projeto. |

## Objetivo

Consolidar os fundamentos do Angular por meio de exemplos pequenos e práticos, servindo como material de estudo e referência para o desenvolvimento de aplicações web.

---

Desenvolvido por **Bruno Manhães Alves**.
