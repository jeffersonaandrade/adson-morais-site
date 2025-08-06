# 🏥 Site Profissional - Dr. Adson Morais

Site profissional desenvolvido para o **Dr. Adson Morais**, fisioterapeuta especializado em múltiplas técnicas terapêuticas.

## 📋 Sobre o Projeto

Este é um site moderno e responsivo desenvolvido em **React** com **Vite**, apresentando os serviços e especialidades do Dr. Adson Morais. O site oferece uma experiência de usuário otimizada com design profissional e funcionalidades interativas.

### 🎯 Especialidades Apresentadas

- **Fisioterapia**
- **Osteopatia**
- **Terapia Crânio Sacral**
- **Liberação Miofascial Instrumental**
- **Quiropraxia**

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework de estilização
- **Radix UI** - Componentes de interface acessíveis
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos
- **React Router DOM** - Navegação

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd adson-morais-site
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse o site**
   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## 🏗️ Estrutura do Projeto

```
adson-morais-site/
├── public/                 # Arquivos públicos
├── src/
│   ├── components/         # Componentes React
│   │   ├── ui/            # Componentes de interface
│   │   ├── Header.jsx     # Cabeçalho
│   │   ├── Hero.jsx       # Seção principal
│   │   ├── About.jsx      # Sobre
│   │   ├── Specialties.jsx # Especialidades
│   │   ├── Courses.jsx    # Cursos
│   │   ├── Testimonials.jsx # Depoimentos
│   │   ├── Contact.jsx    # Contato
│   │   ├── Footer.jsx     # Rodapé
│   │   └── WhatsAppFloat.jsx # Botões flutuantes
│   ├── assets/            # Imagens e recursos
│   ├── hooks/             # Hooks personalizados
│   ├── lib/               # Utilitários
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada
│   └── index.css          # Estilos globais
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
└── README.md              # Este arquivo
```

## 🎨 Funcionalidades Principais

### 📱 Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Componentes otimizados para diferentes tamanhos de tela

### 🔗 Navegação Intuitiva
- Menu de navegação fixo
- Links de âncora suaves
- Botões flutuantes de contato

### 💬 Integração com Canais de Contato
- **WhatsApp**: Botão flutuante com mensagem pré-definida
- **Doctoralia**: Link direto para agendamento
- **E-mail**: Contato direto via mailto
- **Telefone**: Ligação direta

### ⚡ Performance Otimizada
- Lazy loading de componentes
- Imagens otimizadas
- Build otimizado com Vite

## 🎯 Seções do Site

1. **Header** - Navegação principal
2. **Hero** - Apresentação e call-to-action
3. **About** - Informações sobre o profissional
4. **Specialties** - Especialidades oferecidas
5. **Courses** - Cursos disponíveis
6. **Testimonials** - Depoimentos de pacientes
7. **Contact** - Informações de contato e agendamento
8. **Footer** - Links e informações adicionais

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto se necessário:

```env
VITE_APP_TITLE=Dr. Adson Morais
VITE_APP_DESCRIPTION=Site profissional do Dr. Adson Morais
```

### Personalização
- Cores: Edite as variáveis CSS em `src/index.css`
- Conteúdo: Modifique os componentes em `src/components/`
- Imagens: Substitua as imagens em `src/assets/`

## 📱 Botões Flutuantes

O site inclui dois botões flutuantes funcionais:

- **WhatsApp** (verde): Abre conversa no WhatsApp
- **Doctoralia** (azul): Redireciona para agendamento

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Hospedagem Recomendada
- **Vercel** - Deploy automático
- **Netlify** - Deploy com drag & drop
- **GitHub Pages** - Hospedagem gratuita

## 👨‍💻 Desenvolvimento

### Desenvolvedor
**Jefferson Andrade**
- Instagram: [@jeffersonaandrade10](https://www.instagram.com/jeffersonaandrade10/)
- Todos os direitos reservados

### Contribuição
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o desenvolvimento:
- **Desenvolvedor**: Jefferson Andrade
- **Instagram**: [@jeffersonaandrade10](https://www.instagram.com/jeffersonaandrade10/)

---

**© 2025 Desenvolvimento do site - Todos os direitos reservados a Jefferson Andrade** 