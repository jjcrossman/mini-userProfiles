angular.module( 'userProfiles' ).service( 'mainService', function( ) {

this.getUsers = function () {
  return data;
}

this.toggleFavorite = function ( index ) {
  data[index - 1].isFavorite = !data[index - 1].isFavorite;
}

var data = [
  {
    "id": 1,
    "first_name": "george",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    , "isFavorite": false
},
{
    "id": 2,
    "first_name": "lucille",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    , "isFavorite": false
},
{
    "id": 3,
    "first_name": "oscar",
    "last_name": "bluth",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    , "isFavorite": false
}
];



});
