# 📝Gestion Articles

Ce projet est un petit dashboard développé avec Next.js pour la gestion d'articles. Il permet aux utilisateurs d'ajouter, de modifier, de supprimer et de visualiser des articles dans une interface conviviale. Les données proviennent de l'API fakestoreapi.com, donc les modifications, ajouts et suppressions ne sont pas persistants.

## ✨ Fonctionnalités principales
- Liste des articles : Affichage dynamique des articles existants avec la possibilité de trier et filtrer les données.
- Détail des articles : Affichage des informations complètes d'un article en cliquant dessus pour une vue détaillée.
- Ajout d'articles : Interface pour ajouter de nouveaux articles avec des champs tels que titre, description et catégorie.
- Modification des articles : Possibilité de modifier les articles existants en mettant à jour les informations.
- Suppression d'articles : Option pour supprimer des articles non désirés.
- Interface responsive : Un tableau de bord adapté aux différents types d'écrans (ordinateur de bureau, tablette, mobile).


## 🛠️ Technologies utilisées

- Next.js : Framework React pour la création de l'application web.
- React : Bibliothèque JavaScript pour construire l'interface utilisateur.
- TanStack Query : Pour la gestion des requêtes API et la synchronisation des données avec l'interface.
- Axios : Client HTTP pour effectuer les appels API.
- Zustand : Gestion d'état pour gérer les données locales de l'application.
- Shadcn : Composants UI pour améliorer l'interface utilisateur.
- Tailwind CSS : Framework CSS utilitaire pour la création d'interfaces modernes et réactives.
- React Hook Form : Pour la gestion des formulaires avec validation.
- Zod : Librairie de validation de schémas pour garantir la validité des données dans les formulaires.
- Framer Motion : Pour les animations de l'interface utilisateur.
- TypeScript : Langage de programmation pour une meilleure sécurité de type et une gestion plus efficace du code.

## 🚀 Installation et exécution

1. Cloner le projet:

```bash
git clone https://github.com/TojonirinaValerie/gestion-articles.git
```

2. Deplacer dans le dossier:

```bash
cd gestion-articles
```

3. Creer un variable d'environnement `.env.local` dans le racine du projet, puis mettez cette ligne:

```env
NEXT_PUBLIC_BASE_API_URL=https://fakestoreapi.com
```

4. Installer les dependances:

```bash
npm i
```

5. Lancer le projet:

```bash
npm run dev
```
