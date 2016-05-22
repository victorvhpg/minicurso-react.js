"use strict";

var ajax = function (url) {
    return new Promise(function (resolve, reject) {
        window.fetch(url).then(function (response) {
            if(response.ok){
                return response.json();
            }
            reject(new Error("Erro ajax"));
        }).then(resolve).catch(reject);
    });
};

module.exports =  ajax;
