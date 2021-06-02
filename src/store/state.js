export default {
    gridImages: [{
        image: '../assets/women_shoes.jpg',
        header: "Women Collection",
        button: "Buy now"
    },
    {
        image: '../assets/men_shoes.jpg',
        header: "Men Collection",
        button: "Buy now"
    },
    {
        image: '../assets/children_shoes.jpg',
        header: "Children Collection",
        button: "Buy now"
    }
    ],
    sizeGuideMen: [{
        USA: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13
        ],
        UK: [
            6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12
        ],
        EUR: [
            39.5, 40, 41, 41.5, 42, 42.5, 43, 44, 44.5, 45, 46, 47
        ],
        cm: [
            26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 31.5
        ]
    }],
    sizeGuideWomen: [{
        USA: [
            6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11
        ],
        UK: [
            3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5
        ],
        EUR: [
            36.5, 37.5, 38, 38.5, 39, 39.5, 40, 41, 41.5, 42, 42.5
        ],
        cm: [
            24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29
        ]
    }],
    sizeGuideChildren: [{
        USA: [
            11, 12, 13, 1, 2, 3, 4, 5, 6
        ],
        UK: [
            10, 11, 12, 13, 1, 2, 3, 4, 5
        ],
        EUR: [
            28, 29.5, 31, 32, 33.5, 35, 36, 37.5, 38.5
        ],
        cm: [
            18.5, 19.5, 20, 21, 22, 23, 23.5, 24.5, 25.5
        ]
    }],
    selectedProduct: null,
    inCart: [],
    productPreview: [],
    user: null
}