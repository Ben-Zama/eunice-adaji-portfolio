<template>

    <div class="container">
        <img v-for="item in work" :key="item" :src="item.image">
    </div>
  
</template>

<script>
export default {
    data() {
        return {
            work: [
                {image: require('../assets/work1.jpg')},
                {image: require('../assets/work2.jpg')},
                {image: require('../assets/work3.jpg')},
                {image: require('../assets/work4.jpg')},
                {image: require('../assets/work5.jpg')},
                {image: require('../assets/work6.jpg')},
                {image: require('../assets/work7.jpg')},
                {image: require('../assets/work8.jpg')},
            ]
        }
    }
}
</script>

<style lang="scss">
    @import '../assets/style.scss';

    .container {
        padding: 100px 5%;
        background: linear-gradient(#060912, #212166);
        columns: 2;
        img {
            width: 100%;
            object-fit: cover;
            margin-bottom: 10px;
        }
    }
    @media (min-width: 768px){
    	.container {
            columns: 3;
        }
    }
    @media (min-width: 992px){
    	.container {
            columns: 4;
        }
    }
</style>