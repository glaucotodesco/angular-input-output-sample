# Setup do Projeto Angular

## Estrutura Criada

```
src/app/
├── components/          # Componentes reutilizáveis
│   ├── navbar/         # Navegação principal
│   └── product-item/   # Item de produto
├── pages/              # Páginas/Views
│   ├── home/          # Página inicial
│   └── product-list/  # Lista de produtos
├── services/          # Serviços
│   └── product.service.ts
└── models/           # Interfaces/Types
    └── product.interface.ts
```

## Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Instalar json-server globalmente (se não tiver)
```bash
npm install -g json-server
```

### 3. Executar o projeto
```bash
# Opção 1: Executar tudo junto (requer concurrently)
npm install -g concurrently
npm run dev

# Opção 2: Executar separadamente
# Terminal 1 - Backend mock
npm run json-server

# Terminal 2 - Frontend
npm start
```

### 4. Acessar
- Frontend: http://localhost:4200
- API Mock: http://localhost:3000
- Produtos: http://localhost:3000/products

## Funcionalidades Implementadas

✅ Estrutura organizada com pastas separadas
✅ Interface Product tipada
✅ ProductService com métodos CRUD
✅ Componente ProductItem com @Input/@Output
✅ Navbar com ng-bootstrap
✅ ProductList consumindo API
✅ Roteamento configurado
✅ OnPush ChangeDetectionStrategy
✅ Dados mock para json-server

## Próximos Passos

- Adicionar formulários para criar/editar produtos
- Implementar loading states
- Adicionar tratamento de erros
- Implementar testes unitários