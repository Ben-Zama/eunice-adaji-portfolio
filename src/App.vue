<template>

  <header :class="{ 'white-text': isWorkPage }">

    <div ref="header" class="top">
      <div class="logo">
        <p>PORTFOLIO.</p>
      </div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/work">Work</router-link>
      </nav>
      <div @click="openMobileMenu" ref="hamburger" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div ref="mobileMenu" class="bottom">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/work">Work</router-link>
      </nav>
      <div class="links">
        <div>
          <i class="bi bi-whatsapp"></i>
          <a href="tel: 07061609880">07061609880</a>
        </div>
        <div>
          <i class="bi bi-instagram"></i>
          <a href="mailto: euniceadaji123@gmail.com">euniceadaji123@gmail.com</a>
        </div>
        <div>
          <i class="bi bi-envelope"></i>
          <a target="_blank" href="https://www.instagram.com/iam_vida3">iam_vida3</a>
        </div>
      </div>
    </div>

  </header>

  <router-view/>

  <footer :class="{ 'white-text': isWorkPage }">
    <div class="links">
      <div>
        <i class="bi bi-whatsapp"></i>
        <a href="tel: 07061609880">07061609880</a>
      </div>
      <div>
        <i class="bi bi-instagram"></i>
        <a href="mailto: euniceadaji123@gmail.com">euniceadaji123@gmail.com</a>
      </div>
      <div>
        <i class="bi bi-envelope"></i>
        <a target="_blank" href="https://www.instagram.com/iam_vida3">iam_vida3</a>
      </div>
    </div>
  </footer>
  
</template>

<script>
export default {
  data() {
    return {
      isWorkPage: false,
    }
  },
  watch: {
    // Watch for route changes
    $route(to) {
      // Check if the current route is the work page
      this.isWorkPage = to.path === "/work";
    },
  },
  mounted() {
    // Check on load if we are on the work page
    this.isWorkPage = this.$route.path === "/work";
  },
  methods: {
    openMobileMenu() {
      this.$refs.mobileMenu.classList.toggle('active')
      this.$refs.hamburger.classList.toggle('active')
      this.$refs.header.classList.toggle('active')
    }
  }
}
</script>

<style lang="scss">

  @import './assets/style.scss';

  header {

    .top {
      width: 100%;
      height: 75px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
      font-size: 20px;
      position: absolute;
      z-index: 20;
      .logo {
        font-family: $logo-font;
        letter-spacing: 2.5px;
      }
      &.active {
        background-color: $light-purple;
      }
      nav {
        display: none;
        gap: 25px;
        font-family: $alternate-font;
        a {
          color: black;
          position: relative;
          &::before {
            content: '';
            position: absolute;
            bottom: -2.5px;
            left: 0;
            width: 0;
            height: 2.5px;
            background-color: $darker-purple;
            transition: width .25s;
          }
          &:hover::before {
            width: 100%;
          }
        }
      }
      .hamburger {
        width: 50px;
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        span {
          height: 1.5px;
          width: 20px;
          background-color: black;
          transition: .25s;
        }
        &.active {
          :nth-child(1) {
            position: absolute;
            transform: rotate(45deg);
          }
          :nth-child(2) {
            opacity: 0;
          }
          :nth-child(3) {
            position: absolute;
            transform: rotate(-45deg);
          }
        }
      }

    }

    .bottom {
      height: 0;
      width: 100%;
      overflow: hidden;
      position: absolute;
      top: 75px;
      z-index: 20;
      background-color: $light-purple;
      &.active {
        height: auto;
        border-bottom: 1px solid black;
      }
      nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding: 25px 0;
        font-family: $alternate-font;
        a {
          color: black;
          &:hover {
            color: $darker-purple;
          }
        }
      }
      .links {
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding: 0 0 25px 10%;
        div {
          display: flex;
          align-items: center;
          gap: 10px;
          a{
            color: black;
            &:hover {
              color: $darker-purple;
            }
          }
        }
      }
    }
  }

  footer {
    background: linear-gradient($dark-purple, $purple-mix) ;
    padding: 25px 5%;
    .links {
      display: flex;
      flex-direction: column;
      gap: 25px;
      font-size: 20px;
      div {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: $alternate-font;
        a {
          color: black;
          &:hover {
            color: $darker-purple;
          } 
        }
      }
    }
  }

  @media (min-width: 768px){
  	header {
      .top {
        nav {
          display: flex;
          padding-right: 10%;
        }
        .hamburger {
          display: none;
        }
      }
    }
  }

  @media (min-width: 992px){
  	header {
      .top {
        padding: 0 10%;
        nav {
          gap: 50px;
        }
      }
    }

    footer {
      padding: 50px 0;
      .links {
        flex-direction: row;
        justify-content: space-evenly;
      }
    }
  }

  /* White text */

  header.white-text {
    .top {
      color: white;
      &.active {
        background: transparent;
      }
      nav {
        a{
          color: white;
          &:hover::before {
            background-color: $dark-purple;
          }
        }
      }
      .hamburger {
        span {
          background-color: white;
        }
      }
    }
    .bottom {
      background: linear-gradient(#060912, #212166);
      nav {
        a {
          color: white;
          &:hover {
            color: $dark-purple;
          }
        }
      }
      .links {
        color: white;
        a {
          color: white;
          &:hover {
            color: $dark-purple;
          }
        }
      }
    }
  }

  footer.white-text {
    background: linear-gradient(#060912, #212166);
    .links {
      color: white;
      a {
        color: white;
        &:hover {
          color: $dark-purple;
        }
      }
    }
  }

</style>