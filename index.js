import { fetchRestaurantViaV1Nearby, fetchRestaurantViaV1TextSearch, fetchRestaurantViaV1Detail, fetchRestaurantViaV2TextSearch, fetchRestaurantViaV2NearBySearch, fetchRestaurantViaV2Detail } from "./fetch.js";


// コマンドライン引数を取得
const args = process.argv.slice(2);

if (args.length == 0) {
    console.error("コマンドライン引数が設定されていません!")
    process.exit(1);
}

// 指定された関数を呼び出す
const functionName = args[0];

// 指定された関数を実行
switch (functionName) {
    case "fetchRestaurantViaV1Nearby":
        console.log("旧バージョンのNearBySearchによるレストラン情報取得")
        fetchRestaurantViaV1Nearby()
        break;

    case "fetchRestaurantViaV1TextSearch":
        console.log("旧バージョンのTextSearchによるレストラン情報取得")
        fetchRestaurantViaV1TextSearch()
        break;
    
    case "fetchRestaurantViaV1Detail":
        console.log("旧バージョンのPlaceDetailによるレストラン情報詳細取得")
        fetchRestaurantViaV1Detail()
        break;

    case "fetchRestaurantViaV2NearBySearch":
        console.log("新バージョンのNearBySearchによるレストラン情報取得")
        fetchRestaurantViaV2NearBySearch()
        break;
    
    case "fetchRestaurantViaV2TextSearch":
        console.log("新バージョンのTextSearchによるレストラン情報取得")
        fetchRestaurantViaV2TextSearch()
        break;

    case "fetchRestaurantViaV2Detail":
        console.log("新バージョンのPlaceDetailによるレストラン情報詳細取得")
        fetchRestaurantViaV2Detail()
        break;
    default:
        break;
}