const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('#searchByID');
        console.log(input.value)

        fetch(`http://localhost:9099/movies/${input.value}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');

                title.textContent = data.title;
                summary.textContent = data.summary;
                });

    });
};

document.addEventListener('DOMContentLoaded', init);