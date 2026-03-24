# 🏥 Sistema de Agendamento - Clínica Estética

Este é um projeto de Dashboard para gerenciamento de agendamentos em tempo real, desenvolvido para otimizar o fluxo de atendimento de uma clínica estética. O sistema consome dados de uma automação via **n8n** e reflete as atualizações instantaneamente na interface.

Este é um projeto de Dashboard para gerenciamento de agendamentos em tempo real...

![Demonstração do Funcionamento do Sistema](./src/assets/videoDemonstrativo.gif)
## 🛠️ Tecnologias Utilizadas

* **React.js**: Biblioteca principal para construção da interface.
* **Vite**: Tooling de nova geração para um desenvolvimento rápido.
* **Tailwind CSS**: Estilização responsiva e moderna.
* **Context API**: Gerenciamento de estado global (Login, Agendamentos e Tema).
* **Hooks (useState, useEffect)**: Controle de ciclo de vida e estados.
* **Axios**: Consumo de API/Webhook.
* **Sonner**: Notificações toast elegantes.
* **Lucide React / Iconify**: Biblioteca de ícones.

## 📁 Estrutura de Pastas

```text
src/
 ├── components/
 │    ├── dashboard/   # Componentes específicos do painel
 │    ├── layout/      # Navbar, Sidebar e navegação
 │    └── ui/          # Componentes de base (botões, inputs, cards)
 ├── contexts/         # Gerenciamento de estados globais (Auth, Theme, Appointments)
 ├── hooks/            # Hooks customizados (use-mobile, etc.)
 ├── pages/            # Telas principais (Login, Dashboard, Agenda, Clientes)
 ├── routes/           # Configuração de rotas privadas e públicas
 └── services/         # Configuração do Axios e chamadas de API

```

⚙️ Integração com n8n
O projeto utiliza um Webhook do n8n como backend dinâmico. A automação processa novos leads/clientes e os disponibiliza via API, que é consumida pelo React para atualizar a lista de agendamentos sem a necessidade de refresh manual constante.

🚀 Como Executar o Projeto
Clone o repositório:

Bash
git clone [https://github.com/seu-usuario/nome-do-projeto.git](https://github.com/seu-usuario/nome-do-projeto.git)
Instale as dependências:

Bash
npm install
Configure as Variáveis de Ambiente (.env):
Crie um arquivo .env na raiz do projeto e adicione a URL do seu Webhook:

Snippet de código
VITE_API_URL=[https://sua-url-do-n8n.com/webhook/agendamento](https://sua-url-do-n8n.com/webhook/agendamento)
Inicie o servidor de desenvolvimento:

Bash
npm run dev
Para acessar em outros dispositivos (celular/tablet) na mesma rede:

Bash
npm run dev -- --host
🔐 Funcionalidades Principais
Autenticação: Sistema de login protegido via Context API.

Dashboard Real-time: Visualização de pacientes com filtros por status (Agendado, Atendimento, Cancelado).

Busca Dinâmica: Filtro de pacientes por nome em tempo real.

Modo Escuro (Dark Mode): Alternância de tema preservando a experiência do usuário.

Responsividade Total: Interface adaptada para Desktop, Tablets e Mobile (Sidebar dinâmica).

Desenvolvido por CaioTrigo-dev


---

