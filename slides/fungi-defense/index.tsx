import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';
import type { ReactNode } from 'react';

import architecture from './assets/architecture.png';
import courierShot from './assets/courier.png';
import deciderShot from './assets/decider.png';
import qrRepo from './assets/qr-repo.png';
import qrZhihu from './assets/qr-zhihu.png';
import roomHost from './assets/room-host.png';
import roomJoin from './assets/room-join.png';
import rawShot from './assets/screen-raw.png';
import binaryShot from './assets/screen-binary.png';
import numberedShot from './assets/screen-numbered.png';
import uiTransfer from './assets/ui-transfer.png';

export const design: DesignSystem = {
  palette: { bg: '#F7F3EA', text: '#1B1917', accent: '#D8674B' },
  fonts: {
    display:
      '"Segoe UI Variable Display", "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    body: '"Segoe UI", "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  },
  typeScale: { hero: 190, body: 36 },
  radius: 10,
};

const muted = '#6C6359';
const dim = '#8C8175';
const line = '#D9D1C4';
const paper = '#FBF8F1';
const teal = '#2D6C66';
const tealSoft = '#E3ECE8';
const warm = '#F6E2D8';
const mono = '"Cascadia Code", "JetBrains Mono", Consolas, monospace';

const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';
const HOLD: Keyframe[] = [{ opacity: 1 }, { opacity: 1 }];

export const transition: SlideTransition = {
  duration: 260,
  exit: { duration: 260, easing: EASE_IN, keyframes: HOLD },
  enter: {
    duration: 260,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

const fill = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  position: 'relative',
} as const;

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 110,
        right: 110,
        bottom: 40,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 21,
        letterSpacing: '0.1em',
        color: dim,
        fontFamily: mono,
      }}
    >
      <span>FUNGI · LAN MULTI-AGENT</span>
      <span>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const Frame = ({ children, pad = 110 }: { children: ReactNode; pad?: number }) => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: `${pad}px ${pad}px 92px`,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--osd-font-body)',
    }}
  >
    {children}
    <Footer />
  </div>
);

const Kicker = ({ children, color = 'var(--osd-accent)' }: { children: ReactNode; color?: string }) => (
  <div
    style={{
      fontSize: 23,
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color,
    }}
  >
    {children}
  </div>
);

const Head = ({ children, size = 66 }: { children: ReactNode; size?: number }) => (
  <h1
    style={{
      fontFamily: 'var(--osd-font-display)',
      fontSize: size,
      fontWeight: 850,
      lineHeight: 1.16,
      letterSpacing: '-0.015em',
      margin: '24px 0 0',
    }}
  >
    {children}
  </h1>
);

const Lead = ({ children, size = 30 }: { children: ReactNode; size?: number }) => (
  <p style={{ fontSize: size, lineHeight: 1.55, color: muted, margin: '26px 0 0' }}>{children}</p>
);

const Rule = ({ color = line }: { color?: string }) => (
  <div style={{ height: 1, background: color, width: '100%' }} />
);

const Tag = ({
  children,
  color = 'var(--osd-accent)',
  bg = warm,
}: {
  children: ReactNode;
  color?: string;
  bg?: string;
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 16px',
      borderRadius: 999,
      background: bg,
      color,
      fontSize: 21,
      fontWeight: 700,
      lineHeight: 1,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

const Stat = ({
  value,
  label,
  accent = 'var(--osd-text)',
}: {
  value: string;
  label: string;
  accent?: string;
}) => (
  <div>
    <div
      style={{
        fontSize: 62,
        fontWeight: 850,
        lineHeight: 1,
        letterSpacing: '-0.03em',
        color: accent,
        fontFamily: mono,
      }}
    >
      {value}
    </div>
    <div style={{ fontSize: 21, color: dim, marginTop: 10, lineHeight: 1.4 }}>{label}</div>
  </div>
);

const Person = ({ name, id }: { name: string; id: string }) => (
  <div>
    <div style={{ fontSize: 30, fontWeight: 700 }}>{name}</div>
    <div style={{ fontSize: 22, color: dim, fontFamily: mono, marginTop: 6 }}>{id}</div>
  </div>
);

const Block = ({
  n,
  title,
  body,
  accent = 'var(--osd-accent)',
  tall = false,
}: {
  n?: string;
  title: string;
  body: ReactNode;
  accent?: string;
  tall?: boolean;
}) => (
  <div
    style={{
      background: paper,
      border: `1px solid ${line}`,
      borderTop: `5px solid ${accent}`,
      borderRadius: 10,
      padding: '22px 26px 24px',
      minHeight: tall ? 252 : undefined,
      boxSizing: 'border-box',
    }}
  >
    {n && (
      <div style={{ fontFamily: mono, fontSize: 21, color: accent, fontWeight: 700 }}>{n}</div>
    )}
    <div style={{ fontSize: 30, fontWeight: 800, marginTop: n ? 10 : 0, lineHeight: 1.25 }}>
      {title}
    </div>
    <div style={{ fontSize: 23, color: muted, marginTop: 10, lineHeight: 1.5 }}>{body}</div>
  </div>
);

const Kv = ({ k, children }: { k: string; children: ReactNode }) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
    <div
      style={{
        fontFamily: mono,
        fontSize: 21,
        color: 'var(--osd-accent)',
        fontWeight: 700,
        minWidth: 86,
        paddingTop: 4,
      }}
    >
      {k}
    </div>
    <div style={{ fontSize: 24, lineHeight: 1.5, color: muted }}>{children}</div>
  </div>
);

const Shot = ({
  src,
  w,
  h,
  caption,
  fit = 'cover',
}: {
  src: string;
  w: number;
  h?: number;
  caption?: string;
  fit?: 'cover' | 'contain';
}) => (
  <figure style={{ margin: 0, width: w, flexShrink: 0 }}>
    <img
      src={src}
      style={{
        width: w,
        height: h,
        objectFit: fit,
        objectPosition: h ? 'top center' : undefined,
        display: 'block',
        border: `1px solid ${line}`,
        borderRadius: 10,
        background: '#FFFFFF',
        boxSizing: 'border-box',
      }}
    />
    {caption && (
      <figcaption style={{ fontSize: 21, color: dim, marginTop: 10, lineHeight: 1.45 }}>
        {caption}
      </figcaption>
    )}
  </figure>
);

const Cap = ({
  n,
  title,
  body,
  tag,
}: {
  n: string;
  title: string;
  body: string;
  tag?: string;
}) => (
  <div
    style={{
      background: paper,
      border: `1px solid ${line}`,
      borderRadius: 10,
      padding: '18px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontFamily: mono, fontSize: 20, color: dim }}>{n}</span>
      {tag && <Tag>{tag}</Tag>}
    </div>
    <div style={{ fontSize: 27, fontWeight: 800, lineHeight: 1.25 }}>{title}</div>
    <div style={{ fontSize: 21, color: muted, lineHeight: 1.5 }}>{body}</div>
  </div>
);

const Note = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      marginTop: 'auto',
      paddingTop: 20,
      borderTop: `1px solid ${line}`,
      display: 'flex',
      gap: 30,
      alignItems: 'baseline',
      fontSize: 22,
      color: muted,
      lineHeight: 1.45,
    }}
  >
    {children}
  </div>
);

const Arrow = ({ label }: { label?: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flexShrink: 0 }}>
    <div style={{ fontSize: 30, color: 'var(--osd-accent)', lineHeight: 1 }}>→</div>
    {label && (
      <div style={{ fontFamily: mono, fontSize: 18, color: dim, letterSpacing: '0.04em' }}>{label}</div>
    )}
  </div>
);

