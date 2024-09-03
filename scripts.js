function showSection(sectionId) {
    // Ocultar todas las secciones
    var sections = document.querySelectorAll('section.dashboard');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

