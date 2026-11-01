# Fungi 答辩幻灯片

**Fungi** —— 局域网下的多模态多智能体分布式协同通信系统。
源码在 [CN-Fungi/Fungi](https://github.com/CN-Fungi/Fungi)，知乎专栏《从 Psi 到 Fungi》的二维码印在封面页。

本仓库是它的《计算机网络》课程设计答辩演示文稿：2026-11-01，7 班（李奕璇 / 周予 / 林珊萍 / 刘新宇）。
用 [open-slide] 写成 React 组件，**22 页**，固定 **1920 × 1080** 画布，每页带演讲备注。

## 快速开始

```bash
pnpm install
pnpm dev
```

然后打开开发服务器，改 `slides/fungi-defense/index.tsx`。

## 页面结构

| 页 | 章节 | 标题 |
| --- | --- | --- |
| 01 | 封面 | Fungi · 计算机网络课程设计答辩 |
| 02 | 起点 | Agent，就是给大模型装上了手脚。 |
| 03 | 从一到多 | 再往前一步：一个 Agent，变成一队。 |
| 04 | 分布式 | 一台机器上的 Agent 再强，也只有一台机器。 |
| 05 | 名字 | Fungi：冒出来的那一朵，只是边角。 |
| 06 | 来处 | 有两件东西不是从零写的，是从自己的项目里搬来的。 |
| 07 | 角色 | 一台主机上，住着两种 Agent。 |
| 08 | 工具面 | 没有 Peer，也精彩：一台主机上的十种工具。 |
| 09 | 入口 | 开一间房：一个端口，一把钥匙。 |
| 10 | 协议 | 一条局域网上，只用了三种应用层协议。 |
| 11 | 消息转告流 | 信使替你在场：它记得你是谁，也记得你下周有课。 |
| 12 | 文件传输流 | 文件不问模型：字节先落盘，再问人。 |
| 13 | 数据面 | 一个 1.29 GB 的文件，要走三段路。 |
| 14 | 分段 | 不整块传：切成窗口，各写各的。 |
| 15 | 落地 | 先落在 .part 上，验完再改名。 |
| 16 | 续传 | 续传的骨架，是从 ARQ 借来的。 |
| 17 | 记忆 | 记忆不靠向量库，就靠几个文件。 |
| 18 | 多模态 · 视频 | 模型看不见视频，那就拆成它看得见的东西。 |
| 19 | 多模态 · 谁给坐标 | 坐标不该由模型猜：让它自己暴露出来。 |
| 20 | 多模态 · 能力拓展 | 这条路别人也走过：Jev 把“选哪个”做成了一层。 |
| 21 | 工程与验证 | 怎么证明它真的跑得起来。 |
| 22 | 结束 | 谢谢。 |

## 脚本

| 命令 | 作用 |
| --- | --- |
| `pnpm dev` | 起开发服务器，热更新 |
| `pnpm build` | 打静态包到 `dist/` |
| `pnpm preview` | 本地预览构建产物 |
| `pnpm sync:skills` | 同步 open-slide 的 agent 技能到 `.claude/` 与 `.agents/` |

## 播放操作

- ← / → / PageUp / PageDown 翻页
- `F` 进全屏放映，`Esc` 退出
- 放映模式下 Space / → 下一页，← 上一页

## 演讲备注

每页的备注写在 `slides/fungi-defense/index.tsx` 导出的 `notes` 数组里，与页码数组一一对齐，放映时在 presenter 视图显示。**备注是代码的一部分，不要另存成 md 或 txt。**

## 仓库结构

```
slides/fungi-defense/index.tsx   # 全部 22 页 + 设计系统 + 转场 + 演讲备注
slides/fungi-defense/assets/     # 页内图片、视频、二维码
slides/getting-started/          # open-slide 模板自带的示例页
assets/  themes/                 # 跨页复用素材与主题
.claude/skills/  .agents/skills/ # open-slide 技能（由 pnpm sync:skills 维护，勿手改）
open-slide.config.ts             # 端口、slidesDir 等可选配置
netlify.toml  vercel.json        # 部署配置
```

写新页、改布局、配色、转场的规范见 [`CLAUDE.md`](./CLAUDE.md) 与
[`.claude/skills/slide-authoring/SKILL.md`](./.claude/skills/slide-authoring/SKILL.md)。

## 媒体与 Git LFS

`_media/**/*.mp4` 走 [Git LFS](https://git-lfs.com)（约 22 MB 的参考视频），克隆后需要：

```bash
git lfs install
```

否则拿到的是指针文件。`_media/` 下的 PNG、`slides/**/assets/` 下的素材都是普通 blob，
`node_modules/`、`dist/`、`photo/`（本地截图）不入库。

## 部署

`netlify.toml` 与 `vercel.json` 已配好：`npm run build` → 发布 `dist/`，SPA 兜底重写到 `index.html`。

## License

[MIT](./LICENSE)
