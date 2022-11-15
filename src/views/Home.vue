<!--
//  Home.vue
//
//  Created by Kalila L. on 2 Jul 2020.
//  Copyright 2020 Vircadia contributors.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
-->

<template>
<v-app id="inspire">
    <v-main>
        <v-container
            class="fill-height"
            fluid
        >
            <v-row
                align="center"
                justify="center"
            >
                <v-col
                    class="text-center"
                    xl="4"
                    lg="4"
                    md="4"
                    xs="12"
                    sm="12"
                >
                    <MetaverseStats></MetaverseStats>
                </v-col>
                <v-col
                    class="text-center"
                    xl="4"
                    lg="4"
                    md="4"
                    xs="12"
                    sm="12"
                >
                    <APIStats></APIStats>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script>

import MetaverseStats from '../components/monitoring/MetaverseStats'
import APIStats from '../components/monitoring/APIStats'

export default {
    name: 'Home',
    props: {
        source: String
    },
    components: {
        MetaverseStats,
        APIStats
    }
}
</script>
