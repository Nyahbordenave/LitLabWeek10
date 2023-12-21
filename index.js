let id=0; 

document.addEventListener('click', function () {
    document.getElementById('add').addEventListener('click', function () {
        let title = document.getElementById('title-of-book').value;
        let author = document.getElementById('author-of-book').value;
        let date = document.getElementById('date-read').value;
        let synopsis = document.getElementById('synopsis').value;
        let rating = document.getElementById('rating').value; // created function that declares the values of the user's input previously declared 

        // created new function names "newRow" that will be the user's input under each catagory corresponding with the header declared in HTML page
        let newRow = '<tr>' +
            '<td>' + title + '</td>' +
            '<td>' + author + '</td>' +
            '<td>' + date + '</td>' +
            '<td>' + synopsis + '</td>' +
            '<td>' + rating + '</td>'
            '</tr>';

        // code to append the new row 
        document.querySelector('#list tbody').innerHTML += newRow;

        // code to clear input fields once user input is filled out
        document.getElementById('title-of-book').value = '';
        document.getElementById('author-of-book').value = '';
        document.getElementById('date-read').value = '';
        document.getElementById('synopsis').value = '';
        document.getElementById('rating').value = '';
    }
    )

    });

    