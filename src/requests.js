import { bearer } from './base'
//AUTH0 SETTINGS
let myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${bearer}`);
myHeaders.append("Content-Type", "application/json");
let raw = function (email, password, title, type, fullName, avatar) {
    return JSON.stringify({
        connection: "Username-Password-Authentication",
        email,
        password,
        email_verified: true,
        user_metadata: {
            title,
            type,
            fullName,
            avatar
        },
    })
}
let requestOptions = function (email, password, title, type, fullName, avatar) {
    return {
        method: "POST",
        headers: myHeaders,
        body: raw(email, password, title, type, fullName, avatar),
        redirect: "follow",
    }
};
export let createUserRequest = function (email, password, title, type, fullName, avatar, setError, success) {
    fetch("https://dev-0giwgnx2.us.auth0.com/api/v2/users", requestOptions(email, password, title, type, fullName, avatar))
        .then((response) => response.text())
        .then((result) => {
            if (JSON.parse(result).statusCode) setError(result);
            else success(true)
        })
}


export const getUser = (id, setUserData) => {
    fetch(`https://dev-0giwgnx2.us.auth0.com/api/v2/users/${id}`, {
        method: "GET",
        headers: myHeaders
    }).then((response) => response.json())
        .then((result) => {
            setUserData(result.user_metadata)
        })
}

export const updateUser = (id, newUserData, setSuccees, setErrors) => {
    fetch(`https://dev-0giwgnx2.us.auth0.com/api/v2/users/${id}`, {
        method: "PATCH",
        headers: myHeaders,
        body: JSON.stringify({
            "user_metadata":
                newUserData
        })
    }).then((response) => response.json())
        .then((result) => {
            setErrors('')
            setSuccees('')
            return setSuccees('информация обновлена')
        }, (error) => {
            setSuccees('')
            return setErrors(error)
        })
}


// IconFinder REQUSETS

export const getIcons = function (category) {
    return fetch(`https://api.iconfinder.com/v4/icons/search?query=${category}&count=10&premium=0`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer s1yqjHyOoqGQN0GQmQI9TMknfyzrSpklmvAkqXAZ5vdjyACuwfOF4FgEKssPySUH"
        }
    })
}

//выбор иконки с оффсетом
export const getIconswithOffset = function (category, offset, stateOffsetFunction, stateUrlsFunction) {
    return fetch(`https://api.iconfinder.com/v4/icons/search?query=${category}&count=10&offset=${offset}&premium=0`, {
        "method": "GET",
        "headers": {
            "Authorization": "Bearer X0vjEUN6KRlxbp2DoUkyHeM0VOmxY91rA6BbU5j3Xu6wDodwS0McmilLPBWDUcJ1"
        }
    })
        .then((res) =>
            res.json().then(
                (result) => {
                    stateOffsetFunction(offset);
                    stateUrlsFunction(
                        result["icons"].map((icon) => {
                            return icon.raster_sizes[2].formats[0].preview_url;
                        })
                    );
                },
                (error) => {
                    console.log(error);
                }
            )
        )
}

export const changeCategory = function (category, setUrls) {
    return getIcons(category).then((res) => res.json())
        .then(
            (result) => {
                setUrls(
                    result["icons"].map((icon) => {
                        return icon.raster_sizes[2].formats[0].preview_url;
                    })
                );
            },
            (error) => { }
        );
}

