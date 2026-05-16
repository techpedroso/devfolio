function initBrowser() {
    const historyStack = ['home'];
    let currentPage = 'home';

    function home() {
        const homeBtn = document.getElementById("browser__controls__home");

        homeBtn.addEventListener("click", () => {
            document.getElementById('browser__results')
                .classList.remove("inactive");

            document.querySelectorAll(".browser__page")
                .forEach(page => {
                    page.classList.remove("active");
                })
        });
    }

    function render() {
        // result = what is shows when we search something
        const results = document.querySelectorAll(".browser__result");

        // pages = what is shows when we click and access come page of the results list
        const pages = document.querySelectorAll(".browser__page");

        /*
            O que a função tem que fazer:

            Quando receber uma página via parâmetro, ela deve:
            Ocultar o container de resultados
            Ocultar as outras páginas
            Mostrar a página que veio via parâmetro
        */

        if (!results && !pages) return;

        results.forEach(result => {
            result.addEventListener("click", () => {

                const target = result.dataset.target;

                // esconde as páginas não selecionadas
                pages.forEach(page => {
                    page.classList.remove("active");
                });

                // esconde os resultados
                document.getElementById('browser__results')
                    .classList.add("inactive");

                // mostra a página correta
                document
                    .querySelector(`[data-page="${target}"]`)
                    .classList.add("active");
            });
        });
    }

    home();
    render();
}

export default initBrowser;