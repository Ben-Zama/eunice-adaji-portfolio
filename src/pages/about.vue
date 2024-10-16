<template>
  <div class="about">
    <div class="first">
        <div class="image">
            <img src="../assets/eunice2.jpg">
        </div>
        <div class="text">
            <h2>Eunice Adaji - Product Designer</h2>
            <p>
                Hi there I'm Eunice Adaji with over 3 years of experience in designing intuitive,
                user-centric digital and physical products. I specialize in creating innovative solutions that balances aesthetics with functionality,
                delivering seamless user experiences across platforms.
                My design approach is rooted in user research, empathy and iterative testing to ensure that the final product solves real-world problems.
            </p>
            <div class="skills">
                <h3>SKills and Expertise:</h3>
                <ul>
                    <li>User Experience (UX) Design: Proficient in user research, personas, journey mapping, wireframing and prototyping to create intuitive and engaging user experiences.</li>
                    <li>Uer Interface (UI) Design: Skilled in visual design, including typography, color theory and iconography, to deliver beautiful and functional interfaces.</li>
                    <li>Prototyping & Testing: Experienced with tools like Figma, Sketch and InVision to create interactive prototypes and conduct usability testing.</li>
                    <li>Cross-Disciplinary Collaboration: Works closely with developers, product managers and stakeholders to ensure that designs are implemented effectively.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="second">
        <div class="projects">
            <h3>key Projects</h3>
            <ol>
                <li>
                    <p class="heading">Music Blog</p>
                    <p>Role: lead Product Designer</p>
                    <p>Michael the owner of the blog emphasized focusing the blog on the new upcoming artists and how to know about them especially here in Nigeria.</p>
                </li>
                <li>
                    <p class="heading">Food Delivery App</p>
                    <p>Role: Ui/UX Designer</p>
                    <p>I designed an analutical friendly user interface that visualized the complex and varieties of food in a simple, user-friendly manner. By implementing a modular design system and focusing on clear.</p>
                </li>
            </ol>
        </div>

        <div class="design">
            <h3>Design Process:</h3>
            <ol>
                <li>Reaserch & Discovery: Understanding the user needs through surveys, interviews and competitor analysis.</li>
                <li>Ideation: Brainstorming, conceptualizing multiple design solutions and collarborating with stakeholders.</li>
                <li>Prototyping & Testing: Rapid prototyping to validate design ideas with real users and making iterative improvements.</li>
            </ol>
        </div>

        <div class="conclusion">
            Conclusion: I am dedicated to creating impactful and meaningful design solutions that improve the lives of users. With akeen eye for detail and a passion for innovative problem-solving. I continue to push the boundaries of product design in every project i undertake.
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

    .about {
        background-color: $light-purple;
        padding-top: 100px;
        .first {
            display: flex;
            flex-direction: column;
            align-items: center;
            .image {
                width: 50%;
                height: 250px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 5px;
                }
            }
            .text {
                padding: 5%;
                h2 {
                    font-family: $header-font;
                    text-align: center;
                }
                p {
                    font-family: $body-font;
                }
                .skills {
                    margin-top: 25px;
                    h3 {
                        font-family: $alternate-font;
                        font-weight: bold;
                        font-size: 20px;
                    }
                    ul {
                        padding: 0 0 0 10%;
                        font-family: $body-font;
                    }
                }
            }
        }
        .second {
            padding: 5%;
            .projects {
                h3 {
                    font-family: $header-font;
                    font-weight: 900;
                    font-size: 20px;
                }
                ol {
                    padding: 0 0 0 10%;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    font-family: $body-font;
                    li {
                        .heading {
                            font-weight: 600;
                        }
                    }
                }
            }
            .design {
                margin-top: 25px;
                h3 {
                    font-family: $header-font;
                    font-weight: 900;
                }
                ol {
                    padding: 0 0 0 10%;
                    font-family: $body-font;
                }
            }
            .conclusion {
                margin-top: 50px;
                font-family: $body-font;
            }
        }
    }

    @media (min-width: 768px){
    	.about {
            .first {
                .image {
                    height: 400px;
                }
            }
        }
        .conclusion {
            padding-bottom: 50px;
        }
    }

    @media (min-width: 992px){
    	.about {
            .first {
                flex-direction: row;
                gap: 100px;
                padding: 0 5%;
                .image {
                    width: 25%;
                    height: 400px;
                }
                .text {
                    width: 75%;
                    padding: 0;
                    .skills {
                        ul {
                            padding: 0 0 0 5%;
                        }
                    }
                }
            }
            .second {
                margin-top: 50px;
                padding: 0 10%;
                .projects {
                    ol {
                    padding: 0 0 0 5%;
                    }
                }
                .design {
                    ol {
                    padding: 0 0 0 5%;
                    }
                }
            }
        }
    }
</style>