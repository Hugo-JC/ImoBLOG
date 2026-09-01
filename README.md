# ImoBLOG

Landing page/blog editorial responsivo para a plataforma ImoWhite.

## Stack
- HTML5 semântico
- CSS3 puro
- JavaScript vanilla
- Google Fonts (Inter)
- Imagens editoriais via Unsplash

## Estrutura

```text
ImoBLOG/
├── index.html
├── pages/
│   └── article.html
├── assets/
│   ├── images/
│   │   ├── articles/
│   │   ├── authors/
│   │   └── branding/
│   └── icons/
├── css/
│   ├── main.css
│   ├── article.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── articles.js
│   └── article.js
├── data/
│   └── articles.js
├── README.md
└── .gitignore
```

## Destaques
- Identidade azul + navy, inspirada numa plataforma digital moderna.
- Layout editorial minimalista inspirado no card de referência.
- Cards com categoria + **tempo de leitura**, sem nome de utilizador.
- Hero, artigo em destaque, filtros, pesquisa, newsletter e footer.
- Menu mobile.
- Filtros por categoria e pesquisa com JavaScript.
- Responsivo para desktop, tablet e mobile.
- Sem frameworks ou dependências de build.
- Dados dos artigos centralizados em `data/articles.js`, preparados para uma futura API PHP/MySQL.

## Como executar

Abre `index.html` diretamente no navegador ou usa o Live Server do VS Code.

### Nota
As fotografias dos artigos são carregadas de URLs públicas do Unsplash. Para produção, recomenda-se substituir por imagens próprias/CDN da plataforma.
