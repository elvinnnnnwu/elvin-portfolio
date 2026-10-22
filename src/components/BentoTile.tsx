/*
 * Layout component adapted from tim-hub/techtim-astro-bento-portfolio,
 * src/components/Card.astro, commit 1f59eae8f7ce48b07133b51bec9f31be90bcd821.
 * Copyright 2024 @tim-hub. MIT; see licenses/techtim-bento-MIT.txt.
 * Ported to React, with independent styling, semantic links and local content.
 */
import type {ReactNode} from 'react';
interface Props {title?:string;body?:string;href?:string;className?:string;children:ReactNode;label?:string}
export function BentoTile({title,body,href,className='',children,label}:Props){
 const content=<>{title&&<h3>{title}</h3>}{body&&<p>{body}</p>}{children}{href&&<span className="bento-arrow" aria-hidden="true">↗</span>}</>;
 return href?<a className={`bento-tile ${className}`} href={href} aria-label={label}>{content}</a>:<div className={`bento-tile ${className}`}>{content}</div>;
}
