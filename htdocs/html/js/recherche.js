function recherche() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const articles = document.querySelectorAll("#articles a"); // tous les liens d’articles
 
    articles.forEach(article => {
        const text = article.textContent.toLowerCase();
        if (text.includes(input)) {
            article.style.display = "inline-block";
        } else {
            article.style.display = "none";
        }
    });
}