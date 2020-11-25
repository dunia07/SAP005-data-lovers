// estas funciones son de ejemplo

//export const example = () => {
//  return 'example';
//};

//export const anotherExample = () => {
//  return 'OMG';
//};

export const filtroNome = (rickandmorty) =>{
  let arrayVazia = [];

  rickandmorty.array.forEach((positionCharacter => {
   let selectCharacter = (positionCharacter.name.find(

    (character) => character == name
    ));
    if (selectCharacter != undefined){
      arrayVazia.push(positionCharacter);
    }
  }));
  console.log (arrayVazia)
    return arrayVazia;

};
