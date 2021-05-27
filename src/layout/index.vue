<template>
    <div class="router-content overflow-hidden">
        <v-app-bar
                fade-img-on-scroll
                app
                src="@/assets/pic3.jpg"
                color="primary"
                dark
        >
            <!--背景图渐变色-->
            <template v-slot:img="{ props }">
                <v-img
                        v-bind="props"
                        gradient="to bottom right, rgba(39, 73, 89,.7), rgba(112, 74, 41,.7)"
                ></v-img>
            </template>
            <!--菜单栏按钮-->
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <!--logo-->
            <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="@/assets/logo.png"
                    transition="scale-transition"
                    width="40"
            />
            <span class="title">Vuetify Demo</span>
            <v-spacer></v-spacer>
            <!--搜索框-->
            <v-autocomplete
                    dense
                    hide-no-data
                    v-model="searchValue"
                    :items="searchResult"
                    :loading="isLoading"
                    :search-input.sync="searchText"
                    :class="searchClass"
                    ref="searchBox"
                    color="white"
                    :placeholder="this.$i18n.t('placeholder.search')"
                    v-click-outside="clickOutSide"
                    @click="openSearchVisible"
                    @click:prepend="openSearchVisible"
                    @change="handleSearchBoxChange"
                    prepend-icon="mdi-magnify"
            >
            </v-autocomplete>
            <v-badge
                    color="error"
                    overlap
                    dot
                    offset-x="15"
            >
                <v-icon
                        class="cursor-pointer mr-2">mdi-email-outline</v-icon>
            </v-badge>
            <!--语言切换-->
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-icon
                            class="cursor-pointer"
                            v-bind="attrs"
                            v-on="on">mdi-translate
                    </v-icon>
                </template>
                <v-list dense>
                    <v-list-item-group
                            color="primary"
                            v-model="lang"
                    >
                        <v-list-item value="zh">
                            <v-list-item-content>
                                <v-list-item-title>简体中文</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item value="en">
                            <v-list-item-content>
                                <v-list-item-title>English</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-menu>
            <!--标签栏-->
            <template v-slot:extension>
                <MyTab class="d-none d-sm-block"></MyTab>
                <span class="d-sm-none header">{{i18n(curRoute.meta.title)}}</span>
            </template>
        </v-app-bar>
        <!--抽屉导航菜单-->
        <v-navigation-drawer
                v-model="drawer"
                class="primary lighten-1"
                fixed
                temporary
                dark
        >
            <!--用户头像-->
            <template v-slot:prepend>
                <v-list-item two-line link>
                    <v-list-item-avatar>
                        <img src="@/assets/user.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Tarzan X</v-list-item-title>
                        <v-list-item-subtitle>xdsgoldage@163.com</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <v-divider></v-divider>
            <!--菜单列表-->
            <MyMenu></MyMenu>
        </v-navigation-drawer>

        <v-main>
            <transition name="mainRouter">
                <router-view/>
            </transition>
        </v-main>
    </div>
</template>

<script>
    import MyMenu from '@/components/MyMenu'
    import MyTab from '@/components/MyTab'
    import {debounce} from "@/utils/utils";

    export default {
        name: "Layout",
        components: {MyMenu, MyTab},
        data() {
            return {
                // 搜索框选中的值
                searchValue: '',
                // 搜索框输入的值
                searchText: null,
                // 搜索框加载状态
                isLoading: false,
                // 搜索框搜索结果
                searchResult: [],
                // 菜单打开状态
                drawer: false,
                // 搜索框伸缩状态
                searchVisible: false,
            }
        },
        computed: {
            // 当前语言
            lang: {
                get() {
                    return sessionStorage.getItem('lang');
                },
                set(v) {
                    sessionStorage.setItem('lang', v);
                    this.$i18n.locale = v;
                }
            },
            // 当前路由
            curRoute() {
                return this.$store.state.curRoute;
            },
            // 搜索框动态样式
            searchClass() {
                if (this.searchVisible) {
                    return {
                        'd-none': true,
                        'd-sm-flex': true,
                        'search': true,
                        'mr-2': true,
                        'hide-search': false,
                        'show-search': true,
                    }
                } else {
                    return {
                        'd-none': true,
                        'd-sm-flex': true,
                        'search': true,
                        'mr-2': true,
                        'hide-search': true,
                        'show-search': false,
                    }
                }
            },
            // 点击搜索框之外的事件
            clickOutSide() {
                const vm = this;
                return {
                    handler: function () {
                        vm.searchVisible = false;
                    },
                    closeConditional: vm.searchVisible
                }
            }
        },
        watch: {
            // 搜索框输入监听
            searchText(val) {
                if (val) {
                    this.db({val, vm: this})
                } else {
                    this.searchResult = [];
                }
            },
        },
        methods: {
            i18n(key, params) {
                return this.$i18n ? this.$i18n.t(key, params) : '';
            },
            // 延迟防抖
            db: debounce(({val, vm}) => {
                vm.searchResult = [{
                    text: val,
                    value: '/Setting'
                }];
            }, 300),
            // 打开搜索框
            openSearchVisible() {
                this.searchVisible = true;
                this.$refs.searchBox.focus();
            },
            // 点击搜索框下拉选项事件
            handleSearchBoxChange(val) {
                this.searchValue = this.searchText = '';
                this.$refs.searchBox.blur();
                this.$router.push(val);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .router-content {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        overflow-y: auto;
    }

    .search {
        cursor: pointer;
        transition: max-width 250ms;
        margin-top: 14px !important;
        overflow: hidden;
    }

    .hide-search {
        max-width: 24px;
        width: 24px;
    }

    .show-search {
        max-width: 300px;
    }


    .mainRouter-enter-active, .mainRouter-leave-active {
        position: absolute;
        transition: all .5s;
    }

    .mainRouter-enter {
        position: absolute;
        opacity: 0;
        /*transform: translateX(100px);*/
    }

    .mainRouter-leave-to {
        position: absolute;
        opacity: 0;
        z-index: -99;
        /*transform: translateX(-100px);*/
    }

</style>
