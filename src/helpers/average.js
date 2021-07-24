export const average = (team) => {
    const heights = [];
    const weights = [];
    team.map( hero => {
        heights.push((hero.appearance.height[1]).replace(' cm',''));
        weights.push((hero.appearance.weight[1]).replace(' kg',''));
        return null;
    });
    
    const totalHeight = heights.reduce((accumulator, height) => accumulator + (+height),0);
    const totalWeight = weights.reduce((accumulator, weight) => accumulator + (+weight),0);

    return {
        avgHeight: (totalHeight/heights.length).toFixed(2),
        avgWeight: (totalWeight/weights.length).toFixed(2)
    }
}

export const teamStats = (team) => {
    const powerStats = [];
    team.map( hero => {
        powerStats.push(hero.powerstats);
        return null;
    });
    // Obtengo todas las propiedades
    const keys = Object.keys(powerStats[0]);
    // console.log(keys);

    const result = {};
    keys.forEach( c => {
        result[c] = 0; 
    });

    // Agregar los valores acumulado al objeto result
    powerStats.forEach( el => {
        keys.forEach( c => {
            if (isNaN(+el[c])){
                result[c]+=0
            }else{
                result[c] += +el[c]; 
            }
        });
    });

    // Generar una lista y agregar la propiedad aux para despues ordenarlo
    const finalPowerStats = [];
    keys.forEach( c => {
        finalPowerStats.push({
           [c]: result[c],
           aux:result[c]
        })
    });
    return finalPowerStats;
}

export const sortList = (list) => {
    const List = list.sort(function (a, b){
        return (b.aux - a.aux)
    });
    // console.log(List);

    // Una vez que esta ordenado convirtimos a un objeto para despues facilitar el renderizado
    const object = {};
    List.forEach( (el, index) => {
        object[Object.keys(List[index])[0]] = Object.values(List[index])[0]
    });
    // console.log(object);
    return object;
}





