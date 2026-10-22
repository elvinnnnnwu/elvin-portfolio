import type {ReactNode} from 'react';
const marks:Record<string,ReactNode>={
 brand:<><circle cx="12" cy="12" r="8.5"/><path d="m9 15 2-6 4 0-2 6zM12 1v3m0 16v3M1 12h3m16 0h3"/></>,
 design:<><path d="m4 20 3-10L17 3l4 4-7 10-10 3ZM7 10l7 7M4 20l7-7"/><circle cx="12" cy="12" r="1.2"/></>,
 content:<><rect x="3" y="5" width="18" height="15" rx="1"/><path d="M3 10h18M7 5l3 5m4-5 3 5m-7 4 5 2-5 2z"/></>,
 product:<><path d="m12 2 8 4.5v10L12 21l-8-4.5v-10L12 2ZM4 6.5l8 4.5 8-4.5M12 11v10M8 4.2l8 4.5v5"/></>,
 personal:<><path d="m2 20 7-11 5 7 3-4 5 8H2ZM17 2v6m-3-3h6M8 11l2 3-3-1"/></>
};
export function DisciplineIcon({name}:{name:keyof typeof marks}){return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{marks[name]}</svg>}
export function DisciplineStrip(){return <div id="disciplines" className="discipline-strip" aria-label="实践领域">{[['brand','BRAND','品牌'],['design','DESIGN','设计'],['content','CONTENT','内容'],['product','PRODUCT','产品'],['personal','PERSONAL','个人创作']].map(([key,en,cn])=><a className="discipline-item" key={key} href="#work" aria-label={`浏览${cn}案例`} onClick={()=>window.dispatchEvent(new CustomEvent('portfolio:filter',{detail:({brand:'品牌与视觉',design:'网站与体验',content:'影像与内容',product:'产品与系统',personal:'个人创作'} as Record<string,string>)[key]}))}><DisciplineIcon name={key}/><span>{en}<small>{cn}</small></span></a>)}</div>}
