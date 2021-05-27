<template>
    <v-list-group
            v-if="!!menu.children && menu.children.length > 0"
            no-action
            :prepend-icon="menu.icon||''"
            active-class="primary--text text--lighten-4"
    >
        <template v-slot:activator>
            <v-list-item-content>
                <v-list-item-title v-text="i18n(menu.label)"></v-list-item-title>
            </v-list-item-content>
        </template>

        <MyMenuItem v-for="(item, index) in menu.children" :key="index" :menu="item"></MyMenuItem>
    </v-list-group>
    <v-list-item
            v-else
            link
            :to="menu.key"
            active-class="white--text"
    >
        <v-list-item-icon v-if="menu.icon">
            <v-icon v-text="menu.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="i18n(menu.label)"></v-list-item-title>
    </v-list-item>
</template>

<script>
    export default {
        name: "MyMenuItem",
        props: {
            menu: {
                type: Object
            },
        },
        methods: {
            // 国际化
            i18n(key, params) {
                return this.$i18n ? this.$i18n.t(key, params) : '';
            },
        }
    }
</script>

<style scoped>
</style>
