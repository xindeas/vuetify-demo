<template>
    <div>
        <!--视差-->
        <v-parallax
                height="500"
                src="@/assets/pic3.jpg"
        >
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col
                        class="text-center"
                        cols="12"
                >
                    <h1 class="display-1 font-weight-thin mb-4">
                        Vuetify Demo
                    </h1>
                    <h4 class="subheading">
                        Built by Tarzan X
                    </h4>
                </v-col>
            </v-row>
        </v-parallax>
        <v-row
                align="center"
                justify="center"
                class="card"
        >
            <v-col
                    class="text-center"
                    cols="12"
            >
                <h1 class="display-1 font-weight-thin mb-4">
                    Vuetify Demo
                </h1>
                <h4 class="subheading">
                    Built by Tarzan X
                </h4>
            </v-col>
        </v-row>
        <!--视差-->
        <v-parallax
                height="500"
                src="@/assets/pic1.jpg"
        >
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col
                        class="text-center"
                        cols="12"
                >
                    <h1 class="display-1 font-weight-thin mb-4">
                        Vuetify Demo
                    </h1>
                    <h4 class="subheading">
                        Built by Tarzan X
                    </h4>
                </v-col>
            </v-row>
        </v-parallax>
        <v-row
                align="center"
                justify="center"
                class="card"
        >
            <v-col cols="6">
                <v-sparkline
                        :gradient="['#00c6ff', '#F0F', '#FF0']"
                        :line-width="2"
                        :padding="8"
                        :smooth="10"
                        :value="value"
                        auto-draw
                ></v-sparkline>
            </v-col>
            <v-col cols="6">
                <h1 class="display-1 font-weight-thin mb-4">
                    Vuetify Demo
                </h1>
                <h4 class="subheading">
                    Built by Tarzan X
                </h4>
            </v-col>
        </v-row>
        <!--视差-->
        <v-parallax
                height="500"
                src="@/assets/pic4.jpg"
        >
            <v-row
                    align="center"
                    justify="center"
            >
                <v-col
                        class="text-center"
                        cols="12"
                >
                    <h1 class="display-1 font-weight-thin mb-4">
                        Vuetify Demo
                    </h1>
                    <h4 class="subheading">
                        Built by Tarzan X
                    </h4>
                </v-col>
            </v-row>
        </v-parallax>
        <v-row
                align="center"
                justify="center"
                class="card">
            <v-col cols="3">
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card
                                class="mx-auto"
                                max-width="344"
                        >
                            <v-img
                                    :aspect-ratio="16/9"
                                    width="100%"
                                    src="@/assets/pic1.jpg"></v-img>
                            <v-card-title class="primary--text">
                                Magento Forests
                            </v-card-title>
                            <v-card-text>
                                Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                            </v-card-text>
                            <v-card-actions>
                                <v-rating
                                        :value="4"
                                        dense
                                        color="orange"
                                        background-color="orange"
                                        hover
                                        class="mr-2"
                                ></v-rating>
                                <span class="primary--text subtitle-2">64 Reviews</span>
                            </v-card-actions>

                            <v-fade-transition>
                                <v-overlay
                                        v-if="hover"
                                        absolute
                                        color="primary"
                                >
                                    <v-btn>See more info</v-btn>
                                </v-overlay>
                            </v-fade-transition>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
            <v-col cols="3">
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card
                                class="mx-auto"
                                max-width="344"
                        >
                            <v-img
                                    :aspect-ratio="16/9"
                                    width="100%"
                                    src="@/assets/pic2.jpg"></v-img>
                            <v-card-title class="primary--text">
                                Little Pussy
                            </v-card-title>
                            <v-card-text>
                                Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                            </v-card-text>
                            <v-card-actions>
                                <v-rating
                                        :value="4"
                                        dense
                                        color="orange"
                                        background-color="orange"
                                        hover
                                        class="mr-2"
                                ></v-rating>
                                <span class="primary--text subtitle-2">64 Reviews</span>
                            </v-card-actions>

                            <v-fade-transition>
                                <v-overlay
                                        v-if="hover"
                                        absolute
                                        color="primary"
                                >
                                    <v-btn>See more info</v-btn>
                                </v-overlay>
                            </v-fade-transition>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
            <v-col cols="3">
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card
                                class="mx-auto"
                                max-width="344"
                        >
                            <v-img
                                    :aspect-ratio="16/9"
                                    width="100%"
                                    src="@/assets/pic3.jpg"></v-img>
                            <v-card-title class="primary--text">
                                West Wild
                            </v-card-title>
                            <v-card-text>
                                Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                            </v-card-text>
                            <v-card-actions>
                                <v-rating
                                        :value="4"
                                        dense
                                        color="orange"
                                        background-color="orange"
                                        hover
                                        class="mr-2"
                                ></v-rating>
                                <span class="primary--text subtitle-2">64 Reviews</span>
                            </v-card-actions>

                            <v-fade-transition>
                                <v-overlay
                                        v-if="hover"
                                        absolute
                                        color="primary"
                                >
                                    <v-btn>See more info</v-btn>
                                </v-overlay>
                            </v-fade-transition>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
            <v-col cols="3">
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-card
                                class="mx-auto"
                                max-width="344"
                        >
                            <v-img
                                    :aspect-ratio="16/9"
                                    width="100%"
                                    src="@/assets/pic4.jpg"></v-img>
                            <v-card-title class="primary--text">
                                Summer Night
                            </v-card-title>
                            <v-card-text>
                                Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
                            </v-card-text>
                            <v-card-actions>
                                <v-rating
                                        :value="4"
                                        dense
                                        color="orange"
                                        background-color="orange"
                                        hover
                                        class="mr-2"
                                ></v-rating>
                                <span class="primary--text subtitle-2">64 Reviews</span>
                            </v-card-actions>

                            <v-fade-transition>
                                <v-overlay
                                        v-if="hover"
                                        absolute
                                        color="primary"
                                >
                                    <v-btn>See more info</v-btn>
                                </v-overlay>
                            </v-fade-transition>
                        </v-card>
                    </template>
                </v-hover>
            </v-col>
        </v-row>
        <!--页脚-->
        <v-footer
                dark
                padless
        >
            <v-card
                    flat
                    tile
                    class="primary lighten-1 white--text text-center"
            >
                <v-card-text>
                    <v-btn
                            class="mx-4 white--text"
                            icon
                    >
                        <v-icon size="24px">mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn
                            class="mx-4 white--text"
                            icon
                    >
                        <v-icon size="24px">mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn
                            class="mx-4 white--text"
                            icon
                    >
                        <v-icon size="24px">mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn
                            class="mx-4 white--text"
                            icon
                    >
                        <v-icon size="24px">mdi-instagram</v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum.
                    Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur
                    dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada.
                    Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel
                    diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                value: [
                    200,
                    675,
                    410,
                    390,
                    310,
                    460,
                    250,
                    240,
                ],
                icons: [
                    'mdi-facebook',
                    'mdi-twitter',
                    'mdi-linkedin',
                    'mdi-instagram',
                ],
            }
        }
    }
</script>
<style scoped>
    .v-sheet--offset {
        top: -24px;
        position: relative;
    }

    .card {
        height: 500px;
    }
</style>
