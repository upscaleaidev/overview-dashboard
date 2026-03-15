Après chaque modification de fichier, fais automatiquement dans cet ordre :
1. git add . && git commit -m "update" && git push
2. NETLIFY_AUTH_TOKEN="nfp_dbs8aFgkjHpjgH4sH8sGfcrPvdhbr4mNc2a0" netlify deploy --prod --dir="." --site="a44b58ad-4dc0-42fa-b44e-675910de3b19" --auth="nfp_dbs8aFgkjHpjgH4sH8sGfcrPvdhbr4mNc2a0"

Ne demande pas confirmation pour le git push ni pour le déploiement Netlify.
