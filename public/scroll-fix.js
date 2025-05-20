// Script optimisé pour empêcher uniquement les sauts indésirables mais permettre le défilement normal
(function() {
  // Désactiver le comportement de défilement automatique du navigateur
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  
  // Fonction qui empêche seulement les sauts liés aux clics sur les liens et boutons
  function handleNavigation(e) {
    // Cibler uniquement les liens et boutons qui pourraient causer des sauts
    if (e.target.tagName && (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button')) {
      const href = e.target.getAttribute('href');
      // Ne bloquer que les liens vides ou internes qui causent des sauts
      if (href === '#' || href === '' || href === '/' || href === null) {
        e.preventDefault();
      }
    }
  }
  
  // N'ajouter que le gestionnaire nécessaire pour les liens et boutons
  document.addEventListener('click', handleNavigation);
})();
