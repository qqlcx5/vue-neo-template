<template>
    <svg :width="size" :height="size" viewBox="0 0 100 100">
        <circle v-for="(radius, index) in radii" :key="index" :r="radius" :style="getCircleStyle(index)"
            :cx="centers[index].x" :cy="centers[index].y" />
    </svg>
</template>

<script>
export default {
    name: 'IconCircle',
    props: {
        size: {
            type: Number,
            default: 24
        },
        color: {
            type: String,
            default: '#000'
        }
    },
    data() {
        return {
            radii: [20, 18, 16, 14, 12],
            strokeWidths: [8, 6, 4, 2, 1],
            centers: [
                { x: 50, y: 10 },
                { x: 10, y: 50 },
                { x: 50, y: 120 },
                { x: 90, y: 50 },
                { x: 50, y: 50 }
            ]
        };
    },
    computed: {
        circleStyles() {
            return this.strokeWidths.map((width, index) => {
                return {
                    stroke: this.color,
                    'stroke-width': width,
                    fill: 'none'
                };
            });
        }
    },
    methods: {
        getCircleStyle(index) {
            return this.circleStyles[index];
        }
    }
};
</script>
