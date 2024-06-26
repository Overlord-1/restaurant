$(document).ready(function() {
    // Fetch existing dishes
    function fetchDishes() {
        $.ajax({
            url: 'http://localhost:8080/getdishes',
            method: 'GET',
            success: function(dishes) {
                let dishesContainer = $('#dishesContainer');
                dishesContainer.empty();
                if (dishes.length === 0) {
                    dishesContainer.append('<p>Nothing here</p>');
                } else {
                    dishes.forEach(function(dish) {
                        dishesContainer.append(`
                            <div class="dish">
                                <h3>${dish.name}</h3>
                                <p>Price: $${dish.price}</p>
                                <p>${dish.description}</p>
                            </div>
                        `);
                    });
                }
            },
            error: function(xhr, status, error) {
                dishesContainer.append('<p>Nothing here</p>');
            }
        });
    }

    // Fetch dishes on page load
    fetchDishes();

    // Handle form submission
    $('#dishForm').on('submit', function(event) {
        event.preventDefault();

        let name = $('#name').val();
        let price = $('#price').val();
        let description = $('#description').val();

        $.ajax({
            url: 'http://localhost:8080/createdish',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: name, price: price, description: description }),
            success: function(response) {
                alert('Dish created successfully!');
                $('#dishForm')[0].reset();
                fetchDishes(); // Refresh the list of dishes
            },
            error: function(xhr, status, error) {
                alert('Failed to create dish: ' + xhr.responseText);
            }
        });
    });
});