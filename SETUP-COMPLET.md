# 🚀 Setup Complet - Utiliser Claude Code avec tes Crédits API

## ⚡ Résumé en 2 minutes

Tu as **acheté des crédits API Claude**. Ce guide te montre comment les utiliser avec **Claude Code** pour coder ton dashboard.

- **Pas besoin** de ton abonnement Pro Claude
- **Utilise** uniquement tes crédits API
- **Tout est local** → Ta clé est jamais envoyée au serveur

---

## 📋 Étapes (super simple!)

### ÉTAPE 1: Obtiens ta clé API (1 min) ⭐

1. Va sur: **https://console.anthropic.com/account/keys**
2. Clique le bouton **"Create Key"**
3. Donne un nom: `"Life+ Development"`
4. **Copie la clé** qui commence par `sk-ant-v4-...`
   - ⚠️ **Sauvegarde-la!** Tu peux jamais la revoir après

---

### ÉTAPE 2: Configure dans le Dashboard (1 min) ⭐

1. Ouvre: **https://magnificent-alfajores-56378e.netlify.app/**
2. Clique sur l'**engrenage ⚙️** en haut à droite
3. Clique sur **"Config"** dans le menu de gauche
4. Tu vois le panel **"🔑 Claude API — Crédits personnels"**
5. **Colle ta clé** dans le champ
6. Clique **"Sauvegarder"**
7. Clique **"Tester"** pour vérifier que ça marche
8. ✅ **C'est tout!** Ta clé est stockée localement

---

### ÉTAPE 3: Lance Claude Code (1 min) ⭐

#### Sur Windows (PowerShell):
```powershell
# Option 1: Via variable d'env (une fois)
$env:ANTHROPIC_API_KEY="sk-ant-v4-xxxxx"
claude-code
```

#### Sur Mac/Linux (Bash):
```bash
# Option 1: Via variable d'env (une fois)
export ANTHROPIC_API_KEY="sk-ant-v4-xxxxx"
claude-code
```

#### OU utilise le fichier `.env`:
```bash
# D'abord, crée .env
cp .env.example .env

# Ouvre .env et ajoute:
# CLAUDE_API_KEY=sk-ant-v4-xxxxx

# Puis lance:
claude-code
```

---

### ÉTAPE 4: Commence à coder! 🎉

Maintenant tu peux dire à Claude Code:

```
"Améliore le dashboard Life+"
"Ajoute une feature X"
"Optimise la performance"
"Change le design"
```

Claude va utiliser **tes crédits API** (pas ton abo Pro).

---

## 📊 Vérifier tes crédits

1. Va sur: **https://console.anthropic.com/account/billing/overview**
2. Tu vois:
   - **Credits Remaining**: Crédits restants
   - **Usage This Month**: Ce que tu as utilisé
   - **Renewal Date**: Quand ils se renouvellent

---

## 🔐 Sécurité

| | Sécurité | Où c'est |
|---|----------|---------|
| **Dashboard** | 🟡 Local seulement | Ton navigateur |
| **Claude Code** | 🟢 Fort | Ton ordi, chiffré |

---

## ❓ Questions fréquentes

### Q: Combien ça coûte?
- **Claude 3.5 Sonnet**: ~$3 par 1M tokens (input)
- **Claude Opus**: ~$15 par 1M tokens (input)
- → Très pas cher comparé à l'abo Pro

### Q: Mes crédits vont expirer?
- Oui, généralement **3 mois** après l'achat
- Vérifie la "Renewal Date" sur https://console.anthropic.com/account/billing/overview

### Q: Et mon abo Pro Claude?
- Il reste actif pour **chat.claude.com**
- **Claude Code** utilise ta clé API personnelle (tes crédits)

### Q: J'ai oublié ma clé API?
- **Tu ne peux jamais la récupérer!**
- Crée une nouvelle clé: https://console.anthropic.com/account/keys
- Vire l'ancienne si elle est en sécurité

### Q: Quelle clé pour Claude Code?
- **Même clé API** que tu viens de configurer!
- Format: `sk-ant-v4-...`

### Q: Pourquoi "sk-ant"?
- `sk-ant` = Secret Key Anthropic
- Chaque clé est unique pour toi

---

## 🔧 Commandes rapides

```bash
# Tester la connexion API (local)
npm run test-api

# Configurer la clé (assistant)
npm run setup

# Lancer Claude Code
claude-code

# Utiliser Claude pour analyser le projet
npm run workflow "ta demande"
```

---

## 📚 Fichiers importants

| Fichier | Usage |
|---------|-------|
| `.env` | Stocke ta clé (gitignore, jamais commité) |
| `CLAUDE-API-GUIDE.md` | Guide détaillé (ce fichier) |
| `API-SETUP.md` | Docs techniques |
| `api-config.js` | Script de config |
| `api-test.js` | Test de connexion |

---

## ✅ Checklist finale

- [ ] J'ai obtenu ma clé API: https://console.anthropic.com/account/keys
- [ ] J'ai configuré la clé dans le dashboard (Config > 🔑 Claude API)
- [ ] J'ai cliqué "Tester" et ça marche ✅
- [ ] J'ai ouvert Claude Code: `claude-code`
- [ ] Je vais coder mon dashboard! 🚀

---

## 🎉 C'est tout!

Tu es **100% prêt**. Maintenant:

```bash
claude-code
```

Et dis à Claude ce que tu veux pour ton dashboard! 🚀

---

## 🆘 Besoin d'aide?

- **Erreur API 401**: Ta clé est invalide/expirée → crée une nouvelle clé
- **"CLAUDE_API_KEY non configurée"**: Ajoute la clé au dashboard ou au `.env`
- **Claude Code ne démarre pas**: Essaie `claude-code --help` pour debug

---

**Bienvenue dans l'automatisation! 🚀**
