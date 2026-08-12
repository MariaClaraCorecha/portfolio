export interface TechIcon {
  kind: 'logo' | 'logo-mono' | 'material';
  value: string;
}

interface LogoEntry {
  slug: string;
  color?: string;
  source?: 'devicon';
}

const SIMPLE_ICONS_CDN = 'https://cdn.simpleicons.org';
const SIMPLE_ICONS_RAW = 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons';
const DEVICON_CDN = 'https://cdn.jsdelivr.net/npm/devicon@latest/icons';

const LOGO_MAP: Record<string, LogoEntry> = {
  Angular: { slug: 'angular', color: 'DD0031' },
  'Angular Material': { slug: 'angular', color: 'DD0031' },
  React: { slug: 'react', color: '61DAFB' },
  Java: { slug: 'java' },
  JavaScript: { slug: 'javascript', color: 'F7DF1E' },
  PHP: { slug: 'php', color: '777BB4' },
  Laravel: { slug: 'laravel', color: 'FF2D20' },
  Linux: { slug: 'linux', color: 'FCC624' },
  MySQL: { slug: 'mysql', color: '4479A1' },
  PostgreSQL: { slug: 'postgresql', color: '4169E1' },
  SQLite: { slug: 'sqlite', color: 'FFFFFF' },
  Docker: { slug: 'docker', color: '2496ED' },
  TypeScript: { slug: 'typescript', color: '3178C6' },
  HTML: { slug: 'html5', color: 'E34F26' },
  HTML5: { slug: 'html5', color: 'E34F26' },
  SCSS: { slug: 'sass', color: 'CC6699' },
  'CSS/SCSS': { slug: 'sass', color: 'CC6699' },
  Git: { slug: 'git', color: 'F05032' },
  GitHub: { slug: 'github', color: 'FFFFFF' },
  'VS Code': { slug: 'visualstudiocode' },
  'IntelliJ IDEA': { slug: 'intellij/intellij-original', source: 'devicon' },
  Trello: { slug: 'trello', color: '0052CC' },
  Figma: { slug: 'figma', color: 'F24E1E' },
  'Node.js': { slug: 'nodedotjs', color: '339933' },
  NestJS: { slug: 'nestjs', color: 'E0234E' },
  'Google Cloud': { slug: 'googlecloud', color: '4285F4' },
};

const MATERIAL_ICON_MAP: Record<string, string> = {
  API: 'api',
  'REST API': 'api',
  'REST APIs': 'api',
  'Banco de Dados': 'storage',
  'Arquitetura Limpa': 'account_tree',
  'Clean Architecture': 'account_tree',
  POO: 'account_tree',
};

export function getTechIcon(name: string): TechIcon {
  const logo = LOGO_MAP[name];
  if (logo?.source === 'devicon') {
    return { kind: 'logo', value: `${DEVICON_CDN}/${logo.slug}.svg` };
  }
  if (logo?.color) {
    return { kind: 'logo', value: `${SIMPLE_ICONS_CDN}/${logo.slug}/${logo.color}` };
  }
  if (logo) {
    return { kind: 'logo-mono', value: `${SIMPLE_ICONS_RAW}/${logo.slug}.svg` };
  }
  return { kind: 'material', value: MATERIAL_ICON_MAP[name] ?? 'code' };
}
