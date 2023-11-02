const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);


    // --------------an array of pokémon objects where the id is evenly divisible by 3--------

    const divByThree= pokémon.filter((div3) => div3.id % 3 ==0);
    console.log(divByThree);

    //  ---------------------an array of pokémon objects that are "fire" type-----------------

    const fireType = pokémon.filter(fire=> fire.types.includes('Fire'));
    console.log(fireType);

    //  ------------an array of pokémon objects that have more than one type---------
    
    const moreTwoTypes = pokémon.filter((twotypes) => twotypes.types.length > 1);
    console.log(moreTwoTypes);

    //  --------------an array with just the names of the pokémon---------------

    const namePok = pokémon.map(elt=>elt.name);
    console.log(namePok);

    // ---an array with just the names of pokémon with an id greater than 99----

    const twoCondition = pokémon.filter(item=>item.id>99).map(elt=>elt.name);
    console.log(twoCondition);

    // ----an array with just the names of the pokémon whose only type is poison----

    const onlyTypePoison = pokémon.filter(elt=>elt.types.length===1 && elt.types.includes('poison')).map(item=>item.name);
    console.log(onlyTypePoison);

    //  ---an array containing just the first type of all the pokémon whose second type is "flying"---

    const justFireType = pokémon.filter(elt=>elt.types[1]==('flying')).map(item=>item.types[0]);
    console.log(justFireType);

    // ----an array containing just the first type of all the pokémon whose second type is "flying"---

    const countPok = pokémon.filter(elt=> elt.types.includes('normal')).length;
    console.log(countPok);