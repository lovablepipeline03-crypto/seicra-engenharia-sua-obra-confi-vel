

## Plano: Adaptar Animações e Transições Inspiradas no Site da Turner Construction

Analisei o HTML da Turner Construction e identifiquei os padrões visuais e de animação que elevam a experiência. Abaixo, o plano para adaptar esses conceitos ao site da SEICRA.

---

### Padrões Identificados na Turner

1. **Grid Lines Overlay** - Linhas verticais guia (25%, 50%, 25%) que atravessam cada seção como referência visual de "planta técnica"
2. **Smooth Scroll (Lenis)** - Rolagem suave e fluida com inércia natural
3. **Parallax nas Imagens** - Imagens se movem em velocidade diferente do scroll, criando profundidade
4. **Animações Staggered Direcionais** - Elementos entram de diferentes direções (esquerda, cima) com delays escalonados
5. **Pinned/Sticky Sections** - Seções que "grudam" na tela enquanto o conteúdo interno rola
6. **Image Scale on Hover** - Zoom suave nas imagens ao passar o mouse
7. **Scroll Indicator no Hero** - Texto "Scroll" com linha animada descendo
8. **Navbar com mudança de cor** - Header muda de transparente para sólido ao rolar
9. **Link Underline Animation** - Sublinhado animado da direita para esquerda nos links

---

### Alterações Planejadas

#### 1. Smooth Scroll com Lenis
- Instalar `lenis` e criar um componente `SmoothScroll` wrapper
- Envolver o app com Lenis para rolagem fluida com inércia

#### 2. Grid Lines Overlay (componente reutilizável)
- Criar componente `GridLines` com 3 linhas verticais semitransparentes (estilo blueprint)
- Aplicar em todas as seções para manter a identidade de engenharia

#### 3. HeroSection - Melhorias
- Adicionar indicador "Scroll" com linha animada descendo (como Turner)
- Parallax na imagem do hero (move mais devagar que o scroll)
- Navbar: mudar de transparente para sólida ao rolar (scroll listener)

#### 4. Navbar - Scroll-aware
- Iniciar transparente sobre o hero
- Adicionar fundo sólido + sombra ao rolar > 100px
- Transição suave entre estados

#### 5. ProjectsSection - Parallax + Scale
- Adicionar efeito parallax sutil nas imagens da galeria
- Melhorar hover com scale mais pronunciado e suave (como `to-be-scaled` da Turner)

#### 6. Seções Split (About, Contact) - Animações Direcionais
- Elementos da esquerda entram deslizando da esquerda
- Elementos da direita/imagens entram deslizando da direita
- Delays escalonados entre elementos dentro de cada bloco

#### 7. ProcessSection - Sticky/Pinned Title
- Título "Do orçamento à entrega" fica fixo enquanto os steps rolam
- Usar `position: sticky` para o efeito

#### 8. Footer - Animações de entrada
- Elementos do footer animam ao entrar na viewport (como Turner's `anim-elem top`)

#### 9. CSS Global - Novos utilitários
- `.grid-lines` - overlay de linhas verticais
- Link underline animation nos nav links
- Melhorar transições globais de hover

---

### Arquivos a Serem Modificados

| Arquivo | Mudança |
|---|---|
| `package.json` | Adicionar `lenis` |
| `src/components/SmoothScroll.tsx` | **Novo** - Wrapper Lenis |
| `src/components/GridLines.tsx` | **Novo** - Overlay de linhas |
| `src/components/ScrollIndicator.tsx` | **Novo** - Indicador "Scroll" do hero |
| `src/pages/Index.tsx` | Envolver com SmoothScroll |
| `src/components/Navbar.tsx` | Scroll-aware (transparente → sólido) |
| `src/components/HeroSection.tsx` | Parallax + scroll indicator |
| `src/components/ProjectsSection.tsx` | Parallax + hover scale aprimorado |
| `src/components/ProcessSection.tsx` | Sticky title |
| `src/components/AboutSection.tsx` | Animações direcionais |
| `src/components/DifferentialsSection.tsx` | Grid lines overlay |
| `src/components/ContactSection.tsx` | Animações direcionais |
| `src/components/TestimonialsSection.tsx` | Staggered entrance |
| `src/components/Footer.tsx` | Animações de entrada |
| `src/index.css` | Grid lines CSS + link underline |

---

### Detalhes Técnicos

- **Lenis**: Biblioteca leve de smooth scroll (~3KB gzip), integra bem com Framer Motion
- **Parallax**: Usando `useScroll` + `useTransform` do Framer Motion (já instalado)
- **Sticky**: CSS nativo `position: sticky` sem dependência extra
- **Grid Lines**: CSS puro com pseudo-elements, sem overhead de performance
- **Navbar scroll**: `useEffect` + `window.addEventListener('scroll')` com debounce

