import { useMemo, useState } from 'react';
import { ArrowUpRight, Clock3, Search, SlidersHorizontal } from 'lucide-react';
import type { Article } from '../data/articles';

type Props = { articles: Article[]; categories: string[] };

export default function ArticleExplorer({ articles, categories }: Props) {
  const [active, setActive] = useState('Todos');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('relevant');

  const visible = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('pt');
    let list = articles.filter((article) => {
      const matchesCategory = active === 'Todos' || article.category === active;
      const matchesQuery = !normalized || `${article.title} ${article.excerpt} ${article.category}`.toLocaleLowerCase('pt').includes(normalized);
      return matchesCategory && matchesQuery;
    });
    if (sort === 'newest') list = [...list].sort((a, b) => b.date.localeCompare(a.date));
    if (sort === 'shortest') list = [...list].sort((a, b) => a.readTime - b.readTime);
    return list;
  }, [articles, active, query, sort]);

  return (
    <div className="explorer">
      <div className="explorer-toolbar">
        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Pesquisar artigos..." aria-label="Pesquisar artigos" />
          {query && <button className="clear-search" onClick={() => setQuery('')} aria-label="Limpar pesquisa">×</button>}
        </label>
        <label className="sort-field"><SlidersHorizontal size={16} aria-hidden="true" /><span>Ordenar</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Ordenar artigos">
            <option value="relevant">Relevância</option><option value="newest">Mais recentes</option><option value="shortest">Leitura mais rápida</option>
          </select>
        </label>
      </div>
      <div className="category-list" aria-label="Filtrar por categoria" role="group">
        {categories.map((category) => (
          <button key={category} onClick={() => setActive(category)} className={`category-chip ${active === category ? 'selected' : ''}`} aria-pressed={active === category}>{category}</button>
        ))}
      </div>
      <div className="results-line"><span>{visible.length} {visible.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}</span><span className="results-dot" /> <span>{active === 'Todos' ? 'Todas as categorias' : active}</span></div>
      {visible.length ? <div className="article-grid">
        {visible.map((article, index) => (
          <article className="article-card" key={article.slug} style={{ animationDelay: `${Math.min(index * 45, 270)}ms` }}>
            <a className="article-image-wrap" href={`/artigos/${article.slug}`} tabIndex={-1} aria-hidden="true">
              <img src={article.image} alt="" loading="lazy" />
              <span className="image-arrow"><ArrowUpRight size={18} /></span>
            </a>
            <div className="article-card-content">
              <span className="article-category">{article.category}</span>
              <h3><a href={`/artigos/${article.slug}`}>{article.title}</a></h3>
              <p>{article.excerpt}</p>
              <div className="article-meta"><span><Clock3 size={14}/>{article.readTime} min de leitura</span><span>{article.author}</span></div>
            </div>
          </article>
        ))}
      </div> : <div className="empty-state"><span>⌕</span><h3>Não encontrámos esse artigo.</h3><p>Tenta outra palavra ou escolhe uma categoria diferente.</p><button onClick={() => { setQuery(''); setActive('Todos'); }} className="button-secondary">Limpar filtros</button></div>}
      <style>{`
        .explorer { margin-top: 28px; }
        .explorer-toolbar { display:flex; align-items:center; justify-content:space-between; gap:1rem; }
        .search-field { display:flex; align-items:center; gap:.75rem; min-height:50px; flex:1; max-width:470px; padding:0 15px; border:1px solid var(--line); border-radius:13px; background:var(--surface); color:var(--muted); }
        .search-field:focus-within { border-color:var(--brand); box-shadow:0 0 0 3px color-mix(in srgb,var(--brand) 12%,transparent); }
        .search-field input { min-width:0; flex:1; border:0; outline:0; background:transparent; color:var(--text); font-size:.83rem; }
        .search-field input::placeholder { color:var(--muted); }
        .clear-search { border:0; background:transparent; color:var(--muted); font-size:1.3rem; }
        .sort-field { display:flex; align-items:center; gap:.5rem; color:var(--muted); font-size:.78rem; }
        .sort-field select { border:1px solid var(--line); background:var(--surface); color:var(--text); border-radius:10px; padding:.75rem 2rem .75rem .8rem; font-size:.78rem; max-width:165px; }
        .category-list { display:flex; gap:.55rem; flex-wrap:wrap; padding:22px 0 16px; border-bottom:1px solid var(--line); }
        .category-chip { border:1px solid var(--line); background:var(--surface); color:var(--muted); border-radius:999px; padding:.62rem .92rem; font-size:.76rem; font-weight:700; transition:all .18s ease; }
        .category-chip:hover { border-color:var(--brand); color:var(--brand); }
        .category-chip.selected { background:var(--text); border-color:var(--text); color:var(--bg); }
        .results-line { display:flex; align-items:center; gap:.55rem; color:var(--muted); font-size:.72rem; margin:20px 0; }
        .results-line span:first-child { color:var(--text); font-weight:800; }
        .results-dot { width:3px;height:3px;background:var(--muted);border-radius:50%; }
        .article-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:22px; }
        .article-card { min-width:0; display:flex; flex-direction:column; background:var(--surface); border:1px solid var(--line); border-radius:19px; overflow:hidden; animation:card-in .45s both ease-out; transition:transform .23s ease,border-color .23s ease,box-shadow .23s ease; }
        .article-card:hover { transform:translateY(-4px); border-color:color-mix(in srgb,var(--brand) 35%,var(--line)); box-shadow:var(--shadow); }
        .article-image-wrap { display:block; position:relative; overflow:hidden; aspect-ratio:1.7; background:var(--soft); }
        .article-image-wrap img { width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(.2,.7,.2,1); }
        .article-card:hover .article-image-wrap img { transform:scale(1.045); }
        .image-arrow { position:absolute; right:13px; bottom:13px; width:35px;height:35px;display:grid;place-items:center;border-radius:50%;background:var(--surface);color:var(--text);opacity:0;transform:translateY(5px);transition:all .2s ease; }
        .article-card:hover .image-arrow { opacity:1;transform:translateY(0); }
        .article-card-content { display:flex;flex:1;flex-direction:column;padding:21px 21px 18px; }
        .article-category { align-self:flex-start;color:var(--brand);background:var(--tint);padding:.38rem .58rem;border-radius:7px;font-size:.64rem;font-weight:800; }
        .article-card h3 { font-size:1.06rem;line-height:1.42;letter-spacing:-.035em;margin:14px 0 8px;font-weight:800; }
        .article-card h3 a:hover { color:var(--brand); }
        .article-card p { color:var(--muted);font-size:.79rem;line-height:1.75;margin:0 0 22px; }
        .article-meta { display:flex;align-items:center;justify-content:space-between;gap:.6rem;border-top:1px solid var(--line);padding-top:14px;margin-top:auto;color:var(--muted);font-size:.65rem; }
        .article-meta span:first-child { display:flex;align-items:center;gap:.35rem;white-space:nowrap; }
        .empty-state { text-align:center;padding:70px 20px;background:var(--surface);border:1px dashed var(--line);border-radius:20px; }
        .empty-state > span { font-size:2rem;color:var(--brand); }
        .empty-state h3 { margin:.6rem 0;font-size:1.1rem; }
        .empty-state p { color:var(--muted);font-size:.84rem;margin-bottom:1.3rem; }
        @keyframes card-in { from { opacity:0; transform:translateY(9px); } to { opacity:1;transform:translateY(0); } }
        @media(max-width:900px){.article-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:600px){.explorer-toolbar{align-items:stretch;flex-direction:column}.search-field{max-width:none}.sort-field{justify-content:space-between}.sort-field select{flex:1;max-width:none}.article-grid{grid-template-columns:1fr}.article-card-content{padding:19px}.article-image-wrap{aspect-ratio:1.8}.category-list{flex-wrap:nowrap;overflow-x:auto;padding-bottom:16px;scrollbar-width:thin}.category-chip{white-space:nowrap}}
        @media(prefers-reduced-motion:reduce){.article-card{animation:none}.article-card,.article-image-wrap img,.image-arrow{transition:none}}
      `}</style>
    </div>
  );
}
