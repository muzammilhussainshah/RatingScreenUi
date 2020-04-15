
import ActionTypes from '../constant/constant';
// import firebase from 'react-native-firebase'
import axios from 'axios';

//login user 
export function fetchQueue(assetClone) {
    return dispatch => {

        console.log(assetClone, "ssss")



        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Content-Type", "text/plain");
        var raw = "{\n\"venue_id\": \"2313\",\n\"network_id\": \"zNu1sydRRCGIKGPnFIefmA\",\n\"device_id\": \"2313\",\n\"direct_connection\": true,\n\"display_area\": [\n{\n\"id\": \"display-0\",\n\"supported_media\": [\n\"video/mp4\",\n\"image/png\"\n],\n\"allow_audio\": true,\n\"height\": 800,\n\"width\": 1280\n}\n],\n\"longitude\": -66.639405,\n\"latitude\": 29.123084,\n\"api_key\": \"358c5c94-5638-4d2c-8329-68737352ec43\",\n\"display_time\": 1585162800\n}";
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://sandbox-api.vistarmedia.com/api/v1/get_asset/json", requestOptions)
            .then(response => response.text())
            .then(result => {
                let asset = JSON.parse(result)
                // let queue;
                // for (var i = 0; i < assetClone.length; i++) {
                //     // let test = asset.asset.find(assetClone[i].asset_id)
                //     const found = asset.asset.find(element => element.asset_id === assetClone[i].asset_id);
                //     if(!found){
                //         assetClone.push(asset.asset[i])
                //     }
                //     console.log(found, "testtest",assetClone[i].asset_id)
                // }
                let queue=asset.asset 
                dispatch({ type: ActionTypes.FETCHQUEUE, payload: queue })

                // console.log("worrrrk", JSON.parse(result))
            }
            )
            .catch(error => console.log('error', error));




    }
}

export function iteration(assetClone) {
    return dispatch => {
     




        console.log(assetClone, "assetCloneassetCloneassetCloneassetClone")



        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Content-Type", "text/plain");
        var raw = "{\n\"venue_id\": \"2313\",\n\"network_id\": \"zNu1sydRRCGIKGPnFIefmA\",\n\"device_id\": \"2313\",\n\"direct_connection\": true,\n\"display_area\": [\n{\n\"id\": \"display-0\",\n\"supported_media\": [\n\"video/mp4\",\n\"image/png\"\n],\n\"allow_audio\": true,\n\"height\": 800,\n\"width\": 1280\n}\n],\n\"longitude\": -66.639405,\n\"latitude\": 29.123084,\n\"api_key\": \"358c5c94-5638-4d2c-8329-68737352ec43\",\n\"display_time\": 1585162800\n}";
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://sandbox-api.vistarmedia.com/api/v1/get_asset/json", requestOptions)
            .then(response => response.text())
            .then(result => {
                let asset = JSON.parse(result)
                let queue;
                for (var i = 0; i < assetClone.length; i++) {
                    // let test = asset.asset.find(assetClone[i].asset_id)
                    const found = asset.asset.find(element => element.asset_id === assetClone[i].asset_id);
                    if(!found){
                        assetClone.push(asset.asset[i])
                    }
                    console.log( "------",assetClone)
                }
                dispatch({ type: ActionTypes.FETCHQUEUE, payload: assetClone })

                // console.log("worrrrk", JSON.parse(result))
            }
            )
            .catch(error => console.log('error', error));























    }
}