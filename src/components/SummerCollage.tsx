import {useEffect,useState} from 'react';
import AccordionGallery from '../vendor/react-bits/AccordionGallery';
const tiles=[
 {image:'summer-turnaround',title:'角色设定',detail:'从一个角色，长出更多可能。',label:'三视图'},
 {image:'summer-office-0',title:'替主人上班',detail:'把生活里的小念头，拍成 AI 短片。',label:'AI 短片'},
 {image:'summer-office-4',title:'办公室里的小冒险',detail:'用连续分镜，把角色带进真实生活的想象。',label:'职场分镜'},
 {image:'summer-ai-carousel-1',title:'Summer 小课堂',detail:'让知识有性格，让表达有温度。',label:'系列图文'},
 {image:'summer-ai-carousel-3',title:'让 AI 帮上忙',detail:'用场景与图解，把抽象的方法讲清楚。',label:'知识卡片'},
 {image:'summer-sticker',title:'懂了个汪',detail:'一个表情，也是一种创作。',label:'表情创作'},
];
export function SummerCollage(){const[mobile,setMobile]=useState(()=>innerWidth<680);useEffect(()=>{const m=matchMedia('(max-width:679px)');const update=()=>setMobile(m.matches);m.addEventListener('change',update);return()=>m.removeEventListener('change',update)},[]);return <div className="summer-collage reference-summer"><div className="summer-collage-heading"><span>SUMMER / CREATIVE PLAYGROUND</span><a href="#case/summer">完整案例 ↗</a></div><AccordionGallery items={tiles.map(t=>({image:`${import.meta.env.BASE_URL}assets/${t.image}.webp`,label:t.label+' · '+t.title,alt:t.title}))} defaultIndex={0} height={mobile?620:400} orientation={mobile?'vertical':'horizontal'} gap={9} radius={16} expandRatio={.58} duration={.6} parallax={.5} tilt={8} grayscale/><p>三视图 · AI 短片 · 职场分镜 · 图文 · 知识卡片 · 表情创作</p><a className="reference-summer-link" href="#case/summer">走进 Summer 的完整创作 ↗</a></div>}
