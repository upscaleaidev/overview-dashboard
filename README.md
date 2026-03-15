# Life+ Dashboard 🚀

Dashboard personnel pour gérer tous les aspects de ta vie: objectifs, nutrition, sport, business, planning.

**Live**: https://magnificent-alfajores-56378e.netlify.app/

---

## 🎯 Commencer rapidement

### 1️⃣ Utiliser le Dashboard

- Ouvre: https://magnificent-alfajores-56378e.netlify.app/
- Configure Firebase (optionnel - pour la sync)
- Commence à tracker tes données!

### 2️⃣ Utiliser Claude Code pour développer

Si tu veux **coder/modifier** le dashboard avec Claude Code:

**→ Lis: [`SETUP-COMPLET.md`](./SETUP-COMPLET.md)** (2 min pour tout installer)

Résumé rapide:
1. Obtiens une clé API: https://console.anthropic.com/account/keys
2. Configure-la dans le Dashboard (Config > 🔑 Claude API)
3. Lance Claude Code: `claude-code`
4. Code ton dashboard! 🚀

---

## 📚 Documentation

| Document | Pour qui? |
|----------|-----------|
| **[SETUP-COMPLET.md](./SETUP-COMPLET.md)** | Tu veux utiliser Claude Code pour développer |
| **[CLAUDE-API-GUIDE.md](./CLAUDE-API-GUIDE.md)** | Détails techniques sur l'API Claude |
| **[API-SETUP.md](./API-SETUP.md)** | Config pour développement local (npm) |

---

## 🛠️ Technologies

- **Frontend**: HTML5 + Vanilla JS (zéro framework)
- **Base de données**: Firebase Realtime DB (sync cross-device)
- **Déploiement**: Netlify
- **Développement**: Claude Code + Claude API

---

## 🔧 Scripts locaux (pour devs)

```bash
# Configure Claude API (une fois)
npm run setup

# Teste la connexion API
npm run test-api

# Lance Claude pour analyser le projet
npm run workflow "ta demande"
```

---

## 📱 Sections du Dashboard

- **⚡ Vue d'ensemble**: KPIs et stats
- **✓ Checklist**: Tâches quotidiennes
- **📅 Planning**: Calendrier et planning
- **🍽️ Nutrition**: Tracking calories
- **🏋️ Sport**: Workouts et progression
- **💪 Corps**: Poids, mesures, photos
- **💼 Business**: Revenue, objectifs
- **⚙️ Config**: Paramètres, API, backups

---

## 🔐 Données

- ✅ Stockage local (localStorage)
- ✅ Backup Firebase automatique
- ✅ Backups journaliers locaux
- ✅ Export/Import JSON

---

## 💭 Questions?

Ouvre une issue ou check les guides!

---

**Version**: 1.0.0
**Dernier update**: 2026-03-15
**Status**: 🟢 Production
