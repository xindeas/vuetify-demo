<template>
    <v-tabs
            v-model="val"
            align-with-title
            center-active>
        <v-menu
                offset-y
                bottom
                transition="scroll-x-transition"
                v-for="(item, index) of curTabs"
                :key="index"
                :disabled="curTabs.length <= 1"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-tab
                        v-bind="attrs"
                        @contextmenu.prevent="on.click"
                        :to="item.path"
                >
                    {{i18n(item.meta.title)}}
                </v-tab>
            </template>

            <v-list dense>
                <v-list-item-group
                        color="primary"
                >
                    <v-list-item @click="removeTabs(index)">
                        <v-list-item-content>
                            <v-list-item-title>关闭</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="closeToLeft(index)" :disabled="index===0">
                        <v-list-item-content>
                            <v-list-item-title>关闭左边所有</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="closeToRight(index)" :disabled="index===curTabs.length - 1">
                        <v-list-item-content>
                            <v-list-item-title>关闭右边所有</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-menu>
    </v-tabs>
</template>

<script>
    export default {
        name: "MyTab",
        data() {
            return {
                val: ''
            }
        },
        computed: {
            curTabs() {
                return this.$store.state.curTabs;
            }
        },
        methods: {
            i18n(key, params) {
                return this.$i18n ? this.$i18n.t(key, params) : '';
            },
            removeTabs(index) {
                const temp = this.val;
                if (this.curTabs[index].path === this.val) {
                    this.curTabs.splice(index, 1);
                    this.$router.push(this.curTabs[this.curTabs.length - 1].path);
                } else {
                    this.curTabs.splice(index, 1);
                    setTimeout(() => {
                        this.val = temp;
                    })
                }
            },
            closeToLeft(index) {
                const temp = this.val;
                const tempIndex = this.curTabs.findIndex(item => item.path === this.val);
                if (tempIndex > index) {
                    this.curTabs.splice(0, index);
                    setTimeout(() => {
                        this.val = temp;
                    })
                } else {
                    this.curTabs.splice(0, index);
                    this.$router.push(this.curTabs[0].path);
                }
            },
            closeToRight(index) {
                const temp = this.val;
                const tempIndex = this.curTabs.findIndex(item => item.path === this.val);
                if (tempIndex <= index) {
                    this.curTabs.splice(index + 1);
                    setTimeout(() => {
                        this.val = temp;
                    })
                } else {
                    this.curTabs.splice(index + 1);
                    this.$router.push(this.curTabs[this.curTabs.length - 1].path);
                }
            },
        }
    }
</script>

<style scoped>

</style>