const LanePill = ({ children, accent = false }: { children: ReactNode; accent?: boolean }) => (
  <div
    style={{
      background: accent ? warm : paper,
      border: `1px solid ${accent ? '#E6C7B6' : line}`,
      borderRadius: 8,
      padding: '13px 20px',
      fontSize: 23,
      fontWeight: accent ? 700 : 500,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </div>
);

// ── 01 封面 ────────────────────────────────────────────────────────────────

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      background: 'var(--osd-bg)',
      color: 'var(--osd-text)',
      padding: '88px 110px 70px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      fontFamily: 'var(--osd-font-body)',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <Kicker>计算机网络 · 课程设计答辩</Kicker>
      <div style={{ fontFamily: mono, fontSize: 22, color: dim, letterSpacing: '0.12em' }}>2026.11.1</div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
      <div style={{ flex: '1 1 0', minWidth: 0 }}>
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 180,
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.05em',
          }}
        >
          Fungi
        </div>
        <div style={{ fontSize: 44, fontWeight: 650, lineHeight: 1.34, marginTop: 30, maxWidth: 960, translate: '0px 7.79px' }}>
          局域网下的多模态
          <br />
          多智能体分布式协同通信系统
        </div>
        <div style={{ display: 'flex', gap: 14, marginTop: 30 }}>
          <Tag>LAN</Tag>
          <Tag color={teal} bg={tealSoft}>
            MULTI-AGENT
          </Tag>
          <Tag color={muted} bg="#ECE7DD">
            MULTIMODAL
          </Tag>
        </div>
        <div style={{ fontSize: 26, color: muted, lineHeight: 1.55, marginTop: 34, maxWidth: 780 }}>
          一台主机起房、其余直连加入；每台主机一位本机 Agent，好友主机之间一位信使。
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 12,
          flexShrink: 0,
        }}
      >
        <div style={{ fontSize: 20, color: dim, fontFamily: mono, letterSpacing: '0.06em' }}>
          扫码：仓库与专栏
        </div>
        <img
          src={qrRepo}
          style={{
            width: 232,
            height: 232,
            display: 'block',
            borderRadius: 8,
            background: '#FFFFFF',
            border: `1px solid ${line}`,
          }}
        />
        <div style={{ fontSize: 20, color: muted, fontFamily: mono }}>GitHub · CN-Fungi/Fungi</div>
        <img
          src={qrZhihu}
          style={{
            width: 232,
            height: 232,
            display: 'block',
            borderRadius: 8,
            background: '#FFFFFF',
            border: `1px solid ${line}`,
            marginTop: 4,
          }}
        />
        <div style={{ fontSize: 20, color: muted, fontFamily: mono }}>知乎 · 从 Psi 到 Fungi</div>
      </div>
    </div>

    <div>
      <Rule />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30, marginTop: 26 }}>
        <Person name="李奕璇" id="20241980" />
        <Person name="周予" id="20241974" />
        <Person name="林珊萍" id="20241981" />
        <Person name="刘新宇" id="20241982" />
      </div>
      <div style={{ marginTop: 18, color: dim, fontSize: 22 }}>7 班 · 2026 年 11 月 1 日</div>
    </div>
  </div>
);

// ── 02 Agent 是什么 ────────────────────────────────────────────────────────

const AgentPage: Page = () => (
  <Frame>
    <Kicker>02 / 起点</Kicker>
    <Head>Agent，就是给大模型装上了手脚。</Head>
    <Lead>只会说话的模型，套上一圈工具、再划一圈边界，就成了一个能办事的 Agent。三件事缺一不可。</Lead>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 46 }}>
      <Block
        tall
        n="01"
        title="会说 · 大模型"
        body={
          <>
            理解你的意思、把任务拆开、把结论说清楚。
            <br />
            它读得懂，却碰不到你的机器。
          </>
        }
      />
      <Block
        tall
        n="02"
        title="能做 · 工具"
        body={
          <>
            读写文件、跑命令、搜网页、点窗口。
            <br />
            模型只决定调哪一个、传什么参数。
          </>
        }
        accent={teal}
      />
      <Block
        tall
        n="03"
        title="有界 · 沙箱"
        body={
          <>
            这一个回合被允许碰到的范围：哪些目录、哪些窗口、能不能出网。
            <br />
            边界写在工具里，不靠模型自觉。
          </>
        }
        accent={muted}
      />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 44 }}>
      <LanePill accent>目标</LanePill>
      <Arrow label="tool" />
      <LanePill>工具执行</LanePill>
      <Arrow label="result" />
      <LanePill>读结果</LanePill>
      <Arrow label="loop" />
      <LanePill accent>回答</LanePill>
      <div style={{ fontSize: 23, color: muted, marginLeft: 26, lineHeight: 1.55 }}>
        一次回合，就是这条环路跑若干圈。跑得通就停；跑不通就换一条路 —— 但每一圈都在沙箱里。
      </div>
    </div>
    <Note>
      <span style={{ fontFamily: mono, fontSize: 24, color: 'var(--osd-accent)', fontWeight: 700 }}>
        想 → 调工具 → 读结果 → 再想
      </span>
      <span>停下来的时候交出来的，必须是一句人话。中间那些失败，沙箱不会替它兜底。</span>
    </Note>
  </Frame>
);

// ── 03 子 Agent ────────────────────────────────────────────────────────────

const LayerBox = ({ tag, name, body }: { tag: string; name: string; body: string }) => (
  <div
    style={{
      background: paper,
      border: `1px solid ${line}`,
      borderRadius: 10,
      padding: '22px 26px',
      width: 420,
      boxSizing: 'border-box',
    }}
  >
    <div style={{ fontFamily: mono, fontSize: 20, letterSpacing: '0.1em', color: 'var(--osd-accent)' }}>
      {tag}
    </div>
    <div style={{ fontSize: 30, fontWeight: 800, marginTop: 8 }}>{name}</div>
    <div style={{ fontSize: 22, color: muted, marginTop: 8, lineHeight: 1.5 }}>{body}</div>
  </div>
);

const SubAgentPage: Page = () => (
  <Frame>
    <Kicker>03 / 从一到多</Kicker>
    <Head>再往前一步：一个 Agent，变成一队。</Head>
    <div style={{ display: 'flex', alignItems: 'center', gap: 26, marginTop: 54 }}>
      <LayerBox tag="L1" name="Orchestrator" body="只和用户说话，拆任务、派活、收报告。" />
      <Arrow label="spawn" />
      <LayerBox tag="L2" name="Task Agent" body="领到一个目标，自己动手做，必要时再拆。" />
      <Arrow label="spawn" />
      <LayerBox tag="L3" name="Worker" body="只做一件小事：一次读、一条命令、一处改动。" />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px 44px', marginTop: 46 }}>
      <Kv k="不等">spawn 立刻返回 dispatched，本回合就结束 —— 派活是一个动作，不是一次等待。</Kv>
      <Kv k="回来">跑完之后，报告作为一条新回合的输入回来，而不是主 Agent 去问。</Kv>
      <Kv k="说清">必须写 goal 与 reply_format：返回格式是子 Agent 唯一能被看见的东西。</Kv>
      <Kv k="限量">一个回合最多 8 个；L3 只有 read / write / edit / glob / grep / bash 六件工具。</Kv>
    </div>
    <div
      style={{
        marginTop: 34,
        paddingTop: 24,
        borderTop: `1px solid ${line}`,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <span style={{ fontFamily: mono, fontSize: 20, color: dim, whiteSpace: 'nowrap' }}>为什么不自己干</span>
      <LanePill accent>上下文有限</LanePill>
      <LanePill accent>并行才快</LanePill>
      <LanePill accent>越往下权限越小</LanePill>
      <span style={{ fontSize: 22, color: muted, marginLeft: 18, lineHeight: 1.5 }}>
        一个 Agent 什么都自己扛，最后什么都做不深。
      </span>
    </div>
    <Note>
      <span>
        这套三层骨架来自 <b>YESIR</b>：一个主机上的 Agent harness，原样搬进了 Fungi。
      </span>
    </Note>
  </Frame>
);

// ── 04 分布式 ──────────────────────────────────────────────────────────────

const DistributedPage: Page = () => (
  <Frame>
    <Kicker>04 / 分布式</Kicker>
    <Head size={62}>一台机器上的 Agent 再强，也只有一台机器。</Head>
    <div
      style={{
        background: warm,
        border: '1px solid #E6C7B6',
        borderRadius: 12,
        padding: '24px 32px 26px',
        marginTop: 30,
      }}
    >
      <div style={{ fontSize: 37, fontWeight: 800, lineHeight: 1.36, letterSpacing: '-0.01em' }}>
        “如果在每部主机上都部署一个 YESIR，让它们之间连接起来，会怎么样呢？”
      </div>
      <div style={{ fontSize: 23, color: '#7A4B3A', marginTop: 12, lineHeight: 1.5 }}>
        计网课立项那天的灵感。<b>Fungi 就是这个问句的答案</b>：一台主机起服务器、其余直连加入；每台主机一位本机
        Agent，好友主机之间一位信使。
      </div>
    </div>
    <div style={{ display: 'flex', gap: 44, marginTop: 30, alignItems: 'flex-start' }}>
      <Shot
        src={architecture}
        w={880}
        h={404}
        caption="立项时画的草图：两位用户、各自的信使、服务器转发，底下还挂着代理系统。"
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 22, color: dim, fontFamily: mono, letterSpacing: '0.08em' }}>
          被否掉的三个方案
        </div>
        <div style={{ fontSize: 23, color: muted, lineHeight: 1.55 }}>
          蓝牙 —— API 乱得像浆糊；P2P —— 写起来麻烦、防火墙频发；公网 —— 没钱租服务器，内网穿透更麻烦。
        </div>
        <div style={{ fontSize: 22, color: dim, fontFamily: mono, letterSpacing: '0.08em', marginTop: 6 }}>
          剩下的那个
        </div>
        <div style={{ fontSize: 23, color: 'var(--osd-text)', lineHeight: 1.55 }}>
          局域网：一台主机起服务器（hub），其余客户端直连；客户端之间要交流，服务器转发即可 —— 这一条单点，换来了
          整张网的可定位与可授权。
        </div>
      </div>
    </div>
  </Frame>
);

// ── 05 名字 ────────────────────────────────────────────────────────────────

