const database = {
    fish: [
        {
            species: "Rainbow Fish",
            name: "Bart",
            size: "3 ft",
            diet: "crustaceans",
            location: "Australia",
            image: "https://badmanstropicalfish.com/wp-content/uploads/2021/10/australian-rainbow-fish-care.jpg"
        },
        {
            species: "Puffer Fish",
            name: "Lady",
            size: "2 ft around",
            diet: "plants",
            location: "South America",
            image: "https://media.meer.com/attachments/66daa0267672042e3468f8f6208625a05513f030/store/fill/860/645/e6101c269024548aa40ddcac9b3fa54eee13cb721e7c8f8bcdf890436959/A-puffer-fish.jpg"
        },
        {
            species: "Walleye",
            name: "Wall-E",
            size: "4 ft",
            diet: "smaller fish",
            location: "Canada",
            image: "https://mdc.mo.gov/sites/default/files/styles/species_banner/public/mo_nature/media/field-guide/Walleye_Sander_vitreus_4-14-14.jpg?h=ed80be45&itok=86L03c_1"
        },
        {
            species: "Betta Fish",
            name: "Alpha",
            size: "3 in",
            diet: "fish food",
            location: "Your countertop",
            image: "https://cdn.mos.cms.futurecdn.net/RY2EpSo74hvYXyAVpTN2Gg.jpg" 
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}