  function showPage(pageId) {
          
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });

           
            const pageToShow = document.getElementById('page-' + pageId);
            if (pageToShow) {
                pageToShow.classList.add('active');
            }

          
            window.scrollTo(0, 0);

           
            const navCollapse = document.getElementById('navbarNav');
            if (navCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        }
        
      
        document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            showPage('confirmacao');
        });

        
        document.addEventListener('DOMContentLoaded', () => {
            showPage('home');
        });

        // Este script detecta quando os elementos entram na tela e adiciona a classe para animá-los.
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('.fade-in-section');

        // Se não houver elementos para animar, o script não faz nada.
        if (sections.length === 0) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // Quando o elemento está visível na tela...
                if (entry.isIntersecting) {
                    // ...adiciona a classe 'is-visible' para acionar a animação CSS.
                    entry.target.classList.add('is-visible');
                    // E para de "observar" o elemento para não repetir a animação.
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% do elemento está visível
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    });

        
       