const NamePage: Page = () => (
  <Frame>
    <Kicker>05 / 名字</Kicker>
    <Head>Fungi：冒出来的那一朵，只是边角。</Head>
    <div style={{ display: 'flex', gap: 60, marginTop: 34, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <Lead size={31}>
          命名灵感来自一部纪录片：森林里一片片冒出来的蘑菇，其实属于同一个巨大的个体。它真正的身体在地下，是绵延
          数千平方米的菌丝；地面上那些小伞，只是它探出来的指尖。
        </Lead>
      </div>
      <div style={{ width: 470, flexShrink: 0 }}>
        <div style={{ fontSize: 92, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>Fungi</div>
        <div style={{ fontSize: 25, color: muted, marginTop: 12, fontFamily: mono }}>/ˈfʌŋɡaɪ/ · n. 真菌</div>
        <div
          style={{
            marginTop: 20,
            padding: '18px 22px',
            background: paper,
            border: `1px solid ${line}`,
            borderRadius: 10,
            fontSize: 22,
            color: muted,
            lineHeight: 1.55,
          }}
        >
          不只是一个比喻：一张网上，每层 Agent 权限分明、各司其职，和地下的菌丝一模一样。
        </div>
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 40 }}>
      <Block n="地面" title="蘑菇" body="每台主机上的本机 Agent —— 你能看见、能对话的那一朵。" />
      <Block
        n="地下"
        title="菌丝"
        body="主机之间的局域网 —— 平时看不见，所有消息与文件都从它上面走。"
        accent={teal}
      />
      <Block
        n="风里"
        title="孢子"
        body="子 Agent 与下派的活 —— 从一朵传到另一朵，落地生根、各自干活。"
        accent={muted}
      />
    </div>
    <Note>
      <span style={{ fontFamily: mono, color: 'var(--osd-accent)' }}>FUNGI</span>
      <span>名字先于代码存在 —— 它决定了我们要做的是“一张网”，而不是“一个好用的聊天框”。</span>
    </Note>
  </Frame>
);

// ── 06 来处 ────────────────────────────────────────────────────────────────

const KinPage: Page = () => (
  <Frame>
    <Kicker>06 / 来处</Kicker>
    <Head>有两件东西不是从零写的，是从自己的项目里搬来的。</Head>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, marginTop: 48 }}>
      <div
        style={{
          background: paper,
          border: `1px solid ${line}`,
          borderTop: '5px solid var(--osd-accent)',
          borderRadius: 12,
          padding: '34px 38px 36px',
          minHeight: 320,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.02em' }}>Gasp-Design</span>
          <Tag>动效</Tag>
        </div>
        <div style={{ fontSize: 24, color: muted, lineHeight: 1.6, marginTop: 14 }}>
          一个动效设计项目。Fungi 的界面手感直接沿用它那一套：
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            marginTop: 22,
            fontSize: 24,
            color: muted,
          }}
        >
          <div>· 卡片怎么起 —— 顺势上浮，不是弹出来</div>
          <div>· 等待怎么呼吸 —— 转场 260ms，一步 180ms</div>
          <div>· 进度怎么收尾 —— 不跳回、不闪断</div>
        </div>
      </div>
      <div
        style={{
          background: paper,
          border: `1px solid ${line}`,
          borderTop: `5px solid ${teal}`,
          borderRadius: 12,
          padding: '34px 38px 36px',
          minHeight: 320,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.02em' }}>VidSense</span>
          <Tag color={teal} bg={tealSoft}>
            视频
          </Tag>
        </div>
        <div style={{ fontSize: 24, color: muted, lineHeight: 1.6, marginTop: 14 }}>
          一个独立的视频理解工具。整条本地管线搬过来就是 <b>video</b> 工具：
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            marginTop: 22,
            fontSize: 24,
            color: muted,
          }}
        >
          <div>· 抽帧、转写、选关键帧，三步都在本机</div>
          <div>· 这边只读它的事件卡，仓库一行都不改</div>
          <div>· 第十八页整段讲它</div>
        </div>
      </div>
    </div>
    <div
      style={{
        marginTop: 32,
        display: 'flex',
        alignItems: 'baseline',
        gap: 30,
        paddingTop: 26,
        borderTop: `1px solid ${line}`,
      }}
    >
      <span style={{ fontFamily: mono, fontSize: 21, color: dim, whiteSpace: 'nowrap' }}>
        为什么是这两件
      </span>
      <span style={{ fontSize: 26, lineHeight: 1.55 }}>
        因为都是自己写过的：动效在自己的项目里调过，视频管线在自己的仓库里跑过 ——
        搬进来不用猜它的边界，也不欠别人一次适配。
      </span>
    </div>
    <Note>
      <span>其他的老项目这里不表：这次只保留与这套系统直接相关的两件 —— 一件给手，一件给眼。</span>
    </Note>
  </Frame>
);

// ── 07 两个 Agent ──────────────────────────────────────────────────────────

