"use strict";

var ajax = require("./ajax");


var _KEY_FAVORITO = "videos-favoritos";
var _QUANTIDADE_PAGINACAO = 10;

var apiVideo = {

    salvarListFavorito: function(list) {
        window.localStorage.setItem(_KEY_FAVORITO, JSON.stringify(list));
    },

    getListFavorito: function() {
        var str = window.localStorage.getItem(_KEY_FAVORITO) || "[]";
        return JSON.parse(str);
    },

    addFavorito: function(id) {
        var listFav = this.getListFavorito();
        //simular  async
        return new Promise(function(resolve, reject) {
            listFav.push(id);
            try {
                this.salvarListFavorito(listFav);
            } catch(e) {
                reject(e);
                return;
            }
            resolve(listFav);
        }.bind(this));
    },

    isFavorito: function(id) {
        var listFav = this.getListFavorito();
        return this.getIndiceFavorito(listFav, id) >= 0;
    },

    getIndiceFavorito: function(listFav, id) {
        for(var i = 0; i < listFav.length; i++) {
            if(listFav[i] === id) {
                return i;
            }
        }
        return -1;
    },

    removeFavorito: function(id) {
        var list = this.getListFavorito();
        var indice = this.getIndiceFavorito(list, id);
        return new Promise(function(resolve, reject) {
            if(indice === -1) {
                reject(new Error("favorito nao encontrado"));
                return;
            }
            list.splice(indice, 1);
            this.salvarListFavorito(list);
            resolve(list);
        }.bind(this));
    },

    getVideoFB: function(id) {
        return ajax("http://graph.facebook.com/" + id);
    },

    getListVideo: function(paginacaoIndice) {
        //para fins de exemplo aqui sempre pega o mesmo json e  depois simula uma paginacao
        //o correto já é  receber da api o json paginado
        return new Promise(function(resolve, reject) {
            ajax("http://www.mocky.io/v2/573c52bb1100009016aa8a4b").then(function(list) {
                resolve(
                    list.slice(
                        paginacaoIndice * _QUANTIDADE_PAGINACAO,
                        (paginacaoIndice *_QUANTIDADE_PAGINACAO) + _QUANTIDADE_PAGINACAO
                    )
                );
            }).catch(reject);
        });
    }

};



module.exports = apiVideo;
