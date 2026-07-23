# Portfolio — Leiziane

Portfolio pessoal em Next.js (App Router) + TypeScript + Tailwind, com tema
"trade ticket": ticker tape animado e projetos exibidos como posições
abertas — uma referência direta ao seu lado de day trader + dev.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## O que personalizar antes de publicar

- `app/page.tsx` — troque o e-mail, GitHub e LinkedIn no rodapé (`#contato`),
  e ajuste a descrição de cada projeto se quiser.
- `app/layout.tsx` — título e descrição (metadata) para SEO.
- `components/Ticker.tsx` — lista de stacks/skills que rolam no topo.
- `components/ProjectCard.tsx` — cores de status (`LIVE`, `SHIPPED`,
  `EM BUILD`) caso queira adicionar um novo status.

## Deploy rápido

O jeito mais rápido é a Vercel (mesma empresa do Next.js):

1. Suba este projeto para um repositório no GitHub.
2. Importe o repositório em https://vercel.com/new
3. Deploy automático — sem configuração extra necessária.

## Estrutura

```
app/
  layout.tsx      -> layout raiz + fontes + metadata
  page.tsx         -> página única com hero, ticker, projetos e contato
  globals.css      -> import de fontes + estilos base
components/
  Ticker.tsx        -> faixa animada no topo (marquee)
  ProjectCard.tsx  -> card de projeto no formato "ticket de operação"
```