const RolesPage: Page = () => (
  <Frame>
    <Kicker>07 / 角色</Kicker>
    <Head>一台主机上，住着两种 Agent。</Head>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, marginTop: 40 }}>
      <div
        style={{
          background: paper,
          border: `1px solid ${line}`,
          borderLeft: `6px solid var(--osd-accent)`,
          borderRadius: 10,
          padding: '24px 28px 26px',
        }}
      >
        <div style={{ fontFamily: mono, fontSize: 21, color: 'var(--osd-accent)' }}>每台恰好一个</div>
        <div style={{ fontSize: 34, fontWeight: 850, marginTop: 8 }}>Orchestrator · 本机</div>
        <div style={{ fontSize: 23, color: muted, lineHeight: 1.55, marginTop: 12 }}>
          你只和它说话。它派活、问你、读写本机文件、调用十种工具。没有网络的时候，它就是全部。
        </div>
      </div>
      <div
        style={{
          background: paper,
          border: `1px solid ${line}`,
          borderLeft: `6px solid ${teal}`,
          borderRadius: 10,
          padding: '24px 28px 26px',
        }}
      >
        <div style={{ fontFamily: mono, fontSize: 21, color: teal }}>每个好友一个</div>
        <div style={{ fontSize: 34, fontWeight: 850, marginTop: 8 }}>Messenger · 信使</div>
        <div style={{ fontSize: 23, color: muted, lineHeight: 1.55, marginTop: 12 }}>
          你从不直接和它说话。它和对面的信使谈：代收代复留言、读写共享目录、收发文件。
        </div>
      </div>
    </div>
    <div
      style={{
        marginTop: 30,
        background: '#EFEAE0',
        border: `1px solid ${line}`,
        borderRadius: 12,
        padding: '24px 30px',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        fontSize: 23,
        color: muted,
        lineHeight: 1.5,
      }}
    >
      <span
        style={{
          fontFamily: mono,
          color: 'var(--osd-text)',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}
      >
        1 + N
      </span>
      <span>
        一台主机 = 1 个本机 Agent + 每个在线好友 1 个信使。两位用户之间没有直连：跨主机的事，一律由两位信使谈；
        信使每动一次你的东西，都要先变成一张卡片问你。
      </span>
    </div>
    <div
      style={{
        marginTop: 34,
        paddingTop: 24,
        borderTop: `1px solid ${line}`,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <span style={{ fontFamily: mono, fontSize: 20, color: dim, whiteSpace: 'nowrap' }}>一条消息</span>
      <LanePill>用户 A</LanePill>
      <Arrow />
      <LanePill accent>Orchestrator A</LanePill>
      <Arrow />
      <LanePill>信使 A</LanePill>
      <Arrow label="LAN" />
      <LanePill>信使 B</LanePill>
      <Arrow />
      <LanePill accent>Orchestrator B</LanePill>
      <Arrow />
      <LanePill>用户 B</LanePill>
      <span style={{ fontSize: 21, color: muted, marginLeft: 14, lineHeight: 1.45 }}>
        中间那一段没有直连
      </span>
    </div>
    <Note>
      <span>结构上的规矩：你说的话只进本机 Agent，对面的话只进信使 —— 两条线不许串。</span>
    </Note>
  </Frame>
);

// ── 08 十种工具 ────────────────────────────────────────────────────────────

const ToolboxPage: Page = () => (
  <Frame>
    <Kicker>08 / 工具面</Kicker>
    <Head size={58}>没有 Peer，也精彩：一台主机上的十种工具。</Head>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 18, marginTop: 44 }}>
      <Cap n="01" title="命令与文件" body="一次性 bash 跑命令；read / write / edit 改文件。" />
      <Cap n="02" title="网页搜索" body="无 key 的引擎链，带相关性过滤，不信陌生页面。" />
      <Cap n="03" title="主动询问" body="给选项、等回答；只有本机 Agent 能问。" />
      <Cap n="04" title="技能与日记" body="技能公开，日记私有 —— 都只是文件。" />
      <Cap n="05" title="桌面控制" body="看屏幕、点控件、打字；坐标由程序给。" />
      <Cap n="06" title="后台执行" body="慢命令丢后台，跑完自动唤醒会话。" />
      <Cap n="07" title="下派子 Agent" body="拆成 L2 / L3，各自跑，报告回来唤醒。" />
      <Cap n="08" title="GhostWorld" tag="EXT" body="另一个项目接成角色：行走、对话、拾取。" />
      <Cap n="09" title="视频理解" tag="EXT" body="本地管线：抽帧、转写、关键帧，一次调用。" />
      <Cap n="10" title="MCP" tag="EXT" body="把外部工具挂成 mcp__server__tool。" />
    </div>
    <div
      style={{
        marginTop: 34,
        paddingTop: 22,
        borderTop: `1px solid ${line}`,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}
    >
      <span style={{ fontFamily: mono, fontSize: 20, color: dim, whiteSpace: 'nowrap' }}>三档</span>
      <LanePill accent>核心 7 件 · 常开</LanePill>
      <LanePill>拓展 3 件 · 视频 / GhostWorld / MCP</LanePill>
      <LanePill>实验性 2 件 · 日记 / 桌控</LanePill>
      <span style={{ fontSize: 21, color: muted, marginLeft: 12, lineHeight: 1.45 }}>
        关着的档位，模型连工具名字都看不到
      </span>
    </div>
    <Note>
      <span>关掉网络，这十件仍然在；网络只是让它们能跨主机用。</span>
      <span style={{ fontFamily: mono, color: dim, fontSize: 20 }}>
        开关关着 = 工具根本不进工具面，模型看不见
      </span>
    </Note>
  </Frame>
);

// ── 09 房间 ────────────────────────────────────────────────────────────────

const RoomPage: Page = () => (
  <Frame>
    <Kicker>09 / 入口</Kicker>
    <Head>开一间房：一个端口，一把钥匙。</Head>
    <div style={{ display: 'flex', gap: 40, marginTop: 32, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <Shot src={roomHost} w={960} h={365} caption="发起方：主机名、昵称、Token。房间起在哪个端口，界面自己找。" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
          <Kv k="端口">
            <b>8899</b> 起，向上扫 32 个：第一个空位就是房间，不用你挑，也不用记。
          </Kv>
          <Kv k="找房">
            加入方不必手填 IP：UDP connect 拿到本机局域网地址，扫同网段；刷新按钮就是重扫一遍。
          </Kv>
          <Kv k="钥匙">
            每个请求都带 token，错了就 <span style={{ fontFamily: mono }}>403</span>；房主改了 token，旧钥匙立即失效。
          </Kv>
        </div>
      </div>
      <div style={{ width: 600, flexShrink: 0 }}>
        <Shot src={roomJoin} w={600} h={450} caption="加入方：房主 IP + 同一个 Token。加入成功后关窗也不停房。" />
        <div
          style={{
            marginTop: 16,
            background: paper,
            border: `1px solid ${line}`,
            borderRadius: 10,
            padding: '16px 22px',
            fontSize: 22,
            color: muted,
            lineHeight: 1.55,
          }}
        >
          <span style={{ color: 'var(--osd-text)', fontWeight: 700 }}>手机</span> 扫同一个码进来：
          二维码里就带着地址与 token —— 同一间房，只是换了个屏幕。
        </div>
      </div>
    </div>
    <div
      style={{
        marginTop: 24,
        paddingTop: 20,
        borderTop: `1px solid ${line}`,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}
    >
      <span style={{ fontFamily: mono, fontSize: 20, color: dim, whiteSpace: 'nowrap' }}>一间房的寿命</span>
      <LanePill accent>起房</LanePill>
      <Arrow />
      <LanePill>名册回成员</LanePill>
      <Arrow label="30s" />
      <LanePill>心跳保活</LanePill>
      <Arrow label="25s" />
      <LanePill>长轮询取信</LanePill>
      <Arrow label="timeout" />
      <LanePill accent>超时即剔除</LanePill>
      <span style={{ fontSize: 21, color: muted, marginLeft: 18, lineHeight: 1.5 }}>
        拉模型：不维持长连接，空闲成本极低
      </span>
    </div>
  </Frame>
);

// ── 10 协议 ───────────────────────────────────────────────────────────────

const LayerRow = ({
  label,
  pills,
  hint,
}: {
  label: string;
  pills: string[];
  hint: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      background: paper,
      border: `1px solid ${line}`,
      borderRadius: 10,
      padding: '14px 22px',
    }}
  >
    <div
      style={{
        width: 92,
        flexShrink: 0,
        fontFamily: mono,
        fontSize: 21,
        fontWeight: 700,
        color: 'var(--osd-accent)',
      }}
    >
      {label}
    </div>
    <div style={{ display: 'flex', gap: 10, flexWrap: 'nowrap' }}>
      {pills.map((p) => (
        <span
          key={p}
          style={{
            border: `1px solid ${line}`,
            background: '#FFFFFF',
            borderRadius: 8,
            padding: '8px 14px',
            fontSize: 21,
            whiteSpace: 'nowrap',
          }}
        >
          {p}
        </span>
      ))}
    </div>
    <div style={{ marginLeft: 'auto', fontSize: 21, color: dim, whiteSpace: 'nowrap' }}>{hint}</div>
  </div>
);

const ProtocolPage: Page = () => (
  <Frame>
    <Kicker>10 / 协议</Kicker>
    <Head size={60}>一条局域网上，只用了三种应用层协议。</Head>
    <Lead size={26}>
      对外只有 HTTP：一个端口、一把钥匙。流走 SSE，工具走 MCP —— 按层摆开，才看得清每种流量落在哪一层。
    </Lead>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
      <LayerRow label="应用层" pills={['HTTP', 'SSE', 'MCP']} hint="三种协议" />
      <LayerRow label="传输层" pills={['TCP（hub ↔ client）', '本机管道（stdio）']} hint="两条腿" />
      <LayerRow label="网络层" pills={['IPv4', '同一子网', '8899–8930 扫端口']} hint="一张网" />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 26 }}>
      <Block
        n="HTTP"
        title="一条连接做完控制面"
        body={
          <>
            join / heartbeat / send 是普通请求；poll 是长轮询，服务端最多挂 25 秒；文件走 Range ——
            <span style={{ fontFamily: mono }}> Accept-Ranges</span> /
            <span style={{ fontFamily: mono }}> Range</span> /
            <span style={{ fontFamily: mono }}> Content-Range</span>，回 206 或 416。token 在 body 或
            query 里，错了 403。
          </>
        }
      />
      <Block
        n="SSE"
        title="流只往一个方向"
        body={
          <>
            调模型时我们是 SSE 客户端：读 <span style={{ fontFamily: mono }}>data:</span> 行、以
            <span style={{ fontFamily: mono }}> [DONE] </span> 收尾；给浏览器推事件时落成 NDJSON，一行一个
            JSON，断了按 tape 重放。
          </>
        }
        accent={teal}
      />
      <Block
        n="MCP"
        title="应用层的另一种方言"
        body={
          <>
            与本机子进程说 JSON-RPC 2.0（换行分隔，initialize 握手 2025-06-18），工具挂成
            <span style={{ fontFamily: mono }}> mcp__server__tool</span>；它不走 TCP。
          </>
        }
        accent={muted}
      />
    </div>
    <Note>
      <span>为什么不用 WebSocket：控制面频率低，长轮询够用；大文件走 HTTP Range，换协议也不带来带宽。</span>
    </Note>
  </Frame>
);

// ── 11 消息转告流 ──────────────────────────────────────────────────────────

const RelayPage: Page = () => (
  <Frame>
    <Kicker>11 / 消息转告流</Kicker>
    <Head size={62}>信使替你在场：它记得你是谁，也记得你下周有课。</Head>
    <div style={{ display: 'flex', gap: 44, marginTop: 30, alignItems: 'flex-start' }}>
      <Shot src={courierShot} w={540} h={498} caption="信使页：上面是长期记忆，下面是四周日历。" />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div style={{ fontSize: 27, fontWeight: 800 }}>长期记忆</div>
            <div style={{ fontSize: 22, color: muted, lineHeight: 1.55, marginTop: 4 }}>
              一段你写给它的自述：你是谁、什么时候在忙、别人问起怎么答。每次回复都重读一遍。
            </div>
          </div>
          <div>
            <div style={{ fontSize: 27, fontWeight: 800 }}>短期待办</div>
            <div style={{ fontSize: 22, color: muted, lineHeight: 1.55, marginTop: 4 }}>
              四周日历：过期未清的、今天的、未来 21 天的，一起进提示词 —— 所以“下周二有没有空”它答得出来。
            </div>
          </div>
          <div>
            <div style={{ fontSize: 27, fontWeight: 800 }}>只转告，不替你做主</div>
            <div style={{ fontSize: 22, color: muted, lineHeight: 1.55, marginTop: 4 }}>
              寻常消息代答，重要的事只汇报；要动你的文件，一律先出卡片。汇报走主人这一侧，不会漏到对面去。
            </div>
          </div>
          <div>
            <div style={{ fontSize: 27, fontWeight: 800 }}>邮件：人不在，也收得到</div>
            <div style={{ fontSize: 22, color: muted, lineHeight: 1.55, marginTop: 4 }}>
              留言直接落进对面主机上的邮箱文件，两端的 Agent 都不用醒 —— 离线容忍，回来再看。
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 20,
            background: paper,
            border: `1px solid ${line}`,
            borderRadius: 10,
            padding: '18px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            fontSize: 22,
            lineHeight: 1.45,
          }}
        >
          <div style={{ color: dim, fontFamily: mono, fontSize: 19 }}>对面 → 你的信使</div>
          <div>「下周二有空一起出去玩吗？」</div>
          <div style={{ color: dim, fontFamily: mono, fontSize: 19 }}>信使 → 对面</div>
          <div style={{ color: 'var(--osd-text)' }}>
            「他周二满课；周三下午没课，可以约 —— 要我把时间记下来吗？」
          </div>
        </div>
      </div>
    </div>
    <Note>
      <span>两样都落在文件里，改了立刻生效：不用重启，也不用重新加好友。</span>
    </Note>
  </Frame>
);

