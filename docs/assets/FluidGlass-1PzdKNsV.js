import{n as e,r as t,t as n}from"./index-o577Qv2l.js";var r=t(e(),1),i=n(),a=5e6,o=128,s=[`ew`,`lens`,`blob`,`cube`,`pill`,`torus`,`prism`,`diamond`],c={ew:1.08,lens:1.02,blob:1.08,cube:1.32,pill:1.02,torus:1,prism:1.18,diamond:1.05},l={ew:[.05,-.15,0],lens:[0,0,0],blob:[.2,0,0],cube:[-.48,.62,0],pill:[0,0,0],torus:[-.5,.18,0],prism:[-.3,.45,0],diamond:[-.35,.5,0]},u={ew:[0,.3],lens:[0,0],blob:[1,0],cube:[1,0],pill:[0,0],torus:[0,1],prism:[1,0],diamond:[1,0]},d=/\.(mp4|webm|ogv|ogg|mov|m4v)(\?|#|$)/i,ee=`#version 300 es
const vec2 corners[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
void main() {
  gl_Position = vec4(corners[gl_VertexID], 0.0, 1.0);
}`,te=`#version 300 es
precision highp float;
uniform vec2 uView;
uniform float uRatio;
uniform sampler2D uMedia;
uniform vec4 uMediaRect;
uniform float uMediaOn;
uniform sampler2D uText;
uniform float uTextOn;
uniform vec4 uBackground;
out vec4 fragColor;

void main() {
  vec2 w = gl_FragCoord.xy / uRatio;
  vec2 uv = vec2(w.x, uView.y - w.y) / uView;
  vec4 color = uBackground;
  if (uMediaOn > 0.5) {
    vec2 m = (uv - uMediaRect.xy) / uMediaRect.zw;
    if (m.x >= 0.0 && m.y >= 0.0 && m.x <= 1.0 && m.y <= 1.0) {
      vec4 media = texture(uMedia, m);
      color = media + color * (1.0 - media.a);
    }
  }
  if (uTextOn > 0.5) {
    vec4 text = texture(uText, uv);
    color = text + color * (1.0 - text.a);
  }
  fragColor = vec4(0.0);
}`,f={ew:`{
 vec2 v0[12] = vec2[12](vec2(-0.840909,0.509091),vec2(-0.268182,0.509091),vec2(-0.268182,0.309091),vec2(-0.640909,0.309091),vec2(-0.640909,0.100000),vec2(-0.313636,0.100000),vec2(-0.313636,-0.100000),vec2(-0.640909,-0.100000),vec2(-0.640909,-0.309091),vec2(0.068182,-0.309091),vec2(0.068182,-0.509091),vec2(-0.840909,-0.509091));
 float d0=dot(p.xy-v0[0],p.xy-v0[0]); float s0=1.0;
 for(int i=0,j=11;i<12;j=i,i++){vec2 e=v0[j]-v0[i];vec2 w=p.xy-v0[i];vec2 b=w-e*clamp(dot(w,e)/dot(e,e),0.0,1.0);d0=min(d0,dot(b,b));bvec3 c=bvec3(p.y>=v0[i].y,p.y<v0[j].y,e.x*w.y>e.y*w.x);if(all(c)||all(not(c)))s0=-s0;}
 d0=s0*sqrt(d0);
 vec2 v1[13] = vec2[13](vec2(-0.195455,0.509091),vec2(0.004545,0.509091),vec2(0.150000,-0.172727),vec2(0.259091,0.145455),vec2(0.386364,0.145455),vec2(0.495455,-0.172727),vec2(0.640909,0.509091),vec2(0.840909,0.509091),vec2(0.604545,-0.509091),vec2(0.431818,-0.509091),vec2(0.322727,-0.181818),vec2(0.213636,-0.509091),vec2(0.040909,-0.509091));
 float d1=dot(p.xy-v1[0],p.xy-v1[0]); float s1=1.0;
 for(int i=0,j=12;i<13;j=i,i++){vec2 e=v1[j]-v1[i];vec2 w=p.xy-v1[i];vec2 b=w-e*clamp(dot(w,e)/dot(e,e),0.0,1.0);d1=min(d1,dot(b,b));bvec3 c=bvec3(p.y>=v1[i].y,p.y<v1[j].y,e.x*w.y>e.y*w.x);if(all(c)||all(not(c)))s1=-s1;}
 d1=s1*sqrt(d1);
vec2 q=vec2(min(d0,d1),abs(p.z)-0.13);return length(max(q,0.0))+min(max(q.x,q.y),0.0)-0.025;
}`,lens:`{
    float a = length(p - vec3(0.0, 0.0, -1.85)) - 2.13;
    float b = length(p - vec3(0.0, 0.0, 1.85)) - 2.13;
    float h = clamp(0.5 - 0.5 * (b - a) / 0.2, 0.0, 1.0);
    return mix(b, a, h) + 0.2 * h * (1.0 - h);
  }`,blob:`{
    vec3 q = p * 1.6;
    float t = uTime;
    float n = sin(q.x + t * 1.1) * sin(q.y * 1.15 - t * 0.9) * sin(q.z * 0.95 + t * 0.8);
    n += 0.45 * sin(q.x * 1.6 - t * 0.6 + q.z) * sin(q.y * 1.9 + t * 1.2 + q.x * 0.5);
    return (length(p) - 0.92 - 0.085 * n) * 0.78;
  }`,cube:`{
    vec3 q = abs(p) - vec3(0.6);
    return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - 0.16;
  }`,pill:`{
    float outline = length(vec2(max(abs(p.x) - 0.58, 0.0), p.y)) - 0.42;
    vec2 q = vec2(outline + 0.16, abs(p.z) - 0.16);
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - 0.16;
  }`,torus:`{
    vec2 q = vec2(length(p.xy) - 0.68, p.z);
    return length(q) - 0.3;
  }`,prism:`{
    vec3 q = abs(p);
    float side = max(q.x * 0.866025 + p.y * 0.5, -p.y) - 0.5;
    float d = max(q.z - 0.34, side);
    return d - 0.08;
  }`,diamond:`{
    vec3 q = abs(p);
    return (q.x + q.y * 0.92 + q.z * 1.25 - 0.98) * 0.5;
  }`},p=`
  float rim = tr.mode > 1.5 ? 1.0 - smoothstep(0.3, 0.55, clamp(-dot(rd, tr.n), 0.0, 1.0)) : tr.mode;
  if (rim > 0.0) {
    vec2 offsets[3] = vec2[3](vec2(0.33, 0.33), vec2(-0.33, 0.25), vec2(0.25, -0.33));
    float scatter = (length(tx) + length(ty)) / max(uBound, 1.0);
    for (int k = 0; k < 3; k++) {
      vec2 sub = w + offsets[k] * pixel;
      vec3 subDir = normalize(vec3(sub, 0.0) - camera);
      Trace st = traceSurface(ro, subDir, eps, pixel);
      if (st.mode > 1.5 && (uTint.a > 0.0 || bandOf(clamp(-dot(subDir, st.n), 0.0, 1.0), scatter) < 1.0)) {
        traceInterior(st, subDir, eps);
      }
      color += shadeTrace(st, subDir, background, tone, sub, tx, ty, rx, ry);
    }
    color *= 0.25;
  }`,ne=(e,t,n)=>`#version 300 es
precision highp float;
uniform vec2 uView;
uniform float uRatio;
uniform float uFocal;
uniform vec3 uCenter;
uniform mat3 uInverse;
uniform float uScale;
uniform float uBound;
uniform float uMorph;
uniform float uRipple;
uniform float uTime;
uniform float uIor;
uniform float uDispersion;
uniform float uReflection;
uniform float uFrost;
uniform vec4 uTint;
uniform float uShadow;
uniform vec3 uLight;
uniform float uPresence;
uniform sampler2D uMedia;
uniform vec4 uMediaRect;
uniform float uMediaOn;
uniform sampler2D uText;
uniform float uTextOn;
uniform vec4 uBackground;
uniform float uPass;
uniform sampler2D uShadowMap;
uniform vec4 uShadowBox;
uniform vec2 uShadowSize;
out vec4 fragColor;

float shapeA(vec3 p) ${f[e]}
float shapeB(vec3 p) ${f[t]}

float field(vec3 p) {
  float d = shapeA(p);
  ${e===t?``:`d = mix(d, shapeB(p), uMorph);`}
  if (uRipple > 0.0) {
    d += uRipple * sin(p.x * 3.1 + uTime * 2.3) * sin(p.y * 3.4 - uTime * 1.9) * sin(p.z * 2.9 + uTime * 1.6);
  }
  return d;
}

float map(vec3 w) {
  return field(uInverse * (w - uCenter)) * uScale;
}

vec3 normalAt(vec3 w) {
  float e = 0.35;
  vec2 k = vec2(1.0, -1.0);
  return normalize(
    k.xyy * map(w + k.xyy * e) +
    k.yyx * map(w + k.yyx * e) +
    k.yxy * map(w + k.yxy * e) +
    k.xxx * map(w + k.xxx * e)
  );
}

vec4 content(vec2 w, vec2 gx, vec2 gy) {
  vec2 uv = vec2(w.x, uView.y - w.y) / uView;
  vec2 dx = vec2(gx.x, -gx.y) / uView;
  vec2 dy = vec2(gy.x, -gy.y) / uView;
  vec4 color = uBackground;
  if (uMediaOn > 0.5) {
    vec2 m = (uv - uMediaRect.xy) / uMediaRect.zw;
    vec2 inside = step(vec2(0.0), m) * step(m, vec2(1.0));
    vec4 media = textureGrad(uMedia, m, dx / uMediaRect.zw, dy / uMediaRect.zw) * inside.x * inside.y;
    color = media + color * (1.0 - media.a);
  }
  if (uTextOn > 0.5) {
    vec4 text = textureGrad(uText, uv, dx, dy);
    color = text + color * (1.0 - text.a);
  }
  return color;
}

vec4 frosted(vec2 w, vec2 gx, vec2 gy) {
  if (uFrost <= 0.0) return content(w, gx, gy);
  float r = uFrost * 16.0;
  vec2 bx = gx + vec2(r * 0.35, 0.0);
  vec2 by = gy + vec2(0.0, r * 0.35);
  vec4 sum = content(w, bx, by) * 0.2;
  for (int i = 0; i < 8; i++) {
    float a = float(i) * 0.785398 + 0.3;
    sum += content(w + vec2(cos(a), sin(a)) * r * (0.55 + 0.45 * float(i & 1)), bx, by) * 0.1;
  }
  return sum;
}

vec3 studio(vec3 d) {
  vec2 a = vec2(atan(d.x, d.z), d.y);
  float key = smoothstep(0.42, 0.22, abs(a.x + 0.62)) * smoothstep(0.3, 0.12, abs(a.y - 0.5));
  float strip = smoothstep(0.12, 0.05, abs(a.x - 0.95)) * smoothstep(0.8, 0.35, abs(a.y - 0.05));
  float dome = smoothstep(0.0, 1.0, d.z) * 0.04;
  return vec3(18.0) * key + vec3(8.0) * strip + vec3(dome);
}

vec4 light(vec3 d, float weight) {
  vec3 c = studio(d) * weight;
  float a = clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0);
  return vec4(min(c, vec3(a)), a);
}

vec2 landing(vec3 o, vec3 d, vec2 fallback) {
  if (d.z > -0.0005) return fallback;
  return o.xy + d.xy * (-o.z / d.z);
}

float shadowAt(vec2 w, out float caustic) {
  caustic = 0.0;
  if (uShadow <= 0.0) return 0.0;
  vec3 p = vec3(w, 0.0);
  vec2 footprint = uCenter.xy + uLight.xy / uLight.z * uCenter.z;
  if (length(w - footprint) > uBound * 1.6) return 0.0;
  float t = 2.0;
  float occlusion = 1.0;
  float deepest = 1e5;
  for (int i = 0; i < 28; i++) {
    float h = map(p + uLight * t);
    deepest = min(deepest, h);
    if (h > 0.0) occlusion = min(occlusion, 6.0 * h / t);
    if (t > uCenter.z * 2.6 + uBound * 2.0) break;
    t += clamp(abs(h) * 0.8, 2.0, uBound * 0.25);
  }
  if (deepest > 0.0) return (1.0 - clamp(occlusion, 0.0, 1.0)) * 0.36;
  float depth = -deepest / max(uBound, 1.0);
  caustic = smoothstep(0.12, 0.5, depth) * (uIor - 1.0) * 2.0;
  return exp(-depth * 14.0) * 0.42;
}

vec2 shadowSample(vec2 w) {
  if (uShadow <= 0.0) return vec2(0.0);
  vec2 uv = (w - uShadowBox.xy) / uShadowBox.zw;
  if (any(lessThan(uv, vec2(0.0))) || any(greaterThan(uv, vec2(1.0)))) return vec2(0.0);
  vec2 s = textureLod(uShadowMap, uv, 0.0).rg;
  return vec2(s.x * 0.42, s.y * 2.0);
}

vec2 lighting(vec2 w, float under) {
  vec2 s = shadowSample(w);
  float dark = s.x * uShadow * uPresence;
  float glow = clamp(s.y * uShadow * uPresence, 0.0, 1.0) * mix(0.12, 0.3, under);
  return vec2(dark * mix(0.45, 1.0, under), glow);
}

vec4 shade(vec4 color, vec2 factors) {
  vec3 rgb = color.rgb * (1.0 - factors.x);
  float alpha = color.a + factors.x - color.a * factors.x;
  rgb = vec3(factors.y) + rgb * (1.0 - factors.y);
  alpha = factors.y + alpha * (1.0 - factors.y);
  return vec4(rgb, alpha);
}

struct Trace {
  float mode;
  float cover;
  vec3 p;
  vec3 n;
  vec3 q;
  vec3 inside;
  vec3 exitNormal;
  vec3 exitDir;
  float escaped;
  float travel;
  float bounces;
};

Trace traceSurface(vec3 ro, vec3 rd, float eps, float pixel) {
  Trace tr;
  tr.mode = 0.0;
  tr.cover = 0.0;
  tr.p = vec3(0.0);
  tr.n = vec3(0.0, 0.0, 1.0);
  tr.q = vec3(0.0);
  tr.inside = vec3(0.0, 0.0, -1.0);
  tr.exitNormal = vec3(0.0, 0.0, 1.0);
  tr.exitDir = vec3(0.0, 0.0, -1.0);
  tr.escaped = 0.0;
  tr.travel = 0.0;
  tr.bounces = 0.0;
  vec3 oc = ro - uCenter;
  float b = dot(oc, rd);
  float c = dot(oc, oc) - uBound * uBound;
  float disc = b * b - c;
  if (disc <= 0.0 || uPresence <= 0.0) return tr;
  float sq = sqrt(disc);
  float t = max(-b - sq, 0.0);
  float tEnd = -b + sq;
  float closest = 1e5;
  float closestT = t;
  bool hit = false;
  for (int i = 0; i < 96; i++) {
    float d = map(ro + rd * t);
    if (d < closest) {
      closest = d;
      closestT = t;
    }
    if (d < eps) {
      hit = true;
      break;
    }
    t += d * 0.9;
    if (t > tEnd) break;
  }
  if (!hit && closest < pixel * 0.35) {
    hit = true;
    t = closestT;
  }
  if (!hit) {
    tr.cover = clamp(1.0 - closest / (pixel * 1.2), 0.0, 1.0) * uPresence;
    if (tr.cover > 0.0) {
      tr.mode = 1.0;
      tr.p = ro + rd * closestT;
      tr.n = normalAt(tr.p);
    }
    return tr;
  }
  tr.mode = 2.0;
  tr.p = ro + rd * t;
  tr.n = normalAt(tr.p);
  return tr;
}

void traceInterior(inout Trace tr, vec3 rd, float eps) {
  vec3 inside = refract(rd, tr.n, 1.0 / uIor);
  vec3 q = tr.p + inside * eps * 4.0;
  vec3 exitDir = inside;
  bool escaped = false;
  for (int bounce = 0; bounce < 3; bounce++) {
    for (int i = 0; i < 64; i++) {
      float d = map(q);
      if (d > -eps) break;
      float stepLength = max(-d * 0.9, eps);
      q += inside * stepLength;
      tr.travel += stepLength;
    }
    vec3 n2 = normalAt(q);
    tr.exitNormal = n2;
    vec3 out1 = refract(inside, -n2, uIor);
    if (dot(out1, out1) > 0.0) {
      exitDir = out1;
      escaped = true;
      break;
    }
    inside = reflect(inside, -n2);
    q += inside * eps * 4.0;
    tr.bounces += 1.0;
  }
  if (!escaped) exitDir = inside;
  if (exitDir.z > -0.2) exitDir = normalize(vec3(exitDir.xy, -0.2 - abs(exitDir.z)));
  tr.q = q;
  tr.inside = inside;
  tr.exitDir = exitDir;
  tr.escaped = escaped ? 1.0 : 0.0;
}

float bandOf(float cosi, float scatter) {
  return max(smoothstep(0.42, 0.12, cosi), smoothstep(0.06, 0.24, scatter));
}

vec4 shadeTrace(Trace tr, vec3 rd, vec4 background, vec4 tone, vec2 w, vec2 tx, vec2 ty, vec2 rx, vec2 ry) {
  if (tr.mode < 0.5) return background;
  vec3 mirrorDir = reflect(rd, tr.n);
  if (tr.mode < 1.5) {
    vec4 edgeTone = tone * uReflection * 0.8 + light(mirrorDir, uReflection) * 0.5;
    return mix(background, edgeTone + background * (1.0 - edgeTone.a), tr.cover * 0.7);
  }
  float cosi = clamp(-dot(rd, tr.n), 0.0, 1.0);
  float f0 = pow((uIor - 1.0) / (uIor + 1.0), 2.0);
  float fresnel = f0 + (1.0 - f0) * pow(1.0 - cosi, 5.0);
  float band = bandOf(cosi, (length(tx) + length(ty)) / max(uBound, 1.0));

  vec4 mirror = tone * uReflection;
  vec4 transmitted = tone;
  if (band < 1.0) {
    mirror = mirrorDir.z < -0.0005 ? frosted(landing(tr.p, mirrorDir, w), rx, ry) * uReflection : light(mirrorDir, uReflection);
    vec2 hitT = landing(tr.q, tr.exitDir, w);
    vec4 green = frosted(hitT, tx, ty);
    vec4 red = green;
    vec4 blue = green;
    if (tr.escaped > 0.5 && uDispersion > 0.0) {
      vec3 spread = vec3(-1.0, 0.0, 1.0) * uDispersion * 0.06;
      vec3 dirR = refract(tr.inside, -tr.exitNormal, uIor + spread.x);
      vec3 dirB = refract(tr.inside, -tr.exitNormal, uIor + spread.z);
      if (dot(dirR, dirR) > 0.0 && dirR.z < -0.2) red = frosted(landing(tr.q, dirR, hitT), tx, ty);
      if (dot(dirB, dirB) > 0.0 && dirB.z < -0.2) blue = frosted(landing(tr.q, dirB, hitT), tx, ty);
    }
    vec2 factors = lighting(hitT, 0.0);
    red = shade(red, factors);
    green = shade(green, factors);
    blue = shade(blue, factors);
    transmitted = mix(vec4(red.r, green.g, blue.b, green.a), tone, band);
    mirror = mix(mirror, tone * uReflection, band);
  }

  vec3 tint = pow(max(uTint.rgb, vec3(0.001)), vec3(uTint.a * tr.travel / max(uBound, 1.0)));
  transmitted.rgb *= tint;
  float body = (1.0 - dot(tint, vec3(0.3333))) * 0.7;
  transmitted += vec4(uTint.rgb * body, body) * (1.0 - transmitted.a);

  vec4 reflected = mirrorDir.z < -0.0005 ? mirror * fresnel : light(mirrorDir, uReflection * fresnel);
  vec4 glass = reflected + transmitted * (1.0 - reflected.a);
  float edge = 1.0 - smoothstep(0.04, 0.3, cosi);
  glass = mix(glass, mirror + background * (1.0 - mirror.a), edge);
  vec2 facing = normalize(vec2(-0.42, 0.55));
  float rimLight = pow(1.0 - cosi, 3.0) * (0.25 + 0.75 * abs(dot(normalize(tr.n.xy + 1e-5), facing))) * 0.55 * uReflection;
  rimLight *= smoothstep(0.0, 0.08, cosi);
  glass = vec4(rimLight) + glass * (1.0 - rimLight);
  return mix(background, glass, uPresence);
}

void main() {
  if (uPass > 0.5) {
    float caustic;
    float dark = shadowAt(uShadowBox.xy + gl_FragCoord.xy / uShadowSize * uShadowBox.zw, caustic);
    fragColor = vec4(dark / 0.42, caustic * 0.5, 0.0, 1.0);
    return;
  }
  vec2 w = gl_FragCoord.xy / uRatio;
  vec3 camera = vec3(uView * 0.5, uFocal);
  vec3 ro = camera;
  vec3 rd = normalize(vec3(w, 0.0) - camera);
  float pixel = 1.0 / uRatio;
  float eps = 0.25 * pixel;

  Trace tr = traceSurface(ro, rd, eps, pixel);
  if (tr.mode > 1.5) traceInterior(tr, rd, eps);
  vec2 hitT = tr.mode > 1.5 ? landing(tr.q, tr.exitDir, w) : w;
  vec2 hitR = tr.mode > 0.5 ? landing(tr.p, reflect(rd, tr.n), w) : w;
  vec2 tx = dFdx(hitT);
  vec2 ty = dFdy(hitT);
  vec2 rx = dFdx(hitR);
  vec2 ry = dFdy(hitR);
  vec2 wx = dFdx(w);
  vec2 wy = dFdy(w);

  vec4 background = shade(content(w, wx, wy), lighting(w, 1.0));
  vec4 tone = tr.mode > 0.5 ? content(uCenter.xy, vec2(uBound * 1.4, 0.0), vec2(0.0, uBound * 1.4)) : vec4(0.0);
  vec4 color = shadeTrace(tr, rd, background, tone, w, tx, ty, rx, ry);
  ${n?p:``}
  if (tr.mode < 0.5) discard;
  fragColor = color;
}`,m=(e,t,n)=>Math.min(n,Math.max(t,e)),h=e=>{let t=String(e||``).trim(),n=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(t);if(n){let e=n[1].length===3?n[1].replace(/./g,e=>e+e):n[1];return[0,2,4].map(t=>parseInt(e.slice(t,t+2),16)/255).concat(1)}let r=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)(?:[\s,/]+([\d.]+%?))?/i.exec(t);if(r){let e=r[4]===void 0?1:r[4].endsWith(`%`)?parseFloat(r[4])/100:parseFloat(r[4]);return[r[1],r[2],r[3]].map(e=>m(parseFloat(e)/255,0,1)).concat(m(e,0,1))}return null},g=(e,t,n)=>{let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),r):null},re=e=>{let t=m(e,0,1);return t*t*t*(t*(t*6-15)+10)},_=(e,t,n)=>{let r=Math.cos(e/2),i=Math.sin(e/2),a=Math.cos(t/2),o=Math.sin(t/2),s=Math.cos(n/2),c=Math.sin(n/2);return[i*a*s-r*o*c,r*o*s+i*a*c,r*a*c-i*o*s,r*a*s+i*o*c]},ie=(e,t)=>[e[3]*t[0]+e[0]*t[3]+e[1]*t[2]-e[2]*t[1],e[3]*t[1]-e[0]*t[2]+e[1]*t[3]+e[2]*t[0],e[3]*t[2]+e[0]*t[1]-e[1]*t[0]+e[2]*t[3],e[3]*t[3]-e[0]*t[0]-e[1]*t[1]-e[2]*t[2]],ae=(e,t,n)=>{let r=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3],i=r<0?t.map(e=>-e):t;if(r=Math.abs(r),r>.9995){let t=e.map((e,t)=>e+(i[t]-e)*n),r=Math.hypot(...t);return t.map(e=>e/r)}let a=Math.acos(r),o=Math.sin(a),s=Math.sin((1-n)*a)/o,c=Math.sin(n*a)/o;return e.map((e,t)=>e*s+i[t]*c)},oe=(e,t)=>[Math.sin(e*.37)*t*.35+Math.sin(e*.71+1.3)*t*.12,Math.sin(e*.29+.8)*t*.2+Math.cos(e*.53)*t*.08],se=([e,t,n,r])=>[1-2*(t*t+n*n),2*(e*t+n*r),2*(e*n-t*r),2*(e*t-n*r),1-2*(e*e+n*n),2*(t*n+e*r),2*(e*n+t*r),2*(t*n-e*r),1-2*(e*e+t*t)],v=({text:e=`Look closer.`,textColor:t,fontFamily:n,fontWeight:f=600,fontSize:p,src:v,fit:y=`cover`,background:ce=`transparent`,shape:b=`torus`,shapes:x,size:le=260,refraction:S=1,dispersion:C=.35,reflection:w=1,frost:T=0,color:E=`#ffffff`,tint:D=0,shadow:O=.5,elevation:ue=.4,interaction:k=`follow`,smoothness:A=.5,wobble:de=.5,spin:j=.3,idle:fe=!0,morphOnClick:M=!0,onShapeChange:N,position:P=[.5,.5],intro:pe=!0,maxDevicePixelRatio:me=2,className:F=``,style:I,children:L})=>{let he=(0,r.useRef)(null),R=(0,r.useRef)(null),ge=(0,r.useRef)(null),z=(0,r.useRef)(null),[B,V]=(0,r.useState)(0),H=Array.isArray(x)&&x.length?x.filter(e=>s.includes(e)):s,_e={text:String(e??``),textColor:t,fontFamily:n,fontWeight:f,fontSize:p,src:v,fit:y,background:h(ce)||[0,0,0,0],shape:s.includes(b)?b:`torus`,cycle:H.length?H:s,size:Math.max(16,le),ior:1+.5*m(S,0,2),dispersion:m(C,0,1),reflection:m(w,0,2),frost:m(T,0,1),color:h(E)||[1,1,1,1],tint:m(D,0,1),shadow:m(O,0,1),elevation:m(ue,0,3),interaction:k,smoothness:m(A,0,1),wobble:m(de,0,1),spin:j,idle:fe,morphOnClick:M,onShapeChange:N,position:[m(P?.[0]??.5,0,1),m(P?.[1]??.5,0,1)],intro:pe,maxRatio:m(me,.5,3)},U=(0,r.useRef)(_e);return U.current=_e,(0,r.useEffect)(()=>{z.current?.()}),(0,r.useEffect)(()=>{let e=he.current,t=R.current;if(!e||!t)return;let n=t.getContext(`webgl2`,{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:`high-performance`});if(!n)return;let r=n.getExtension(`KHR_parallel_shader_compile`),i=g(n,n.VERTEX_SHADER,ee),s=new Map,f=e=>{let t=e===`content`?e:`${e}>${+(C.ratio<1.75)}`;if(s.has(t))return s.get(t);let[r,a,o]=t.split(`>`),c=g(n,n.FRAGMENT_SHADER,t===`content`?te:ne(r,a,o===`1`)),l=n.createProgram();n.attachShader(l,i),n.attachShader(l,c),n.linkProgram(l);let u={program:l,fragment:c,uniforms:null,failed:!1};return s.set(t,u),u},p=e=>{if(e.failed)return!1;if(e.uniforms)return!0;if(r&&!n.getProgramParameter(e.program,r.COMPLETION_STATUS_KHR))return!1;if(!n.getProgramParameter(e.program,n.LINK_STATUS))return console.error(n.getShaderInfoLog(e.fragment)||n.getProgramInfoLog(e.program)),e.failed=!0,!1;let t={},i=n.getProgramParameter(e.program,n.ACTIVE_UNIFORMS);for(let r=0;r<i;r++){let i=n.getActiveUniform(e.program,r);i&&(t[i.name]=n.getUniformLocation(e.program,i.name))}return e.uniforms=t,!0},h=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,v=n.createVertexArray(),y=()=>{let e=n.createTexture();return n.bindTexture(n.TEXTURE_2D,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array(4)),n.generateMipmap(n.TEXTURE_2D),e},ce=y(),b=y(),x=n.createTexture();n.bindTexture(n.TEXTURE_2D,x),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,o,o,0,n.RGBA,n.UNSIGNED_BYTE,null);let le=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,le),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,x,0),n.bindFramebuffer(n.FRAMEBUFFER,null);let S=document.createElement(`canvas`),C={width:1,height:1,ratio:1},w={src:null,clip:null,image:null,ready:!1,width:1,height:1},T={key:``,ready:!1},E={x:0,y:0,inside:!1,down:!1,grabbed:!1,offsetX:0,offsetY:0,startX:0,startY:0},D={x:0,y:0,vx:0,vy:0,spin:0,ripple:0,dirX:1,dirY:0,anchorX:0,anchorY:0},O={stretch:1,vstretch:0,tiltX:0,vtiltX:0,tiltY:0,vtiltY:0,scale:0,vscale:0},ue=!1,k=!1,A={from:U.current.shape,to:U.current.shape,t:1,pending:null},de=U.current.shape,j=U.current.intro&&!h&&B===0?0:1;j===1&&(O.scale=1);let fe=0,M=Math.random()*20,N=0,P=0,pe=0,me=1e3/60,F=0,I=!1,L=!0,H=document.visibilityState!==`hidden`,_e=!1,ve=null,ye=()=>{let r=U.current,i=getComputedStyle(e),a=r.fontFamily||i.fontFamily||`sans-serif`,o=r.textColor||i.color||`#ffffff`,s=t.width,c=t.height,l=[r.text,a,o,r.fontWeight,r.fontSize,s,c].join(`|`);if(l===T.key)return;T.key=l,S.width=s,S.height=c;let u=S.getContext(`2d`);u.clearRect(0,0,s,c);let d=r.text.split(`
`);if(r.text.trim()){let e=C.ratio,t=e=>`${r.fontWeight} ${e}px ${a}`,n=r.fontSize?r.fontSize*e:c*.36;if(!r.fontSize){u.font=t(100);let e=Math.max(...d.map(e=>u.measureText(e).width),1);n=Math.min(s*.84*100/e,c*.64/(d.length*1.02))}u.font=t(n),u.fillStyle=o,u.textAlign=`center`,u.textBaseline=`alphabetic`,`letterSpacing`in u&&(u.letterSpacing=`${-.03*n}px`);let i=u.measureText(`Hg`),l=i.actualBoundingBoxAscent||n*.72,ee=i.actualBoundingBoxDescent||n*.2,te=n*1.02,f=(c-(te*(d.length-1)+l+ee))/2+l;d.forEach(e=>{u.fillText(e,s/2,f),f+=te})}n.bindTexture(n.TEXTURE_2D,b),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,S),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.generateMipmap(n.TEXTURE_2D),T.ready=!!r.text.trim()},be=()=>{w.clip&&=(w.clip.pause(),w.clip.removeAttribute(`src`),w.clip.load(),null)},xe=()=>{let e=U.current;if(e.src!==w.src&&(be(),w.src=e.src,w.ready=!1,w.image=null,e.src))if(d.test(e.src)){let t=document.createElement(`video`);t.crossOrigin=`anonymous`,t.muted=!0,t.loop=!0,t.playsInline=!0,t.autoplay=!0,t.preload=`auto`,t.src=e.src,t.addEventListener(`loadeddata`,()=>{w.clip===t&&(w.width=t.videoWidth||1,w.height=t.videoHeight||1,w.ready=!0,W())}),t.play().catch(()=>{}),w.clip=t}else{let t=new Image;t.crossOrigin=`anonymous`,t.decoding=`async`,t.onload=()=>{w.image===t&&(w.width=t.naturalWidth||1,w.height=t.naturalHeight||1,n.bindTexture(n.TEXTURE_2D,ce),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.generateMipmap(n.TEXTURE_2D),w.ready=!0,W())},t.src=e.src,w.image=t}},Se=()=>{let n=U.current,r=e.getBoundingClientRect(),i=Math.max(1,r.width),o=Math.max(1,r.height),s=Math.min(window.devicePixelRatio||1,n.maxRatio,Math.sqrt(a/(i*o))),c=Math.max(1,Math.round(i*s)),l=Math.max(1,Math.round(o*s));if((t.width!==c||t.height!==l)&&(t.width=c,t.height=l),C.width=i,C.height=o,C.ratio=c/i,!ue)D.x=n.position[0]*i,D.y=n.position[1]*o,D.anchorX=D.x,D.anchorY=D.y,ue=!0;else if(n.interaction===`drag`){let e=Ce()*1.08;D.anchorX=m(D.anchorX,e,Math.max(e,i-e)),D.anchorY=m(D.anchorY,e,Math.max(e,o-e))}ye()},Ce=()=>{let e=U.current;return Math.min(e.size/2,Math.min(C.width,C.height)*.36)},we=(e,t)=>{n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,ce),n.uniform1i(e.uMedia,0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,b),n.uniform1i(e.uText,1),n.uniform2f(e.uView,C.width,C.height),n.uniform1f(e.uRatio,C.ratio);let r=[0,0,1,1];if(w.ready){let e=C.width/C.height,n=w.width/w.height;if(n>e==(t.fit!==`contain`)){let t=n/e;r=[(1-t)/2,0,t,1]}else{let t=e/n;r=[0,(1-t)/2,1,t]}}n.uniform4f(e.uMediaRect,r[0],r[1],r[2],r[3]),n.uniform1f(e.uMediaOn,+!!w.ready),n.uniform1f(e.uTextOn,+!!T.ready);let i=t.background;n.uniform4f(e.uBackground,i[0]*i[3],i[1]*i[3],i[2]*i[3],i[3])},Te=()=>{let e=U.current,t=Ce(),n=e.idle&&!h?oe(M,t):[0,0],r=t*1.08;D.anchorX=m(D.x,r,Math.max(r,C.width-r))-n[0],D.anchorY=m(D.y,r,Math.max(r,C.height-r))-n[1]},Ee=(e,t,n,r,i)=>{let a=`v${e}`,o=Math.max(1,Math.ceil(i/(1/240))),s=i/o;for(let i=0;i<o;i++)O[a]+=(n*n*(t-O[e])-2*r*n*O[a])*s,O[e]+=O[a]*s;let c=Math.abs(t-O[e])<5e-4&&Math.abs(O[a])<.002;return c&&(O[e]=t,O[a]=0),!c},De=e=>{if(N=0,_e)return;let r=e-pe;if(pe=e,r>2&&r<100&&(me+=(r-me)*.1),I&&F<Math.round(12/me)-1){F+=1,L&&H&&(N=requestAnimationFrame(De));return}F=0;let i=U.current,a=m((e-P)/1e3||0,0,.05);P=Math.max(P,e),fe+=a;let s=!1;if(i.shape!==de&&(de=i.shape,A.pending=i.shape),A.pending&&A.t>=1&&(p(f(`${A.to}>${A.pending}`))&&(f(`${A.pending}>${A.pending}`),A.from=A.to,A.to=A.pending,A.pending=null,A.t=0,O.vstretch-=2.5*i.wobble,A.to!==A.from&&i.onShapeChange?.(A.to)),s=!0),A.t<1&&(A.t=Math.min(1,A.t+a/(h?.35:.85)),s=!0),i.morphOnClick&&i.cycle.length>1&&!A.pending){let e=i.cycle.indexOf(A.to);f(`${A.to}>${i.cycle[(e+1)%i.cycle.length]}`)}let d=Ce();!E.grabbed&&i.interaction!==`drag`&&(D.anchorX=i.position[0]*C.width,D.anchorY=i.position[1]*C.height);let ee=i.idle&&!h;ee&&!E.grabbed&&(M+=a,s=!0);let te=ee?oe(M,d):[0,0],ne=D.anchorX+te[0],g=D.anchorY+te[1];i.interaction===`follow`&&E.inside&&(ne=E.x,g=E.y);let y=(E.grabbed?34:24)*.18**i.smoothness*(h?1.6:1),b=Math.max(1,Math.ceil(a/(1/240))),S=a/b;if(E.grabbed&&(ne=E.x-E.offsetX,g=E.y-E.offsetY,k=!1),k){let e=d*1.08;for(let t=0;t<b;t++){D.x+=D.vx*S,D.y+=D.vy*S;let t=Math.exp(-S*1.4);D.vx*=t,D.vy*=t,(D.x<e||D.x>C.width-e)&&(D.x=m(D.x,e,Math.max(e,C.width-e)),O.vstretch-=Math.min(4,Math.abs(D.vx)*.0016)*i.wobble,D.vx*=-.62),(D.y<e||D.y>C.height-e)&&(D.y=m(D.y,e,Math.max(e,C.height-e)),O.vstretch-=Math.min(4,Math.abs(D.vy)*.0016)*i.wobble,D.vy*=-.62)}Math.hypot(D.vx,D.vy)<30&&(k=!1,Te()),s=!0}else{for(let e=0;e<b;e++)D.vx+=(y*y*(ne-D.x)-2*.86*y*D.vx)*S,D.vy+=(y*y*(g-D.y)-2*.86*y*D.vy)*S,D.x+=D.vx*S,D.y+=D.vy*S;(Math.abs(ne-D.x)+Math.abs(g-D.y)>.05||Math.hypot(D.vx,D.vy)>.5)&&(s=!0)}let T=Math.hypot(D.vx,D.vy);T>1&&(D.dirX=D.vx/T,D.dirY=D.vy/T),s=Ee(`stretch`,1+m(T/1800,0,.55)*i.wobble*+!h,13,.32,a)||s;let ue=h?0:45e-5;s=Ee(`tiltX`,m(D.vy*ue,-.7,.7),9,.5,a)||s,s=Ee(`tiltY`,m(D.vx*ue,-.7,.7),9,.5,a)||s,!h&&(A.to===`blob`||A.from===`blob`&&A.t<1)&&(s=!0),!h&&i.spin&&(D.spin+=a*i.spin,s=!0);let he=f(A.t<1?`${A.from}>${A.to}`:`${A.to}>${A.to}`);if(p(he)?ve=he:s=!0,ve&&(j<1&&(j=Math.min(1,j+a/.5),s=!0),s=Ee(`scale`,1,11,.52,a)||s),D.ripple+=((A.t<1?.05*i.wobble*Math.sin(Math.PI*A.t):0)-D.ripple)*(1-Math.exp(-a/.08)),w.clip&&w.ready&&!w.clip.paused&&(n.bindTexture(n.TEXTURE_2D,ce),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,w.clip),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.generateMipmap(n.TEXTURE_2D),s=!0),!ve){let e=f(`content`);p(e)&&(n.viewport(0,0,t.width,t.height),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(e.program),n.bindVertexArray(v),we(e.uniforms,i),n.drawArrays(n.TRIANGLES,0,3)),L&&H&&(N=requestAnimationFrame(De));return}let R=re(A.t),z=d/(c[A.from]+(c[A.to]-c[A.from])*R),B=Math.max(.001,O.scale),V=ae(_(...l[A.from]),_(...l[A.to]),R),ye=u[A.from][0]+(u[A.to][0]-u[A.from][0])*R,be=u[A.from][1]+(u[A.to][1]-u[A.from][1])*R,xe=D.spin%(Math.PI*2),Se=ae([0,0,0,1],_(0,xe,0),ye),W=ae([0,0,0,1],_(0,0,xe),be);V=ie(ie(_(Math.sin(D.spin*.6)*.18*ye,0,0),Se),V),V=ie(W,V),V=ie(_(O.tiltX,O.tiltY,0),V);let G=se(V),K=Math.max(.2,O.stretch),q=1/Math.sqrt(K),J=D.dirX,Y=-D.dirY,Oe=[1/q+(1/K-1/q)*J*J,(1/K-1/q)*J*Y,0,(1/K-1/q)*J*Y,1/q+(1/K-1/q)*Y*Y,0,0,0,1/q],ke=[G[0],G[3],G[6],G[1],G[4],G[7],G[2],G[5],G[8]],Ae=new Float32Array(9);for(let e=0;e<3;e++)for(let t=0;t<3;t++){let n=0;for(let r=0;r<3;r++)n+=ke[r*3+t]*Oe[e*3+r];Ae[e*3+t]=n/(z*B)}let je=Math.min(K,q),Me=Math.max(K,q),X=Math.max(C.width,C.height)*1.6,Z=z*(.35+i.elevation),Ne=C.height-D.y,Pe=C.width/2+(D.x-C.width/2)*((X-Z)/X),Fe=C.height/2+(Ne-C.height/2)*((X-Z)/X),Ie=ge.current;if(Ie){let e=d*B*2;Ie.style.width=`${e.toFixed(1)}px`,Ie.style.height=`${e.toFixed(1)}px`,Ie.style.transform=`translate3d(${(D.x-e/2).toFixed(1)}px, ${(D.y-e/2).toFixed(1)}px, 0)`}let Q=ve.uniforms;n.useProgram(ve.program),n.bindVertexArray(v),we(Q,i),n.uniform1f(Q.uFocal,X),n.uniform3f(Q.uCenter,Pe,Fe,Z),n.uniformMatrix3fv(Q.uInverse,!1,Ae),n.uniform1f(Q.uScale,z*B*je);let Le=d*B*Me*1.08+2;n.uniform1f(Q.uBound,Le),n.uniform1f(Q.uMorph,R),n.uniform1f(Q.uRipple,D.ripple),n.uniform1f(Q.uTime,h?0:fe),n.uniform1f(Q.uIor,i.ior),n.uniform1f(Q.uDispersion,i.dispersion),n.uniform1f(Q.uReflection,i.reflection),n.uniform1f(Q.uFrost,i.frost),n.uniform4f(Q.uTint,i.color[0],i.color[1],i.color[2],i.tint*1.6),n.uniform1f(Q.uShadow,i.shadow);let $=[-.42,.55,1],Re=Math.hypot(...$);n.uniform3f(Q.uLight,$[0]/Re,$[1]/Re,$[2]/Re),n.uniform1f(Q.uPresence,j);let ze=Le*1.6*(o/(o-6))+1,Be=Pe+$[0]/$[2]*Z,Ve=Fe+$[1]/$[2]*Z;n.uniform4f(Q.uShadowBox,Be-ze,Ve-ze,ze*2,ze*2),n.uniform2f(Q.uShadowSize,o,o),n.uniform1i(Q.uShadowMap,2),n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,null),i.shadow>0&&(n.bindFramebuffer(n.FRAMEBUFFER,le),n.viewport(0,0,o,o),n.uniform1f(Q.uPass,1),n.drawArrays(n.TRIANGLES,0,3),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindTexture(n.TEXTURE_2D,x)),n.viewport(0,0,t.width,t.height),n.disable(n.SCISSOR_TEST),n.clearColor(0,0,0,0),n.clear(n.COLOR_BUFFER_BIT);let He=Math.ceil(ze*1.15),Ue=Math.max(0,Math.floor((D.x-He)*C.ratio)),We=Math.max(0,Math.floor((C.height-D.y-He)*C.ratio)),Ge=Math.min(t.width,Math.ceil((D.x+He)*C.ratio)),Ke=Math.min(t.height,Math.ceil((C.height-D.y+He)*C.ratio));n.enable(n.SCISSOR_TEST),n.scissor(Ue,We,Math.max(0,Ge-Ue),Math.max(0,Ke-We)),n.uniform1f(Q.uPass,0),n.drawArrays(n.TRIANGLES,0,3),n.disable(n.SCISSOR_TEST),new URLSearchParams(location.search).has(`perf`)&&(t.dataset.rasterPixels=String(Math.max(0,Ge-Ue)*Math.max(0,Ke-We)),t.dataset.fullRasterPixels=String(t.width*t.height)),I=!E.grabbed&&!k&&A.t>=1&&!A.pending&&j>=1&&Math.abs(i.spin)<=1&&Math.hypot(D.vx,D.vy)<120&&Math.abs(O.vstretch)+Math.abs(O.vtiltX)+Math.abs(O.vtiltY)+Math.abs(O.vscale)<.05,s&&L&&H&&(N=requestAnimationFrame(De))},W=()=>{N||_e||!L||!H||(P=performance.now(),N=requestAnimationFrame(De))};z.current=()=>{I=!1,xe(),Se(),W()};let G=t=>{let n=e.getBoundingClientRect();return{x:t.clientX-n.left,y:t.clientY-n.top,inside:t.clientX>=n.left&&t.clientX<=n.right&&t.clientY>=n.top&&t.clientY<=n.bottom}},K=e=>{let t=G(e);E.x=t.x,E.y=t.y,E.inside=t.inside,(t.inside||E.grabbed)&&(I=!1),W()},q=t=>{let n=U.current,r=G(t);if(!r.inside)return;E.x=r.x,E.y=r.y,E.inside=!0,E.down=!0;let i=Math.hypot(r.x-D.x,r.y-D.y)<Ce()*1.1;n.interaction===`drag`&&i&&(E.grabbed=!0,e.setAttribute(`data-grabbing`,``),k=!1,E.offsetX=r.x-D.x,E.offsetY=r.y-D.y),E.startX=r.x,E.startY=r.y,I=!1,W()},J=t=>{let n=U.current;if(!E.down)return;E.down=!1;let r=G(t),i=Math.hypot(r.x-E.startX,r.y-E.startY)>6,a=Math.hypot(r.x-D.x,r.y-D.y)<Ce()*1.1;if(E.grabbed&&(E.grabbed=!1,e.removeAttribute(`data-grabbing`),k=Math.hypot(D.vx,D.vy)>60,k||Te()),!i&&a&&r.inside&&(O.vstretch-=3*n.wobble,n.morphOnClick&&n.cycle.length>1)){let e=n.cycle.indexOf(A.pending||A.to);A.pending=n.cycle[(e+1)%n.cycle.length]}t.pointerType!==`mouse`&&(E.inside=!1),I=!1,W()},Y=()=>{I=!1,E.inside=!1,E.down=!1,E.grabbed&&(E.grabbed=!1,e.removeAttribute(`data-grabbing`),Te()),W()};window.addEventListener(`pointermove`,K,{passive:!0}),window.addEventListener(`pointerdown`,q,{passive:!0}),window.addEventListener(`pointerup`,J,{passive:!0}),window.addEventListener(`pointercancel`,Y,{passive:!0}),document.documentElement.addEventListener(`pointerleave`,Y);let Oe=e=>{e.preventDefault(),_e=!0,cancelAnimationFrame(N),N=0},ke=()=>V(e=>e+1);t.addEventListener(`webglcontextlost`,Oe),t.addEventListener(`webglcontextrestored`,ke);let Ae=new ResizeObserver(()=>{Se(),W()});Ae.observe(e);let je=()=>{w.clip&&(L&&H?w.clip.play().catch(()=>{}):w.clip.pause())},Me=new IntersectionObserver(e=>{L=e.some(e=>e.isIntersecting),je(),W()});Me.observe(e);let X=()=>{H=document.visibilityState!==`hidden`,je(),W()};document.addEventListener(`visibilitychange`,X);let Z=new MutationObserver(()=>{ye(),W()});return Z.observe(document.documentElement,{attributes:!0,attributeFilter:[`class`,`style`,`data-theme`]}),document.fonts?.ready&&document.fonts.ready.then(()=>{T.key=``,ye(),W()}),Se(),f(`content`),f(`${U.current.shape}>${U.current.shape}`),xe(),W(),()=>{cancelAnimationFrame(N),z.current=null,Ae.disconnect(),Me.disconnect(),Z.disconnect(),window.removeEventListener(`pointermove`,K),window.removeEventListener(`pointerdown`,q),window.removeEventListener(`pointerup`,J),window.removeEventListener(`pointercancel`,Y),document.documentElement.removeEventListener(`pointerleave`,Y),document.removeEventListener(`visibilitychange`,X),t.removeEventListener(`webglcontextlost`,Oe),t.removeEventListener(`webglcontextrestored`,ke),be(),n.isContextLost()||(s.forEach(e=>{n.deleteProgram(e.program),n.deleteShader(e.fragment)}),n.deleteShader(i),n.deleteTexture(ce),n.deleteTexture(b),n.deleteTexture(x),n.deleteFramebuffer(le),n.deleteVertexArray(v))}},[B]),(0,i.jsxs)(`div`,{ref:he,className:`fluid-glass${F?` ${F}`:``}`,style:I,"data-interaction":k,"data-clickable":M?``:void 0,children:[(0,i.jsx)(`canvas`,{ref:R,className:`fluid-glass__canvas`,"aria-hidden":`true`}),(0,i.jsx)(`div`,{ref:ge,className:`fluid-glass__handle`,"aria-hidden":`true`}),e?(0,i.jsx)(`p`,{className:`fluid-glass__label`,children:e}):null,L?(0,i.jsx)(`div`,{className:`fluid-glass__content`,children:L}):null]})};export{v as default};