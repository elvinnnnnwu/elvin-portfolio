# Elvin Wu · 从想法到现实

品牌、内容、数字化与个人创作案例集，24个真实项目故事。

线上网址：https://elvinnnnnwu.github.io/elvin-portfolio/

## 当前版本

v0.16.2，2026-10-22。E＋W个人标识、作品星球、拼贴与目录浏览、彩色照片吊牌、Summer图文画廊、AI原创歌单及能力案例索引。

网站是作品展示；案例本身的业务系统状态以案例说明为准。本仓库不提供真实业务后台、账号、凭据、原始私密聊天或完整原始素材库。

## 开发与更新

React 19、TypeScript、Vite。Node.js 22.12及以上，使用pnpm锁文件。

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

`src/`为可编辑源码，`public/`为精选的网页素材；原彩色个人照片、三首原创歌曲及生成的歌曲封面用于此作品集。`docs/`为静态发布快照，GitHub Pages从`main`的`/docs`发布。更新后将构建目录`dist/`内容同步到`docs/`并提交；仅修改源码不会自动替换发布快照。资源用相对路径，案例使用hash路由，可直接打开与刷新。

## 来源与权利

React Bits交互组件基于固定版本集成，来源记录见`src/vendor/react-bits/SOURCE.json`，许可见`src/vendor/react-bits/LICENSE.md`及`docs/licenses/react-bits.txt`。其他组件来源见`THIRD_PARTY_NOTICES.md`。个人、品牌、照片、影音及项目素材保留各自权利；此仓库的公开不授予素材独立商用许可。