// ── 11 文件传输流 ──────────────────────────────────────────────────────────

const TransferPage: Page = () => (
  <Frame>
    <Kicker>12 / 文件传输流</Kicker>
    <Head>文件不问模型：字节先落盘，再问人。</Head>
    <div style={{ display: 'flex', gap: 42, marginTop: 30, alignItems: 'flex-start' }}>
      <Shot src={uiTransfer} w={800} h={500} caption="文件传输助手：一个只搬文件、不说话的会话。" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div>
          <div style={{ fontSize: 27, fontWeight: 800 }}>一枚滑块，两个模式</div>
          <div style={{ fontSize: 23, color: muted, lineHeight: 1.55, marginTop: 6 }}>
            每个好友一枚，左=允许（直接落盘），右=询问（先出一张卡）。曾经有过“始终允许”，后来换成了这枚可见、可逆的开关。
          </div>
        </div>
        <div>
          <div style={{ fontSize: 27, fontWeight: 800 }}>三个区域，三条规矩</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
            <Kv k="public/">
              共享目录，信使之间自由读写。
            </Kv>
            <Kv k="homes/">各自主机的地盘，非属主要问属主。</Kv>
            <Kv k="sessions/">会话，一律拒绝。</Kv>
          </div>
        </div>
        <div style={{ fontSize: 22, color: muted, lineHeight: 1.55 }}>
          字节先到房主盘暂存，收件人点了同意才进他的 <span style={{ fontFamily: mono }}>inbox/&lt;来源&gt;/</span>。
          传完，暂存副本由收件方删掉。
        </div>
      </div>
    </div>
    <div
      style={{
        marginTop: 22,
        paddingTop: 20,
        borderTop: `1px solid ${line}`,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <span style={{ fontFamily: mono, fontSize: 20, color: dim, whiteSpace: 'nowrap' }}>一次发送</span>
      <LanePill accent>发送方</LanePill>
      <Arrow label="HTTP" />
      <LanePill>房主盘暂存</LanePill>
      <Arrow label="ask" />
      <LanePill>收件人点卡片</LanePill>
      <Arrow />
      <LanePill accent>inbox/&lt;来源&gt;/</LanePill>
      <span style={{ fontSize: 21, color: muted, marginLeft: 18, lineHeight: 1.5 }}>
        同意才落终名；不同意，暂存副本由收件方删掉
      </span>
    </div>
    <Note>
      <span>传输从不经过 LLM：信封只带元数据，字节走 HTTP —— 大文件不该被当成一句话。</span>
    </Note>
  </Frame>
);

// ── 13 数据面 ─────────────────────────────────────────────────────────────

const StageCard = ({
  n,
  title,
  value,
  body,
  accent = 'var(--osd-accent)',
}: {
  n: string;
  title: string;
  value: string;
  body: string;
  accent?: string;
}) => (
  <div
    style={{
      flex: 1,
      background: paper,
      border: `1px solid ${line}`,
      borderTop: `5px solid ${accent}`,
      borderRadius: 10,
      padding: '20px 24px 22px',
    }}
  >
    <div style={{ fontFamily: mono, fontSize: 20, color: dim }}>{n}</div>
    <div style={{ fontSize: 27, fontWeight: 800, marginTop: 6 }}>{title}</div>
    <div style={{ fontFamily: mono, fontSize: 30, color: accent, marginTop: 10, lineHeight: 1.2 }}>
      {value}
    </div>
    <div style={{ fontSize: 22, color: muted, marginTop: 8, lineHeight: 1.5 }}>{body}</div>
  </div>
);

const DataPlanePage: Page = () => (
  <Frame>
    <Kicker>13 / 数据面</Kicker>
    <Head>一个 1.29 GB 的文件，要走三段路。</Head>
    <Lead>
      发送方把字节交给房主盘的暂存区，过局域网，再由收件方取走落到自己盘上。三段里只有中间那段是网络。
    </Lead>
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 18, marginTop: 40 }}>
      <StageCard
        n="① 写盘"
        title="交给房主盘"
        value="4.9 s · 268 MB/s"
        body="同一块盘上的拷贝，慢的是磁盘不是网络。"
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Arrow label="LAN" />
      </div>
      <StageCard
        n="② 过网"
        title="局域网那条腿"
        value="255 s · 5.05 MB/s"
        body="2.4 GHz 802.11n 的实测吞吐，整条链路的天花板。"
        accent={teal}
      />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Arrow label="write" />
      </div>
      <StageCard
        n="③ 落盘"
        title="进收件箱"
        value="inbox/<来源>/"
        body="先写 .part，验完才改名 —— 下一页讲。"
        accent={muted}
      />
    </div>
    <div
      style={{
        marginTop: 26,
        paddingTop: 22,
        borderTop: `1px solid ${line}`,
        display: 'flex',
        alignItems: 'baseline',
        gap: 40,
      }}
    >
      <span style={{ fontFamily: mono, fontSize: 26, color: 'var(--osd-accent)' }}>53×</span>
      <span style={{ fontSize: 22, color: muted, lineHeight: 1.5 }}>
        同一份文件，回环与 WLAN 的差距；三段时间里网络占了约 98%。
      </span>
      <span style={{ marginLeft: 'auto', fontFamily: mono, fontSize: 20, color: dim }}>
        1,286,738,079 B
      </span>
    </div>
    <div
      style={{
        marginTop: 22,
        background: paper,
        border: `1px solid ${line}`,
        borderRadius: 10,
        padding: '18px 24px',
        display: 'flex',
        gap: 28,
        alignItems: 'baseline',
      }}
    >
      <span style={{ fontFamily: mono, fontSize: 20, color: 'var(--osd-accent)', whiteSpace: 'nowrap' }}>
        旧界面的错
      </span>
      <span style={{ fontSize: 22, color: muted, lineHeight: 1.5 }}>
        它把 ①「写进暂存」显示成「已发送」—— ② 还没走完，发送方就已经看到成功。半截文件的另一半原因，在这里。
      </span>
    </div>
    <Note>
      <span>所以优化只能落在中间那段上：分段、续传、原子落地，全是为了它。</span>
    </Note>
  </Frame>
);

// ── 14 分段 ───────────────────────────────────────────────────────────────

const Win = ({ label, color }: { label: string; color: string }) => (
  <div
    style={{
      flex: 1,
      height: 46,
      background: color,
      borderRadius: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: mono,
      fontSize: 19,
      color: '#FFFFFF',
      opacity: 0.85,
    }}
  >
    {label}
  </div>
);

const RangePage: Page = () => (
  <Frame>
    <Kicker>14 / 分段</Kicker>
    <Head>不整块传：切成窗口，各写各的。</Head>
    <div style={{ display: 'flex', gap: 44, marginTop: 30, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 23, color: muted, lineHeight: 1.55 }}>
          HTTP 本来就支持要一段：一个 Range 头，服务端回 206 与 Content-Range。我们把这件小事用到了极限。
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
          <Kv k="要一段">
            <span style={{ fontFamily: mono }}>bytes=a-b</span> → 206；<span style={{ fontFamily: mono }}>a-</span>{' '}
            表示「从 a 到最后」。
          </Kv>
          <Kv k="越界">
            起点超过文件尾 → 416，回 <span style={{ fontFamily: mono }}>bytes */size</span>。
          </Kv>
          <Kv k="怪请求">
            多段、后缀、单位不对、a&gt;b → 忽略 Range，按 200 整块给。
          </Kv>
          <Kv k="先量">
            <span style={{ fontFamily: mono }}>?meta=1</span> 先问名字与尺寸，再规划窗口。
          </Kv>
          <Kv k="标准">
            这套东西在 HTTP 里叫 Range request（RFC 9110 §14）：<span style={{ fontFamily: mono }}>Accept-Ranges</span>、
            <span style={{ fontFamily: mono }}> Content-Range</span> 都是标准头，206 / 416 都是标准码。
          </Kv>
          <Kv k="底下">
            仍然是一条条 TCP：连接的接收窗口与拥塞控制一个字节没改，多开 4 条流是并行，不是绕过。
          </Kv>
        </div>
      </div>
      <div style={{ width: 820, flexShrink: 0 }}>
        <div style={{ fontSize: 23, color: muted, lineHeight: 1.55 }}>
          我们的切法：4 条流、每条窗口 ≥ 4 MiB，写同一个 <span style={{ fontFamily: mono }}>.part</span>，
          各自 seek 到自己的偏移。
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
          <Win label="W1" color="var(--osd-accent)" />
          <Win label="W2" color={teal} />
          <Win label="W3" color="#8C8175" />
          <Win label="W4" color="#B2201A" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 19,
            color: dim,
            fontFamily: mono,
            marginTop: 8,
          }}
        >
          <span>0</span>
          <span>Spans = 区间并集，缺哪段一查便知</span>
          <span>size</span>
        </div>
      </div>
    </div>
    <div
      style={{
        marginTop: 28,
        paddingTop: 22,
        borderTop: `1px solid ${line}`,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 60,
      }}
    >
      <Stat value="4" label="并行窗口数" accent="var(--osd-accent)" />
      <Stat value="≥ 4 MiB" label="每窗最小尺寸" />
      <Stat value="3 ×" label="每窗重试机会（0.5 s / 1 s 退避）" />
      <div style={{ fontSize: 22, color: muted, lineHeight: 1.55, maxWidth: 520 }}>
        Range 本身不提速：它买到的是并发、细进度、断点续传。在途约 16 MiB，远大于这条链路的 BDP（25 KB）。
      </div>
    </div>
    <Note>
      <span>窗口不是瓶颈 —— 所以再往上加流，只会让 4 条互相抢同一块 Wi-Fi 时间。</span>
    </Note>
  </Frame>
);

