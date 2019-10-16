fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
    .then(
        function(data) {
            data = data.json()
            return data
        })
    .then(function result(data) {
        console.log(data)

        $.get('js/handleBars.hbs', function (source) {
            var template = Handlebars.compile(source)

            Handlebars.registerHelper('limit', function (arr, limit) {
                if (!Array.isArray(arr)) { return []; }
                return arr.slice(0, limit);
            });

            var html = template(data)
            $('body').append(html)

        })
    })
