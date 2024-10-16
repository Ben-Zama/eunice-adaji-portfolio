<template>
  <div class="hero">
    <div class="text">
        <p>Hi There</p>
        <h2>I'M EUNICE</h2>
        <div>I'm a Product Designer</div>
    </div>
    <div class="image">
        <img src="../assets/eunice.jpg">
    </div>
  </div>

  <div class="bio">

    <div class="image">
        <div class="complement">
            <img class="pfp" src="../assets/eunice2.jpg">
        </div>
        <img class="flower" src="../assets/flower.png">
    </div>

    <div class="text">
        <div class="heading">
            <div class="header-text">
                <p>Who I am</p>
                <h2>Hello</h2>
            </div>
            <img src="../assets/flower.png">
        </div>
        <div class="body">
            Hi there I'm Eunice Adaji with over 3 years of experience in designing intuitive,
            user-centric digital and physical products. I specialize in creating innovative solutions that balances aesthetics with functionality,
            delivering seamless user experiences across platforms.
            My design approach is rooted in user research, empathy and iterative testing to ensure that the final product solves real-world problems.
        </div>
    </div>

</div>

</template>

<script>
export default {

}
</script>

<style lang="scss">
    @import '../assets/style.scss';
    .hero {
        width: 100%;
        height: 500px;
        position: relative;
        
        .text {
            position: absolute;
            bottom: 0;
            z-index: 2;
            width: 100%;
            padding: 10%;
            background-color: #e8eeffb0;
            p {
                font-family: $body-font;
            }
            h2 {
                font-family: $header-font;
            }
            > div {
                background-color: #5045ad;
                color: white;
                width: max-content;
                padding: 2.5px 25px;
                font-family: $alternate-font;
            }
        }
        .image {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .bio {
        width: 100%;
        margin-top: 50px;
        .image {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .complement {
                width: 150px;
                height: 200px;
                background-color: $dark-purple;
                position: relative;
                margin-bottom: 25px;
                .pfp {
                width: 150px;
                height: 200px;
                object-fit: cover;
                position: absolute;
                top: 25px;
                left: 25px;
                }
            }
        }
        .text {
            margin-top: 50px;
            .heading {
                display: flex;
                justify-content: space-evenly;
                .header-text {
                    text-align: center;
                    font-family: $alternate-font;
                }
            }
            .body {
                padding: 10px 10%;
                font-family: $body-font;
            }
        }
    }

    @media (min-width: 768px){
    	.hero {
            height: 600px;
            .text {
                top: 0;
                left: 0;
                width: 40%;
                padding: 0 5%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 10px;
            }
            .image {
                left: 40%;
                width: 60%;
                img {
                    object-position: center -100px;
                }
            }
        }
        .bio {
            display: flex;
            align-items: center;
            .image {
                width: 40%;
            }
            .text {
                width: 60%;
                margin-top: 0;
            }
        }
    }

    @media (min-width: 992px){
    	.hero {
            height: 500px;
            .text {
                width: 50%;
                p {
                    font-size: 20px;
                }
                h2 {
                    font-size: 25px;
                }
                div {
                    font-size: 20px;
                }
            }
            .image {
                width: 50%;
                left: 50%;
            }
        }
        .bio {
            .text {
                padding: 0 10%;
            }
        }
    }
</style>