// ── 15 原子落地 ───────────────────────────────────────────────────────────

const AtomicPage: Page = () => (
  <Frame>
    <Kicker>15 / 落地</Kicker>
    <Head>先落在 .part 上，验完再改名。</Head>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 34 }}>
      <LanePill accent>收到字节</LanePill>
      <Arrow />
      <LanePill>记下 Content-Length</LanePill>
      <Arrow />
      <LanePill>每个字节被认领</LanePill>
      <Arrow />
      <LanePill>全覆盖</LanePill>
      <Arrow label="rename" />
      <LanePill accent>终名落地</LanePill>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 30, marginTop: 30 }}>
      <div
        style={{
          background: warm,
          border: '1px solid #E6C7B6',
          borderRadius: 12,
          padding: '24px 28px',
        }}
      >
        <div style={{ fontFamily: mono, fontSize: 20, color: '#7A4B3A', letterSpacing: '0.08em' }}>
          一次真机事故
        </div>
        <div style={{ fontSize: 27, fontWeight: 800, marginTop: 8 }}>
          「不可预料的压缩文件末端」
        </div>
        <div style={{ fontSize: 22, color: '#6B4133', lineHeight: 1.55, marginTop: 10 }}>
          解压时报这句，往往不是压缩包坏了，是只有一部分字节到了。复现时文件只写了 31.7%，而收件箱里已经有那个终名。
          <br />
          文件头是完整的、内容是截断的 —— 任何解压器都只能这么报。真正该修的是「终名什么时候出现」。
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Kv k="不漏">
          失败不留终名：.part 可以被覆盖、被续、被删，终名一旦出现就是完整的。
        </Kv>
        <Kv k="判决">
          回执 running / sent / done / error 回到发送端，界面不再把「已发出」当成「已送达」。
        </Kv>
        <Kv k="校验">
          比的是长度与覆盖，不是哈希 —— 头 64 KiB 的摘要只用来认「是不是同一次传输」。
        </Kv>
        <div
          style={{
            marginTop: 6,
            background: '#EFEAE0',
            border: `1px solid ${line}`,
            borderRadius: 8,
            padding: '12px 16px',
            fontFamily: mono,
            fontSize: 18,
            color: muted,
            lineHeight: 1.6,
          }}
        >
          {'{"ok": true, "saved": "inbox/<src>/demo.zip",'}
          <br />
          {' "bytes": 1286738079}'}
        </div>
      </div>
    </div>
    <Note>
      <span>原子落地不是洁癖：一个半截文件出现在收件箱里，用户只会认为「这软件传坏了」。</span>
    </Note>
  </Frame>
);

// ── 16 续传与手机腿 ───────────────────────────────────────────────────────

const ResumePage: Page = () => (
  <Frame>
    <Kicker>16 / 续传</Kicker>
    <Head>续传的骨架，是从 ARQ 借来的。</Head>
    <Lead size={28}>
      发一个窗口、等它被确认、超时就只补那一段 —— 这正是 ARQ 里的选择重传（SREJ）。我们的续传就是照这个思路设计的。
    </Lead>
    <div style={{ display: 'flex', gap: 40, marginTop: 30, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Kv k="帧">一个窗口：一段 Range，大小 ≥ 4 MiB。</Kv>
          <Kv k="序号">不是序号，是字节区间 <span style={{ fontFamily: mono }}>[a, b)</span>。</Kv>
          <Kv k="ACK">「这段已落盘且被认领」—— 进 Spans 才算数。</Kv>
          <Kv k="超时">每窗 3 次机会，退避 0.5 s / 1 s，之后判定这条流坏了。</Kv>
          <Kv k="重传">只按缺口重开窗口，不整份重来 —— 选择重传，而不是回退 N。</Kv>
          <Kv k="恢复">
            断电、关窗、换设备：条子 <span style={{ fontFamily: mono }}>.part.json</span> 带着「上次确认到哪」。
          </Kv>
        </div>
      </div>
      <div style={{ width: 620, flexShrink: 0 }}>
        <div style={{ fontSize: 22, color: dim, fontFamily: mono, letterSpacing: '0.06em' }}>一个窗口的一生</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 26, fontFamily: mono, fontSize: 19, color: dim }}>1</span>
            <LanePill accent>发窗口 [a, b)</LanePill>
            <span style={{ fontSize: 21, color: muted }}>服务端回 206</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 26, fontFamily: mono, fontSize: 19, color: dim }}>2</span>
            <LanePill>等它落盘并被认领</LanePill>
            <span style={{ fontSize: 21, color: muted }}>进 Spans 才算 ACK</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 26, fontFamily: mono, fontSize: 19, color: dim }}>3</span>
            <LanePill accent>超时 / 掉线</LanePill>
            <span style={{ fontSize: 21, color: muted }}>不算失败，只算这次没到</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 26, fontFamily: mono, fontSize: 19, color: dim }}>4</span>
            <LanePill accent>只重发这一段</LanePill>
            <span style={{ fontSize: 21, color: muted }}>其余窗口照旧，互不牵连</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 22,
            paddingTop: 18,
            borderTop: `1px solid ${line}`,
          }}
        >
          <div
            style={{
              fontFamily: mono,
              fontSize: 20,
              color: 'var(--osd-accent)',
              letterSpacing: '0.06em',
            }}
          >
            与标准的差别
          </div>
          <div style={{ fontSize: 21, color: muted, lineHeight: 1.55, marginTop: 8 }}>
            HTTP 的续传验证器是 <span style={{ fontFamily: mono }}>ETag</span> +{' '}
            <span style={{ fontFamily: mono }}>If-Range</span>；我们传的是半截暂存而不是可变资源，所以改用条子
            （staged id + 长度 + 头 64 KiB 摘要），对不上就整份重来。
          </div>
        </div>
      </div>
    </div>
    <Note>
      <span>
        同样一套「发—等—超时重传」也用在消息面：ask 靠心跳重放、卡片断线后重投；传输这边只是把确认换成了「已落盘」。
      </span>
    </Note>
  </Frame>
);

// ── 17 技能与日记 ──────────────────────────────────────────────────────────

