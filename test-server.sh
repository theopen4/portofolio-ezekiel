#!/bin/bash
echo "Démarrage du serveur de test sur http://localhost:8080"
echo "Ouvrez votre navigateur et testez le téléchargement du CV"
echo "Appuyez sur Ctrl+C pour arrêter"
python3 -m http.server 8080
