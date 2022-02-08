import icon_category_red from './../assets/img/category_red.png'
import icon_category_orange from './../assets/img/category_orange.png'
import icon_category_green from './../assets/img/category_green.png'
import icon_category_blue from './../assets/img/category_blue.png'
import icon_category_purple from './../assets/img/category_purple.png'
import icon_category_grey from './../assets/img/category_grey.png'

export const getCategoryIcon = (id) => {

    let categoryIcon;

    switch (id) {
        case "red":
            categoryIcon = icon_category_red;
            break;
        case "orange":
            categoryIcon = icon_category_orange;
            break;
        case "green":
            categoryIcon = icon_category_green;
            break;
        case "blue":
            categoryIcon = icon_category_blue;
            break;
        case "purple":
            categoryIcon = icon_category_purple;
            break;
        case "grey":
            categoryIcon = icon_category_grey;
            break;
        default:
            categoryIcon = "";
    }

    return categoryIcon;
}