const MemoryPage: Page = () => (
  <Frame>
    <Kicker>17 / 记忆</Kicker>
    <Head>记忆不靠向量库，就靠几个文件。</Head>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, marginTop: 44 }}>
      <div
        style={{
          background: paper,
          border: `1px solid ${line}`,
          borderRadius: 10,
          padding: '26px 30px 28px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 32, fontWeight: 850 }}>技能 · 公开</div>
          <Tag color={teal} bg={tealSoft}>
            人写的
          </Tag>
        </div>
        <div style={{ fontFamily: mono, fontSize: 21, color: dim, marginTop: 10 }}>
          data/skills/&lt;name&gt;/SKILL.md
        </div>
        <div style={{ fontSize: 23, color: muted, lineHeight: 1.6, marginTop: 14 }}>
          一次踩坑之后沉淀下来的流程：什么时候用、按什么顺序做、哪里会翻车。每次建 Agent 都重读清单 ——
          存下一条，下一回合就看得见。
          <br />
          信使只能读，不能在你的机器上写提示词。
        </div>
      </div>
      <div
        style={{
          background: paper,
          border: `1px solid ${line}`,
          borderRadius: 10,
          padding: '26px 30px 28px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 32, fontWeight: 850 }}>日记 · 私有</div>
          <Tag>实验性</Tag>
        </div>
        <div style={{ fontFamily: mono, fontSize: 21, color: dim, marginTop: 10 }}>
          data/diary/YYYY-MM-DD.md
        </div>
        <div style={{ fontSize: 23, color: muted, lineHeight: 1.6, marginTop: 14 }}>
          只有 Agent 自己会写：不是会议纪要，是情绪记忆。
          <br />
          界面上没有任何入口；最近 60 天原文进提示词，更早的降成每日一行索引，想翻再展开。
        </div>
      </div>
    </div>
    <div
      style={{
        marginTop: 26,
        background: '#EFEAE0',
        border: `1px solid ${line}`,
        borderRadius: 10,
        padding: '16px 24px 18px',
        fontFamily: mono,
        fontSize: 20,
        color: muted,
        lineHeight: 1.65,
      }}
    >
      <div style={{ color: dim }}>---</div>
      <div>name: writing-skills</div>
      <div>description: 什么时候该用这条技能</div>
      <div style={{ color: dim }}>---</div>
      <div># 先做什么，再做什么，哪里会翻车</div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 26 }}>
      <LanePill accent>可读</LanePill>
      <LanePill accent>可改</LanePill>
      <LanePill accent>可带走</LanePill>
      <div style={{ fontSize: 23, color: muted, marginLeft: 20, lineHeight: 1.55 }}>
        向量库擅长“相似”；这里要的是“确切的规则”和“那天到底发生了什么”—— 一个能 diff 的文件，比一个黑盒更像记忆。
      </div>
    </div>
    <Note>
      <span>没有数据库、没有 embedding：记忆就是文件系统 —— 你看得见，也能改、能删、能带走。</span>
    </Note>
  </Frame>
);

// ── 14 视频 ① ──────────────────────────────────────────────────────────────

const VideoWhyPage: Page = () => (
  <Frame>
    <Kicker>18 / 多模态 · 视频</Kicker>
    <Head>模型看不见视频，那就拆成它看得见的东西。</Head>
    <Lead>
      大多数国产模型没有原生视频模态。我们能给它的只有两样：一句一句的话，一帧一帧的图 ——
      于是把视频拆成两条轨。
    </Lead>
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 46 }}>
      <div
        style={{
          background: 'var(--osd-text)',
          color: 'var(--osd-bg)',
          borderRadius: 10,
          padding: '26px 24px',
          textAlign: 'center',
          width: 180,
          flexShrink: 0,
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 800 }}>视频</div>
        <div style={{ fontFamily: mono, fontSize: 19, marginTop: 6, opacity: 0.7 }}>mp4</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <LanePill accent>音轨</LanePill>
          <Arrow />
          <LanePill>faster-whisper 转写</LanePill>
          <Arrow />
          <LanePill accent>带时间戳的字幕</LanePill>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <LanePill accent>画面</LanePill>
          <Arrow />
          <LanePill>按镜头抽帧</LanePill>
          <Arrow />
          <LanePill>CLIP 选 ≤12 张关键帧</LanePill>
          <Arrow />
          <LanePill accent>图 + 时间点</LanePill>
        </div>
      </div>
    </div>
    <div style={{ display: 'flex', gap: 60, marginTop: 34, paddingTop: 26, borderTop: `1px solid ${line}` }}>
      <Kv k="帧上限">最多 12 张关键帧 —— token 不是免费的，选帧比抽帧难。</Kv>
      <Kv k="20000">字幕字符上限；超了就截断，不静默丢掉整条音轨。</Kv>
      <Kv k="1800 s">单次超时：CPU 笔记本转写长片很慢，但不许无限等。</Kv>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, marginTop: 26 }}>
      <div
        style={{
          background: paper,
          border: `1px solid ${line}`,
          borderLeft: `5px solid ${teal}`,
          borderRadius: 10,
          padding: '18px 24px',
        }}
      >
        <div style={{ fontSize: 23, fontWeight: 800 }}>只有音轨</div>
        <div style={{ fontSize: 23, color: muted, lineHeight: 1.5, marginTop: 6 }}>
          知道他们在说什么，不知道谁先动的手。
        </div>
      </div>
      <div
        style={{
          background: paper,
          border: `1px solid ${line}`,
          borderLeft: '5px solid var(--osd-accent)',
          borderRadius: 10,
          padding: '18px 24px',
        }}
      >
        <div style={{ fontSize: 23, fontWeight: 800 }}>只有画面</div>
        <div style={{ fontSize: 23, color: muted, lineHeight: 1.5, marginTop: 6 }}>
          看得见动作，听不见理由 —— 所以两条都要。
        </div>
      </div>
    </div>
    <Note>
      <span>两条轴对齐，模型才答得出“第 14 秒到 45 秒到底发生了什么”。</span>
      <span style={{ color: dim }}>手机拍、局域网传、PC 算 —— 网络是前置条件。</span>
    </Note>
  </Frame>
);

// ── 17 桌控 ②：坐标 ───────────────────────────────────────────────────────

const ScreenCoordsPage: Page = () => (
  <Frame>
    <Kicker>19 / 多模态 · 谁给坐标</Kicker>
    <Head>坐标不该由模型猜：让它自己暴露出来。</Head>
    <Lead>
      转机来自一门 OpenCV 课：二值化把边界变成像素，切框把区域变成编号 —— 模型只要回答“点几号”，不必输出坐标。
    </Lead>
    <div style={{ display: 'flex', gap: 18, marginTop: 32 }}>
      <Shot src={rawShot} w={530} h={331} caption="① 原图：模型只能看见一整块像素。" />
      <Shot src={binaryShot} w={530} h={331} caption="② 二值化：边缘出来，坐标就有了。" />
      <Shot src={numberedShot} w={530} h={331} caption="③ 切框编号：模型只回答“点几号”。" />
    </div>
    <div
      style={{
        marginTop: 26,
        paddingTop: 22,
        borderTop: `1px solid ${line}`,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}
    >
      <span style={{ fontFamily: mono, fontSize: 20, color: dim, whiteSpace: 'nowrap' }}>候选从哪来</span>
      <LanePill accent>UIA 的控件矩形</LanePill>
      <LanePill accent>OCR 认出的文本框</LanePill>
      <LanePill accent>二值化切出的轮廓</LanePill>
      <span style={{ fontSize: 22, color: muted, marginLeft: 14, lineHeight: 1.5 }}>
        程序负责几何，模型只负责语义；三路谁先命中用谁。
      </span>
    </div>
    <Note>
      <span style={{ fontFamily: mono, color: 'var(--osd-accent)' }}>94 候选 · 75 带文本</span>
      <span>真实桌面一次扫出的数量。直接让模型给坐标，误差 15–68px；18px 的目标等于随机。</span>
    </Note>
  </Frame>
);

// ── 18 桌控 ③：能力拓展（Jev → BiXian） ──────────────────────────────────

const ScreenDeciderPage: Page = () => (
  <Frame>
    <Kicker>20 / 多模态 · 能力拓展</Kicker>
    <Head size={58}>这条路别人也走过：Jev 把“选哪个”做成了一层。</Head>
    <div style={{ display: 'flex', gap: 38, marginTop: 28, alignItems: 'flex-start' }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 23, color: muted, lineHeight: 1.55 }}>
          Jev 是 TypeSafe 的 System One 决策模型：它不接管整件事，只回答窄问题 —— 下一步哪个动作、点哪个元素、
          目标达成没有，一次前向给出概率。
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 22 }}>
          <Kv k="闭集">开源实现 computer-use-jev 把界面压成 a1 / w2 / e5 这样的 token，目标只能从当前快照里挑。</Kv>
          <Kv k="敢停">置信度掉到阈值以下就停下、把分布交出来 —— 不盲选一个最像的。</Kv>
          <Kv k="照搬">
            我们的 BiXian 就是这层：编号图 + <span style={{ fontFamily: mono }}>intent=</span> 进去，回来一个号码；
            没配或挑不出，编号图照旧回到 Agent 手上。
          </Kv>
        </div>
        <div style={{ fontSize: 22, color: dim, lineHeight: 1.55, marginTop: 18 }}>
          它便宜到可以每一步都问一次：一次前向、窄输出。想事情的还是主模型，决定“点哪个”的是这一层。
        </div>
      </div>
      <div style={{ width: 700, flexShrink: 0 }}>
        <Shot src={deciderShot} w={700} h={257} caption="设置页的实验性一栏：服务地址 + 启动命令，两格就是全部接缝。" />
        <div style={{ display: 'flex', gap: 46, marginTop: 22 }}>
          <Stat value="3 / 3" label="选编号的命中数" accent="var(--osd-accent)" />
          <Stat value="1 px" label="难目标的落点误差" />
          <Stat value="3 次" label="都认不出才来问你" />
        </div>
      </div>
    </div>
    <div
      style={{
        marginTop: 30,
        paddingTop: 22,
        borderTop: `1px solid ${line}`,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}
    >
      <span style={{ fontFamily: mono, fontSize: 20, color: dim, whiteSpace: 'nowrap' }}>
        为什么值得单独一层
      </span>
      <LanePill accent>便宜</LanePill>
      <LanePill accent>可替换</LanePill>
      <LanePill accent>敢说不</LanePill>
      <span style={{ fontSize: 22, color: muted, marginLeft: 14, lineHeight: 1.5 }}>
        换模型只改两格配置；认不出就停下，不把猜测当答案。
      </span>
    </div>
    <Note>
      <span>schema 里没有 x / y 参数 —— 结构约束胜过提示词；桌控只是补充，文件增删改查仍然走命令。</span>
    </Note>
  </Frame>
);

// ── 19 工程与验证 ─────────────────────────────────────────────────────────

