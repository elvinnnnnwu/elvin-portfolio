import type {ReactNode} from 'react';
import {useTilt} from './useTilt';
export function TiltLink({href,label,children,className=''}:{href:string;label:string;children:ReactNode;className?:string}){const tilt=useTilt<HTMLAnchorElement>();return <a {...tilt} href={href} aria-label={label} className={className+' tilt-surface'}>{children}<span className="tilt-hint" aria-hidden="true">探索案例 ↗</span></a>}
