# Landing Page — Apoia.se SouJunior

Landing page criada para o Hackathon SouJunior de setembro de 2026 pelo squad
**ByteWorks**. O objetivo da página é apresentar a causa da SouJunior e levar o
visitante a apoiar a comunidade pelo Apoia.se, a partir de R$ 2.

🔗 https://apoia.se/soujunior

## Tecnologias

- **React** — interface em componentes
- **Vite** — servidor de desenvolvimento e build
- **Tailwind CSS** — estilos
- **Oxlint** — verificação de código

## Estrutura

Cada seção da página vive em seu próprio componente, na ordem definida pelo
wireframe aprovado pelo time.

```
src/
├── App.jsx                 Monta a ordem das seções
├── index.css               Fontes, cores do projeto e estilos globais
└── components/
    ├── Cabecalho.jsx
    ├── Hero.jsx
    ├── BarraImpacto.jsx
    ├── Problema.jsx
    ├── OQueTornaPossivel.jsx
    ├── Ecossistema.jsx
    ├── FaixaFrase.jsx
    ├── Depoimentos.jsx
    ├── Contribuicao.jsx
    ├── Faq.jsx
    ├── Rodape.jsx
    └── moldura.js          Traçado decorativo reutilizado em duas seções
```

Imagens e formas exportadas do Figma ficam em `public/fotos` e `public/formas`.

## Identidade visual

Fontes oficiais do UI Kit da SouJunior:

| Uso | Fonte |
|---|---|
| Títulos | Funnel Display |
| Textos | Funnel Sans |
| Botões | Plus Jakarta Sans |

Cores definidas em `src/index.css`: azul `#3b82f6`, amarelo `#facc15`,
roxo `#6366f1`, ciano `#22d3ee` e o escuro `#0f0f0f`.

## Conteúdo

Os textos, números e CTAs seguem o documento de conteúdo definido por Produto.

Os números exibidos são os oficiais informados pela SouJunior: 120 membros,
35 mentores ativos, 3 projetos em desenvolvimento e mais de 50 pessoas
empregadas através da comunidade.

Os depoimentos são reais, publicados no site oficial da SouJunior, com o texto
original de cada pessoa.

## Como rodar

É necessário ter o Node.js instalado.

```bash
npm install
npm run dev
```

O Vite sobe um servidor local, normalmente em `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

O `build` gera a pasta `dist`. O `preview` serve esse build localmente para
conferência antes do deploy.

## Verificação de código

```bash
npm run lint
```

## Deploy

O `vercel.json` configura o projeto na Vercel: framework Vite, build com
`npm run build` e arquivos publicados a partir de `dist`.

## Créditos

A primeira versão da página foi construída por **Eduardo Silva**. Este
repositório parte dessa base e aplica a identidade visual do Figma produzido
por **Mariana Marinho** e **Pedro Reis**, com o conteúdo definido por
**Stéfane Bogéa** e a orientação técnica de **Erick Staviasz**.
