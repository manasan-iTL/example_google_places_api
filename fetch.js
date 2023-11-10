import 'dotenv/config'
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY

/*
    v1 -> 旧バージョンのAPIへのリクエスト
    v2 -> 新バージョンのAPIへのリクエスト
*/
export async function fetchRestaurantViaV1Nearby() {
    const BASE_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"

    const queryParams =  new URLSearchParams({
        // 以下のパラメーターは必須
        location: "35.69392322065715,139.73659946724777",
        radius: 50000,
        key: GOOGLE_PLACES_API_KEY,

        // これ以降はオプション
        type: "restaurant", // https://developers.google.com/maps/documentation/places/web-service/supported_types?hl=ja
        language: "ja",
        // maxprice: 0-4のいずれかの値,
        // minprice: 0-4のいずれかの値,
        // opennow; ,
        // rankby: prominence/distance,
        // pagetoken: 次の検索件数（２０件ごと）,
        // keyword: ""
    })

    try {
        const rawResponse = await fetch(`${BASE_URL}?${queryParams}`)
        const response = await rawResponse.json()

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export async function fetchRestaurantViaV1TextSearch() {
    const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json"

    const queryParams =  new URLSearchParams({
        // 以下のパラメーターは必須
        query: "市ヶ谷駅周辺のレストラン",
        radius: 50000,
        key: GOOGLE_PLACES_API_KEY,

        // これ以降はオプション
        type: "restaurant", // https://developers.google.com/maps/documentation/places/web-service/supported_types?hl=ja
        language: "ja",
        // maxprice: 0-4のいずれかの値,
        // minprice: 0-4のいずれかの値,
        // opennow; ,
        // rankby: prominence/distance,
        // pagetoken: 次の検索件数（２０件ごと）,
        // location: ""
    })

    try {
        const rawResponse = await fetch(`${BASE_URL}?${queryParams}`)
        const response = await rawResponse.json()

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export async function fetchRestaurantViaV1Detail() {
    const BASE_URL = "https://maps.googleapis.com/maps/api/place/details/json"

    const queryParams =  new URLSearchParams({
        // 以下のパラメーターは必須
        place_id: "ChIJmVnECGGMGGARO8nCcqQ-ff8",
        key: GOOGLE_PLACES_API_KEY,

        // これ以降はオプション
        language: "ja",
        // fields: "",
        // reviews_no_translations: boolean,
        // reviews_sort: most_relevant/newest,
    })

    try {
        const rawResponse = await fetch(`${BASE_URL}?${queryParams}`)
        const response = await rawResponse.json()

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export async function fetchRestaurantViaV2TextSearch() {
    const BASE_URL = "https://places.googleapis.com/v1/places:searchText"

    const requestHeader = new Headers({
        'Content-Type': 'application/json',
        // FieldMaskに指定できる値は公式リファレンスを参照
        'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.location,places.types',
        'X-Goog-Api-Key': GOOGLE_PLACES_API_KEY
    })

    const requestBody = {
        // 必須のパラメーター
        textQuery: "市ヶ谷周辺のレストラン",

        // これ以降はオプションのパラメーター
        languageCode: "ja",
        maxResultCount: 20,
        // includedType: "",
        // strictTypeFiltering: boolean,
        // locationBias: {},
        // locationRestriction: {},
        // minRating: 0.0 ~ 5.0,
        // openNow: boolean,
        // priceLevels: [],
        // rankPreference: DISTANCE/RELEVANCE,
    }

    try {
        const rawResponse = await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: requestHeader,
            body: JSON.stringify(requestBody)
        })

        const response = await rawResponse.json()

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
