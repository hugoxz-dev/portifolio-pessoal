# Portfólio pessoal

Single page responsiva para apresentar perfil, projetos, habilidades, formação, hobbies e canais de contato. Feita com Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, next-themes, Lucide, React Hook Form, Zod e Resend.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Instalação e execução

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Para validar antes de publicar:

```bash
npm run typecheck
npm run lint
npm run build
```

## Personalização

Os dados de exemplo estão centralizados em `data/`:

- `profile.ts`: nome, título, apresentação e localização
- `projects.ts`: projetos, tecnologias, imagens e links de demonstração/repositório
- `skills.ts`: categorias, habilidades e níveis
- `education.ts`: formação e certificados
- `hobbies.ts`: hobbies e descrições
- `social.ts`: perfis, e-mail e WhatsApp

Substitua as imagens ilustrativas em `public/images/`. O avatar atual é `avatar-placeholder.svg`; troque-o por sua foto e atualize o caminho em `components/sections/hero.tsx`. As miniaturas dos projetos também podem ser trocadas, mantendo os caminhos ou editando `data/projects.ts`. Imagens raster devem usar `next/image` e ter dimensões adequadas para evitar mudanças de layout.

Atualize o título, a descrição, os dados Open Graph e o domínio em `app/layout.tsx` e `NEXT_PUBLIC_SITE_URL`. O ano do rodapé é preenchido automaticamente.

## Formulário de contato

O formulário valida nome, e-mail e mensagem no cliente e no servidor. Para enviar e-mails, preencha `.env.local`:

```env
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=seu-email@exemplo.com
CONTACT_FROM_EMAIL=Portfolio <contato@seudominio.com>
NEXT_PUBLIC_SITE_URL=https://seudominio.com
```

Crie uma API key no Resend e verifique seu domínio para usar o endereço `CONTACT_FROM_EMAIL`. O endereço de teste `onboarding@resend.dev` é limitado pelo Resend e não deve ser usado como remetente de produção. Sem as três variáveis de e-mail, o formulário informa que não está configurado; e-mail, WhatsApp e LinkedIn permanecem disponíveis como alternativas.

Nunca use prefixo `NEXT_PUBLIC_` para a chave secreta do Resend.

## Publicação na Vercel

1. Envie o repositório para o GitHub e importe-o na [Vercel](https://vercel.com/new).
2. A Vercel detectará o Next.js automaticamente; mantenha os comandos padrão.
3. Configure `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` e `NEXT_PUBLIC_SITE_URL` em **Settings → Environment Variables**.
4. Faça o deploy e associe seu domínio, se houver.
5. Atualize os links sociais e teste formulário, navegação móvel e temas claro/escuro em produção.

## Acessibilidade e responsividade

Inclui navegação por âncoras com indicador de seção, menu móvel, link para pular ao conteúdo, estados de foco visíveis, rótulos e mensagens associados aos campos, suporte a preferência por movimento reduzido e layouts mobile-first.
