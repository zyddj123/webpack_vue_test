// import $ from 'jquery';
import 'bootstrap3';
import 'bootstrap3/dist/css/bootstrap.min.css';
import Vue from "VUE";
import qs from 'qs';
import axios from 'axios';
import login from '../tmp/login.vue';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.component('reg', {
    data: function () {
        return {};
    },
    template: '<h1>注册组件</h1>',
    methods: {

    }
});
var vm = new Vue({
    el: "#app",
    data: {
        comName: 'login',
        list: '',
        id: '',
        name: '',
        age: '',
        keyword: ''
    },
    methods: {
        show() {
            // alert("vue show")
            // console.log(this);
        },
        del(id) {
            for (var x in this.list) {
                if (this.list[x].id == id) {
                    this.list.splice(x, 1);
                    // console.log(this.list);
                    return true;
                }
            }
        },
        add() {
            var flag_id = true;
            for (var x in this.list) {
                if (this.list[x].id == this.id) {
                    alert("已存在此id");
                    flag_id = false;
                    return false;
                }
            }
            if (flag_id) {
                this.list.push({ id: this.id, name: this.name, age: this.age });
            }
            // console.log(this.list);
        },
        search(keyword) {
            var newList = [];
            for (var x in this.list) {
                if (this.list[x].name.indexOf(keyword) != -1) {
                    newList.push(this.list[x]);
                }
            }
            console.log(newList);
            return newList;
        }
    },
    created() {

        axios.post('../../aa.php', qs.stringify({
            "a": "b",
            "c": "d"
        })).then(response => {
            // console.log(response);
            if (response.status == 200) {
                this.list = response.data;
            }
        });
    },
    // render: ce=>ce(login),
    components: {
        login
    }
});