const EngineeringPage: Page = () => (
  <Frame>
    <Kicker>21 / 工程与验证</Kicker>
    <Head>怎么证明它真的跑得起来。</Head>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 30,
        marginTop: 46,
        paddingBottom: 34,
        borderBottom: `1px solid ${line}`,
      }}
    >
      <Stat value="805" label="用例定义，52 个测试文件" accent="var(--osd-accent)" />
      <Stat value="22k" label="行自研 Python（fungi/）" />
      <Stat value="1.29 GB" label="真机传输，送达后 sha256 一致" />
      <Stat value="0.3 MiB" label="手机传 300 MB 时 Python 堆峰值" />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 44px', marginTop: 26 }}>
      <Kv k="复现">tag v0.14.0 + 源码 zip 随 Release 一起发，克隆即可跑。</Kv>
      <Kv k="门禁">ruff + pytest 进 CI；Release 包从 tag 构建，不拿工作区。</Kv>
      <Kv k="版本">v0.14.0（2026-11-01），仓库在 GitHub 组织 CN-Fungi 下。</Kv>
      <Kv k="边界">明文 HTTP、hub 单点、局域网假设 —— 都写在 README 里，不藏着。</Kv>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 30 }}>
      <Block n="第一道" title="单元" body="打桩跑：不碰真桌面、不真发网，绝大多数用例在这一层。" />
      <Block n="第二道" title="端到端" body="真 Chromium 跑页面；假模型驱动整条回合。" accent={teal} />
      <Block
        n="第三道"
        title="真机"
        body="一台起房、一台开两个端口模拟两位客户端 —— 转发机制就是这么验的。"
        accent={muted}
      />
    </div>
    <Note>
      <span>工作量不是靠行数证明的：靠“它真的跑过一遍，坏在哪、怎么坏的”证明。</span>
    </Note>
  </Frame>
);

// ── 21 谢谢 ───────────────────────────────────────────────────────────────

const ThanksPage: Page = () => (
  <Frame>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 168,
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
          }}
        >
          谢谢
        </div>
        <div style={{ fontSize: 34, color: muted, lineHeight: 1.5, marginTop: 24, maxWidth: 1000 }}>
          一台机器上的 Agent，长成了一张局域网里的网。
        </div>
      </div>
    </div>
    <div
      style={{
        paddingTop: 22,
        borderTop: `1px solid ${line}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}
    >
      <div>
        <div style={{ fontSize: 24, color: dim, fontFamily: mono }}>THANK YOU</div>
        <div style={{ fontSize: 64, fontWeight: 900, marginTop: 4 }}>Q &amp; A</div>
      </div>
      <div style={{ fontSize: 22, color: dim, textAlign: 'right', lineHeight: 1.5 }}>
        李奕璇 · 周予 · 林珊萍 · 刘新宇
        <br />
        7 班 · 2026.11.1
      </div>
    </div>
  </Frame>
);

export const meta: SlideMeta = {
  title: 'Fungi',
  createdAt: '2026-10-31T05:12:05.706Z',
};

export default [
  Cover,
  AgentPage,
  SubAgentPage,
  DistributedPage,
  NamePage,
  KinPage,
  RolesPage,
  ToolboxPage,
  RoomPage,
  ProtocolPage,
  RelayPage,
  TransferPage,
  DataPlanePage,
  RangePage,
  AtomicPage,
  ResumePage,
  MemoryPage,
  VideoWhyPage,
  ScreenCoordsPage,
  ScreenDeciderPage,
  EngineeringPage,
  ThanksPage,
] satisfies Page[];

export const notes: (string | undefined)[] = [
  `0:00–0:25。报题目与课程：Fungi，局域网下的多模态多智能体分布式协同通信系统。一句话定位：把一个主机上的 Agent，接到一张局域网上。顺手指一下右边的两个码：仓库和知乎专栏，要扫现在扫。`,
  `0:25–1:45。先讲最基础的三件：模型会说、工具能做、沙箱给它划边界。强调沙箱不是虚拟机，是这个回合被允许碰到的范围；坐标也好、路径也好，边界写在工具里，不靠模型自觉。`,
  `1:45–3:00。一个 Agent 变一队：L1 派活、L2 干活再拆、L3 只做一件小事。只讲四个词：不等、回来、说清、限量。收尾一句：这套三层骨架来自 YESIR。`,
  `3:00–4:20。把立项那句话原样念出来：“如果在每部主机上都部署一个 YESIR，让它们之间连接起来，会怎么样呢？”然后给答案：一台起服务器、其余直连加入、每台一个本机 Agent、好友之间一位信使。三张草图是当时画的，可以指着讲服务器转发和代理系统。`,
  `4:20–5:10。名字：蘑菇只是地上的边角，本体是地下的菌丝。对应到系统：蘑菇=本机 Agent，菌丝=局域网，孢子=子 Agent 与派出去的活。名字先于代码，它决定了我们做的是网，不是聊天框。`,
  `5:10–5:45。两件搬来的东西：Gasp-Design 给动效，VidSense 给视频管线。别的老项目这次不表。`,
  `5:45–7:00。两种 Agent：本机 Orchestrator 只和你说话，信使只和对面的信使说话。1 + N 记一下。最后强调结构规矩：信使动你的东西之前一定要问。`,
  `7:00–7:40。十件工具一次过，不要逐条念。只点两处：主动询问只有本机能问、会阻塞回合；开关关着时工具根本不进工具面。`,
  `7:40–8:40。房间：8899 起向上扫 32 个端口；加入方不用手填 IP，扫同网段；token 是唯一一把钥匙，错了 403，改了旧钥匙立刻失效；二维码里带着地址和 token。屏幕上就是两个真实界面。`,
  `8:40–9:25。协议页按层讲：应用层只有三种 —— HTTP（普通请求 + 25 秒长轮询 + Range）、SSE、MCP。SSE 只出现在调模型这一侧，对浏览器推事件其实是 NDJSON 一行一事件；MCP 是 stdio 上的 JSON-RPC。收尾一句：不用 WebSocket，是因为控制面频率低、大文件走 Range。`,
  `9:25–10:25。消息转告流：长期记忆是一段自述，短期待办是四周日历，两者每轮都重读。用那个对话演示一遍：问周二，信使答周二没课；周三可以。强调改了立刻生效。`,
  `10:25–11:20。文件传输流：一枚滑块两个模式，左允许右询问；三个区域三条规矩；字节先落房主盘，同意后才进 inbox。最后一句：传输从不经过 LLM。这一页管的是「该不该传」，后面三页管「怎么传完」。`,
  `11:20–11:55。数据面：三段腿。1.29 GB，回环 4.9 秒（268 MB/s），WLAN 255 秒（5.05 MB/s），差 53 倍、网络占 98%。所以优化只能落在中间那段 —— 后面三页都是它的展开。`,
  `11:55–12:40。分段：这就是 HTTP 的 Range request（RFC 9110 §14）—— Accept-Ranges、Range、Content-Range 都是标准头，206 与 416 都是标准码。底下仍是 TCP，连接窗口与拥塞控制一个字节没改，多开 4 条是并行不是绕过。我们要的是并发、细进度、断点续传；每窗 ≥4 MiB、3 次机会，BDP 只有 25 KB，窗口不是瓶颈。`,
  `12:40–13:20。落地：只写 .part，长度与「每字节都被认领」都验完才 rename，失败不留终名。事故讲 31.7% 截断与 WinRAR 那句「不可预料的压缩文件末端」；判决 running/sent/done/error 回到发送端。校验的是长度与覆盖，不是哈希。`,
  `13:20–14:10。续传借的是 ARQ：发一个窗口、等它被确认、超时就只补那一段 —— 选择重传（SREJ），不是回退 N。映射逐条讲：帧=窗口、序号=字节区间、ACK=已落盘并入 Spans、超时=每窗 3 次 0.5/1 秒退避、恢复=条子 .part.json。顺带说标准的 ETag+If-Range，而我们对象是「半截暂存」，所以自造条子。`,
  `14:10–14:45。技能与日记：都是文件。技能公开、可被下一个回合看见；日记私有、界面上没有入口。一句话收：记忆就是文件系统。`,
  `14:45–15:25。视频为什么拆：模型没有视频模态，只能给它字幕和图。两条轨讲清楚，最后落到“两轴对齐才答得出第 14 到 45 秒发生了什么”。`,
  `15:25–16:15。转机是一门 OpenCV 课：二值化把边界变成像素，切框把区域变成编号，模型只回答“点几号”。三张图一张张讲。记住两个数：94 个候选、直接给坐标误差 15–68px。`,
  `16:15–17:05。能力拓展开到 Jev：TypeSafe 的 System One 决策模型，只回答窄问题、一次前向给概率；开源实现把界面压成 token，目标只能从当前快照里挑，置信度不够就停下报分布。我们的 BiXian 就是这一层：编号图进去、号码回来，挑不出就还给 Agent，三次才问人。3/3、1px。`,
  `17:05–18:00。工程：805 条用例、52 个测试文件、2.2 万行自研 Python、v0.14.0（2026-11-01）。真机 1.29GB 传输、手机 300MB 上传堆峰值 0.3MiB。边界不藏：明文 HTTP、hub 单点、局域网假设。`,
  `18:00–18:10。谢谢，停两秒。二维码在第 1 页，被问代码或细节就指回封面。`,
];
