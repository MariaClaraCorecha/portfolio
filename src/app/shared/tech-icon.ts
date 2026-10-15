export interface TechIcon {
  kind: 'logo' | 'material';
  value: string;
}

// Full-color "original" logos from Devicon: designed to stay legible on
// light backgrounds, unlike single-color brand marks (white/yellow logos
// disappear on the blush surfaces). Version pinned so icons don't change
// unexpectedly.
const DEVICON_CDN = 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons';

const LOGO_MAP: Record<string, string> = {
  Angular: 'angular/angular-original',
  'Angular Material': 'angularmaterial/angularmaterial-original',
  React: 'react/react-original',
  // The two-tone "original" cup is too thin at chip size; the solid glyph reads clearly.
  Java: 'java/java-plain',
  'Spring Boot': 'spring/spring-original',
  JavaScript: 'javascript/javascript-original',
  PHP: 'php/php-original',
  Laravel: 'laravel/laravel-original',
  Linux: 'linux/linux-original',
  MySQL: 'mysql/mysql-original',
  PostgreSQL: 'postgresql/postgresql-original',
  SQLite: 'sqlite/sqlite-original',
  Docker: 'docker/docker-original',
  TypeScript: 'typescript/typescript-original',
  HTML: 'html5/html5-original',
  HTML5: 'html5/html5-original',
  SCSS: 'sass/sass-original',
  'CSS/SCSS': 'sass/sass-original',
  Git: 'git/git-original',
  GitHub: 'github/github-original',
  'VS Code': 'vscode/vscode-original',
  'IntelliJ IDEA': 'intellij/intellij-original',
  Trello: 'trello/trello-original',
  Figma: 'figma/figma-original',
  'Node.js': 'nodejs/nodejs-original',
  NestJS: 'nestjs/nestjs-original',
  'Google Cloud': 'googlecloud/googlecloud-original',
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
  if (logo) {
    return { kind: 'logo', value: `${DEVICON_CDN}/${logo}.svg` };
  }
  return { kind: 'material', value: MATERIAL_ICON_MAP[name] ?? 'code' };
}
