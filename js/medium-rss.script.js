function getMediumRss(callback) {
    const URL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'https%3A%2F%2Fmedium.com%2Ffeed%2F%40.gc'%3B&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
    return window.fetch(URL, {
        method: 'GET'
    }).then(function(data) {
        data.json().then(function (results) {
            const articles = results.query.results.rss.channel.item.filter(article => article.license);
            callback(articles);
        });
    });
}

function Article(model) {
    var render = function () {
        return '<div class="post-link">' +
                '<div class="article__title">' +
                    '<a href="' + model.link + '" class="post-link" target="_blank">' + model.title + '</a>' +
                '</div>' +
            '</div>';
    };

    return {
        render: render
    };
}

function renderArticles(selector) {
    getMediumRss(function (articles) {
        var articlesDOMString = '';

        articles.forEach(function (article) {
            articlesDOMString += new Article(article).render();
        });

        var domSelector = document.querySelector(selector);
        domSelector.innerHTML = articlesDOMString;
    });
}

window.onload = function () {
    renderArticles('.writings-section .posts');

    window.onload = undefined;
};
