import johannaDoePic from './../assets/img/johanna_doe.png'
import myraPalmerPic from './../assets/img/myra_palmer.png'
import loganBarryPic from './../assets/img/logan_barry.png'
import dannyWisePic from './../assets/img/danny_wise.png'
import coraClaytonPic from './../assets/img/cora_clayton.png'

export const getUserIcon = (id) => {
    
    let userPicture = "";
    
    switch (id) {
        case "johanna_doe":
            userPicture = johannaDoePic;
            break;
        case "myra_palmer":
            userPicture = myraPalmerPic;
            break;
        case "logan_barry":
            userPicture = loganBarryPic;
            break;
        case "danny_wise":
            userPicture = dannyWisePic;
            break;
        case "cora_clayton":
            userPicture = coraClaytonPic;
            break;
        default:
            userPicture = "";
    }

    return userPicture;
}
 