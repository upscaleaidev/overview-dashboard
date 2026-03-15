# 🔑 Guide Complet - Utiliser tes Crédits API Claude

## ⚡ Ce que tu dois savoir

Tu as **acheté des crédits API Claude**, pas un abonnement Pro Claude Code.
- ✅ Ces crédits se utilisent via l'API Claude (claude-3-5-sonnet, claude-opus, etc.)
- ❌ Ils ne fonctionnent PAS avec Claude Code/Claude Pro
- ✅ Parfait pour utiliser Claude Code CLI avec ta propre clé API!

---

## 🚀 ÉTAPE 1: Obtiens ta clé API Claude

1. Va sur **https://console.anthropic.com/account/keys**
2. Clique **"Create Key"**
3. Donne-lui un nom (ex: "Life+ Development")
4. Copie la clé (format: `sk-ant-v4-...`)
   - ⚠️ **Tu ne pourras jamais la revoir!** Sauvegarde-la

---

## 📱 ÉTAPE 2: Configure dans le Dashboard

### Option A: Via l'interface (RECOMMANDÉ - plus simple)

1. Ouvre **https://magnificent-alfajores-56378e.netlify.app/**
2. Clique sur l'**engrenage ⚙️ en haut à droite**
3. Colle ta clé API Claude (commence par `sk-ant-`)
4. Clique **"Sauvegarder"**
5. ✅ C'est fait!

### Option B: Fichier `.env` (pour développement local)

1. Dans le dossier du projet: `cp .env.example .env`
2. Ajoute: `CLAUDE_API_KEY=sk-ant-v4-xxxxx`
3. Run: `npm run test-api` (pour vérifier)

---

## 🔐 Sécurité des crédits

| Méthode | Sécurité | Où c'est | Notes |
|---------|----------|---------|-------|
| **localStorage** (dashboard) | 🟡 Local seulement | Ton navigateur | Pas envoyé au serveur |
| **.env** (local) | 🟢 Fort | Ton ordi | Jamais commité (gitignore) |
| **Claude Code CLI** | 🟢 Fort | Ton ordi | Stocké de manière sécurisée |

---

## 💻 ÉTAPE 3: Utiliser Claude Code CLI avec ta clé API

### Option 1: Avec la variable d'environnement

```bash
# Sur Windows (PowerShell)
$env:ANTHROPIC_API_KEY="sk-ant-v4-xxxxx"
claude-code

# Sur Mac/Linux (Bash)
export ANTHROPIC_API_KEY="sk-ant-v4-xxxxx"
claude-code
```

### Option 2: Fichier `.env` local (automatique)

```bash
# Le fichier .env est chargé automatiquement
npm run setup              # Configure via l'assistant
claude-code                # Claude Code utilise ta clé API
```

### Option 3: Claude Code settings

Dans Claude Code:
1. `/help` → Settings → API Configuration
2. Ou directement: **File > Settings**
3. Ajoute: `ANTHROPIC_API_KEY=sk-ant-v4-xxxxx`

---

## 🎯 ÉTAPE 4: Commencer à coder

Maintenant tu peux utiliser Claude Code CLI pour coder ton dashboard:

```bash
# Dans le dossier du projet
claude-code

# Puis dans Claude Code, dis simplement:
# "Améliore le dashboard"
# "Ajoute une feature X"
# "Optimise la performance"
```

Claude va utiliser **tes crédits API** (pas ton abonnement Pro).

---

## 📊 Vérifier tes crédits

1. Va sur **https://console.anthropic.com/account/billing/limits**
2. Tu vois:
   - **Credits Remaining**: tes crédits API restants
   - **Usage**: ce que tu as utilisé
   - **Renewal Date**: quand ça se renouvelle

---

## 🔄 Commandes rapides

```bash
# Tester la connexion
npm run test-api

# Configurer la clé API
npm run setup

# Utiliser Claude Code
claude-code

# Relancer Claude Code (si besoin)
npm run setup  # Et refais la config
```

---

## ✅ Checklist finale

- [ ] J'ai obtenu ma clé API (https://console.anthropic.com/account/keys)
- [ ] J'ai configuré la clé (option A ou B)
- [ ] J'ai testé: `npm run test-api` ✅
- [ ] J'ai ouvert Claude Code: `claude-code`
- [ ] Je code mon dashboard! 🚀

---

## ❓ FAQ

**Q: Mes crédits API vont expirer?**
→ Oui, généralement après 3 mois. Vérifie sur https://console.anthropic.com/account/billing/limits

**Q: Combien ça coûte par requête?**
→ Claude 3.5 Sonnet: ~$3 par 1M tokens input, ~$15 par 1M tokens output
→ Claude Opus: Plus cher mais plus puissant

**Q: Quelle clé pour Claude Code?**
→ Même clé API Claude que tu viens d'obtenir!

**Q: Et mon abonnement Pro Claude?**
→ Il reste actif pour chat.claude.com, mais Claude Code CLI utilise ta clé API personnelle

---

## 🎉 Tu es prêt!

Tout est configuré. Maintenant:
```bash
claude-code
```

Et commence à coder ton dashboard! 🚀
