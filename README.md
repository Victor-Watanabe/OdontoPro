# 🦷 Dental SaaS — Gestão de Clínicas Odontológicas

Micro-SaaS desenvolvido com **Next.js + TypeScript** para gestão de clínicas odontológicas.  
A plataforma permite cadastro de clínicas, gestão de pacientes, agendamentos, serviços e planos de assinatura recorrente.

Projeto construído como parte de um estudo prático de arquitetura full-stack moderna, autenticação social e billing com Stripe.

---

## 🚀 Tecnologias

### 🖥️ Frontend
- Next.js (App Router)
- React.js
- TypeScript
- JavaScript
- Tailwind CSS
- shadcn/ui

### ⚙️ Backend e Banco de Dados
- Prisma ORM
- PostgreSQL (Neon)
- API Routes / Server Actions (Next.js)

### 🔐 Autenticação
- Auth.js
- Google OAuth
- GitHub OAuth

### 💳 Pagamentos
- Stripe (assinaturas recorrentes)
- Stripe Checkout
- Stripe Webhooks

### ☁️ Upload de Arquivos
- Cloudinary

### ✅ Validação
- Zod

---

## ✨ Funcionalidades

- Cadastro e gestão de clínicas
- Cadastro de pacientes
- Agenda odontológica
- Catálogo de serviços e preços
- Upload de imagens e arquivos
- Planos de assinatura recorrente
- Autenticação social (Google/GitHub)
- Controle de acesso por plano
- Arquitetura SaaS multi-tenant

---

## 📦 Instalação

### Clone o repositório:

bash
-git clone https://github.com/seu-usuario/dental-saas.git
-cd dental-saas
-npm install

## ⚙️ Configuração de Ambiente (.env)

Para executar o projeto, crie um arquivo .env na raiz com as seguintes variáveis:

- DATABASE_URL=
- AUTH_SECRET=
- AUTH_GITHUB_ID=
- AUTH_GITHUB_SECRET=
- AUTH_GOOGLE_ID=
- AUTH_GOOGLE_SECRET=
- NEXT_PUBLIC_URL=http://localhost:3000
- NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
- STRIPE_SECRET_KEY=
- STRIPE_SECRET_WEBHOOK_KEY=
- STRIPE_PLAN_BASIC=
- STRIPE_PLAN_PROFESSIONAL=
- STRIPE_SUCCESS_URL=http://localhost:3000/dashboard/plans
- STRIPE_CANCEL_URL=http://localhost:3000/dashboard/plans
- CLOUDINARY_NAME=
- CLOUDINARY_KEY=
- CLOUDINARY_SECRET=


⚠️ Importante: nunca publique suas chaves reais no repositório.
Use variáveis seguras no deploy (Vercel, Railway, etc.).

## 🗄️ Banco de Dados

Executar migrations e gerar client Prisma:

- npx prisma generate
- npx prisma migrate dev


Opcional: visualizar dados

npx prisma studio

## 💳 Integração Stripe

O projeto utiliza Stripe Checkout + Webhooks para controle de planos.

### Passos:

Criar produtos e preços no Stripe

Inserir IDs em:

- STRIPE_PLAN_BASIC
- STRIPE_PLAN_PROFESSIONAL

Configurar webhook apontando para:

/api/webhooks/stripe

## ☁️ Upload de Arquivos

Uploads são gerenciados via Cloudinary.

Configurar:

- CLOUDINARY_NAME
- CLOUDINARY_KEY
- CLOUDINARY_SECRET 

## 🔐 Autenticação

Login social via Auth.js:

- Google OAuth
- GitHub OAuth
 
Configurar credenciais no Google Cloud e GitHub Developer Settings.

## ▶️ Executar Projeto

npm run dev

Acesse:

http://localhost:3000

## 📚 Objetivo do Projeto

Este projeto foi desenvolvido como estudo completo de:

- Arquitetura SaaS multi-tenant
- Billing recorrente
- Autenticação moderna
- Upload e mídia
- ORM + banco serverless
- UI escalável com componentes

## 👨‍💻 Autor

### Victor Watanabe
Frontend Developer (React / Next.js)

## 📄 Licença

Projeto para fins educacionais.
