## GoAcademy - LearnAtHome
Made as the fruition of the front-end web development training given by GoAcademy from Gojek, this project is static webapp called **GoZomato**.

GoZomato is a webapp where people would go to see a collection of restaurant ,diner, etc. This app will display a list of *merchant partners*, along with the detail of each merchant, such as:
- Merchant name
- Rating
- Price
- Cuisine Type
- Image

###### Structures
This static webapp currently only have 1 page which serves as the home page. It will display the *Navigation Bar* up top. This Navbar will house the page title and the search bar which will be used to filter the available merchants based on the searched location.
Below that will be the page banner, that will show one image, either for aesthetic purpose or for added information. 
List of merchants will be displayed further below in form of cards. The content of each card will be used to dipslay the information regarding that particular merchant. This will be the only **component** in this page, as this is the only one that needs to be reusable. The data data will be passed to each card as a *prop* from the page, while the card itself will be stateless.
The homepage howeber, will have a **state** to save the content of search bar, this state will then be displayed above the collection of merchant cards.
